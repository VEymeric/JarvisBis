using Constellation.Package;
using System;
using System.Collections.Generic;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Calendar.v3;
using Google.Apis.Calendar.v3.Data;
using Google.Apis.Services;
using Google.Apis.Util.Store;
using System.IO;
using System.Threading;


namespace GoogleCalendar
{
    /// <summary>
    /// Connect the Google Calendar to Constellation.
    /// Push a StateObject with the list of events(with details).
    /// Create or delete events.
    /// </summary>
    /// <seealso cref="Constellation.Package.PackageBase" />

    [StateObjectKnownTypes(typeof(List<Event>))]

    public class CalendarProgram : PackageBase
    {
        static string[] Scopes = { CalendarService.Scope.Calendar };
        static string ApplicationName = "Google Calendar API .NET Quickstart";

        static void Main(string[] args)
        {
            PackageHost.Start<CalendarProgram>(args);
        }

        private CalendarService GetCalendarService()
        {
            // Getting user access keys.
            UserCredential credential;

            using (var stream = new FileStream("client_secret.json", FileMode.Open, FileAccess.Read))
            {
                string credPath = Environment.GetFolderPath(System.Environment.SpecialFolder.Personal);
                credPath = Path.Combine(credPath, ".credentials/calendar-dotnet-quickstart.json");

                credential = GoogleWebAuthorizationBroker.AuthorizeAsync(
                    GoogleClientSecrets.Load(stream).Secrets,
                    Scopes,
                    "user",
                    CancellationToken.None,
                    new FileDataStore(credPath, true)).Result;
            }

            // Create and return Google Calendar API service with previous credential.
            return new CalendarService(new BaseClientService.Initializer()
            {
                HttpClientInitializer = credential,
                ApplicationName = ApplicationName,
            });
        }

        /// <summary>
        /// Called when the package is started.
        /// </summary>
        public override void OnStart()
        {
            PackageHost.WriteInfo("Package starting - IsRunning: {0} - IsConnected: {1}", PackageHost.IsRunning, PackageHost.IsConnected);

            while (PackageHost.IsRunning)
            {
                try
                {
                    // Define parameters of request.
                    EventsResource.ListRequest request = this.GetCalendarService().Events.List(PackageHost.GetSettingValue<string>("CalendarID"));

                    request.TimeMin = DateTime.Now;
                    request.ShowDeleted = false;
                    request.SingleEvents = true;
                    request.MaxResults = 20;
                    request.OrderBy = EventsResource.ListRequest.OrderByEnum.StartTime;

                    // List events. Push all events in a SO.
                    Events events = request.Execute();

                    if (events.Items != null && events.Items.Count > 0)
                    {                        
                        PackageHost.PushStateObject("Events", events.Items);
                    }
                    else
                    {
                        PackageHost.PushStateObject("Events", "No upcoming events found.");
                    }
                }

                catch (Exception ex)
                {
                    PackageHost.WriteError("Error while getting Events" + ex.ToString());
                }

                //Refresh time in milliseconds.
                int timeToSleep = PackageHost.GetSettingValue<Int32>("RefreshInterval");
                Thread.Sleep(timeToSleep * 1000);
            }
        }


        /// <summary>
        /// Creates the event.
        /// </summary>
        /// <param name="name">The name of the event.</param>
        /// <param name="where">The location.</param>
        /// <param name="startDate">The start date.</param>
        /// <param name="endDate">The end date.</param>
        [MessageCallback]
        public void CreateEvent(string name, string where, DateAndTime startDate, DateAndTime endDate)
        {
            Event eventToCreate = new Event();
            eventToCreate.Summary = name;
            eventToCreate.Location = where;

            eventToCreate.Start = new EventDateTime
            {
                DateTime = new DateTime(startDate.Year, startDate.Month, startDate.Day, startDate.Hour, startDate.Minute, 0)
            };

            eventToCreate.End = new EventDateTime
            {
                DateTime = new DateTime(endDate.Year, endDate.Month, endDate.Day, endDate.Hour, endDate.Minute, 0)
            };
            var newEventRequest = this.GetCalendarService().Events.Insert(eventToCreate, PackageHost.GetSettingValue<string>("CalendarID")).Execute();
        }


        /// <summary>
        /// Deletes the event.
        /// </summary>
        /// <param name="eventID">The event identifier that you can find in the package's SO.</param>
        [MessageCallback]
        public void DeleteEvent(string eventID)
        {
            var eventToDelete = this.GetCalendarService().Events.Delete(PackageHost.GetSettingValue<string>("CalendarID"), eventID).Execute();
        }
    }

    /// <summary>
    /// Create a class with date and time components.
    /// </summary>
    public class DateAndTime
    {
        /// <summary>
        /// Gets or sets the year component of the date represented by this instance.
        /// </summary>
        /// <value>
        /// The month year of the date represented by this instance..
        /// </value>
        public int Year { get; set; }
        /// <summary>
        /// Gets or sets the month component of the date represented by this instance.
        /// </summary>
        /// <value>
        /// The month component of the date represented by this instance..
        /// </value>
        public int Month { get; set; }
        /// <summary>
        /// Gets or sets the day of the month represented by this instance.
        /// </summary>
        /// <value>
        /// The day of the month represented by this instance..
        /// </value>
        public int Day { get; set; }

        /// <summary>
        /// Gets or sets the hour of the time represented by this instance.
        /// </summary>
        /// <value>
        /// The hour represented by this instance..
        /// </value>
        public int Hour { get; set; }
        /// <summary>
        /// Gets or sets the minutes of the time represented by this instance.
        /// </summary>
        /// <value>
        /// The minute represented by this instance..
        /// </value>
        public int Minute { get; set; }
        /// <summary>
        /// Gets or sets the seconds of the time represented by this instance.   
        /// </summary>
        /// <value>
        /// The seconds represented by this instance..
        /// </value>
        /// 
        /// /!\ Optionnal /!\
        ///public int Second { get; set; }
    }
}
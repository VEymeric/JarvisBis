using Constellation;
using Constellation.Package;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TheBrain.ApiAI.MessageCallbacks;

namespace TheBrain
{
    public class TheProgram : PackageBase
    {
        static void Main(string[] args)
        {
            PackageHost.Start<TheProgram>(args);
        }

        public override void OnStart()
        {
            PackageHost.WriteInfo("Package starting - IsRunning: {0} - IsConnected: {1}", PackageHost.IsRunning, PackageHost.IsConnected);
        }

        [MessageCallback]
        private AIResponse TextRequest(string sentence)
        {
            var request = PackageHost.CreateMessageProxy("ApiAI").TextRequest<AIResponse>(sentence);
            try
            {
                //If you have those parameters then you'll use the agenda instead of doing the action.
                if (request.Result.Result.Parameters["date"] == "" && (request.Result.Result.Parameters["time"] == ""))
                {
                    ActionChoice(request.Result.Result.Action, request.Result.Result.Parameters["type"]);
                }
                else
                {
                    PackageHost.WriteInfo("Action for the future");
                }
            }
            catch (Exception) { }
           
            return request.Result;

        }

        [MessageCallback]
        private void AgendaRequest(System.String Action, System.String Parameter = null)
        {
            ActionChoice(Action, Parameter);
        }

        private void ActionChoice(String Action, System.String Parameter)
        {
            PackageHost.WriteInfo("You send this message to constellation : " + Action);
            switch (Action)
            {
                case "Monter_volume":
                    PackageHost.CreateMessageProxy("WindowsControl").VolumeUp();
                    break;
                case "Baisser_volume":
                    PackageHost.CreateMessageProxy("WindowsControl").VolumeDown();
                    break;
                case "Allumer_lumiere":
                    switch (Parameter)
                    {
                        case "rouge":
                            PackageHost.CreateMessageProxy("Hue").SetColor(1, 255, 0, 0);
                            break;
                        case "bleu":
                            PackageHost.CreateMessageProxy("Hue").SetColor(1, 0, 0, 255);
                            break;
                        case "vert":
                            PackageHost.CreateMessageProxy("Hue").SetColor(1, 0, 255, 0);
                            break;
                        default:
                            PackageHost.CreateMessageProxy("Hue").SetColor(1, 255, 255, 255);
                            break;
                    }
                    break;
                default:
                    PackageHost.WriteLog(LogLevel.Info, "Action non relié à la constellation");
                    break;
            }
            
        }
    }
}

$(document).ready(function() {
  
  $('#calendar').fullCalendar({
    customButtons: {
      showHide: {
        text: 'Afficher/Masquer les events constellation',
        click: function() {
          if ($(this).hasClass("eventShown")) {
            $('#calendar').fullCalendar('removeEventSource', "js/getEvent.php");
            $('#calendar').fullCalendar('refetchEvents');
            $(this).removeClass("eventShown");
          } else {
            $('#calendar').fullCalendar('addEventSource', {
              url: "js/getEvent.php",
              color: "#378006"
            });
            $('#calendar').fullCalendar('refetchEvents');
            $(this).addClass("eventShown");
          }
        }
      }
    },
    header: {
      left: 'prev,next today showHide',
      center: 'title',
      right: 'month,agendaWeek,agendaDay,listWeek'
    },
    defaultView : "agendaWeek",
    forceEventDuration: true,
    defaultTimedEventDuration: "01:00:00",
    navLinks: true, // can click day/week names to navigate views
    eventLimit: true, // allow "more" link when too many events
    selectable: true,

    // Modifier/Supprimer un event au click
    eventClick: function(event, element) {

        event.title = "CLICKED!";

        $('#calendar').fullCalendar('updateEvent', event);

    },

    events: "js/getMeetings.php",

    // Ajout d'events
    eventRender: function(event, element) {
     element.attr('title', event.tip);
    },
        
    select: function(start, end, jsEvent, view) {
         // start contains the date you have selected
         // end contains the end date. 
         // Caution: the end date is exclusive (new since v2).
      var allDay = !start.hasTime && !end.hasTime;
      /*alert(["Event Start date: " + moment(start).format(),
              "Event End date: " + moment(end).format(),].join("\n"));*/
      var action = prompt("Que voulez vous faire ?");

      $.ajax({
        // on attend avant d'aller dans constellation :'(
        url: "js/updateJson.php",
        type: "POST",
        data: {
          file: "meetings.json",
          action: action,
          date: (moment(start).format()).substr(0,10),
          heure: (moment(start).format()).substr(11,8),
          type: "rdv",
        }
      }).done(function(arg) {
        console.log(arg);
       $('#calendar').fullCalendar('refetchEvents');

      });

    },
  });

});


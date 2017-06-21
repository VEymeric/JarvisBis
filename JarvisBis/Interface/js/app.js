$(document).ready(function() {

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay,listWeek'
    },
    defaultView : "agendaWeek",
    navLinks: true, // can click day/week names to navigate views
    eventLimit: true, // allow "more" link when too many events
    selectable: true,

    // ça marche pas
/*    dayClick: function() {
      console.log($(this));
      var newEvent = {
                title: 'NEW EVENT',
                start: new Date(2017, 06, 16)
            };
            $('#calendar').fullCalendar( 'renderEvent', newEvent , 'stick');
    },
*/
    // Modifier/Supprimer un event au click
    eventClick: function(event, element) {

        event.title = "CLICKED!";

        $('#calendar').fullCalendar('updateEvent', event);

    },

    events: "js/getEvent.php",

    // Ajout d'events
    eventRender: function(event, element) {
     element.attr('title', event.tip);
    },
        
    select: function(start, end, jsEvent, view) {
         // start contains the date you have selected
         // end contains the end date. 
         // Caution: the end date is exclusive (new since v2).
      var allDay = !start.hasTime && !end.hasTime;
      alert(["Event Start date: " + moment(start).format(),
              "Event End date: " + moment(end).format(),].join("\n"));
      console.log(moment(start).format());
      console.log(moment(end).format());
      
      $.ajax({
        // on attend avant d'aller dans constellation :'(
        url: "js/updateJson.php",
        type: "POST",
        data: {
          action: "ui",
          date: "ui",
          heure: "ui",
          type: "ui",
        }
      }).done(function(arg) {
        console.log(arg);
      });

    },
  });
});

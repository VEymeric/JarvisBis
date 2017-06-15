$(document).ready(function() {

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay,listWeek'
    },

    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events

    dayClick: function() {
      console.log($(this));
      var newEvent = {
                title: 'NEW EVENT',
                start: new Date(2017, 06, 16)
            };
            $('#calendar').fullCalendar( 'renderEvent', newEvent , 'stick');
    },

    // Modifier/Supprimer un event au click
    eventClick: function(event, element) {

        event.title = "CLICKED!";

        $('#calendar').fullCalendar('updateEvent', event);

    },

    events: "getEvent.php",
    eventRender: function(event, element) {
     element.attr('title', event.tip);
    },
        
    select: function(start, end, jsEvent, view) {
         // start contains the date you have selected
         // end contains the end date. 
         // Caution: the end date is exclusive (new since v2).
    var allDay = !start.hasTime && !end.hasTime;
    alert(["Event Start date: " + moment(start).format(),
            "Event End date: " + moment(end).format(),
            "AllDay: " + allDay].join("\n"));
    },



    selectable: true,
    editable: true,
  });

  /*$.getJSON("tableOfValue.json", function(json) {
    console.log(json);
  });*/

});

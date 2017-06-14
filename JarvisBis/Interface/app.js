$(document).ready(function() {

  var events_array;

  $.ajax({
    url:"getEvent.php",
  }).done(function(eventsFromJson) {
    events_array = JSON.parse(eventsFromJson);
  });

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay,listWeek'
    },
    // defaultDate: '2017-06-07',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events

    dayClick: function() {
      console.log($(this));
      alert("ui");
    },

    events: events_array,
    events: [
      title:
    ]

  });
});

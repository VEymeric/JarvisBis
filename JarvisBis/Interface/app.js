$(document).ready(function() {

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
    },


    // Exemples
    // A remplacer par un tableau d'une bdd ou d'un compte google
  });

});

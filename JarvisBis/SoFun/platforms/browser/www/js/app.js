var storage = window.localStorage;

var meetings = JSON.parse(storage.getItem("meetings")); 
var events = JSON.parse(storage.getItem("events"));
console.log(meetings);
console.log(events);

/*console.log(data);
console.log(storage.getItem("meetings"));
console.log("------------------")
console.log(JSON.parse(storage.getItem("meetings")));
console.log(JSON.parse(storage.getItem("events")));
console.log(storage);*/



$("#colorPalette").spectrum({
  showPaletteOnly: true,
  showPalette:true,
  color: '#3d85c6',
  palette: [
      ["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
      ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
      ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
      ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
      ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
      ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
      ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
      ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
  ]
});

function deleteEvent (array, arrayName, eventToDelete) {
  for (var i = 0; i <= array.length - 1; i++) {
    if (JSON.stringify(array[i]) == JSON.stringify(eventToDelete)) {
      console.log("AH");
      var change = array[i];
      array[i] = array[array.length -1];
      array[array.length -1] = change;
      array.pop();
      window.localStorage.setItem(arrayName, JSON.stringify(array));
      $('#calendar').fullCalendar('removeEvents', function(event) {
        if ( (event.title == eventToDelete.title) && (event.start._i == eventToDelete.start) && (event.end._i == eventToDelete.end) ) {
          return true;
        }
        return false;
      });
      break;
    }
  }
}

function addEvent (array, arrayName, eventToAdd){
  for (var i = 0; i <= array.length - 1; i++) {
    if (JSON.stringify(array[i]) == JSON.stringify(eventToAdd)) {
      console.log("Event exists");
      return false;
    }
  }
  $('#calendar').fullCalendar('renderEvent', eventToAdd, true);
  array.push(eventToAdd);
  window.localStorage.setItem(arrayName, JSON.stringify(array));
  meetings = JSON.parse(storage.getItem("meetings")); 
  events = JSON.parse(storage.getItem("events"));

  return true;
}

// Delete event
$( "#dialog-confirm" ).dialog({
  resizable: false,
  height: "auto",
  width: 400,
  modal: true,
  autoOpen: false,
});

// Add event
$( "#dialog-form" ).dialog({
  autoOpen: false,
  height: 400,
  width: 350,
  modal: true
});

form = $( "#dialog-form" ).find( "form" ).on( "submit", function( event ) {
  event.preventDefault();

});



$('#calendar').fullCalendar({
  customButtons: {
    showHide: {
      text: 'Afficher/Masquer les events constellation',
      click: function() {
        if ($(this).hasClass("eventShown")) {
          $('#calendar').fullCalendar('removeEvents', function(event) {
            return "rdv" != event.type;
          });
          $('#calendar').fullCalendar('refetchEvents');
          $(this).removeClass("eventShown");
        } else {
          for (var i = 0; i < events.length; i++) {
            $('#calendar').fullCalendar('renderEvent', events[i], true);
          }
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
  defaultTimedEventDuration: "00:30:00",
  navLinks: true,
  eventLimit: true,
  selectable: true,
  allDaySlot: false,

  // Delete event
  eventClick: function(event, element) {
    // Display dialog box
    $( "#dialog-confirm" ).dialog( "open" );
    if (event.start._i.substr(11,5) == event.end._i.substr(11,5)) {
      $("#eventDate").html(event.start._i.substr(11,5));
    } else {
      $("#eventDate").html(event.start._i.substr(11,5) + " - " + event.end._i.substr(11,5));
    }
    $("#eventTitle").html(event.title);

    // Buttons definition
    $( "#dialog-confirm" ).dialog({
      buttons: {
        Valider: function() {
          if (event.type == "rdv") {
            eventToDelete = {
              "title" : event.title,
              "start" : event.start._i,
              "type" : event.type,
              "color" : event.color,
              "end" : event.end._i
            };
            deleteEvent(meetings, "meetings", eventToDelete);
          } else {
            eventToDelete = {
              "title" : event.title,
              "start" : event.start._i,
              "type" : event.type,
            };
            deleteEvent(events, "events", eventToDelete);
          }
          $( this ).dialog( "close" );
        },
        Annuler: function() {
          $( this ).dialog( "close" );
        }
      }
    });
    $('#calendar').fullCalendar('updateEvent', event);
  },

  // Default event
  events: meetings,

  // Add event
  eventRender: function(event, element) {
   element.attr('title', event.tip);
  },
  select: function(start, end, jsEvent, view) {
    $("#errorMessage").html("");
    $( "#dialog-form" ).dialog("open");

    // Default end value for the new event
    if ( (moment(start).format()).substr(11,2) < 9 ) {
      $('#end').val( "0" + (parseInt((moment(start).format()).substr(11,2)) + 1) + ":" + (moment(start).format()).substr(14,2) );
    } else {
      $('#end').val( (parseInt((moment(start).format()).substr(11,2)) + 1) + ":" + (moment(start).format()).substr(14,2) );
    }

    $( "#dialog-form" ).dialog({
      buttons: {
        "Valider": function(){

          title  = $('#title').val();
          end    = $('#end').val();
          color  = "rgb(" + Math.round($("#colorPalette").spectrum("get")._r) + "," + Math.round($("#colorPalette").spectrum("get")._g) + "," + Math.round($("#colorPalette").spectrum("get")._b) + ")";
          errors = "";

          if (title.length == 0 || end.length == 0) {
            errors = "Champ(s) Invalide(s) !";
          }

          var cutEnd = end.split(":");
          var cutStart = (moment(start).format()).substr(11,5).split(":");

          if( cutEnd[0] < cutStart[0] || (cutEnd[0]==cutStart[0] && cutEnd[1]<cutStart[1])){
            errors = "Selectionnez une date ultérieur !";
          }

          $("#errorMessage").html(errors);
          console.log(errors);
          if (errors.length == 0) {
            eventToAdd = {
              "title":title,
              "start": moment(start).format(),
              "type": "rdv",
              "color": color,
              "end": (moment(start).format()).substr(0,11) + end + ":00"
            };
            addEvent(meetings, "meetings", eventToAdd);
            $( this ).dialog( "close" );
          }
        },
        Annuler: function() {
          $( this ).dialog( "close" );
        }
      },
      close: function() {
        form[ 0 ].reset();
      }
    });
  }
});

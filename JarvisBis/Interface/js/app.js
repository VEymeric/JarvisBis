$(document).ready(function() {

  $.ajaxSetup({ cache: false });

  function deleteInJson (jsonFeed, eventToDelete) {
    $.getJSON("js/" + jsonFeed, function(json) {
      for (var i = 0; i <= json.length - 1; i++) {
        if (JSON.stringify(json[i]) == JSON.stringify(eventToDelete)) {
          var change = json[i];
          json[i] = json[json.length -1];
          json[json.length -1] = change;
          json.pop();
          $.ajax({
            url: "js/delete.php",
            type: "POST",
            data: {
              json: json,
              file: jsonFeed
            }
          }).done(function(arg){
            console.log(arg);
            $('#calendar').fullCalendar('refetchEvents');
          });
          break;
        }
      }
    });
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
    navLinks: true,
    eventLimit: true,
    selectable: true,

    // Modifier/Supprimer un event au click
    eventClick: function(event, element) {
      // Fenetre de confirmation
      $( "#dialog-confirm" ).dialog( "open" );
      console.log(event);
      // Action des boutons
      $( "#dialog-confirm" ).dialog({
        buttons: {
          Valider: function() {
            if (event.type == "rdv") {
              eventToDelete = {
                "title" : event.title,
                "start" : event.start._i,
                "type" : event.type,
                "end" : event.end._i
                // add end if defined
              };
              deleteInJson("meetings.json", eventToDelete); 
            } else {
              eventToDelete = {
                "title" : event.title,
                "start" : event.start._i,
                "type" : event.type
              };
              deleteInJson("events.json", eventToDelete);
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

    // Les événements toujours affiché
    events: "js/getMeetings.php",

    // Ajout d'events
    eventRender: function(event, element) {
     element.attr('title', event.tip);
    },   
    select: function(start, end, jsEvent, view) {
      // A remplacer par un popup
      // var action = prompt("Que voulez vous faire ?");
      $( "#dialog-form" ).dialog("open");

      $( "#dialog-form" ).dialog({
        buttons: {
          "Valider": function(){
            console.log($('#title').val());
            console.log($('#end').val());
            
            title = $('#title').val();
            end   = $('#end').val();
            errors = "";

            if (title.length == 0 || end.length == 0) {
              errors = "Champ(s) Invalide(s) !";
            }

            var cutEnd = end.split(":");
            var cutStart = (moment(start).format()).substr(11,5).split(":");

            if( cutEnd[0] < cutStart[0] || (cutEnd[0]==cutStart[0] && cutEnd[1]<cutStart[1])){
              errors = "Selectionnez une date ultérieur !";
            }

            console.log(errors);

            if (errors.length == 0) {
              $.ajax({
                // on attend avant d'aller dans constellation :'(
                url: "js/updateJson.php",
                type: "POST",
                data: {
                  file: "meetings.json",
                  action: title,
                  date: (moment(start).format()).substr(0,10),
                  heure: (moment(start).format()).substr(11,8),
                  end: (end + ":00"),
                  type: "rdv",
                }
              }).done(function(arg) {
                console.log(arg);
                $('#calendar').fullCalendar('refetchEvents');
              });
            }
            $( this ).dialog( "close" );
          },
          Annuler: function() {
            $( this ).dialog( "close" );
          }
        },
        close: function() {
          form[ 0 ].reset();
        }
      });

    },
  
  });
});


$(document).ready(check);
$(document).ready(meetingRecall);
$(document).ready(deleted);
setInterval(check,60000);
setInterval(deleted,60000);
setInterval(meetingRecall,60000);

function check() {
  $.getJSON("js/json/events.json",function(json){
      var now  = new Date();
      for(var i=0 ; i<json.length ; i++ ){
        if(json[i].start != undefined){
          var separated = json[i].start.split(" ");
          var cut = separated[0].split("-");
          console.log(cut[0]+" "+cut[1]+" "+cut[2]);
          if (cut[0] == now.getFullYear() && cut[1] == now.getMonth() + 1 && cut[2] == now.getDate()) {
            var hour = separated[1].split(":");
            if(hour[0] == now.getHours() && hour[1] == now.getMinutes()){
              valid(json[i]);
            }
          }
        }
      }
    });
  }

function meetingRecall(){
  $.getJSON("js/json/meetings.json",function(json){
      var now = new Date();
      for(var i=0 ; i <json.length ; i++){
        var separated = json[i].start.split(" ");
        var cut = separated[0].split("-");
        if( now.getFullYear()==cut[0] && cut[1] == now.getMonth()+1 && cut[2] == now.getDate()){
          var hour = separated[1].split(":");
          if( hour[0] == now.getHours() && hour[1]== now.getMinutes()+30){
            recall(json[i]);
          }
        }
      }
  });
}

function deleted(){
  $.getJSON("js/json/events.json",function(json){globalDelete(json, "events.json")});
  $.getJSON("js/json/meetings.json",function(json){globalDelete(json, "meetings.json")});
}

function globalDelete(json, JSONFile){
  var paste  = new Date();
  for(var j=0 ; j<json.length ; j++ ){
    if( json[j].start != undefined){
      var separated = json[j].start.split(" ");
      var cut = separated[0].split("-");
      if(cut[0] < paste.getFullYear() || cut[1] < paste.getMonth()+1){
        var change = json[j];
        json[j]=json[json.length-1];
        json[json.length-1] = change;
        json.pop();
        $.ajax({
          url: "js/php/delete.php",
          type: "POST",
          data: {
            json: json,
            file: JSONFile
          }
        }).done(function(arg) {
          $('#calendar').fullCalendar('refetchEvents');
        });
      }
  }
}
}

function valid(event) {
    console.log("action : "+ event.action);
    switch (event.action) {
        case "Allumer_télévision":
            break;
        case "Eteindre_télévision":
            break;
        case "Faire_café":
            console.log("Faire café");
            break;
        case "Démarrer_cafetière":
            break;
        case "Allumer_lumière":
            console.log("lumiere allumée");
            break;
        case "Eteindre_lumière":
            break;
        case "Mettre_réveil":
            break;
        case "Monter_vollet":
            break;
        case "Baisser_vollet":
            break;
        case "Augmenter_chauffage":

            break;
        case "Diminuer_chauffage":
            break;

        case "Monter_volume":
            constellation.server.sendMessage({ Scope: 'Package', Args: ['WindowsControl'] }, 'VolumeUp', {});
            break;

        case "Baisser_volume":
            constellation.server.sendMessage({ Scope: 'Package', Args: ['WindowsControl'] }, 'VolumeDown', {});
            break;
        default:
            console.log("Action inexistante. Rééssayez.");
            break;
    }
}

function recall(meeting){
  // pour Simon faire renvoyer par constellation le type du rendez vous
}
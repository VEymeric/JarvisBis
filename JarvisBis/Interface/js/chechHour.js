// vérifier si il n'y a pas d'évenement à cette heure la et cette start la
  // -> si oui evenement constellation
  // si non -> ba les couilles

function check() {
  $.getJSON("js/events.json",function(json){
      console.log(" allller !");
      var now = new Date();
      for(var i=0 ; i<json.length ; i++ ){
        var separated = json[i].start.split(" ");
        var cut = separated[0].split("-");
        if (cut[0] == now.getFullYear() && cut[1] == now.getMonth() + 1 && cut[2] == now.getDate()) {
          var hour = separated[1].split(":");
          if(hour[0] == now.getHours() && hour[1] == now.getMinutes()){
              valid(json[i]);
          }
        }
      }
    });
    console.log(" repeat");
  }
function deleted(){
  var paste  = new Date();
  $.getJSON("js/events.json",function(json){
    for(var j=0 ; j<json.length ; j++ ){
      var separated = json[j].start.split(" ");
      var cut = separated[0].split("-");
      console.log(cut[0]+"-"+cut[1]+"-"+cut[2]);
      if(cut[0] < paste.getFullYear() || cut[1] < paste.getMonth()+1){
        console.log(" delete ");
        delete json[j];
        $.ajax({
          url: ""
        })
        console.log(json);
      }
    }
  });
}

var now;
$(document).ready(check);
<<<<<<< HEAD
$(document).ready(meetingRecall);
$(document).ready(deleted);
setInterval(check,60000);
setInterval(meetingRecall,60000);
setInterval(deleted,150000);
=======
$(document).ready(deleted);
setInterval(check,60000000);
setInterval(check,60000000);
>>>>>>> cf43ae81adc650bc2dae8661e801d12889008f18



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
  // pour Simon faire renvoyer par constellation le type du rendez vous sur le telephone
}

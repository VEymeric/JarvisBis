// vérifier si il n'y a pas d'évenement à cette heure la et cette start la
  // -> si oui evenement constellation
  // si non -> ba les couilles

function check() {
  $.getJSON("js/events.json",function(json){
      console.log(" allller !");
      var now = new Date();
      console.log(json.length);
      for(var i=0 ; i<json.length ; i++ ){
        console.log("ok");
        var separated = json[i].start.split(" ");
        var cut = separated[0].split("-");
        console.log("date : "+cut[0]+" "+cut[1]+" "+cut[2]);
        if (cut[0] == now.getFullYear() && cut[1] == now.getMonth() + 1 && cut[2] == now.getDate()) {
          console.log(" now");
          var hour = separated[1].split(":");
          if(hour[0] == now.getHours() && hour[1] == now.getMinutes()){
              console.log("super now");
              valid(json[i]);
          }
        }else if( cut[0]<now.getFullYear() || cut[1]<now.getMonth()){
          console.log(" delete ");
          delete json[i];
        }
      }
    });
    console.log(" repeat");
  }

var now;
$(document).ready(check);
setInterval(check,60000);


function valid(event) {
    console.log("action : "+ event.action);
    switch (event.action) {
        case "Allumer_télévision":
            break;
        case "Eteindre_télévision":
            break;
        case "Faire_café":
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

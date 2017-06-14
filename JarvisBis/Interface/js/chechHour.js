// vérifier si il n'y a pas d'évenement à cette heure la et cette date la
  // -> si oui evenement constellation
  // si non -> ba les couilles
var now;

window.onload = check;


$.getJSON(URL,function(données){


}


function check(){
    var now = new Date();
    for(var i=0 ; i<events.length ; i++ ){
      console.log(events.length);
      var cut = events[i].date.split("-");
      if (cut[0] == now.getFullYear() && cut[1] == now.getMonth() + 1 && cut[2] == now.getDate()) {
        var hour = events[i].Heure.split(":");

        if(hour[0] == now.getHours() && hour[1] == now.getMinutes()){
            valid(events[i]);
        }
      }/*else if( cut[0]<now.getFullYear() || cut[1]<now.getMonth()){
        console.log(" delete ");
        var eventsDelete = events.splice(i,1);
      }*/
    }
    setTimeout("check()", 60000);
}

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

// vérifier si il n'y a pas d'évenement à cette heure la et cette date la
  // -> si oui evenement constellation
  // si non -> bat les couilles
/*
var trueYears = now.getFullYear();
var trueMonth = now.getMonth() + 1;
var trueDays = now.getDate();
var trueHour = now.getHours();
var trueMinute = now.getMinutes();
var trueSeconde = now.getSeconds();*/


window.onload = check;

function check(){

    var now = new Date();
    for(var i=0 ; i<events.length ; i++ ){        
      var cut = events[i].date.split("-");
      if (cut[0] == now.getFullYear() && cut[1] == now.getMonth() + 1 && cut[2] == now.getDate()) {
        var hour = events[i].Heure.split(":");

        if(hour[0] == now.getHours() && hour[1] == now.getMinutes()){
            valid(events[i]);
        }
      }
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
/*
function delete(){
  for(var i=0;i<events.length;i++){
    var cut = events[i].date.split("-");
    if(cut[0] < trueYears && cut[1] < trueMonth && cut[2] < trueDays ){

    }
  }
}*/
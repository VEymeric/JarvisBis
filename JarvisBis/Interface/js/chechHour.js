// vérifier si il n'y a pas d'évenement à cette heure la et cette date la
  // -> si oui evenement constellation
  // si non -> bat les couilles

var now = new Date();
var trueYears = now.getFullYear();
var trueMonth = now.getMonth() + 1;
var trueDays = now.getDate();
var trueHour = now.getHours();
var trueMinute = now.getMinutes();
var trueSeconde = now.getSeconds();
var years, month, days, hour, minute, seconde;
window.onload = check;


function check(){
  for(var i=0;i<events.length;i++ ){
      var cut = events[i].date.split("-");
      if(cut[0] == trueYears && cut[1] == trueMonth && cut[0] == trueDays){
        var hour = events.Heure.split(":");
        if(hour[0] == trueHour && hour[1] == trueMinute){
          valid(events[i]);
        }
      }
    }
    setTimeout("check()", 60000);
}

function valid(action){    
    switch (action.action) {
        case "Allumer_télévision":
            break;
        case "Eteindre_télévision":
            break;
        case "Faire_café":
            break;
        case "Démarrer_cafetière":
            break;
        case "Allumer_lumière":
            constellation.server.sendMessage({ Scope: 'Package', Args: ['Hue'] }, 'SetState', [lightId, true]);
            break;
        case "Eteindre_lumière":
            constellation.server.sendMessage({ Scope: 'Package', Args: ['Hue'] }, 'SetState', [lightId, false]);
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
            Console.WriteLine("Action inexistante. Rééssayez.");
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
// vérifier si il n'y a pas d'évenement à cette heure la et cette start la
  // -> si oui evenement constellation
  // si non -> ba les couilles

function check() {
  $.getJSON("js/events.json",function(json){
      var now  = new Date();
      for(var i=0 ; i<json.length ; i++ ){
        if(json[i].start != undefined){
          var separated = json[i].start.split(" ");
          var cut = separated[0].split("-");
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
function deleted(){
  var paste  = new Date();
  $.getJSON("js/events.json",function(json){
    for(var j=0 ; j<json.length ; j++ ){
      if( json[j].start != undefined){
        var separated = json[j].start.split(" ");
        var cut = separated[0].split("-");
      //  console.log(cut[0]+"-"+cut[1]+"-"+cut[2]);
        if(cut[0] < paste.getFullYear() || cut[1] < paste.getMonth()+1 ){
          var change = json[j];
          json[j]=json[json.length-1];
      //    console.log("json[j] : "+json[j]);
          json[json.length-1] = change;
          json.pop();
          console.log(" end of delete : ")
          console.log(json);
          $.ajax({
            url: "js/delete.php",
            type: "POST",
            data: {json: json}
          }).done(function(arg) {
            //console.log(arg);
          });
        }
    }
  }
  });
}

var now;
$(document).ready(check);
$(document).ready(deleted);
setInterval(check,60000);
setInterval(deleted,150000);



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

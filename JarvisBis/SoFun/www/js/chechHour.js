$(document).ready(checkAll);
setInterval(checkAll,59000);
setInterval(globalDelete,60000);

function check(storageEvents, now) {
  if(storageEvents[i].start != undefined){
    var separated = storageEvents.start.split(" ");
    var cut = separated.split("-");
    console.log(cut[0]+" "+cut[1]+" "+cut[2]);
    if (cut[0] == now.getFullYear() && cut[1] == now.getMonth() + 1 && cut[2] == now.getDate()) {
      var hour = separated.split(":");
      if(hour[0] == now.getHours() && hour[1] == now.getMinutes()){
        valid(storageEvents);
      }
    }
  }
}

function meetingRecall(storageMeetings, now){
        var separated = storageMeetings.start.split(" ");
        var cut = separated.split("-");
        if( now.getFullYear()==cut[0] && cut[1] == now.getMonth()+1 && cut[2] == now.getDate()){
          var hour = separated.split(":");
          if( hour[0] == now.getHours() && hour[1]== now.getMinutes()+30){
            recall(storageMeetings);
          }
        }
}

function checkAll(storageAll){
  var now = new Date();
  for(var i=0;i<storageAll;i++){
    if(storageAll[i].type == "rdv"){
      meetingRecall();
    }else{
      eventsRecall();
    }
  }
}

function globalDelete(storageAll,JSONFile){
  console.log(storageAll);
  console.log(JSONFile);
  var paste  = new Date();
  for(var j=0 ; j<storageAll.length ; j++ ){
    if( storageAll[j].start != undefined){
      var separated = storageAll[j].start.split(" ");
      var cut = separated[0].split("-");
      if(cut[0] < paste.getFullYear() || cut[1] < paste.getMonth()+1){
        if(storageAll[j].title == "rdv"){
          deleteEvent(storageAll,"meeting",storageAll[j]);
        }else{
          deleteEvent(storageAll,"events",storageAll[j]);
        }
        
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

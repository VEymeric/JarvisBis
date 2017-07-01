<<<<<<< HEAD
=======
$(document).ready(checkAll);
setInterval(checkAll,59000);
setInterval(globalDelete,60000);

>>>>>>> 04409c95a0fab20a0ca2b8302e1edbbbcb81536d
function check(storageEvents, now) {
  if(storageEvents[i].start != undefined){
    var separated = storageEvents.start.split(" ");
    var cut = separated.split("-");
    console.log(cut[0]+" "+cut[1]+" "+cut[2]);
    if (cut[0] == now.getFullYear() && cut[1] == now.getMonth() + 1 && cut[2] == now.getDate()) {
      var hour = separated.split(":");
      if(hour[0] == now.getHours() && hour[1] == now.getMinutes()){
<<<<<<< HEAD
        //valid(storageEvents);
=======
        valid(storageEvents);
>>>>>>> 04409c95a0fab20a0ca2b8302e1edbbbcb81536d
      }
    }
  }
}

function meetingRecall(storageMeetings, now){
        var separated = storageMeetings.start.split(" ");
        var cut = separated.split("-");
        var h2 = cut[2].split("T");
        if( now.getFullYear()==cut[0] && cut[1] == now.getMonth()+1 && h2[0] == now.getDate()){
          var hour = h2[1].split(":");
          if( hour[0] == now.getHours() && hour[1]== now.getMinutes()+30){
            recall(storageMeetings);
          }
        }
<<<<<<< HEAD
=======
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

function globalDelete(storageAll){
  return;
  console.log(storageAll);
  var paste  = new Date();
  for(var j=0 ; j<=storageAll.length -1; j++ ){
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
>>>>>>> 04409c95a0fab20a0ca2b8302e1edbbbcb81536d
}

function checkAll(storageMeetings,storageEvents){
  var now = new Date();
  console.log(" checkAll ");
  console.log(storageMeetings + " MEETINGS ");
  console.log(storageEvents + " EVENTS ");
  for(var i=0;i<storageMeetings;i++){meetingRecall(storageAll[i],now);}
  for(var j=0;j<storageEvents;j++){eventsRecall(storageAll[i],now);}
}

function recall(meeting){
  console.log(" Evenements va se passer dans 30 minutes : " + meeting);
}

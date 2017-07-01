function check(storageEvents, now) {
  if(storageEvents[i].start != undefined){
    var separated = storageEvents.start.split(" ");
    var cut = separated.split("-");
    console.log(cut[0]+" "+cut[1]+" "+cut[2]);
    if (cut[0] == now.getFullYear() && cut[1] == now.getMonth() + 1 && cut[2] == now.getDate()) {
      var hour = separated.split(":");
      if(hour[0] == now.getHours() && hour[1] == now.getMinutes()){
        //valid(storageEvents);

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
  constellation.server.sendMessage({
    Scope : 'Package', Args:['PushBullet']
  }, 'PushNote',[meeting.title,meeing.start,'Device']);
}

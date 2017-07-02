function eventsRecall(storageEvents, now) {
    var separated = storageEvents.start.split(" ");
   var cut = separated[0].split("-");
    if (cut[0] == now.getFullYear() && cut[1] == now.getMonth() + 1 && cut[2] == now.getDate()) {
      var hour = separated[1].split(":");
      if(hour[0] == now.getHours() && hour[1] == now.getMinutes()){
        //valid(storageEvents);
          constellation.server.sendMessageWithSaga({    //appel du package TheBrain
    Scope: 'Package', 
    Args: ['TheBrain'] }, 
    'AgendaRequest', 
    storageEvents.title,
    storageEvents.type,
    function(response) {
      request = response;
      setIdOnValue("#reponse",JSON.stringify(response.Data.Result.Fulfillment.Speech));
      majTabEvent(response.Data);
      annalyseEvent();
    }
  );

      }
    }
}

function meetingRecall(storageMeetings, now){
        var separated = storageMeetings.start.split(" ");
        var cut = separated[0].split("-");
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
  for(var i=0;i<storageMeetings.length;i++){meetingRecall(storageMeetings[i],now);}
  for(var j=0;j<storageEvents.length;j++){
    eventsRecall(storageEvents[j],now);
  }
}

function recall(meeting){
  console.log(meeting);
  constellation.server.sendMessage({
    Scope : 'Package', Args:['PushBullet']
  }, 'PushNote',[meeting.title,meeting.start,'Device']);
}

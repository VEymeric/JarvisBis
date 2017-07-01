function compareToMeetingg(sobj){
  console.log("ui");
  for(var i=0; i<json.length; ++i )
    {
      if(sobj == json[i]){
        return false;
      }
    }
    console.log("robert");
          title = sobj.summary;
          type = "rdv";
          color = "rgb(111,168,220)";
          start = sobj.start.dateTime.substring(0, sobj.start.dateTime.length-6);
          end = sobj.end.dateTime.substring(0,sobj.end.dateTime.length-6);
          console.log(title, type, color, start, end);
          // FONCTION AJOUTER EVENT
    return true ;
}

function GetGoogleCalendarEvents(){
  console.log(constellation);
  constellation.client.registerStateObjectLink("LAPTOP-OB16JBC9_UI", "GoogleCalendar", "Events", "*", function (sobj) {
      console.log("abracadabra");
      for(var i=0; i<sobj.Value.length; ++i){
        if(compareToMeetingg(sobj.Value[i])){
          console.log(" google GoogleCalendar");
        }
      }     
  });
}


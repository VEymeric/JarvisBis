// vérifier si il n'y a pas d'évenement à cette heure la et cette date la
  // -> si oui evenement constellation
  // si non -> ba les couilles
var now;
var checkFalse = new Date();

window.onload = check;

function check(){
  now = new Date();
  for(var i=0;i<events.length;i++ ){
      var cut = events[i].date.split("-");
      if(cut[0] == now.getFullYear() && cut[1] == now.getMonth() + 1 && cut[2] == now.getDate()){
        var hour = events[i].Heure.split(":");
        if(hour[0] == now.getHours() && hour[1] == now.getMinutes()){
          valid(events[i]);
        }
      }else if( cut[0]<now.getFullYear() || cut[1]<now.getMonth()){
        console.log(" delete ");
        var eventsDelete = events.splice(i,1);
      }
    }
    setTimeout("check()", 60000);
}

function valid(action){
}

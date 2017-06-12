// vérifier si il n'y a pas d'évenement à cette heure la et cette date la
  // -> si oui evenement constellation
  // si non -> ba les couilles
var now = new Date();
var trueYears = now.getFullYear();
var trueMonth = now.getMonth() + 1;
var trueDays  = now.getDate();
var trueHour  = now.getHours();
var trueMinute  = now.getMinutes();
var trueSeconde = now.getSeconds();
var years,month,days,hour,minute,seconde;
//var requirejs = require('requirejs');
//requirejs.config({/*your config with shims,etc goes here*/});

//var events = require("js/tableOfValue.js");
window.onload = check;

console.log(test);

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

}/*

function delete(){
  for(var i=0;i<events.length;i++){
    var cut = events[i].date.split("-");
    if(cut[0] < trueYears && cut[1] < trueMonth && cut[2] < trueDays ){

    }
  }
}*/

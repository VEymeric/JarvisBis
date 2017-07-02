var accessToken = "e552149f515940da96f8d0858f28c806";
var baseUrl = "https://api.api.ai/v1/";
var tabEvent = [];
var DEFAULT_DATE = "aujourd'hui";
var DEFAULT_HEURE = "maintenant";
var DEFAULT_VALUE = "undefined";
var DEFAULT_ACTION = "input.unknown";

$(document).ready(function() {
	$("#input").keypress(function(event){
		if(event.which==13){
			event.preventDefault();
			send();
		}
	});
});

function Press() {
	event.preventDefault();
	send();
}

function repJours(){
	var day = $('#listeJours').text();
	console.log(day);
	repeatDay(day)
}

function repeatDay(day){
	var now = new Date();
	var tab_jour= new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
	for (int i = 0 ;i< 31; i++){
		now = now +1;
		for(int j = 0;j< day.length;j++){
			if ( tab_jour[now.getDay()] == day[j]){
				tabEvent['date'] = now.getFullYear()+"-"+now.getMonth()+1+"-"+now.getDate();
				majTabEvent();
			}
		}
	}
}

function setInput(text) {
	send();
}

function send() {
	var text = $("#input").val();
	$.ajax({
		type: "POST",
		url: baseUrl + "query?v=20150910",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		headers: {
			"Authorization": "Bearer " + accessToken
		},
		data: JSON.stringify({ query: text, lang: "fr", sessionId: "somerandomthing" }),
		success: function(data) {
			AffichageAll(data);
			majTabEvent();
			annalyseEvent();
		},
		error: function() {
			AffichageError();
		}
	});
	AffichageLoading();
}

function AffichageError(){
	setIdOnValue("#reponse", "Internal Server Error");
	setIdOnValue("#debug","Internal Server Error");
	setIdOnValue("#action","Internal Server Error");
	setIdOnValue("#heure","");
	setIdOnValue("#date","");
	setIdOnValue("#type","");
}

function AffichageLoading(){
	setIdOnValue("#debug","Loading...");
	setIdOnValue("#action","Loading...");
	setIdOnValue("#reponse","Loading...");
	setIdOnValue("#heure","");
	setIdOnValue("#date","");
	setIdOnValue("#type","");
}

function AffichageAll(data)	{
	setIdOnValue("#debug",JSON.stringify(data, undefined, 2));
	setIdOnValue("#reponse",JSON.stringify(data.result.fulfillment.speech, undefined, 2));

	setIdOnValue("#action",tabEvent['action']);
	/*affiche les arguments*/
	setIdOnValue("#date", tabEvent['date']);
	setIdOnValue("#heure",tabEvent['heure']);
	setIdOnValue("#type", tabEvent['type']);

	afficherRetour();
}

function majTabEvent(data){
	temp = JSON.stringify(data.result.action, undefined, 2);
	temp = temp.substring(1, temp.length-1);
	tabEvent['action'] = temp;

	temp = document.getElementById("date").value;
	temp = temp.substring(1, temp.length-1);
	tabEvent['date'] = "2017-06-22";

	temp = document.getElementById("heure").value;
	temp = temp.substring(1, temp.length-1);
	tabEvent['heure'] = "02:00:00";
	if(data.result.parameters.date != null && data.result.parameters.date != "") {
		temp = JSON.stringify(DEFAULT_DATE, undefined, 2);
		temp = temp.substring(1, temp.length-1);
	}else{
		temp = DEFAULT_DATE;
	}
	tabEvent['date'] = temp;

	if(data.result.parameters.time != null && data.result.parameters.time != "") {
		temp = JSON.stringify(data.result.parameters.time, undefined, 2);
		temp = temp.substring(1, temp.length-1);
	}else{
		temp = DEFAULT_HEURE;
	}
	tabEvent['heure'] = temp;
	if(data.result.parameters.type != null) {
		temp = JSON.stringify(data.result.parameters.type, undefined, 2);
		temp = temp.substring(1, temp.length-1);
	}else{
		temp = DEFAULT_VALUE;
	}
	tabEvent['type'] = temp;
}

function setDebug(val) {
	$("#debug").text(val);
}
function setAction(val) {
	$("#action").text(val);
}
function setReponse(val) {
	$("#reponse").text(val);
}
function setHeure(val) {
	$("#heure").text(val);
}
function setDate(val) {
	$("#date").text(val);
}
function setType(val) {
	$("#type").text(val);
}
function setIdOnValue(id, value){
	$(id).text(value);
}

function afficherRetour(){
	var textRetour = "";
	textRetour += document.getElementById("action").value;
	textRetour += ", " + document.getElementById("reponse").value;
	textRetour += ", " + document.getElementById("date").value;
	textRetour += ", " + document.getElementById("heure").value;
	textRetour += ", " + document.getElementById("type").value;

	$("#retourne").text(textRetour);
}

function annalyseEvent(){
	if( tabEvent['action'] == DEFAULT_ACTION){//pas d'analyse puisqu'on comprend pas l'action
		return;
	}
	if( tabEvent['date'] == DEFAULT_DATE && tabEvent['heure'] == DEFAULT_HEURE){
		// c'est partie on va dans constellation
		console.log("annalyse : ACTION IMMEDIATE");
		valid(tabEvent);
	}else{
    if(tabEvent['date']== DEFAULT_DATE){
      jourAujourdhui();
    }
		$.ajax({
			// on attend avant d'aller dans constellation :'(
			url: "js/updateJson.php",
			type: "POST",
			data: {
				file: "events.json",
				action: tabEvent['action'],
				date: tabEvent['date'],
				heure: tabEvent['heure'],
				type: tabEvent['type'],
			}
		}).done(function(arg) {
			console.log(arg);
		});
	}
}

function jourAujourdhui(){
	var aujourdhui = new Date();
	document.getElementById("date").value = aujourdhui.getFullYear()+"-"+aujourdhui.getMonth()+"-"+aujourdhui.getDate();
 }

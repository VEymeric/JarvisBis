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
<<<<<<< HEAD
/*
var recognition;
function startRecognition() {
	recognition = new webkitSpeechRecognition();
	recognition.onstart = function(event) {
		updateRec();
	};
	recognition.onresult = function(event) {
		var text = "";
	    for (var i = event.resultIndex; i < event.results.length; ++i) {
	    	text += event.results[i][0].transcript;
	    }
	    setInput(text);
		stopRecognition();
	};
	recognition.onend = function() {
		stopRecognition();
	};
	recognition.lang = "fr-FR";
	recognition.start();
}

function stopRecognition() {
	if (recognition) {
		recognition.stop();
		recognition = null;
	}
	updateRec();
=======

function Press() {
	event.preventDefault();
	send();
>>>>>>> cf43ae81adc650bc2dae8661e801d12889008f18
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
			majTabEvent(data);
			AffichageAll(data);
			annalyseEvent();
		},
		error: function() {
<<<<<<< HEAD
			setReponse("Internal Server Error");
			setDebug("");
			setAction("");
			setReponse("");
			setHeure("");
			setDate("");
			setType("");
=======
			AffichageError();
>>>>>>> cf43ae81adc650bc2dae8661e801d12889008f18
		}
	});
	AffichageLoading();
	};

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
	setDebug(JSON.stringify(data, undefined, 2));
	setAction(JSON.stringify(data.result.action, undefined, 2));
	setReponse(JSON.stringify(data.result.fulfillment.speech, undefined, 2));

	/*affiche les arguments*/
	setIdOnValue("#date", tabEvent['date']);
	setIdOnValue("#heure",tabEvent['heure']);
	setIdOnValue("#type", tabEvent['type']);

	afficherRetour();
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

function repJours(){
	var jour= $('#listeJours').text();
	console.log(jour);
}

function setHeure(val) {
	$("#heure").text(val);
}
function setDate(val) {
	$("#date").text(val);

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

function majTabEvent(data){
	temp = JSON.stringify(data.result.action, undefined, 2);
	temp = temp.substring(1, temp.length-1);
	tabEvent['action'] = temp;

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

function jourAujourdhui(){
	var aujourdhui = new Date();
	document.getElementById("date").value = aujourdhui.getFullYear()+"/"+aujourdhui.getMonth()+"/"+aujourdhui.getDate();
 }

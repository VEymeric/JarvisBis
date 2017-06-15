var accessToken = "c5a8a16acf314ec9be96a2da6d4b8f4d";
var baseUrl = "https://api.api.ai/v1/";
/* TEST MICRO DON'T WORK*/
var tabEvent = [];
var DEFAULT_DATE = Date.now();
var DEFAULT_HEURE = "maintenant";
var DEFAULT_VALUE = "undefined";
var DEFAULT_ACTION = "input.unknown"
$(document).ready(function() {
	$("#input").keypress(function(event) {
		if (event.which == 13) {
			event.preventDefault();
			send();
		}
	});/*
	$("#rec").click(function(event) {
		switchRecognition();
	});*/
});
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
}

function switchRecognition() {
	if (recognition) {
		stopRecognition();
	} else {
		startRecognition();
	}
}
function updateRec() {
	$("#rec").text(recognition ? "Stop" : "Speak");
}*/
function setInput(text) {
	$("#input").val(text);
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
		data: JSON.stringify({ query: text, lang: "fr-FR", sessionId: "somerandomthing" }),
		success: function(data) {
			AffichageAll(data);
			majTabEvent();
			annalyseEvent();
		},
		error: function() {
			setResponse("Internal Server Error");
			setDebug("");
			setAction("");
			setReponse("");
			setHeure("");
			setDate("");
			setType("");
		}
	});
	setDebug("Loading...");
	setAction("Loading...");
	setReponse("Loading...");
	setHeure("");
	setDate("");
	setType("");

}

function AffichageAll(data)	{
	setDebug(JSON.stringify(data, undefined, 2));
	setAction(JSON.stringify(data.result.action, undefined, 2));
	setReponse(JSON.stringify(data.result.fulfillment.speech, undefined, 2));
		
	/*affiche les arguments*/
	if(data.result.parameters.date != null && data.result.parameters.date != "") {
		setDate(JSON.stringify(data.result.parameters.date, undefined, 2));
	}else{
		setDate(JSON.stringify(DEFAULT_DATE, undefined, 2));
	}
	if(data.result.parameters.time != null && data.result.parameters.time != "") {
		setHeure(JSON.stringify(data.result.parameters.time, undefined, 2));
	}else{
		setHeure(JSON.stringify(DEFAULT_HEURE, undefined, 2));
	}
	if(data.result.parameters.type != null && data.result.parameters.type != "") {
		setType(JSON.stringify(data.result.parameters.type, undefined, 2));
	}else{
		setType(JSON.stringify(DEFAULT_VALUE, undefined, 2));
	}
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

function setHeure(val) {
	$("#heure").text(val);
}
function setDate(val) {
	$("#date").text(val);
}
function setType(val) {
	$("#type").text(val);
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
	if( tabEvent['action'] == "input.unknown"){//pas d'analyse puisqu'on comprend pas l'action
		return;
	}
	if( tabEvent['date'] == DEFAULT_DATE && tabEvent['heure'] == DEFAULT_HEURE){
		// c'est partie on va dans constellation
		console.log("annalyse : ACTION IMMEDIATE");
		valid(tabEvent);
	}else{
		$.ajax({
			// on attend avant d'aller dans constellation :'(
			url: "updateJson.php",
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

function majTabEvent(){
	temp = document.getElementById("action").value;
	temp = temp.substring(1, temp.length-1);
	tabEvent['action'] = temp;

	temp = document.getElementById("date").value;
	temp = temp.substring(1, temp.length-1);
	tabEvent['date'] = temp;

	temp = document.getElementById("heure").value;
	temp = temp.substring(1, temp.length-1);
	tabEvent['heure'] = temp;

	temp = document.getElementById("type").value;
	temp = temp.substring(1, temp.length-1);
	tabEvent['type'] = temp;
	//valid(tabEvent);
}

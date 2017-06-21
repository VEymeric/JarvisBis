var accessToken = "c5a8a16acf314ec9be96a2da6d4b8f4d";
var baseUrl = "https://api.api.ai/v1/";
console.log("ok 1");

$(document).ready(function() {
	console.log("ok 2");

  })

function Press() {
	console.log("ok  4");
	event.preventDefault();
	console.log("ok  5");
	send();
	console.log("ok  6");
}

function repJours(){
	var jour= $('#listeJours').text();
	console.log(jour);
}

function setInput(text) {
	$("#input").val(text);
	send();
}

function send() {
	var text = $("#input").val();
	console.log("ok  71");

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

			afficherRetour();
			/*
				ECRIRE L'APPEL AUX FONCTIONS EXTERNE ICI
				PAR EXEMPLE POUR LIRE LA REPONSE
				OU ENVOYER A CONSTELLATION
			*/
		},
		error: function() {
			setReponse("Internal Server Error");
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
	};



function AffichageAll(data)	{
	console.log("ok  8");
	setDebug(JSON.stringify(data, undefined, 2));
	setAction(JSON.stringify(data.result.action, undefined, 2));
	setReponse(JSON.stringify(data.result.fulfillment.speech, undefined, 2));

	/*affiche les arguments*/
	if(data.result.parameters.date != null && data.result.parameters.date != "") {
		setDate(JSON.stringify(data.result.parameters.date, undefined, 2));
	}else{
		setDate(JSON.stringify("aujourd'hui", undefined, 2));
	}
	if(data.result.parameters.time != null && data.result.parameters.time != "") {
		setHeure(JSON.stringify(data.result.parameters.time, undefined, 2));
	}else{
		setHeure(JSON.stringify("maintenant", undefined, 2));
	}
	if(data.result.parameters.type != null) {
		setType(JSON.stringify(data.result.parameters.type, undefined, 2));
	}else{
		setType(JSON.stringify("undefined", undefined, 2));
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
	console.log("ok  9");
	var textRetour = "";
	textRetour += document.getElementById("action").value;
	textRetour += ", " + document.getElementById("reponse").value;
	textRetour += ", " + document.getElementById("date").value;
	textRetour += ", " + document.getElementById("heure").value;
	textRetour += ", " + document.getElementById("type").value;

	$("#retourne").text(textRetour);
}

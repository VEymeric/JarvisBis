var tabEvent = [];
var DEFAULT_DATE = "aujourd'hui";
var DEFAULT_HEURE = "maintenant";
var DEFAULT_VALUE = "undefined";
var DEFAULT_ACTION = "input.unknown";

$(document).ready(function() {
	$("#input").keypress(function(event){
		if(event.which==13){
			send();
		}
	});
});
  
function Press() {
	event.preventDefault();
	send();
}

function repJours(){
	if (document.formulaire.Classification[2].checked==1){
		document.formulaire.Sganet_textbox.disabled=false;
	}
	var jour = $( "#listeJours" ).text();
	console.log(jour);
}

function setInput(text) {
	send();
}

function send() {
	var text = $("#input").val();
	constellation.server.sendMessageWithSaga({    //appel du package api.ai
		Scope: 'Package', 
		Args: ['ApiAI'] }, 
		'TextRequest', 
		text, 
		function(response) { 
			setIdOnValue("#reponse",JSON.stringify(response.Data.result.fulfillment.speech, undefined, 2));
			majTabEvent(response.Data);
			annalyseEvent();
		});
	
	AffichageLoading();
	};

function setIdOnValue(id, value){
	$(id).text(value);
}

function AffichageLoading(){
 	setIdOnValue("#reponse","Loading...");
 }
 
 function majTabEvent(data){
	temp = JSON.stringify(data.result.action, undefined, 2);
	temp = temp.substring(1, temp.length-1);
	tabEvent['action'] = temp;

	if(data.result.parameters.date != null && data.result.parameters.date != "") {
		temp = JSON.stringify(data.result.parameters.date, undefined, 2);
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
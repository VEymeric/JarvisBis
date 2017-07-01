var tabEvent = [];
var request;
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
	constellation.server.sendMessageWithSaga({    //appel du package TheBrain
		Scope: 'Package', 
		Args: ['TheBrain'] }, 
		'TextRequest', 
		text, 
		function(response) {
			request = response;
			setIdOnValue("#reponse",JSON.stringify(response.Data.Result.Fulfillment.Speech));
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
 
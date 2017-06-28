$(document).ready(function() {
	app.initialize();     //conection a constellation
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

	app.constellation.server.sendMessageWithSaga({    //appel du package api.ai
		Scope: 'Package', 
		Args: ['ConstellationPackageConsole6'] }, 
		'ReturnResponse', 
		text, 
		function(response) { 
		console.log (response);
			setIdOnValue("#reponse",JSON.stringify(response.Data.result.fulfillment.speech, undefined, 2));
			
		});
	
	AffichageLoading();
	};

function setIdOnValue(id, value){
	$(id).text(value);
}

function AffichageLoading(){
 	setIdOnValue("#debug","Loading...");
 	setIdOnValue("#action","Loading...");
 	setIdOnValue("#reponse","Loading...");
 	setIdOnValue("#heure","");
 	setIdOnValue("#date","");
 	setIdOnValue("#type","");
 }

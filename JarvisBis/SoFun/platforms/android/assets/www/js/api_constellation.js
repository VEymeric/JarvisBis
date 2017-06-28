
var tabEvent = [];
var DEFAULT_DATE = "aujourd'hui";
var DEFAULT_HEURE = "maintenant";
var DEFAULT_VALUE = "undefined";
var DEFAULT_ACTION = "input.unknown";

$(document).ready(function() {
	constellation.connection.start();
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
	constellation.connection.start();
	constellation.server.sendMessageWithSaga({    //appel du package api.ai
		Scope: 'Package', 
		Args: ['ConstellationPackageConsole6'] }, 
		'ReturnResponse', 
		text, 
		function(response) { 
		console.log (response);
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

function annalyseEvent(){
	console.log( tabEvent['date'] +" "+  tabEvent['heure']);
	if( tabEvent['action'] == DEFAULT_ACTION){//pas d'analyse puisqu'on comprend pas l'action
		return;
	}
	if( tabEvent['date'] == DEFAULT_DATE && tabEvent['heure'] == DEFAULT_HEURE){
		// c'est partie on va dans constellation
		console.log("annalyse : ACTION IMMEDIATE");
		constellation.connection.stateChanged(function (change) {
			if (change.newState === $.signalR.connectionState.connected) {
				console.log("Je suis connecté");
			}else{
				console.log("Je suis déjà connecté");
				console.log(constellation);
				valid(tabEvent, constellation);
			}
		});
		//constellation.connection.start();

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

function valid(our_event) {	// action constellation
    console.log("event : " );
    console.log(our_event);
    switch (our_event.action) {
        case "Allumer_télévision":
            break;
        case "Eteindre_télévision":
            break;
        case "Faire_cafe":
            console.log("Faire café");
            break;
        case "Démarrer_cafetière":
            break;
        case "Allumer_lumière":
            console.log("lumiere allumée");
            break;
        case "Eteindre_lumière":
            break;
        case "Mettre_réveil":
            break;
        case "Monter_vollet":
            break;
        case "Baisser_vollet":
            break;
        case "Augmenter_chauffage":

            break;
        case "Diminuer_chauffage":
            break;

        case "Monter_volume":
		console.log("jte monte le volume tkt");
		console.log(constellation.server);
            constellation.server.sendMessage({ Scope: 'Package', Args: ['WindowsControl'] }, 'VolumeUp', {});
            break;

        case "Baisser_volume":
            constellation.server.sendMessage({ Scope: 'Package', Args: ['WindowsControl'] }, 'VolumeDown', {});
            break;
        default:
            console.log("Action inexistante. Rééssayez.");
            break;
    }
}
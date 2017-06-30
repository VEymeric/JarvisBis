 // this is a comment
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
	alert(data.result.fulfillment.speech);
	textToSpeech(data.result.fulfillment.speech);
}

//Do the desired action when we receive a message API.ai with constellation
function annalyseEvent(){
	console.log( tabEvent['date'] +" "+  tabEvent['heure']);
	if( tabEvent['action'] == DEFAULT_ACTION){//pas d'analyse puisqu'on comprend pas l'action
		return;
	}
	if( tabEvent['date'] == DEFAULT_DATE && tabEvent['heure'] == DEFAULT_HEURE){
		// c'est partie on va dans constellation
		console.log("annalyse : ACTION IMMEDIATE");
		realiseActionWithConstellation(tabEvent);
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

function textToSpeech(text){
	// basic usage
    TTS
        .speak(text, function () {
            alert('success');
        }, function (reason) {
            alert(reason);
        });
    
    // or with more options
    TTS
        .speak({
            text: tempext,
            locale: 'fr-FR',
            rate: 0.75
        }, function () {
            alert('success');
        }, function (reason) {
            alert(reason);
        });
}

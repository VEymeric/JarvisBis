 // stock informations from request on tabEvent[]
 function majTabEvent(data){
	temp = JSON.stringify(data.Result.Action, undefined, 2);
	temp = temp.substring(1, temp.length-1);
	tabEvent['action'] = temp;

	if(data.Result.Parameters.date != null && data.Result.Parameters.date != "") {
		temp = JSON.stringify(data.Result.Parameters.date, undefined, 2);
		temp = temp.substring(1, temp.length-1);
	}else{
		temp = DEFAULT_DATE;
	}
	tabEvent['date'] = temp;

	if(data.Result.Parameters.time != null && data.Result.Parameters.time != "") {
		temp = JSON.stringify(data.Result.Parameters.time, undefined, 2);
		temp = temp.substring(1, temp.length-1);
	}else{
		temp = DEFAULT_HEURE;
	}
	tabEvent['heure'] = temp;
	if(data.Result.Parameters.type != null) {
		temp = JSON.stringify(data.Result.Parameters.type, undefined, 2);
		temp = temp.substring(1, temp.length-1);
	}else{
		temp = DEFAULT_VALUE;
	}
	tabEvent['type'] = temp;
}

//Do the desired action when we receive a message API.ai with constellation
function annalyseEvent(){
	console.log( tabEvent['date'] +" "+  tabEvent['heure']);
	if( tabEvent['action'] == DEFAULT_ACTION){//pas d'analyse puisqu'on comprend pas l'action
		return;
	}
	if( tabEvent['date'] == DEFAULT_DATE && tabEvent['heure'] == DEFAULT_HEURE){
		console.log("annalyse : ACTION IMMEDIATE");
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

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
		eventToAdd = {
            "title": tabEvent['action'],
            "start": tabEvent['date']+" "+tabEvent['heure'],
            "type": tabEvent['type']
        };
		addEvent(events, "events", eventToAdd);
	}
}

function jourAujourdhui(){
	var today = new Date();
	var month = today.getMonth()+1;
	console.log(tabEvent['date']);
	tabEvent['date'] = today.getFullYear()+"-"+"0"+month+"-"+today.getDate();
	console.log(tabEvent['date']);
}

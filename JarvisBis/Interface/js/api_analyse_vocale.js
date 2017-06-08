var accessToken = "c5a8a16acf314ec9be96a2da6d4b8f4d";
var baseUrl = "https://api.api.ai/v1/";
$(document).ready(function() {
	$("#input").keypress(function(event) {
		if (event.which == 13) {
			event.preventDefault();
			send();
		}
	});
	$("#rec").click(function(event) {
		switchRecognition();
	});
});
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

function setInput(text) {
	$("#input").val(text);
	send();
}

function updateRec() {
	$("#rec").text(recognition ? "Stop" : "Speak");
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

			setResponse(JSON.stringify(data, undefined, 2));
			setAction(JSON.stringify(data.result.action, undefined, 2));
			setAnswer(JSON.stringify(data.result.fulfillment.speech, undefined, 2));
			if(data.result.parameters.Heure != null) {
				setTemps(JSON.stringify(data.result.parameters.Heure[0], undefined, 2));
			}else{
				setTemps(JSON.stringify("now", undefined, 2));
			}
		},
		error: function() {
			setResponse("Internal Server Error");
		}
	});
	setResponse("Loading...");
}

function setResponse(val) {
	$("#response").text(val);
}

function setAction(val) {
	$("#action").text(val);
}

function setTemps(val) {
	$("#temps").text(val);
}

function setAnswer(val) {
	$("#theanswer").text(val);
}
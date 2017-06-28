function startRecognition(id){
    window.plugins.speechRecognition.startListening(function(result){
	 // Show results in the console
	 $(id).text(result[0]);
	send();
	alert("bite");
    }, function(err){
	 alert(err);
    }, {
	 language: "fr-FR",
	 showPopup: true
    });
}

//Use the microphone and load the result into the $(id.)text();
function startMicrophone(id){
	window.plugins.speechRecognition.isRecognitionAvailable(function(available){
	    if(!available){
		 alert("Sorry, not available");
	    }

	    // Check if has permission to use the microphone
	    window.plugins.speechRecognition.hasPermission(function (isGranted){
		 if(isGranted){
		     startRecognition(id);
		 }else{
		     // Request the permission
		     window.plugins.speechRecognition.requestPermission(function (){
			  // Request accepted, start recognition
			  startRecognition(id);
		     }, function (err){
			  alert(err);
		     });
		 }
	    }, function(err){
		 alert(err);
	    });
	}, function(err){
	    alert(err);
	});		
}


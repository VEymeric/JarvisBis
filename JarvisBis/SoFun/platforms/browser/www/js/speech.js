console.log(window);
console.log(window.plugins);
$(test).text(Windows.plugins);
window.plugins.speechRecognition.isRecognitionAvailable(
	function(available){
		if(available){
			// You can use the speechRecognition
			//$(test).text("value2");
		}
	}, function(err){
		console.error(err);
	}
);

window.plugins.speechRecognition.hasPermission(function (isGranted){
    if(isGranted){
        // Do other things as the initialization here
	//$(test).text("value2");

    }else{
       window.plugins.speechRecognition.requestPermission(function (){
	    // Requested
	}, function (err){
	    // Opps, nope
});
    }
}, function(err){
    console.log(err);
});
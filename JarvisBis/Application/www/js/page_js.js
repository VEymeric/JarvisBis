function openTabs(evt, tabName) {
	
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}
  
//function connectionConstellation() { 
    /*   var txt;
	cAddress = $("#IPConstellation").val();
	cPassword =$("#pwConstellation").val();
	cName = $("#nameConstellation").val();
	console.log(cName);
	constellation = $.signalR.createConstellationConsumer(cAddress, cPassword , cName);
	constellation.connection.stateChanged(function (change) {
	if (change.newState === $.signalR.connectionState.connected) {
		alert("Connecté à constellation");
		$('.received').text('Connected to constellation');
	}
	 else{
		 alert("Déconnecté de constellation");
		$('.received').text('Disconnected to constellation');
	}
});*/
	//constellation.connection.start(); 
//}
    
 


	
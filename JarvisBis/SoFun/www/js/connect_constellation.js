var cAddress = "http://192.168.137.1:8088";
var cPassword ="0123";
var cName ="jarvis";

var  constellation = $.signalR.createConstellationConsumer(cAddress, cPassword , cName);
constellation.connection.stateChanged(function (change) {
	if (change.newState === $.signalR.connectionState.connected) {
		alert("Connecté à constellation");
		$('.received').text('Connected to constellation');
	}
	 else{
		 alert("Déconnecté de constellation");
		$('.received').text('Disconnected to constellation');
	}
});
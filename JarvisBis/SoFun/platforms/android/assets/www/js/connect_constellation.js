var cAddress;
var cPassword;
var cName;
var constellation;

//This function try to connect to Constellation with the settings of options's page
function connectionConstellation() {
	//we don't need to disconnect if we are already connected to this constellation
	if (cAddress == $("#IPConstellation").val() && cPassword == $("#pwConstellation").val() && cName == $("#nameConstellation").val()){
		return;
	}
	cAddress = $("#IPConstellation").val();
	cPassword =$("#pwConstellation").val();
	cName = $("#nameConstellation").val();
	constellation = $.signalR.createConstellationConsumer(cAddress, cPassword , cName);
	constellation.connection.stateChanged(function (change) {
		if (change.newState === $.signalR.connectionState.connected) {
			alert("Connecté à constellation");
		}
		 else{
			 alert("Déconnecté de constellation");
		}
	});

	constellation.connection.start(); 
}
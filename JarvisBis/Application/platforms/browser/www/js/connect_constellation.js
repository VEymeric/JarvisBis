var cAddress;
var cPassword;
var cName;
var constellation;

 function receivedEvent(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    };
    
 function onDeviceReady() {
        this.receivedEvent('deviceready');
    };

//This function try to connect to Constellation with the settings of options's page
function connectionConstellation() {
	
	//we don't need to disconnect if we are already connected to this constellation
	if (cAddress == $("#IPConstellation").val() && cPassword == $("#pwConstellation").val() && cName == $("#nameConstellation").val()){
		return;
	}
	cAddress = $("#IPConstellation").val();
	cPassword =$("#pwConstellation").val();
	cName = $("#nameConstellation").val();
	document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
	
	constellation = $.signalR.createConstellationConsumer(cAddress, cPassword , cName);
	constellation.connection.stateChanged(function (change) {
		if (change.newState === $.signalR.connectionState.connected) {
			$('.received').text('Connected to constellation');
			$('.received').css({"background-color":"#4B946A"});
			console.log('Received Event: connecté à constellation' );
		}
		 else{
			$('.received').text('Disconnected to constellation');
			$('.received').css({"background-color":"red"});
			console.log('Received Event: déconnecté de constellation');
		}
	});

	constellation.connection.start(); 
}
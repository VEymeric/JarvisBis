
var app = {
    // Application Constructor
	initialize: function() {
		app.constellation.connection.stateChanged(function (change) {
			if (change.newState === $.signalR.connectionState.connected) {
				$('.received').text('Connected to constellation');
			}
			 else{
				$('.received').text('Disconnected to constellation');
					console.log( $.signalR);

			 }
		});
		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
	},
	constellation: $.signalR.createConstellationConsumer(address, password, name),
   
	onDeviceReady: function() {	
		app.constellation.connection.start();
		this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
	receivedEvent: function(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
    }
};

app.initialize();


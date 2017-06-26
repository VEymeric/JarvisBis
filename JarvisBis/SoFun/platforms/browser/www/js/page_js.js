function openCity(evt, cityName) {
	
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}
  
function connectionConstellation() {
       var txt;
	var address = $("#IPConstellation").val();
	var password =$("#pwConstellation").val();
	var name = $("#nameConstellation").val();
	
	// if (address == null || address == ""||password == null || password == ""||name == null || name == "") {
		// txt = "Vous n'avez pas fini de vous identifier!";
	// } else {
		txt = "Vous vous êtes identifier sur  " + address + ". <br> Votre mot de passe:" + password +"<br>Sur constellation cette application s'appelle" + name +".";
	// }
	
}
    
  
function hideFormConstellation() {
	$("#ConnectionConstellation").toggle();
}


	
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
  
function ConnectionConstellation() {
       var txt;
	var address = prompt("Entrez l'adresse IP de votre constellation:", "http://193.192.191.19:8088");
	var password = prompt("Entrez votre mot de passe pour constellation", "123abc");
	var name = prompt("Le nom que vous souhaitez donné à cette application dans votre console constellation", "Vania");
	
	if (address == null || address == ""||password == null || password == ""||name == null || name == "") {
		txt = "Vous n'avez pas fini de vous identifier!";
	} else {
		txt = "Vous vous êtes identifier sur  " + address + ". <br> Votre mot de passe:" + password +"<br>Sur constellation cette application s'appelle" + name +".";
	}
	document.getElementById("txt_id_constellation").innerHTML = txt;
}
    
 function ConnectionAPI() {
       var txt;
	var language = prompt("Choisisez votre langue", "Français");
	var adress = prompt("Entrez l'adresse IP de votre API.AI", "http://193.192.191.19:8088");
	var accesToken = prompt("Entrez la clé d'acces", "Vania");
	
	if (address == null || address == ""||password == null || password == ""||name == null || name == "") {
		txt = "Vous n'avez pas fini de vous identifier!";
	} else {
		txt = "Vous vous êtes identifier sur  " + address + ". <br> Votre mot de passe:" + password +"<br>Sur constellation cette application s'appelle" + name +".";
	}
	document.getElementById("txt_id_api").innerHTML = txt;
}
       
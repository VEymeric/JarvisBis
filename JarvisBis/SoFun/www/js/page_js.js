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
	console.log(address);
	console.log(password);
	console.log(name);
	
	
	
}
    
 


	
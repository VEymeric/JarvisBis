<!DOCTYPE html>
<html lang="fr" ng-app="Agenda">

    <head>
  		<title>Agenda</title>
  		<meta http-equiv="Content-Type" content="text/html"; charset="utf-8" />

      <meta name="viewport" content="width=device-width, initial-scale=1">

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <link rel='stylesheet' href='fullcalendar-3.4.0/fullcalendar.min.css' />
      <link rel='stylesheet' href='jquery-ui-1.12.1.custom/jquery-ui.min.css' />
  		<link rel="stylesheet" href="AgendaStyle.css" />


<style>
	#calendar {
		max-width: 900px;
		margin: 0 auto;
    color: white;
	}
</style>
<script>
/*  var constellation = $.signalR.createConstellationConsumer("http://localhost:8088", "connect", "JarvisBis");
  constellation.connection.stateChanged(function (change) {
    if (change.newState === $.signalR.connectionState.connected) {
      console.log("Je suis connecté");
    }
  });
  constellation.connection.start();*/
</script>
    </head>

    <body>
      <header>
        <a href="MainPage.html" ><img class = retour src="icons/retour_1.png" alt="Icon Retour" /></a>
        <div class = agenda>Agenda</div>
      </header>

      <div id='calendar'></div>
      <div id="dialog-confirm" title="Voulez supprimer cet événement ?">
        <p id="eventDate"></p>
        <p id="eventTitle"></p>
      </div>

      <div id="dialog-form" title="Ajouter un rendez-vous">
        <form>
          <div class="form-group">
            <label for="title">Titre :</label>
            <input type="text" name="title" id="title" value="" class="form form-control text ui-widget-content ui-corner-all">
          </div>
          <div class="form-group">
            <label for="end">Heure de fin :</label>
            <input type="time" name="end" id="end" value="00:00" class="form form-control text ui-widget-content ui-corner-all">
          </div>

          <!-- Allow form submission with keyboard without duplicating the dialog button -->
          <input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
        </form>
      </div>

      <!--<script type="text/javascript" src="http://cdn.myconstellation.io/js/Constellation-1.8.1.min.js"></script>-->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script src="jquery-ui-1.12.1.custom/jquery-ui.min.js"></script>
      <script src='moment-with-locales.min.js'></script>
      <script src='fullcalendar-3.4.0/fullcalendar.min.js'></script>
      <script src='fullcalendar-3.4.0/locale/fr.js'></script>
      <script src="js/chechHour.js"></script>
      <script src='js/app.js'></script>

    </body>


 </html>

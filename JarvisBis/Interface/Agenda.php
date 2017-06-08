<!DOCTYPE html>
<html lang="fr" ng-app="Agenda">

    <head>
  		<title>Agenda</title>
  		<meta http-equiv="Content-Type" content="text/html"; charset="utf-8" />

      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <link rel='stylesheet' href='fullcalendar-3.4.0/fullcalendar.min.css' />

  		<link rel="stylesheet" href="AgendaStyle.css" />


<style>
	#calendar {
		max-width: 900px;
		margin: 0 auto;
	}
</style>


    </head>


    <body>
      <header>
        <a href="MainPage.html" ><img class = retour src="icons/retour_1.png" alt="Icon Retour" /></a>
        <div class = agenda>Agenda</div>
      </header>


      <div id='calendar'></div>

		<!-- <figure id = icon>
			<button id = agenda src="images/calendrier.png" ng-click = "calendar()"> </button>
		</figure> -->

      <!-- <div class="container">
        <table class="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>Lundi</th>
              <th>Mardi</th>
              <th>Mercredi</th>
              <th>Jeudi</th>
              <th>Vendredi</th>
              <th>Samedi</th>
              <th>Dimanche</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div> -->



      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script src='moment-with-locales.min.js'></script>
      <script src='fullcalendar-3.4.0/fullcalendar.min.js'></script>
      <script src='fullcalendar-3.4.0/locale/fr.js'></script>
      <script src='app.js'></script>

    </body>

 </html>
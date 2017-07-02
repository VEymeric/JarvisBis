<?php

$data = json_decode(file_get_contents($_POST['file'], true), true);

if ( isset($_POST["end"]) && isset($_POST["color"]) ) {
	$dataToAdd = [
		"title" => $_POST['action'],
		"start" => $_POST['date']." ".$_POST['heure'],
		"type"  => $_POST['type'],
		"color" => $_POST['color'],
		"end"   => $_POST['date']." ".$_POST["end"]
	];
} else {
	$dataToAdd = [
		"title" => $_POST['action'],
		"start" => $_POST['date']." ".$_POST['heure'],
		"type"  => $_POST['type'],
	];
}

foreach ($data as $value) {
	if ( $value == $dataToAdd ) {
		echo "Event exists";
		exit;
	}
}

$data [] = ($dataToAdd);

file_put_contents($_POST['file'], json_encode($data));

echo "Event added.";

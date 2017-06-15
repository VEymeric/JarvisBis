<?php

$dataToAdd = [
	"title" => $_POST['action'],
	"start" => $_POST['date']." ".$_POST['heure'],
	"type"  => $_POST['type'],
];

$data = json_decode(file_get_contents("events.json", true), true);

foreach ($data as $value) {
	if ( $value == $dataToAdd ) {
		echo "Event exists";
		exit;
	}
}

$data [] = ($dataToAdd);

file_put_contents("events.json", json_encode($data));

echo "Event added.";

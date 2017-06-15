<?php

$data = [
	"title" => $_POST['action'],
	"start" => $_POST['date']." ".$_POST['heure'],
	"type"  => $_POST['type'],
];

$data = json_encode($data);

file_put_contents("tableOfValue.json", $data, FILE_APPEND);

echo "Event added.";
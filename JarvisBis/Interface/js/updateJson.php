<?php

$data = [
	"action" => $_POST['action'],
	"date" 	 => $_POST['date'],
	"heure"  => $_POST['heure'],
	"type"   => $_POST['type'],
];

$data = json_encode($data);

file_put_contents("tableOfValue.json", $data, FILE_APPEND);

echo "Event added.";
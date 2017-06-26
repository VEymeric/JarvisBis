<?php

$data = json_decode(file_get_contents($_POST['file'], true), true);

if (isset($_POST["end"])) {
	$dataToAdd = [
		"title" => $_POST['action'],
		"start" => $_POST['date']." ".$_POST['heure'],
		"type"  => $_POST['type'],
		"end" => $_POST['date']." ".$_POST["end"]
	];
} elseif (condition) {
	# code...
} {
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

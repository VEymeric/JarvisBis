<?php

$data = $_POST['json'];

var_dump($data);

file_put_contents("events.json", json_encode($data));

echo "Event deleted.";

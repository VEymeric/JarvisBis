<?php
$data = $_POST['json'];

file_put_contents($_POST['file'], json_encode($data));

echo "Event removed";
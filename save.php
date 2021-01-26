<?php 
$data = file_get_contents('php://input');
$fp = fopen('./results.json', 'w');
fwrite($fp, $data);
fclose($fp);
?>
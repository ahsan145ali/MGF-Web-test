<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept");

// include database connection
include '../config/database.php';
 
// delete message prompt will be here
 
// select all data
$query = "SELECT id, name, postcode FROM companies ORDER BY id DESC";
$stmt = $con->prepare($query);
$stmt->execute();
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;

?>


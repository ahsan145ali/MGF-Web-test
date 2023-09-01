<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
if($_POST){

// include database connection
include '../config/database.php';

try{

// insert query
$query = "INSERT INTO contacts SET id=:f_id, firstname=:f_firstname, lastname=:f_lastname , email=:f_email, company_id=:f_companyid";
// prepare query for execution
$stmt = $con->prepare($query);
// posted values
$f_id = $_POST['f_id'];
$f_firstname = $_POST['f_firstname'];
$f_lastname = $_POST['f_lastname'];
$f_email = $_POST['f_email'];
$f_companyid = $_POST['f_companyid'];
// bind the parameters
$stmt->bindParam(':f_id', $f_id);
$stmt->bindParam(':f_firstname', $f_firstname);
$stmt->bindParam(':f_lastname', $f_lastname);
$stmt->bindParam(':f_email', $f_email);
$stmt->bindParam(':f_companyid', $f_companyid);
// Execute the query

if($stmt->execute()){
    header("Content-type: application/json; charset=utf-8");
    echo json_encode(array('result'=>'success'));
}else{
    echo json_encode(array('result'=>'fail'));
}
}
// show error
catch(PDOException $exception){
die('ERROR: ' . $exception->getMessage());
}
}
?>
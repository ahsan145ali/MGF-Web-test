<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-type: application/json; charset=utf-8");

// check if form was submitted
if($_POST){
    include '../config/database.php';
    try{
        // write update query
        // in this case, it seemed like we have so many fields to pass and 
        // it is better to label them and not use question marks
        $query = "UPDATE contacts 
                    SET id=:f_id, firstname=:f_firstname, lastname=:f_lastname , email=:f_email, company_id=:f_companyid
                    WHERE id = :f_id";
 
        // prepare query for excecution
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
            echo json_encode(array('result'=>'success'));
        }else{
            echo json_encode(array('result'=>'fail'));
        }
         
    }
     
    // show errors
    catch(PDOException $exception){
        die('ERROR: ' . $exception->getMessage());
    }
}
?>
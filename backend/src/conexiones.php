<?php
error_reporting(0);
session_start();
try 
{ 
	$conn = new PDO("mysql:host=localhost;dbname=transf45_dashboard","transf45_dashboard","Hendrix1966;");
	$conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} 
catch(Exception $e) 
{  
	die( print_r( $e->getMessage() ) );  
};

?>
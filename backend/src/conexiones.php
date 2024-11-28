<?php
error_reporting(0);
session_start();
try 
{ 
	/* TODO: Cambiar host */
	$conn = new PDO("mysql:host=ftp.transferclick.cl;dbname=transf45_neidashop","transf45_neidashop","u=BW5.h][;wp");
	$conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} 
catch(Exception $e) 
{  
	die( print_r( $e->getMessage() ) );  
};

?>
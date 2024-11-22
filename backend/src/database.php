<?php
$DB_HOST = 'localhost';
$DB_USER = 'transf45_neidashop';
$DB_PASS = 'u=BW5.h][;wp';
$DB_NAME = 'transf45_neidashop';

try {
    $dsn = "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8";
    $pdo = new PDO($dsn, $DB_USER, $DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);

} catch (PDOException $e) {
    echo "Database connection failed: " . $e->getMessage();
    exit;
}
?>

<?php
include '../src/database.php';
$config = include '../src/config.php'; // Include the configuration file

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        try {

            $stmt = $pdo->prepare("INSERT INTO acerca (CORREO, FECHA) VALUES (?, NOW())");
            $stmt->execute([$email]);

            $to = $config['owner_email'];
            $subject = "Nuevo correo electrónico recibido";
            $emailMessage = "
                Un nuevo correo electrónico se ha registrado:
                Correo Electrónico: $email
            ";
            $headers = "From: {$config['from_email']}";

            if (mail($to, $subject, $emailMessage, $headers)) {
                echo json_encode(['status' => 'success', 'message' => 'Email submitted successfully and email notification sent.']);
            } else {
                echo json_encode(['status' => 'success', 'message' => 'Email submitted successfully, but email notification failed.']);
            }

        } catch (PDOException $e) {

            echo json_encode(['status' => 'error', 'message' => 'Failed to submit email: ' . $e->getMessage()]);
        }
    } else {

        echo json_encode(['status' => 'error', 'message' => 'Invalid email address.']);
    }
} else {

    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}
?>

<?php
include '../src/database.php';
$config = include '../src/config.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $asunto = filter_var($_POST['asunto'], FILTER_SANITIZE_STRING);
    $mensaje = filter_var($_POST['mensaje'], FILTER_SANITIZE_STRING);

    if (!empty($nombre) && !empty($email) && !empty($asunto) && !empty($mensaje)) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            try {
                $stmt = $pdo->prepare(
                    "INSERT INTO contacto (NOMBRES, EMAIL, ASUNTO, MENSAJE) VALUES (?, ?, ?, ?)"
                );
                $stmt->execute([$nombre, $email, $asunto, $mensaje]);

                // Email notification
                $to = $config['owner_email'];
                $subject = "Nuevo mensaje de contacto recibido";
                $emailMessage = "
                    Nombre: $nombre\n
                    Correo Electrónico: $email\n
                    Asunto: $asunto\n
                    Mensaje:\n$mensaje
                ";
                $headers = "From: {$config['from_email']}";

                if (mail($to, $subject, $emailMessage, $headers)) {
                    echo json_encode(['status' => 'success', 'message' => 'Message sent successfully and email notification sent.']);
                } else {
                    echo json_encode(['status' => 'success', 'message' => 'Message sent successfully, but email notification failed.']);
                }
            } catch (PDOException $e) {
                echo json_encode(['status' => 'error', 'message' => 'Failed to save data: ' . $e->getMessage()]);
            }
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Invalid email address.']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'All fields are required.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}
?>

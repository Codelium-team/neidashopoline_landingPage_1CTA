<?php
include '../src/database.php';

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

                echo json_encode(['status' => 'success', 'message' => 'Message sent successfully.']);
            } catch (PDOException $e) {
                echo json_encode(['status' => 'error', 'message' => 'Failed to send message: ' . $e->getMessage()]);
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

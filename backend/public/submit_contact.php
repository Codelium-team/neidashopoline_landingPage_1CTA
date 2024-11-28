<?php
include '../src/database.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit;
}

$response = ['status' => 'error', 'message' => 'An unknown error occurred.'];

try {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $asunto = filter_var($_POST['asunto'], FILTER_SANITIZE_STRING);
        $mensaje = filter_var($_POST['mensaje'], FILTER_SANITIZE_STRING);

        if (!empty($nombre) && !empty($email) && !empty($asunto) && !empty($mensaje)) {
            if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $stmt = $pdo->prepare(
                    "INSERT INTO contacto (NOMBRES, EMAIL, ASUNTO, MENSAJE) VALUES (?, ?, ?, ?)"
                );
                $stmt->execute([$nombre, $email, $asunto, $mensaje]);

                $response = ['status' => 'success', 'message' => 'Message saved successfully.'];
            } else {
                $response = ['status' => 'error', 'message' => 'Invalid email address.'];
            }
        } else {
            $response = ['status' => 'error', 'message' => 'All fields are required.'];
        }
    } else {
        $response = ['status' => 'error', 'message' => 'Invalid request method.'];
    }
} catch (PDOException $e) {
    $response = ['status' => 'error', 'message' => 'Failed to save data: ' . $e->getMessage()];
} catch (Exception $e) {
    $response = ['status' => 'error', 'message' => 'An unexpected error occurred: ' . $e->getMessage()];
}

echo json_encode($response);
exit;
?>

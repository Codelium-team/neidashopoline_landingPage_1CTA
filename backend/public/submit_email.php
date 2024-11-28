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

    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        try {

            $stmt = $pdo->prepare("INSERT INTO acerca (CORREO, FECHA) VALUES (?, NOW())");
            $stmt->execute([$email]);

            echo json_encode(['status' => 'success', 'message' => 'Email submitted successfully.']);
        } catch (PDOException $e) {

            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Failed to submit email: ' . $e->getMessage()]);
        }
    } else {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Invalid email address.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}
?>

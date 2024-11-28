<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

$file = 'urls.json';
$urls = file_exists($file) ? json_decode(file_get_contents($file), true) : [];


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $url = $input['url'] ?? null;

    if ($url && preg_match('/\/p\/([a-zA-Z0-9_-]+)/', $url, $matches)) {
        $id = $matches[1];
        $embedUrl = "https://www.instagram.com/p/$id/";

        // Add URL if it's new
        if (!in_array($embedUrl, $urls)) {
            $urls[] = $embedUrl;
            file_put_contents($file, json_encode($urls, JSON_PRETTY_PRINT));
        }
        echo json_encode(["success" => true, "url" => $embedUrl]);
        exit;
    } else {
        echo json_encode(["error" => "Invalid URL"]);
        http_response_code(400);
        exit;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode($urls);
    exit;
}

http_response_code(405);
echo json_encode(["error" => "Method not allowed"]);
exit;

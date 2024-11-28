<?php
$file = 'urls.json';
$urls = [];
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['url'])) {
    $url = $_POST['url'];

    if (preg_match('/\/p\/([a-zA-Z0-9_-]+)/', $url, $matches)) {
        $id = $matches[1];
        $embedUrl = "https://www.instagram.com/p/$id/";

        $urls = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

        if (!in_array($embedUrl, $urls)) {
            $urls[] = $embedUrl;
            file_put_contents($file, json_encode($urls, JSON_PRETTY_PRINT));
        }
    } else {
        echo "ID NO VALIDO";
    }
}

$urls = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TEST</title>
</head>
<body>
    <h1>Agregar URL de Instagram</h1>
    <form method="POST" action="">
        <input type="url" name="url" placeholder="Ingrese la URL de Instagram" required>
        <button type="submit">Guardar</button>
    </form>

    <h2>URLs Guardadas</h2>
    <div>
        <?php if (!empty($urls)): ?>
            <?php foreach ($urls as $url): ?>
                <blockquote class="instagram-media" 
                            data-instgrm-captioned 
                            data-instgrm-permalink="<?= htmlspecialchars($url) ?>" 
                            data-instgrm-version="14"></blockquote>
            <?php endforeach; ?>
        <?php else: ?>
            <p>No hay URLs guardadas.</p>
        <?php endif; ?>
    </div>
 <script async src="//www.instagram.com/embed.js"></script>
</body>
</html>

<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" media="screen" href="assets/CSS/app.css">
    <title>İmage Loader</title>
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- jQuery Validate -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js"></script>
</head>
<body>
<div class="body-background">
    <div class="column">
        <form method="post" action="hello" enctype="multipart/form-data">
            <h2>Sunucuya Dosya Yükle</h2>
            <input type="file" name="image" id="image">
            <button class="send-btn" type="submit" value="Upload">Sunucuya Gonder</button>
        </form>
    </div>
</div>

</body>

</html>
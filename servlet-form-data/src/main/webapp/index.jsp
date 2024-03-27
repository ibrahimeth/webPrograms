<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" media="screen" href="assets/CSS/app.css">
    <title>Servlet-Form Data</title>
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- jQuery Validate -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js"></script>
</head>
<body>
<div class="body-background">
    <div class="column" style="justify-content: center;align-items: center;">
        <h2>User Register Form</h2>
        <form action="hello" id="register_form" method="POST">
            <table>
                <tr>
                    <td><div class="text">Name :</div></td>
                    <td>
                        <input type="text" name="name" id="name" required>
                    </td>
                </tr>
                <tr>
                    <td><div class="text">Surname :</div></td>
                    <td>
                        <input type="text" name="surname" id="surname" required>
                    </td>
                </tr>
                <tr>
                    <td><div class="text">Mail :</div></td>
                    <td>
                        <input type="email" name="email" id="email" required>
                    </td>
                </tr>
                <tr>
                    <td><div class="text">Password :</div></td>
                    <td>
                        <input type="password" name="password" id="password" required>
                    </td>
                </tr>
            </table>
            <tr>
                <button class= "send-btn" type="submit" >Login</button>
            </tr>
        </form>
    </div>
</div>
</body>
</html>
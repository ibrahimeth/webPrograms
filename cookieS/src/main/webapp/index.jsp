<%@ page import="jakarta.servlet.http.Cookie" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/main.css">
    <title>Login</title>
</head>
<body>
<%
    String username = "";
    String password = "" ;
    String cBox = "";
    Cookie[] cookie = request.getCookies();
    if(cookie != null){
        for (Cookie value : cookie) {
            if (value.getName().equals("username")){
                username = value.getValue();
            }
            else if(value.getName().equals("password")){
                password = value.getValue();
            }
            else if(value.getName().equals("remember") && value.getValue().equals("true")){
                cBox = "checked";
            }
        }
    }
%>
<div class="row">
    <div class="login column">
        <h1></h1>
        <div class="column">
            <h2>Giriş Yap!</h2>
            <form action="cookieS_war_exploded" id="login_form" method="post">
                <input type="text" name="username"  placeholder="username" id="username" value="<%=username%>">
                <input type="password" name="password" placeholder="password" id="password" value="<%=password%>">
                <div class="row-inside">
                    <input type="checkbox" id="remember" name="remember" <%=cBox%> style="display: inline-block; width: 60px;  ">
                    <h5>Beni Hatırla</h5>
                </div>
                <div class="row-inside" style=" justify-content: center;">
                    <button CLASS="loginBtn" type="submit" style="padding: 10px; width: 200px; height: 30px;text-decoration: none; color: white;">Giriş Yap</button>
                </div>

            </form>
        </div>
        <h1>FezaiTech</h1>
    </div>
    <div class="bg"></div>
</div>

</body>
</html>
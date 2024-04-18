<%--
  Created by IntelliJ IDEA.
  User: ibrah
  Date: 18.04.2024
  Time: 21:43
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AnaSayfa</title>

    <link rel="stylesheet" href="assets/main.css">
</head>
<body style="background-color: #11006A;">
<%
    String username = (String) request.getAttribute("username");
    String password =  (String) request.getAttribute("password");

%>
<center>
    <div class="main-frame">
        <div class="column" style="justify-content: center;">
            <h3>Merhaba <%=username%> HOŞGELDİNİZ</h3>
            <div class="row" style="height: auto; margin-left: 20px; margin-right: 20px;">
                <H4>Şifreniz :</H4>
                <H4><%=password%></H4>
            </div>
            <a href="/cookieS_war_exploded/" style="text-decoration: none; color: white;"><div class="logout">Çıkış Yap</div></a>
        </div>
    </div>
</center>
</body>
</html>

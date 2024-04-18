package com.example.cookies;

import java.io.*;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet(name = "helloServlet", value = "/cookieS_war_exploded")
public class HelloServlet extends HttpServlet {
    private String message;

    public void init() {
        message = "Hello World!";
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.setContentType("text/html");
        String username =  request.getParameter("username");
        String password = request.getParameter("password");
        String remember = request.getParameter("remember");

        if (remember != null && remember.equals("on")) {
            Cookie CKuser = new Cookie("username", username);
            Cookie CKpassword = new Cookie("password", password);
            Cookie cookie = new Cookie("remember", "true");
            cookie.setMaxAge(30 * 24 * 60 * 60); // 30 gün
            response.addCookie(cookie);
            response.addCookie(CKuser);
            response.addCookie(CKpassword);
        }else {
            Cookie[] cookies = request.getCookies();
            if (cookies != null) {
                for (Cookie cookie : cookies) {
                    cookie.setMaxAge(0);
                    response.addCookie(cookie);
                }
            }
        }
        request.setAttribute("username", username);
        request.setAttribute("password", password);
        request.getRequestDispatcher("anasayfa.jsp").forward(request, response);
    }
    public void destroy() {
    }
}
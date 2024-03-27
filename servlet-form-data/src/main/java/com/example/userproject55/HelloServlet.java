package com.example.userproject55;
import java.io.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
@WebServlet(name = "helloServlet", urlPatterns = {"/hello"})
public class HelloServlet extends HttpServlet {
    private String message;
    public void init() {
        message = "Hello World!";
    }
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

        String firstname = request.getParameter("name");
        String surmane = request.getParameter("surname");
        String email = request.getParameter("email");
        String password = request.getParameter("password");

        PrintWriter out = response.getWriter();
        response.setContentType("text/html");

        out.println("<html><body>");
        out.println("<h1>" + firstname + "</h1>");
        out.println("<h1>" + surmane + "</h1>");
        out.println("<h1>" + email + "</h1>");
        out.println("<h1>" + password + "</h1>");
        response.getWriter().println("<script>alert('Tarayıcının modeli: " + request.getHeader("User-Agent") + "');</script>");
        out.println("</body></html>");
    }
    public void destroy() {
    }
}
package com.example.fileloader;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet(name = "helloServlet", value = "/hello")
@MultipartConfig
public class HelloServlet extends HttpServlet {
    private String message;

    public void init() {
        message = "Hello World!";
    }
    private static final long serialVersionUID = 1L;
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html;charset=UTF-8");

        String uploadPath = getServletContext().getRealPath("") + File.separator + "uploads";

        File uploadDir = new File(uploadPath);
        if (!uploadDir.exists()) {
            uploadDir.mkdir();
        }

        PrintWriter out = response.getWriter();

        Part part = request.getPart("image");

        String fileName = part.getSubmittedFileName();

        String savePath = uploadPath + File.separator + fileName;
        part.write(savePath);

        out.println("<h3>Dosya başarıyla yüklendi!</h3>");
        out.println("<p>Yüklenen Dosya: " + fileName + "</p>");
        out.println("<p>Yükleme Konumu: " + savePath + "</p>");
    }
    public void destroy() {
    }
}
$(document).ready(function() {
    $('#register_form').validate({
        rules: {
            name:{
                required : true,
                minlength: 2
            },
            surname:{
                required : true,
                minlength: 2
            },
            email:{
                required: true,
                email: true 
            },
            password:{
                minlength: 4,
                maxlength: 6
            },
        },
        messages: {
            name: {
                required: "Name is required",
                minlength: "Adınız en az 2 harften oluşmalıdır."
            },
            surname : {
                required: "Surname is required",
                minlength: "Soyadınız en az 2 harften oluşmalıdır.",
            },   
            email: {
                required: "Mail is required",
                email: "Geçerli bir e-posta adresi giriniz."
            },      
            password: {
                equalTo : "şifreler uyuşmuyor.",
                maxlength : "En fazla 6 karakterden oluşmalıdı.",
                minlength : "En az 4 karakterden oluşmalıdır.",
                required: "Password is required"
            },
        },
        submitHandler: function(form) {
            alert('Form gönderildi!');
            var confirmation = confirm("Girdiğiniz bilgilerin doğru olduğundan emin misiniz?\n" +
            "Ad: " + $("#name").val() + "\n" +
            "Soyad: " + $("#surname").val() + "\n" +
            "E-posta: " + $("#email").val() + "\n" +
            "Onaylamak için tamam butonuna basın.");
            form.submit();
            if (confirmation) {
                window.location.href = "hello";
            }
        }
    });
});
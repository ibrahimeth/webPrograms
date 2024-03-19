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
            phonenumber:{
                required : true,
                minlength: 10,
                maxlength: 13,
            },
            email:{
                required: true,
                email: true 
            },
            password:{
                minlength: 4,
                maxlength: 6
            },
            repassword:{
                required: true,
                minlength: 4,
                maxlength: 6,
                equalTo: "#password"
            }
        },
        messages: {
            name: {
                required: "ad zorunludur.",
                minlength: "Adınız en az 2 harften oluşmalıdır."
            },
            surname : {
                required: "Soyadı zorunludur.",
                minlength: "Soyadınız en az 2 harften oluşmalıdır.",
            },   
            email: {
                required: "E-posta adresi zorunludur.",
                email: "Geçerli bir e-posta adresi giriniz."
            },      
            phonenumber : {
                required : "telefon numarası zorunludur.",
            },   
            password: {
                equalTo : "şifreler uyuşmuyor.",
                maxlength : "En fazla 6 karakterden oluşmalıdı.",
                minlength : "En az 4 karakterden oluşmalıdır.",
                required: "Şifre zorunludur."
            },
            repassword: {
                required: "Şifre tekrarı zorunludur.",
                maxlength : "En fazla 6 karakterden oluşmalıdı.",
                minlength : "En az 4 karakterden oluşmalıdır.",
                equalTo: "Şifreler uyuşmuyor." 
            }
        },
        submitHandler: function(form) {
            alert('Form gönderildi!');
            var confirmation = confirm("Girdiğiniz bilgilerin doğru olduğundan emin misiniz?\n" +
            "Ad: " + $("#name").val() + "\n" +
            "Soyad: " + $("#surname").val() + "\n" +
            "E-posta: " + $("#email").val() + "\n" +
            "Telefon: " + $("#phonenumber").val() + "\n" +
            "Onaylamak için tamam butonuna basın.");
            form.submit();
            if (confirmation) {
                window.location.href = "sayfa2.html";
            }
        }
    });
});
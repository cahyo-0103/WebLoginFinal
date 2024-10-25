$(document).ready(function() {
    $('#log1').submit(function(event) {
        event.preventDefault();
        
        var username = $('#username').val();
        var password = $('#password').val();
        
        if (username === "admin123" && password === "admin123") {
            $('#loginMessage1').text("Login Verifikasi").css("color", "green");

            // Redirect ke halaman berikutnya setelah login berhasil
            setTimeout(function() {
                window.location.href = "verif.html"; // Ganti 'dashboard.html' dengan halaman tujuan
            }, 1000); // 1 detik delay sebelum pindah halaman
        } else {
            $('#loginMessage1').text("Username/Password Salah");
        }
    });
});

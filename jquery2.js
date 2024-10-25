$(document).ready(function() {
    $('#log1').submit(function(event) {
        event.preventDefault();
        
        var username = $('#username').val();
        var password = $('#password').val();
        
        if (username === "admin123" && password === "admin123") {
            $('#loginMessage1').text("Login Sukses!").css("color", "green");

            // Redirect ke halaman berikutnya setelah login berhasil
            setTimeout(function() {
                window.location.href = "selamat.html"; // Ganti 'dashboard.html' dengan halaman tujuan
            }, 1000); //  detik delay sebelum pindah halaman
        } else {
            $('#loginMessage1').text("PENYUSUP");
            
            setTimeout(function() {
                window.location.href = "penyusup.html"; // Ganti 'dashboard.html' dengan halaman tujuan
            }, 1000); // 2 detik delay sebelum pindah halaman
        }
    });
});

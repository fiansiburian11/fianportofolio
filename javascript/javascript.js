window.onload = function () {
  var userConsent = confirm("Web ini lebih ideal ditampilkan dalam Desktop");
  if (userConsent) {
    document.getElementById("content").style.display = "block"; // Tampilkan konten
  } else {
    document.body.innerHTML = "<h2>Anda telah menolak untuk melanjutkan.</h2>"; // Tampilkan pesan penolakan
  }
};

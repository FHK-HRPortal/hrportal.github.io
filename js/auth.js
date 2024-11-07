const users = {
  "HRD": { password: "hrdpass", role: "admin" },
  "IT": { password: "itpass", role: "admin" },
  "Finance": { password: "financepass", role: "user" },
  "FB Service": { password: "fbservicepass", role: "user" },
  "FB Product": { password: "fbproductpass", role: "user" },
  "Front Office": { password: "frontofficepass", role: "user" },
  "Housekeeping": { password: "housekeepingpass", role: "user" },
  "Engineering": { password: "engineeringpass", role: "user" },
  "Sales": { password: "salespass", role: "user" },
};

document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  const errorMessage = document.getElementById("error-message");

  if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();

      // Ambil nilai dari form
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;

      // Reset pesan error setiap kali form di-submit
      errorMessage.innerText = "";

      // Validasi jika username atau password kosong
      if (!username || !password) {
        errorMessage.innerText = "Username dan password tidak boleh kosong.";
        return;
      }

      // Cek apakah user ada dalam daftar users
      const user = users[username];

      // Validasi password
      if (user && user.password === password) {
        localStorage.setItem("loggedInUser", username);
        localStorage.setItem("role", user.role);

     // Tampilkan pop-up selamat datang
     showLoginPopup();

     // Alihkan ke halaman utama setelah beberapa detik
     setTimeout(() => {
       window.location.href = "main.html";
     }, 1000);
   } else {
     errorMessage.innerText = "Username atau password salah.";
   }
 });
}
});

function showLoginPopup() {
const popup = document.getElementById("loginPopup");
popup.classList.add("active");
}



// Fungsi untuk logout
function logout() {
  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("role");
  window.location.href = "index.html"; // arahkan ke halaman login
}

// Mengecek jika pengguna sudah login dan langsung arahkan ke main jika sudah
function checkLoginStatus() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    window.location.href = "main.html";
  }
}

// Panggil checkLoginStatus untuk halaman login
if (window.location.pathname.includes("index.html")) {
  checkLoginStatus();
}

// Fungsi toggle password visibility
document.addEventListener("DOMContentLoaded", function () {
  const passwordField = document.getElementById("password");
  const icon = document.getElementById("togglePassword").querySelector("i");

  // Pastikan ikon mata tertutup dan tipe input password adalah 'password' saat halaman dimuat
  passwordField.setAttribute("type", "password");
  icon.classList.add("fa-eye-slash"); // Mata tertutup secara default
  icon.classList.remove("fa-eye");
});

document.getElementById("togglePassword").addEventListener("click", function () {
  const passwordField = document.getElementById("password");
  const icon = this.querySelector("i");

  // Toggle antara type password dan text
  const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);

  // Ubah ikon sesuai tipe input
  if (type === "password") {
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
});

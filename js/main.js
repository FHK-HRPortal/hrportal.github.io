// Objek untuk menyimpan link Google Drive setiap departemen
const departmentLinks = {
  "HRD": "https://drive.google.com/drive/folders/1A2XRgK9KJ-B9E98giS6RDg7kpSoz7Ow_?usp=sharing",
  "Finance": "https://drive.google.com/drive/folders/17MXvie8jYMlnmYXzb5mbVFtUZ0eWCVNm?usp=sharing",
  "FB Service": "https://drive.google.com/drive/folders/1vY167wDTy5MxgW_zqrb50g69RvglVgLR?usp=sharing",
  "FB Product": "https://drive.google.com/drive/folders/1Iez9FCmMw6l7PtH1V7SlniVBK9VaupDB?usp=sharing",
  "Front Office": "https://drive.google.com/drive/folders/1MmFH6xxV_DLqSPdaMg2M-MhFX71trEzK?usp=sharing",
  "Housekeeping": "https://drive.google.com/drive/folders/1-nL1Wk_GANotm47Hj4UL3KjHl8vXeCcO?usp=sharing",
  "Engineering": "https://drive.google.com/link-to-engineering",
  "Sales": "https://drive.google.com/link-to-sales",
  "IT": "https://www.archipelagohotels.com/it-portal/#/"
};

// Objek untuk menyimpan link gambar setiap departemen
const departmentImages = {
  "HRD": "images/hrd.jpg",
  "Finance": "images/finance.jpg",
  "FB Service": "images/fb-service.jpg",
  "FB Product": "images/fb-product.jpg",
  "Front Office": "images/front-office.jpg",
  "Housekeeping": "images/housekeeping.jpg",
  "Engineering": "images/engineering.jpg",
  "Sales": "images/sales.jpg",
  "IT": "images/it.jpg"
};

let currentDepartment = ""; // Variabel untuk menyimpan departemen yang sedang dipilih

// Fungsi untuk menampilkan modal gambar
function openModal(department) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = departmentImages[department]; // Set gambar yang sesuai
  modal.style.display = "flex";
  currentDepartment = department;
}

// Fungsi untuk menutup modal gambar
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Fungsi untuk melanjutkan ke Google Drive
function openGoogleDrive() {
  closeModal();
  const link = departmentLinks[currentDepartment];
  if (link) {
    window.location.href = link;
  } else {
    alert("Link untuk departemen ini tidak tersedia.");
  }
}

window.onload = function() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const role = localStorage.getItem("role");

  if (!loggedInUser || !role) {
    window.location.href = "index.html";
    return;
  }

  // Pembatasan akses hanya jika halaman adalah Golden Rules
  if (window.location.pathname.includes("golden-rules.html")) {
    document.querySelectorAll(".menu-item").forEach(item => {
      const department = item.getAttribute("data-department");

      if (role === "user" && loggedInUser !== department) {
        item.style.pointerEvents = "none"; // Nonaktifkan klik
        item.style.color = "grey"; // Ubah warna teks menjadi abu-abu
      } else {
        item.addEventListener("click", function() {
          openModal(department); // Tampilkan modal gambar saat diklik
        });
      }
    });
  }
};

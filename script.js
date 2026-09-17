// =========================================================
// SISTEM PILIH HARI SERAGAM
// =========================================================

const dayButtons = document.querySelectorAll(".day-button");
const uniformInfos = document.querySelectorAll(".uniform-info");

dayButtons.forEach((button) => {

    button.addEventListener("click", function () {

        // Ambil nama hari
        const selectedDay = this.dataset.day;


        // -----------------------------
        // Hapus active tombol
        // -----------------------------

        dayButtons.forEach((btn) => {
            btn.classList.remove("active");
        });


        // -----------------------------
        // Aktifkan tombol yang diklik
        // -----------------------------

        this.classList.add("active");


        // -----------------------------
        // Sembunyikan semua detail
        // -----------------------------

        uniformInfos.forEach((info) => {
            info.classList.remove("active");
        });


        // -----------------------------
        // Tampilkan detail hari
        // -----------------------------

        const selectedInfo = document.getElementById(selectedDay);

        if (selectedInfo) {
            selectedInfo.classList.add("active");
        }

    });

});
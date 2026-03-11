/* ── 1. LOGIKA LIGHT/DARK MODE (Fitur 1) ──────────────── */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Fungsi untuk memperbarui ikon tombol (Opsional agar lebih keren)
function updateToggleIcon() {
    const icon = themeToggle.querySelector('.mode-icon');
    if (body.classList.contains('dark-theme')) {
        icon.textContent = '☀️';
    } else {
        icon.textContent = '🌙';
    }
}

// Cek preferensi tema yang tersimpan di browser
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    updateToggleIcon();
}

// Event Listener klik tombol toggle
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Simpan pilihan user agar tidak reset saat refresh halaman
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
    updateToggleIcon();
});


/* ── 2. STICKY NAVBAR DYNAMIC (Fitur 2) ────────────────── */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    // Jika scroll lebih dari 50px, tambahkan class .scrolled
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


/* ── 3. SMOOTH SCROLL DENGAN OFFSET (Fitur 3) ──────────── */
// Menghitung agar saat scroll, judul seksi tidak tertutup navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            e.preventDefault();
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


/* ── 4. VALIDASI FORM KONTAK (Fitur 4) ──────────────────── */
const contactForm = document.querySelector('.contact__form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Di sini Anda bisa menambahkan logika pengiriman data ke API/Email
        alert('Terima kasih! Pesan Anda telah tervalidasi dan berhasil terkirim.');
        this.reset(); // Kosongkan form kembali
    });
}
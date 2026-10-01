document.getElementById('year').textContent = new Date().getFullYear();

// Tambahkan class untuk efek masuk saat elemen section terlihat di layar.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.content-section, .menu-card').forEach(el => observer.observe(el));

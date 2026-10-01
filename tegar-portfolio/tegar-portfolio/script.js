document.getElementById('year').textContent = new Date().getFullYear();

// Tambahkan class untuk efek masuk saat elemen section terlihat di layar.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.content-section, .menu-card').forEach(el => observer.observe(el));

// ========== CERTIFICATE MODAL ==========
const certModal = document.getElementById('cert-modal');
const certModalImage = document.getElementById('cert-image');
const certModalClose = document.querySelector('.cert-modal-close');
const certificateItems = document.querySelectorAll('.certificate-item');

// Mapping data sertifikat ke gambar
const certImages = {
  cert1: 'assets/certificates/cert1.png',
  cert2: 'assets/certificates/cert2.png',
  cert3: 'assets/certificates/cert3.png',
  cert4: 'assets/certificates/cert4.png'
};

// Buka modal saat item sertifikat diklik
certificateItems.forEach(item => {
  item.addEventListener('click', () => {
    const certId = item.getAttribute('data-cert');
    const imagePath = certImages[certId];
    
    if (imagePath) {
      certModalImage.src = imagePath;
      certModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Tutup modal saat tombol close diklik
certModalClose.addEventListener('click', closeCertModal);

// Tutup modal saat overlay diklik
document.querySelector('.cert-modal-overlay').addEventListener('click', closeCertModal);

// Tutup modal saat tekan tombol ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && certModal.classList.contains('active')) {
    closeCertModal();
  }
});

function closeCertModal() {
  certModal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// ========== PROJECT MODAL ==========
const projectModal = document.getElementById('project-modal');
const projectModalImage = document.getElementById('project-image');
const projectModalClose = document.querySelector('.project-modal-close');
const projectCards = document.querySelectorAll('.project-card[data-project]');

// Mapping data project ke gambar
const projectImages = {
  proj2: 'assets/projects/project2.png'
};

// Buka modal saat project card diklik
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const projectId = card.getAttribute('data-project');
    const imagePath = projectImages[projectId];
    
    if (imagePath) {
      projectModalImage.src = imagePath;
      projectModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Tutup modal saat tombol close diklik
projectModalClose.addEventListener('click', closeProjectModal);

// Tutup modal saat overlay diklik
document.querySelector('.project-modal-overlay').addEventListener('click', closeProjectModal);

// Tutup modal saat tekan tombol ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && projectModal.classList.contains('active')) {
    closeProjectModal();
  }
});

function closeProjectModal() {
  projectModal.classList.remove('active');
  document.body.style.overflow = 'auto';
}
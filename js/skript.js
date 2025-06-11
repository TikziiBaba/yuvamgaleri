document.addEventListener('DOMContentLoaded', () => {
    // Tüm galeri resimlerini seçiyoruz
    const galleryImages = document.querySelectorAll('.gallery-item img');
    
    galleryImages.forEach(img => {
        // Her resme tıklama olayı ekliyoruz
        img.addEventListener('click', () => {
            const imgSrc = img.src;
            const altText = img.alt;

            // Lightbox elementi oluşturma
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="close-btn">&times;</span>
                    <img src="${imgSrc}" alt="${altText}">
                </div>
            `;
            document.body.appendChild(lightbox); // Lightbox'ı body'ye ekle

            // Kapatma düğmesi işlevi
            const closeBtn = lightbox.querySelector('.close-btn');
            closeBtn.addEventListener('click', () => {
                // Kapanış animasyonu ekle
                lightbox.style.animation = 'fadeOut 0.3s forwards';
                lightbox.querySelector('.lightbox-content').style.animation = 'popOut 0.3s forwards';
                
                // Animasyon bittikten sonra lightbox'ı kaldır
                lightbox.addEventListener('animationend', () => {
                    document.body.removeChild(lightbox);
                }, { once: true }); // Olay dinleyicisini bir kez çalıştırmak için
            });

            // Lightbox'ın dışına tıklayınca kapatma
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) { 
                    // Kapanış animasyonu ekle
                    lightbox.style.animation = 'fadeOut 0.3s forwards';
                    lightbox.querySelector('.lightbox-content').style.animation = 'popOut 0.3s forwards';
                    
                    lightbox.addEventListener('animationend', () => {
                        document.body.removeChild(lightbox);
                    }, { once: true });
                }
            });
        });
    });
});
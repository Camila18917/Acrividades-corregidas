
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('anuncio');
    const closePopup = document.getElementById('chauanuncio');

    setTimeout(() => {
        popup.style.display = 'block';
    }, 10000);

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

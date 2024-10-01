window.addEventListener('load', function() { 

    setTimeout(function() {
        document.getElementById('loaderContainer').style.display = 'none';
        document.getElementById('Bienvenidos').style.display = 'block'; 
        document.body.style.overflow = 'auto';
    }, 1000); 
});

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('cartel');
    const showContentButton = document.getElementById('Button');
    const content = document.getElementById('content');

    showContentButton.addEventListener('click', () => {
        overlay.style.display = 'none';
        content.style.display = 'block'; 
    })
})

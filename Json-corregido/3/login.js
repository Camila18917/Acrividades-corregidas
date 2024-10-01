document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    fetch('usuarios.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(usuarios => {
            const usuarioEncontrado = usuarios.find(user => user.usuario === usuario && user.contrasena === contrasena);
            const mensaje = document.getElementById('mensaje');

            if (usuarioEncontrado) {
                if (usuarioEncontrado.rol === 'usuario') {
                    window.location.href = 'user.html';
                }
                 if (usuarioEncontrado.rol === 'admin'){
                    window.location.href = 'admin.html';
                } 
                if (usuarioEncontrado.rol === 'creador'){
                    window.location.href = 'creador.html';
                } 
            } else {
                mensaje.textContent = 'Usuario o contraseña incorrectos';
                mensaje.style.color = 'red';
            }
        })
});

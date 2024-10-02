function comprobarFecha() {
    event.preventDefault();
    const fechaSeleccionada = new Date(document.getElementById('fecha').value);
    const fechaActual = new Date();
    // Ajustamos la fecha actual a solo el día (sin hora)
    fechaActual.setHours(0, 0, 0, 0);

    const resultadoDiv = document.getElementById('resultado');

    if (!document.getElementById('fecha').value) {
        resultadoDiv.textContent = "Por favor, selecciona una fecha.";
        resultadoDiv.style.color = "orange";
    } else if (fechaSeleccionada < fechaActual) {
        resultadoDiv.textContent = "La fecha seleccionada ya ha pasado.";
        resultadoDiv.style.color = "red";
    } else if (fechaSeleccionada.getTime() === fechaActual.getTime()) {
        resultadoDiv.textContent = "La fecha seleccionada es hoy.";
        resultadoDiv.style.color = "blue";
    } else {
        resultadoDiv.textContent = "La fecha seleccionada está disponible.";
        resultadoDiv.style.color = "green";
    }
}
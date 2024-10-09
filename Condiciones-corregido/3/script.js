function comprobarfecha() {
    event.preventDefault(); 
    const fechaSeleccionada = new Date(document.getElementById('fecha').value + "T00:00:00");
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0); 
    const resultadoDiv = document.getElementById('resultado');
    console.log(fechaActual);
    console.log(fechaSeleccionada);
    if (!document.getElementById('fecha').value) {
        resultadoDiv.textContent = "Por favor, selecciona una fecha.";
        resultadoDiv.style.color = "rgb(136, 120, 105)";
    } else if (fechaSeleccionada < fechaActual) {
        resultadoDiv.textContent = "La fecha seleccionada ya ha pasado.";
        resultadoDiv.style.color = "red";
    } else if (fechaSeleccionada > fechaActual) {
        resultadoDiv.textContent = "La fecha seleccionada está disponible.";
        resultadoDiv.style.color = "green";
    } else {
        resultadoDiv.textContent = "La fecha seleccionada es hoy.";
        resultadoDiv.style.color = "blue";
    }
}

function comprobarFecha() {
  var fechaIda = document.getElementById("empiezo").value;
  var fechaVuelta = document.getElementById("termino").value;
  var fechaFormat = new Date (fechaIda + fechaIda + "T00:00:00")
  if (fechaVuelta>fechaIda){
      alert ("¡¡Comencemos a descansar!! :)");
      location.href = "https://www.turismocity.com.ar/paquetes-turisticos"     
  }
  else {alert ("No existe esa fecha :(")
  }
}
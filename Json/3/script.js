function comprobar() {
    var usuario = document.getElementById("nombre").value;
    var pass = document.getElementById("contraseña").value;

    if(usuario=="sofi23" && pass=="12345") {
        alert("Usuario correcto, Iniciando secion")
        window.location="user.html"
    }
   
    else if(usuario=="tomatechan" && pass=="12345") {
        alert("Usuario correcto, Iniciando modo administrador ")
        window.location="admi.html"
    }

    else if(usuario=="facuisec" && pass=="12345") {
        alert("Usuario correcto, Iniciando modo Creador ")
        window.location="creador.html"
    }

    else{
        alert("Usuario Incorrecto");
    }

}

function validarFormulario() {
  const checkbox = document.getElementById('aceptar');
  checkboxError.textContent = '';
  let valido = true;

  if (!checkbox.checked) {
      checkboxError.textContent = 'Falta este campo';
      valido = false;
  }

  if (valido) {
      document.getElementById('miFormulario').action = '../2/home.html';
      return true;  
  }
  return false;   
}
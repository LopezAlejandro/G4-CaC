function validateForm() {

  const btnEnviar = document.getElementById('btn-submit');

  const validación = (e) => {
    e.preventDefault();
    
    const nombreDeUsuario = document.getElementById('nombre');
    const direcciónEmail = document.getElementById('email');
    if (nombre.value === "") {
      alert("Por favor, escribe tu nombre de usuario.");
      nombre.focus();
      return false;
    }
      
    if (email.value === "") {
      alert("Por favor, escribe tu correo electrónico");
      email.focus();
      return false;
    }
  
    if (!emailVálido(email.value)) {
      alert("Por favor, escribe un correo electrónico válido");
      email.focus();
      return false;
    }
    
    return true; //Se pueden enviar los datos del formulario al servidor
  }
  
  const emailVálido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  submitBtn.addEventListener('click', validate);

  
  /* const form = document.querySelector("#cto-frm");
  
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const direccion = document.querySelector("#direccion").value;

    if (!nombre || !email || !direccion) {
      alert("Por favor rellene todos los campos.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Por favor ingrese un email válido.");
      return;
    }

    /*form.submit();
  }); */
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

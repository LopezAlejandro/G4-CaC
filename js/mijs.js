function validateForm() {
  const form = document.querySelector("#cto-frm");
  const submitBtn = document.querySelector("#btn-submit");

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

    form.submit();
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

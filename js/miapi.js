window.onload = function () {
  randomUser().catch((err) => {
    console.log(err);
  });
};

const randomUser = async () => {
  const respuesta = await fetch("https://randomuser.me/api/?results=3");
  const data = await respuesta.json();
  muestraRandomUser(data.results);
};

muestraRandomUser = (usuario) => {
  var contenido = document.getElementById("clientes");
  usuario.forEach((cliente) => {
    //console.log(cliente);
    contenido.innerHTML = `
      ${contenido.innerHTML}
        <div class="cliente cliente-card">
            <img src="${cliente.picture.large}"
            alt="${cliente.name.first}"
            class="cliente-pic"
            />
            <h3 class="nombre-cliente">${cliente.name.first} ${cliente.name.last}</h3>
            <p class="comentario-cliente">${cliente.location.city} - ${cliente.location.state}</p>
            <h4 class="comentario-cliente">${cliente.location.country}</h4>
          </div>
       `;
  });
  };
  
const $d = document;
const $selectProvincias = $d.getElementById("selectProvincias");

function provincia() {
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        let $options = `<option value="_Provincia_">_Provincia_</option>`;

        json.provincias.forEach(el => $options += `<option value="${el.nombre}">${el.nombre}</option>`);

        $selectProvincias.innerHTML = $options;
    })
    .catch(error => {
        let message = error.statusText || "Ocurrió un error";

        $selectProvincias.nextElementSibling.innerHTML = `Error: ${error.status}: ${message}`;
    })
}

$d.addEventListener("DOMContentLoaded", provincia)


window.onload = function () {
  randomUser().catch((err) => {
    console.log(err);
  });
};

// Acceso a la api de usuarios aleatorios //

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

// Acceso a la Api de listado de provincias Argentinas //

const sPcias = document.getElementById("selectProvincias");

const provincia = async () => {
  try {
    const pciar = await fetch(
      "https://apis.datos.gob.ar/georef/api/provincias"
    );
    if (!pciar.ok) {
      throw new Error(`HTTP error! status: ${pciar.status}`);
    }
    const res = await pciar.json();
    cargaSelect(res.provincias);
  } catch (error) {
    console.log(error);
  }
};

cargaSelect = (pcias) => {
  let $options = `<option hidden selected value="">_Provincia_</option>`;
  pcias.forEach(
    (el) => ($options += `<option value="${el.nombre}">${el.nombre}</option>`)
  );
  sPcias.innerHTML = $options;

  // Ordeno alfabeticamente el arreglo de las provincias //

  Array.from(sPcias.options)
    .sort((a, b) => (a.text.toLowerCase() > b.text.toLowerCase() ? 1 : -1))
    .forEach((el) => sPcias.add(el));
};
document.addEventListener("DOMContentLoaded", provincia);

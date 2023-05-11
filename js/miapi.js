window.onload = function () {
  var contenido = document.getElementById("clientes");
  const cliente = [];

  fetch("https://randomuser.me/api/?results=3")
    .then((res) => res.json()) //los datos se traeran en JSON
    .then((data) => {
      console.log(data.results);
      data.results.forEach((cliente, i) => {
        console.log(cliente);
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
    });
};

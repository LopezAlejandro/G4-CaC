window.onload = function () {
  var contenido = document.getElementById("clientes");

  fetch("https://randomuser.me/api/?results=2")
    .then((res) => res.json()) //los datos se traeran en JSON
    .then((data) => {
      console.log(data.results);
      contenido.innerHTML =
        `<div class="cliente">
          <img src="${data.results[0].picture.large}" class="item-c">
        <p class="item-c">${data.results[0].name.first}` +
        ` ` +
        `${data.results["0"].name.last}<br>${data.results[0].location.country}</p></div>
          <div class="cliente">
          <img src="${data.results[1].picture.large}" class="item-c">
        <p class="item-c">${data.results[1].name.first}` +
        ` ` +
        `${data.results["1"].name.last}<br>${data.results[1].location.country}</p></div>`;
    });
};

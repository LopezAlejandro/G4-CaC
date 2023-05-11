window.onload = function () {
  var contenido = document.getElementById("clientes");
  const comentarios=[];
  const cliente=[];
  
  fetch("https://fakerapi.it/api/v1/texts?_quantity=3&_characters=150&_locale=es_ES")
    .then((resultado) => resultado.json())
    .then((datos) => {
      console.log(datos.data);
      comentarios[0]=datos.data[0].content;
      comentarios[1]=datos.data[1].content;
      comentarios[2]=datos.data[2].content;
    });

  fetch("https://randomuser.me/api/?results=3")
    .then((res) => res.json()) //los datos se traeran en JSON
    .then((data) => {
      console.log(data.results);
      data.results.forEach((cliente,i) => {
        console.log(cliente);
        contenido.innerHTML=`
        ${contenido.innerHTML}
        <div class="cliente cliente-card">
            <img src="${cliente.picture.large}"
            alt="${cliente.name.first}"
            class="cliente-pic"
            />
            <h3 class="nombre-cliente">${cliente.name.first} ${cliente.name.last}</h3>
            <p class="comentario-cliente">
              ${comentarios[i]}
            </p>
          </div>
       `;

      });
    });
  };



      /* contenido.innerHTML =
        `<div class="cliente">
          <img src="${data.results[0].picture.large}" class="item-c">
        <p class="item-c">${data.results[0].name.first}` +
        ` ` +
        `${data.results[0].name.last}<br>${data.results[0].location.country}</p>
        <p class="item-c">${comentarios[0]}</p></div>
          <div class="cliente">
          <img src="${data.results[1].picture.large}" class="item-c">
        <p class="item-c">${data.results[1].name.first}` +
        ` ` +
        `${data.results[1].name.last}<br>${data.results[1].location.country}</p>
        <p class="item-c">${comentarios[1]}</p></div>`;
    }); */


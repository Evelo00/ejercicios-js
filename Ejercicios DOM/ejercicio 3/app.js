const notas = [
  {
    id: 1,
    titulo: "Subir el repo",
    texto: "Link a mindhub o se me olvida",
    realizada: false,
    imagen: "img/itsFine.png",	
  },
  {
    id: 2,
    titulo: "Hacer la tarea",
    texto: "Tengo que hacer la tarea del sprint",
    realizada: true,
    imagen: "img/Cine.jpg",
  },
  {
    id: 3,
    titulo: "No supe que poner",
    texto: "Pongo esta carta trampa para que no se note que no se me ocurrio nada",
    realizada: false,
    imagen: "img/miTurn.jpg",
  },
];

const images = [
  {
    id: 1,
    nombre: "'Estoy bien'",
    ruta: "img/itsFine.jpg",
  },
  {
    id: 2,
    nombre: "Fino",
    ruta: "img/Cine.jpg",
  },
  {
    id: 3,
    nombre: "Carta trampra",
    ruta: "img/miTurn.jpg",
  },
];

let idGlobal = 2;

const contenedor = document.getElementById("contenedor");
const selectImagen = document.getElementById("imagen");

images.forEach((image) => {
  const option = document.createElement("option");
  option.value = image.id;
  option.text = image.nombre;
  selectImagen.add(option);
});

const pintarNotas = () => {
  contenedor.innerHTML = "";
  if (notas.length === 0) {
    contenedor.innerHTML = "NO HAY NOTAS PARA MOSTRAR";
    return;
  }
  notas.forEach((element) => {
    contenedor.innerHTML += `
        <div class="card">
            <h3 class="${element.realizada}">${element.titulo}</h3>
            <p class="${element.realizada ? "realizada" : ""}">${element.texto}</p>
            <img src="${element.imagen}" : ""}">
            <div class="acciones">
        <input onClick="marcarRealizada(${element.id})" type="checkbox" ${
      element.realizada ? "checked" : ""
    }>
            <button onClick="borrarNota(${element.id})">Borrar nota</button>
            </div>
        </div>
    `;
  });
};

const agregarNota = (titulo, texto, imagen) => {
  idGlobal++;
  notas.push({
    id: idGlobal,
    titulo: titulo,
    texto: texto,
    realizada: false,
    imagen: imagen,
  });
};

const borrarNota = (id) => {
  const index = notas.findIndex((element) => element.id === id);
  notas.splice(index, 1);
  pintarNotas();
};

const marcarRealizada = (id) => {
  const index = notas.findIndex((element) => element.id === id);
  notas[index].realizada = !notas[index].realizada;
  pintarNotas();
};

const filtrarPorRealizada = (array) => {
  return array.filter((element) => element.realizada);
};

const filtrarPorTexto = (array, texto) => {
  return array.filter(
    (element) => element.titulo.includes(texto) || element.texto.includes(texto)
  );
};

const inputTitulo = document.getElementById("titulo");
const inputTexto = document.getElementById("texto");
const btnGuardar = document.getElementById("guardar");
const btnLimpiar = document.getElementById("limpiar");
const inputBusqueda = document.getElementById("busqueda");
const checkboxRealizada = document.getElementById("realizada");

btnGuardar.addEventListener("click", () => {
  const titulo = inputTitulo.value;
  const texto = inputTexto.value;
  const imagenId = selectImagen.value;
  const imagen = images.find((image) => image.id === parseInt(imagenId)).ruta;
  if (titulo.trim() === "" || texto.trim() === "") {
    return;
  }
  agregarNota(titulo, texto, imagen);
  pintarNotas();
  inputTitulo.value = "";
  inputTexto.value = "";
});

btnLimpiar.addEventListener("click", () => {
  inputTitulo.value = "";
  inputTexto.value = "";
});

inputBusqueda.addEventListener("input", () => {
  const texto = inputBusqueda.value;
  const realizada = checkboxRealizada.checked;
  let array = notas;
  if (realizada) {
    array = filtrarPorRealizada(array);
  }
  if (texto.trim() !== "") {
    array = filtrarPorTexto(array, texto);
  }
  contenedor.innerHTML = "";
  array.forEach((element) => {
    contenedor.innerHTML += `
        <div class="card">
            <h3 class="${element.realizada}">${element.titulo}</h3>
            <p class="${element.realizada ? "realizada" : ""}">${
      element.texto
    }</p>
            <input onClick="marcarRealizada(${element.id})" type="checkbox" ${
      element.realizada ? "checked" : ""
    }>
            <button onClick="borrarNota(${element.id})">Borrar nota</button>
        </div>
    `;
  });
});

checkboxRealizada.addEventListener("change", () => {
  const texto = inputBusqueda.value;
  const realizada = checkboxRealizada.checked;
  let array = notas;
  if (realizada) {
    array = filtrarPorRealizada(array);
  }
  if (texto.trim() !== "") {
    array = filtrarPorTexto(array, texto);
  }
  contenedor.innerHTML = "";
  array.forEach((element) => {
    contenedor.innerHTML += `
            <div class="card">
                <h3>${element.titulo}</h3>
                <p>${element.texto}</p>
                <input onClick="marcarRealizada(${
                  element.id
                })" type="checkbox" ${element.realizada ? "checked" : ""}>
                <button onClick="borrarNota(${element.id})">Borrar nota</button>
            </div>
        `;
  });
});

pintarNotas();

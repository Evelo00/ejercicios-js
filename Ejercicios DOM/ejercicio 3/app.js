const notas = [
  {
    id: 1,
    titulo: "Subir el repo",
    texto: "Link a mindhub o se me olvida",
    realizada: false,
  },
  {
    id: 2,
    titulo: "Hacer la tarea",
    texto: "Tengo que hacer la tarea de matematica",
    realizada: false,
  },
  {
    id: 3,
    titulo: "Pasear al perro",
    texto: "Tengo que sacar a pasear al perro",
    realizada: true,
  },
];

let idGlobal = 2;

const contenedor = document.getElementById("contenedor");

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
};

const agregarNota = (titulo, texto) => {
  idGlobal++;
  notas.push({
    id: idGlobal,
    titulo: titulo,
    texto: texto,
    realizada: false,
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
  if (titulo.trim() === "" || texto.trim() === "") {
    return;
  }
  agregarNota(titulo, texto);
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

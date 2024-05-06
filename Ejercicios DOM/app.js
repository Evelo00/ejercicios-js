let pesoInput = document.getElementById('peso');
let alturaInput = document.getElementById('altura');
let calcularButton = document.getElementById('calcular');
let resultadoDiv = document.getElementById('resultado');

//conversor de monedas
let dolaresInput = document.getElementById("dolares");
let pesosInput = document.getElementById("pesos");
let convertirDolaresButton = document.getElementById("convertirDolares");
let conversionDolaresDiv = document.getElementById("conversionDolares");
let tasaDeCambio = 0.00027;

calcularButton.disabled = true;

function checkInput() {
    calcularButton.disabled = !(pesoInput.value && alturaInput.value);
}

pesoInput.addEventListener('input', checkInput);
alturaInput.addEventListener('input', checkInput);

calcularButton.addEventListener('click', function() {
    let peso = pesoInput.value;
    let altura = alturaInput.value;

    let imc = peso / (altura * altura);
    resultadoDiv.textContent = 'Tu IMC es ' + imc.toFixed(2);
});


// conversor


convertirDolaresButton.addEventListener("click", function () {
    let dolares = dolaresInput.value;
    let pesos = pesosInput.value;

    if (!dolares && !pesos) {
        conversionDolaresDiv.textContent =
            "Por favor, introduce una cantidad en dólares o en pesos.";
        return;
    }

  if (!dolares) {
    conversionDolaresDiv.textContent =
      "Por favor, introduce una cantidad en dólares.";
    return;
  }

  let pesos = dolares / tasaDeCambio;
  conversionDolaresDiv.textContent =
    "La cantidad en pesos colombianos es " + pesos.toFixed(2);
});
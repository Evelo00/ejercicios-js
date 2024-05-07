let pesoInput = document.getElementById('peso');
let alturaInput = document.getElementById('altura');
let calcularButton = document.getElementById('calcular');
let resultadoDiv = document.getElementById('resultado');

//conversor de monedas
let dolaresInput = document.getElementById("dolares");
let pesosColInput = document.getElementById("pesos");
let convertirDolaresButton = document.getElementById("convertirDolares");
let convertirPesosButton = document.getElementById("convertirPesos");
let conversionDiv = document.getElementById("conversion");
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

    if (!dolares) {
        conversionDiv.textContent = "Por favor, introduce una cantidad en dólares.";
        return;
    }

    let pesos = dolares / tasaDeCambio;
    conversionDiv.textContent = "La cantidad en pesos colombianos es " + pesos.toFixed(2);
});

convertirPesosButton.addEventListener("click", function () {
    let pesos = pesosColInput.value;

    if (!pesos) {
        conversionDiv.textContent = "Por favor, introduce una cantidad en pesos colombianos.";
        return;
    }

    let dolares = pesos * tasaDeCambio;
    conversionDiv.textContent = "La cantidad en dólares es " + dolares.toFixed(2);
});
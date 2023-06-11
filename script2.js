const valorEntrada = 500;

let descEstudiante = .50;
let descTurismo = .80;
let descExtranjero = .20;
let tarifaBase = 1;

const cantidadEntradas = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoria');
const botonCalcular = document.querySelector('#calcular');
const botonReset = document.querySelector('#reset');
const total = document.querySelector('#total');

function totalPagar() {

    let totalValor = parseInt(cantidadEntradas.value) * valorEntrada;

    if (categoria.value == 1) {
        totalValor -= (totalValor * descEstudiante)
    }
    else if (categoria.value == 2) {
        totalValor -= (totalValor * descTurismo)
    }
    else if (categoria.value == 3) {
        totalValor -= (totalValor * descExtranjero)
    }
    else {
         totalValor = totalValor
    }
    total.innerHTML = "Total a pagar : $ " + totalValor;
}

botonCalcular.addEventListener('click',totalPagar);

botonReset.addEventListener('click',()=> {
    parrafo.innerHTML = "Total a pagar : $"
    cantidad.value = null;    
} )
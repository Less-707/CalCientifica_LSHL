function setDigito(digito) {
    let pantalla = document.getElementById('display');
    pantalla.value = pantalla.value + digito;
}

function setOperador(operador) {
    let pantalla = document.getElementById('display');
    pantalla.value = pantalla.value + operador;
}

function borrar() {
    let pantalla = document.getElementById('display');
    pantalla.value = '';
}

function obtenerResultado() {
    let pantalla = document.getElementById('display');
    pantalla.value = eval(pantalla.value);
}

function calcularRaiz() {
    let pantalla = document.getElementById('display');
    pantalla.value = Math.sqrt(pantalla.value);
}

function calcularLog() {
    let pantalla = document.getElementById('display');
    pantalla.value = Math.log10(pantalla.value);
}
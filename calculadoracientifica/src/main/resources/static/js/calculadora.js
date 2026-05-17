 function setDigito(digito){
        let display = document.getElementById('display');
        display.value=display.value+digito;
    }

    function setOperador(operador){
        let display = document.getElementById('display')
        display.value=display.value + operador;
    }

    function borrar() {
        let display = document.getElementById('display');
        display.value='';
    }

    function obtenerResultado(){
        let display = document.getElementById('display')
        display.value = eval(display.value);
    }
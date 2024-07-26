let numeroSecreto;
let intentos = 0;
let numeroMaximo = 10;
//Declaración de un arreglo
let listaNumerosSorteados = [];

//JS nos proporcionará opciones relacionadas al tipo de objeto que contiene titulo.
//innerHTML sirve para modificar el texto en una etiqueta.
function asignarTextoElemento(elemento, texto) {
    //Este método permite extraer un objeto del DOM para poder trabajar con dicho objeto.
    //titulo contiene un objeto de tipo header en este caso.
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

    return;
}

function verificarIntento() {
    //Se extrae el número del input y se transforma de cadena a numero.
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        //Se hace una condición con el operador ternario. 
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled', 'true');
    }else{
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

//Este método retorna un valor aleatorio.
//Esta función se vuelve a ejecutar si la condición se cumple.
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo + 1);

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else{
        //Si el número generado está incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
    
}

function limpiarCaja(params) {
    //Esta es la manera de identificar un elemento por id usando querySelector
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(params) {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    //Deshabilita el botón reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function reiniciarJuego(params) {
    //Limpia el campo de texto del juego.
    limpiarCaja();

    //Indicar mensaje de inicio de intervalo de némeros.
    //Se genera el número aleatorio.
    //Inicializar el número de intentos.
    //Deshabilitar el botón de nuevo juego.
    condicionesIniciales();

    //Habilitar el botón de intentar.
    document.getElementById('intentar').removeAttribute('disabled');
}

condicionesIniciales();
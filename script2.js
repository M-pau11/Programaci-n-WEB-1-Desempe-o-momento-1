// Ejercicio 4:

function mostrarInstrucciones() {
    alert("Adivina el número secreto del 1 al 10. Tienes 3 intentos.");
}

function jugar() {
    let secreto = 7;
    let intentos = 3;
    let ganar = () => alert("¡Felicidades, acertaste!");

    for (let i = 1; i <= intentos; i++) {
        let numero = prompt("Intento " + i + ": Digite un número");
        
        if (Number(numero) === secreto) {
            ganar();
            return; 
        } else {
            alert("Número incorrecto.");
        }
    }

    alert("Perdiste, el número secreto era " + secreto);
}

mostrarInstrucciones();
jugar();

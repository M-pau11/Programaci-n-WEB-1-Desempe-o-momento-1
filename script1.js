// Ejercicio 2:

function pedirEdad() {
    let edad = prompt("Digite su edad:");
    revisarEdad(Number(edad));
}

function revisarEdad(edad) {
    let mensajeBienvenida = () => alert("Bienvenido a la película.");
    
    if (edad >= 13) {
        alert("Puede ingresar");
        mensajeBienvenida();
    } else {
        alert("No puede ingresar");
    }
}

pedirEdad();

// Ejercicio 6:

function pedirHoras() {
    let horas = prompt("Digite cuántas horas estuvo el vehículo:");
    calcularPago(Number(horas));
}

function calcularPago(horas) {
    let tarifa = 1500;
    let total = horas * tarifa;

    if (horas > 5) {
        let descuento = total * 0.10;
        total = total - descuento;
    }

    alert("Total a pagar: $" + total);
}

pedirHoras();

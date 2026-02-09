var jugar = "SI";

while (jugar === "SI") {
    var numPC = Math.floor(Math.random() * 9) + 1;
    var numUsuario = 0;

    // Validación del rango 3-6
    while (numUsuario < 3 || numUsuario > 6) {
        numUsuario = parseInt(prompt("Ingresa un número entre 3 y 6:"));
    }

    var adivinanza = prompt("¿Tu número es mayor, menor o igual al de la PC?").toLowerCase();

    // Lógica de comparación
    var real = numUsuario > numPC ? "mayor" : (numUsuario < numPC ? "menor" : "igual");

    if (adivinanza === real) {
        alert(`La computadora eligió ${numPC}, usted eligió ${numUsuario}. Su elección es ${real}. ¡Ha adivinado!`);
    } else {
        alert(`La computadora eligió ${numPC}, usted eligió ${numUsuario}. Su elección era ${real}. No acertaste.`);
    }

    jugar = prompt("¿Quieres jugar otra vez? (SI / NO)").toUpperCase();
}

alert("Nombre: [MANUELENRIQUE MORALES ARANA]\nCarnet: [26000207]\nFin del programa.");
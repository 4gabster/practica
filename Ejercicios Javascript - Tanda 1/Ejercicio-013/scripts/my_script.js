/***************************************************************************************************************
 *
 *   Objetivo: Reforzar en el uso de estructuras de programación repetitivas / condicionales
 *             Mejorar la lógica de programación
 *             Aprender a definir arrays
 *             Aprender a convertir cadenas en arrays
 *             Aprender a emplear métodos de programación funcional
 *             
 *   Tarea: Calcular los puntos de una palabra:
 *            - Cada letra tiene un valor asignado. Por ejemplo, en el abecedario español de 27 letras, la A vale 1 y la Z 27.
 *            - El valor de la palabra es la suma del valor de las letras
 *            - Se muestra el valor de los puntos de cada palabra introducida y finalizamos si introducimos una palabra de 100 puntos.
 * 
 *   Entrada : palabra (de forma repetida mientras no tenga 100 puntos)
 *
 *   Salida  : La palabra es de XXX puntos. 
 *
 ***************************************************************************************************************/

let valorTotalPalabras = 0
const valoresLetras = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
    j: 10, k: 11, l: 12, m: 13, n: 14, ñ: 15, o: 16, p: 17,
    q: 18, r: 19, s: 20, t: 21, u: 22, v: 23, w: 24, x: 25, y: 26, z: 27
};

document.getElementById("formPalabra").addEventListener('submit', (e) => {
    e.preventDefault()

    let palabraForm = document.getElementById("palabra").value
    // array de caracteres 
    let arrayPalabra = [...palabraForm]

    valorTotalPalabras += calcularValorPalabra(arrayPalabra)

    if (validarEntrada(palabraForm)) {
        if (valorTotalPalabras >= 100) {
            imprimirPantalla("Felicidades, chegaches a 100 puntos. O marcador reiniciaráse.")
            valorTotalPalabras = 0
        }
        else {
            imprimirPantalla(`O teu marcador é: ${valorTotalPalabras} puntos.`)
        }
    }
    else {
        alert("Debes de introducir unha palabra. Non pode conter números.")
    }

    e.target.reset()
})

function calcularValorPalabra(arrayPalabra) {
    let valorPalabra = 0
    arrayPalabra.forEach(letra => {
        valorPalabra += valoresLetras[letra]
    });

    return valorPalabra

}

function imprimirPantalla(message) {
    console.log(message)
}

function validarEntrada(palabra) {
    regExpLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/

    if (typeof palabra === "string" && regExpLetras.test(palabra)) {
        return true
    }
    else {
        return false
    }
}
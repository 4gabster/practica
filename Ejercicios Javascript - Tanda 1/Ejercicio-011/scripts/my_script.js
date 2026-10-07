/***************************************************************************************************************
 *
 *   Objetivo: Aprender a programar para mejorar la eficiencia en el uso de recursos en programación
 *
 *   Tarea: Solicitamos un número tras otro al usuario hasta que ingresamos el número 0 (que no se tendrá en cuenta)
 *          Una vez terminada la lectura de números se informará cuál fue el mayor de los números y la suma de los mismos
 *
 *   Entrada : numero1, numero2, numero3,.....
 *
 *   Salida  : El mayor de numero1, numero2, numero3,.... es ..... La suma de todos ellos es ....
 *
***************************************************************************************************************/

function mayorNums(arrayNums) {
    let numMayor = arrayNums[0]

    for (let i = 1; i < arrayNums.length; i++) {
        if (arrayNums[i] > numMayor) {
            numMayor = arrayNums[i]
        }
    }

    return numMayor
}

function sumarNumeros(arrayNums) {
    let sumatorio = 0

    arrayNums.forEach(element => {
        sumatorio += element
    });

    return sumatorio
}

function imprimirPantalla(message) {
    console.log(message)
}

let num1
let arrayNums = []

document.getElementById("formNum").addEventListener('submit', (e) => {
    e.preventDefault()

    num1 = Number(document.getElementById('num1').value)

    if (num1 == 0) {
        let numMayor = mayorNums(arrayNums)
        let sumatorio = sumarNumeros(arrayNums)

        imprimirPantalla(`El mayor de ${arrayNums.join(', ')} es ${numMayor}. La suma de todos ellos es ${sumatorio}`)

        arrayNums.length = 0
    }
    else {
        arrayNums.push(num1)
    }

    e.target.reset()
})


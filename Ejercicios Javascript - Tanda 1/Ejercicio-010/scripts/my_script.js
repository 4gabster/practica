/***************************************************************************************************************
 *
 *   Objetivo: Mejorar la lógica de programación
 *
 *   Tarea: Solicitamos tres números al usuario e indicamos cual es el mayor
 *
 *   Entrada : numero1, numero2, numero3
 *
 *   Salida  : El mayor de numero1, numero2 y numero3 es : XXXXX
 *
 ***************************************************************************************************************/

document.getElementById('formularioNums').addEventListener('submit', (e) => {
    e.preventDefault()

    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
    const num3 = Number(document.getElementById('num3').value)

    let arrayNums = [num1, num2, num3]

    let numMayor = arrayNums[0]

    for (let i = 1; i < arrayNums.length; i++) {
        if (arrayNums[i] > numMayor) {
            numMayor = arrayNums[i]
        }
    }

    imprimirPantalla(numMayor)
})

function imprimirPantalla(numMayor) {
    console.log(`O número maior é ${numMayor}`)
}
/***************************************************************************************************************
 *
 *   Objetivo: Reforzar en la programación funcional
 *             Reforzar en la lógica de programación
 *
 *   Tarea: Generar los n primeros números perfectos
 *
 *          Nota: Un número es perfecto cuando el número es igual a la suma de sus divisores.
 *
 *   Entrada : número entero n
 *
 *   Salida  :
 *
 ***************************************************************************************************************/

num = Number(prompt("Introduce un número: "))
let sumadivisores = 0
let esPerfecto = (num) => {
    for (let i = 1; i < num; i++) {
        num % i == 0 && (sumadivisores += i)
    }
    return sumadivisores == num
}

esPerfecto(num) ? console.log("O número é perfecto") : console.log("O número non é perfecto")
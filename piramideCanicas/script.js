
document.getElementById("formCanicas").addEventListener('submit', (e) =>{
    e.preventDefault()
    
    const numFilasObjetivo = Number(document.getElementById('alturaPiramide').value)

    let numFilas = calcularNumCanicas(numFilasObjetivo)

    imprimirSalida(numFilas)

    e.target.reset()
})

function calcularNumCanicas(numFilasObjetivo) {
    let numSumarCanicas = 0
    let numTotalCanicas = 1

    for (let i = 1; i < numFilasObjetivo; i++) {
        numSumarCanicas = i + 1
        numTotalCanicas += numSumarCanicas
    }

    return numTotalCanicas
}

function imprimirSalida(numFilas) {
    console.log(`O número de canicas necesario é: ${numFilas}`)
}
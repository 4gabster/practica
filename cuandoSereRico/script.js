let numDiasPantalla = 0

document.getElementById("formulario").addEventListener('submit', (e) => {
    e.preventDefault()

    const numForm = Number(document.getElementById('numero').value)

    numDiasPantalla = calcularDias(numForm)

    imprimirSalida(numForm, numDiasPantalla)

    e.target.reset()
})

function calcularDias(numForm) {
    let numDias = 2
    let numCentimos = 2
    let dosAntes = 1
    let unAntes = 1
    let deuHoxe

    if (numForm <= 1) return 1
    if (numForm <= 2) return 2

    while (numCentimos < numForm) {
        deuHoxe = (dosAntes * 2) + unAntes
        numCentimos += deuHoxe

        dosAntes = unAntes
        unAntes = deuHoxe   

        numDias++
    }

    return numDias
}

function imprimirSalida(numForm, numDiasPantalla) {
    console.log(`O número de días que tarda en conseguir ${numForm} é: ${numDiasPantalla}`)
}
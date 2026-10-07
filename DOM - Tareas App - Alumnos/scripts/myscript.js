const $d = document,
    $tareas = $d.querySelector("#tareas"),
    $templateTareas = $d.querySelector("#template-tarea"),
    $tareaInput = $d.querySelector("#input"),
    $form = $d.querySelector("form")

const tareas = [
    {
        id: 1,
        text: "Mi primera tarea",
        status: true
    },
    {
        id: 2,
        text: "Mi segunda tarea",
        status: true
    },
    {
        id: 3,
        text: "Mi tercera tarea",
        status: true
    }
]

function deleteTarea(id) {
    let index = tareas.findIndex(tarea => tarea.id == id)
    tareas.splice(index, 1)
    renderTareas(tareas)

}

$form.addEventListener("submit", ev => {
    ev.preventDefault()

    let tareaId = ev.target.dataset.tareaId

    const tarea = {
        text: $tareaInput.value,
        status: true
    }

    if (tareaId) {

        // for (let i = 0; i < tareas.length; i++) {
        //     if (tareas[i].id == tareaId) {
        //         tareas[i].text = $tareaInput.value
        //     }            
        // }

        tarea.id = $form.dataset.tareaId
        let index = tareas.findIndex(tarea => tarea.id == tareaId)
        tareas.splice(index, 1, tarea)
        delete $form.dataset.tareaId;
        $tareaInput.value = ""
        $form.querySelector("button").textContent = "Agregar"
        renderTareas(tareas)
    }
    else {

        tarea.id = tareas.length ? Math.max(...tareas.map(tarea => tarea.id)) + 1 : 1
        tareas.push(tarea)
        $tareaInput.value = ""
        renderTareas(tareas)
    }

})

function updateTarea(id) {
    const tarea = tareas.find(tarea => tarea.id == id)
    $tareaInput.value = tarea.text
    $form.dataset.tareaId = tareaId
    $form.querySelector("button").textContent = "Modificar"
}

function handleClickTareas(ev) {
    if (!$form.dataset.tareaId) {
        let tareaId = (ev.target.dataset.tareaId);
        if (tareaId) {
            ev.target.classList.contains("fa-minus-circle") ? deleteTarea(tareaId) : updateTarea(tareaId)
        }
    }
}

$tareas.addEventListener("click", handleClickTareas)

function renderTareas(tareas) {
    if (tareas.length) {
        $tareas.innerHTML = tareas.reduce((anterior, actual) => {
            return anterior + `<div class="alert alert-warning d-flex justify-content-between align-items-center">
          <p class="m-0">${actual.text}</p>
          <h3 class="m-0">
            <i class="fas fa-check-circle text-success" role="button" data-tarea-id="${actual.id}"></i>
            <i class="fas fa-minus-circle text-danger" role="button" data-tarea-id="${actual.id}"></i>
          </h3>
        </div>`
        }, "")
    }
    else {
        $tareas.innerHTML = `<p class="alert alert-dark text-center">Sin tareas pendientes &#10084;</p>`
    }
}

$d.addEventListener("DOMContentLoaded", ev => {
    renderTareas(tareas)
})
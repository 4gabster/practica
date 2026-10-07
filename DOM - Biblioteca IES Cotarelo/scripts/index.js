const books = [
    {
        id: 1,
        title: "hola"
    },
    {
        id: 2,
        title: "Clean Code"
    },
    {
        id: 3,
        title: "You Don't Know JS"
    },
    {
        id: 4,
        title: "The Pragmatic Programmer"
    },
    {
        id: 5,
        title: "Cracking the Coding Interview"
    },
    {
        id: 6,
        title: "Design Patterns: Elements of Reusable Object-Oriented Software"
    }
];

const $d = document,
    $ul = $d.querySelector("ul"),
    $ocultar = $d.querySelector("#ocultar"),
    $search = $d.querySelector("#buscarLibros>input"),
    $addInput = $d.querySelector("#libro-add > input"),
    $addBtn = $d.querySelector("#libro-add>button")

$ocultar.addEventListener("click", ev => {
    $ul.style.display = $ul.style.display == "block" ? "none" : "block"
})

$ul.addEventListener("click", ev => {
    let id = ev.target.dataset.id
    console.log(id)

    if (id) {
        let index = books.findIndex(book => book.id == id)
        console.log(index)
        books.splice(index, 1)
        renderBooks(books)
    }

})

$addBtn.addEventListener("click", ev => {
    ev.preventDefault()
    let title = $addInput.value
    console.log(title)

    let id = Math.max(...books.map(book => book.id)) + 1
    console.log(id)

    const book = { id, title }

    books.push(book)
    renderBooks(books)
})

$search.addEventListener("keyup", ev => {
    let searchTerm = (ev.target.value)
    const filteredBooks = (books.filter(book => book.title.toLowerCase().includes(searchTerm)))
    renderBooks(filteredBooks)
})

function renderBooks(books) {
    // console.log(books)

    /* books.forEach(book => {
        const $li = $d.createElement(("li"))
        
        // span 1
        const $span1 = $d.createElement("span")
        $span1.classList.add("titulo")
        const $texto1 = $d.createTextNode(book.title)
        $span1.appendChild($texto1)
        
        // span 2
        const $span2 = $d.createElement("span")
        $span2.classList.add("borrar")
        const $texto2 = $d.createTextNode("-")
        $span2.appendChild($texto2)

        $li.append($span1, $span2)
        $ul.appendChild($li)

    }); */



    /* $ul.innerHTML=books.map(book =>

        `<li>
            <span class="titulo">${book.title}</span>
            <span class="borrar">-</span>
        </li>`
    ).join("") */

    $ul.innerHTML = books.reduce((anterior, actual) => {
        return anterior +
            `<li>
            <span class="titulo">${actual.title}</span>
            <span class="borrar" data-id=${actual.id}>_</span>
        </li>`
    }, "")


}

function renderBooks2(books) {
    const $tItem = $d.querySelector("#tItem").content

    books.forEach(book => {
        const $clon = $tItem.cloneNode(true)
        $clon.querySelector("span").textContent = book.title
        $clon.querySelector(".borrar").setAttribute("data-id", book.id)
        $clon.querySelector(".borrar").dataset.id = book.id

        $ul.append($clon)
    });
}

$d.addEventListener("DOMContentLoaded", ev => {
    $ul.style.display = "block"
    renderBooks(books)
})



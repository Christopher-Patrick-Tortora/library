import { Book } from "./Book.mjs";
import { Library } from "./Library.mjs"

const UI = () => {
    const library = Library();

    const loadLibrary = () => {
        library.collection.forEach(book => {
            createBookCard(book)
            console.log(library.collection)
        })

    }

    const clearLibrary = () => {
        const books = document.querySelectorAll('.book')
        books.forEach(book => {
            book.remove()
        })
    }

    const createBookCard = (book) => {
        const display = document.querySelector('main')
        display.innerHTML += `
        <section class="book" data-index=${'test'}>
        <fieldset>
            <legend><h3>${book.title}</h3></legend>
            <p>By: ${book.author}</p>
            <p>Genre: ${book.genre}</p>
            <p>Pages: ${book.pages}</p>
            <p>Language: ${book.language}</p>
            <p>Published: ${book.published}</p>
            <label for="status">Status: </label>
            <select name="status" class="status">
                ${book.stat === 'Not Started' ?
                `<option value="Not Started" selected>Not Started</option>` :
                `<option value="Not Started">Not Started</option>`}
                ${book.stat === 'Started' ?
                `<option value="Started" selected>Started</option>` :
                `<option value="Started">Started</option>`}
                ${book.stat === 'Finished' ?
                `<option value="Finished" selected>Finished</option>` :
                `<option value="Finished">Finished</option>`}
            </fieldset>
            </select> 
        </section>`
    }

    const addBookListener = () => {
        const addButton = document.querySelector("#add")
        const dialog = document.querySelector('dialog')
        addButton.addEventListener('click', () => {
            dialog.showModal()
        })
    }

    const closeFormListener = () => {
        const closeButton = document.querySelector('.close_form')
        const dialog = document.querySelector('dialog')
        const form = document.querySelector('form')
        closeButton.addEventListener('click', () => {
            dialog.close()
            form.reset()
        })
    }

    const submitFormListener = () => {
        const submitForm = document.querySelector('.submit_form')
        submitForm.addEventListener('click', (e) => {
            const dialog = document.querySelector('dialog')
            const form = document.querySelector('form')
            let values = []
            form.querySelectorAll('input').forEach(input => {
                values.push(input.value)
            })
            const status = document.querySelector('#status').value

            if (form.checkValidity()) {
                e.preventDefault()
                const book = Book(...values, status)
                library.addBook(book)
                clearLibrary()
                loadLibrary()
                dialog.close()
                form.reset()
            }
        })
    }

    const clearFormListener = () => {
        const clearButton = document.querySelector('.clear_form')
        const form = document.querySelector('form')
        clearButton.addEventListener('click', (e) => {
            e.preventDefault()
            form.reset()
        })
    }


    const init = () => {
        loadLibrary()
        addBookListener()
        closeFormListener()
        clearFormListener()
        submitFormListener()
    }

    return { init }
}

export { UI }
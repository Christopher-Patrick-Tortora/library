import { Book } from "./Book.mjs";
import { Library } from "./Library.mjs"

const UI = () => {
    const library = Library();

    const loadLibrary = () => {
        library.collection.forEach(book => {
            createBookCard(book)
            changeStatusSelectListener()
            updateBookButtonListener()

        })
    }

    const clearLibrary = () => {
        const books = document.querySelectorAll('.book')
        books.forEach(book => {
            book.remove()
        })
    }

    //add fieldset maybe?
    const createBookCard = (book) => {
        const display = document.querySelector('main')
        display.innerHTML += `
        <section class="book" data-index=${library.getBookIndex(book)}>
            <ul>
                <li>
                    <legend><h3>${book.title}</h3></legend>
                </li>
                <li>
                    <p>By: ${book.author}</p>
                </li>
                <li>
                    <p>Genre: ${book.genre}</p>
                </li>
                <li>
                    <p>Pages: ${book.pages}</p>
                </li>
                <li>
                    <p>Language: ${book.language}</p>
                </li>
                <li>
                    <p>Published: ${book.published}</p>
                </li>
                <li>
                    <label for="status">Status: </label>
                        <select name="status" class="status" data-index=${library.getBookIndex(book)}>
                            ${book.stat === 'Not Started' ?
                `<option value="Not Started" selected>Not Started</option>` :
                `<option value="Not Started">Not Started</option>`}
                            ${book.stat === 'Started' ?
                `<option value="Started" selected>Started</option>` :
                `<option value="Started">Started</option>`}
                            ${book.stat === 'Finished' ?
                `<option value="Finished" selected>Finished</option>` :
                `<option value="Finished">Finished</option>`}
                         </select>
                </li>
                <li>
                    <img src="./assets/update.png" alt="" class="update" data-index=${library.getBookIndex(book)}> 
                </li>
                </ul>
        </section>`
        //create listeners and functions for new card update button and status select
        //updateBookButtonListener()
    }

    const changeStatusSelectListener = () => {
        const main = document.querySelector('main')
        const statuses = main.querySelectorAll('select')
        statuses.forEach(stat => {
            stat.addEventListener('click', () => {
                const index = stat.dataset.index
                library.getBook(index).stat = stat.value
                console.log(library.collection)
            })
        })

    }



    const newBookButtonListener = () => {
        const addButton = document.querySelector("#add")
        const dialog = document.querySelector('.add_dialog')
        addButton.addEventListener('click', () => {
            dialog.showModal()
        })
    }

    const closeFormButtonListener = () => {
        const closeButtons = document.querySelectorAll('.close_form')
        const addDialog = document.querySelector('.add_dialog')
        const addForm = document.querySelector('.add_form')
        const updateDialog = document.querySelector('.update_dialog')
        const updateForm = document.querySelector('.update_form')
        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                if(button.parentElement.classList.contains('add_dialog')){
                    addDialog.close()
                    addForm.reset()
                }
                else if(button.parentElement.classList.contains('update_dialog')){
                    updateDialog.close()
                    updateForm.reset()
                }
            })
        })

    }

    const addBookButtonListener = () => {
        const submitForm = document.querySelector('.submit_form')
        submitForm.addEventListener('click', (e) => {
            const dialog = document.querySelector('.add_dialog')
            const form = document.querySelector('.add_form')
            const inputs = form.querySelectorAll('input')
            let values = []
            inputs.forEach(input => {
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

    const clearFormButtonListener = () => {
        const clearButton = document.querySelector('.clear_form')
        const form = document.querySelector('add_form')
        clearButton.addEventListener('click', (e) => {
            e.preventDefault()
            form.reset()
        })
    }

    //have all input fields fill; missing published and status
    const updateBookButtonListener = () => {
        const updateButtons = document.querySelectorAll(".update")
        const updateDialog = document.querySelector('.update_dialog')
        updateButtons.forEach(button => {
            button.addEventListener('click', () => {
                updateDialog.showModal()
                const inputs = updateDialog.querySelectorAll('input')
                const index = button.dataset.index 
                const book = library.getBook(index);
                inputs.forEach(input => {
                    input.value = book[input.id]
                })

            })
        })
    }

    const init = () => {
        loadLibrary()
        
        newBookButtonListener()
        closeFormButtonListener()
        clearFormButtonListener()
        addBookButtonListener()
    }

    return { init }
}

export { UI }
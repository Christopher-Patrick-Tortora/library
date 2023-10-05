import { Library } from "./Library.mjs"

const UI = () => {
    const library = Library();

    const loadLibrary = () => {
        library.collection.forEach(book => {
            createBookCard(book)
        })
    }

    const createBookCard = (book) => {
        const display = document.querySelector('main')
        display.innerHTML += `
        <section class="book">
            <h3>${book.title}</h3>
            <p>By: ${book.author}</p>
            <p>Genre: ${book.genre}</p>
            <p>Page #: ${book.pageNumber}</p>
            <p>Language: ${book.language}</p>
            <p>Published: ${book.published}</p>
            <p>Pages read: ${book.pagesRead}</p>
            <label for="status">Status: </label>
            <select name="status" class="status">
              <option value="Not Started">Not Started</option>
              <option value="Started">Started</option>
              <option value="Finished">Finished</option>
            </select> 
        </section>`
    }

    const init = () => {
        loadLibrary()
    }

    return { init }
}

export { UI }
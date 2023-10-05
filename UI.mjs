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
        <section>
            <h3>${book.title}</h3>
            <p>By: ${book.author}</p>
            <p>Page #: ${book.pageNumber}</p>
            <p>Language: ${book.language}</p>
            <p>Published: ${book.published}</p>
            <p>Pages read: ${book.pagesRead}</p>
            <label class="switch">
                Finished: 
                <input type="checkbox">
                <span class="slider"></span>
            </label>
        </section>`
    }

    const init = () => {
        loadLibrary()
    }

    return { init }
}

export { UI }
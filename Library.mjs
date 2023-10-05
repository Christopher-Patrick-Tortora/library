import { Book } from "./Book.mjs";

const Library = () => {
    const book1 = Book("SlaughterHouse-Five",
        "Kurt Vonnegut",
        190,
        "English",
        "31 March 1969",
        190,
        "Read")
    const book2 = Book("SlaughterHouse-Five",
        "Kurt Vonnegut",
        190,
        "English",
        "31 March 1969",
        190,
        "Read")
    const book3 = Book("SlaughterHouse-Five",
        "Kurt Vonnegut",
        190,
        "English",
        "31 March 1969",
        190,
        "Read")
    const collection = [book1, book2, book3]

    const addBook = (book) => {
        collection.push(book)
    }

    return {
        get collection() {
            return collection
        }
    }

}

export { Library }
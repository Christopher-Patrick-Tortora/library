import { Book } from "./Book.mjs";

const Library = () => {
    const book1 = Book("SlaughterHouse-Five",
        "Kurt Vonnegut",
        'Postmodern',
        190,
        "English",
        "31 March 1969",
        190,
        true)
    const book2 = Book("The Great Gatsby",
        "F. Scott Fitzgerald",
        'Tragedy',
        208,
        "English",
        "10 April 1925",
        0,
        false)
    const book3 = Book("The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
        "Mark Manson",
        'Self-help',
        272,
        "English",
        "13 September 2016",
        0,
        false)
    const collection = [book1, book2, book3]

    const addBook = (book) => {
        collection.push(book)
    }

    return {
        get collection() {
            return collection
        },

        addBook
    }

}

export { Library }
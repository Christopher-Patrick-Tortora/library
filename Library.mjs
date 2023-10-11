import { Book } from "./Book.mjs";

const Library = () => {
    const book1 = Book("SlaughterHouse-Five",
        "Kurt Vonnegut",
        'Postmodern',
        190,
        "English",
        "31 March 1969",
        'Finished')
    const book2 = Book("The Great Gatsby",
        "F. Scott Fitzgerald",
        'Tragedy',
        208,
        "English",
        "10 April 1925",
        'Started')
    const book3 = Book("The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
        "Mark Manson",
        'Self-help',
        272,
        "English",
        "13 September 2016",
        'Not Finished')
    const collection = [book1, book2, book3]

    const addBook = (book) => {
        collection.push(book)
    }

    const removeBook  = (book) => {
       
    }

    const getBookIndex = (book) => {
        return collection.indexOf(book)
    }

    const getBook = (index) => {
        return collection[index]
    }

    return {
        get collection() {
            return collection
        },

        addBook,

        getBookIndex,

        getBook
    }

}

export { Library }
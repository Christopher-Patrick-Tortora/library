const Book = (title, author, genre, pageNumber, language, published, pagesRead, stat) => {
    
    return {
        set title(newTitle) {
            title = newTitle;
        },

        get title() {
            return title
        },

        set author(newAuthor) {
            author = newAuthor
        },

        get author() {
            return author
        },

        set genre(newGenre) {
            genre = newGenre
        },

        get genre() {
            return genre
        },

        set pageNumber(newPageNumber) {
            pageNumber = newPageNumber
        },

        get pageNumber() {
            return pageNumber
        },

        set language(newLanguage) {
            language = newLanguage
        },

        get language() {
            return language
        },

        set published(newPublished) {
            published = newPublished
        },

        get published() {
            return published
        },

        set pagesRead(newPagesRead) {
            pagesRead = newPagesRead
        },

        get pagesRead() {
            return pagesRead
        },

        set stat(newStat) {
            stat = newStat
        },

        get stat() {
            return stat
        }
        
    }
}

export { Book }


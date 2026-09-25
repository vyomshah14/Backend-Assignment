const library = []; // array

const addBook = (title, author, ISBN) => {
    const book = {
        title: title,
        author: author,
        ISBN: ISBN,
        isAvailable: true
    };

    library.push(book);

    console.log(`Book "${title}" added to the library.`);
};


const borrowBook = (ISBN) => {
    const book = library.find(book => book.ISBN === ISBN);

    if (!book) {
        console.log("Book not found.");
        return;
    }

    if (!book.isAvailable) {
        console.log(`Book "${book.title}" is already borrowed.`);
        return;
    }

    book.isAvailable = false;

    console.log(`Book "${book.title}" has been borrowed.`);
};


const returnBook = (ISBN) => {
    const book = library.find(book => book.ISBN === ISBN);

    if (!book) {
        console.log("Book not found.");
        return;
    }

    book.isAvailable = true;

    console.log(`Book "${book.title}" has been returned.`);
};


const displayBooks = () => {
    console.log("\n===== Library Books =====");

    library.forEach(book => {
        console.log(
            `Title: ${book.title} | ` +
            `Author: ${book.author} | ` +
            `ISBN: ${book.ISBN} | ` +
            `Available: ${book.isAvailable}`
        );
    });
};


addBook("The Alchemist", "Paulo Coelho", "ISBN001");
addBook("Atomic Habits", "James Clear", "ISBN002");
addBook("Clean Code", "Robert C. Martin", "ISBN003");


displayBooks();


borrowBook("ISBN002");


displayBooks();


returnBook("ISBN002");

displayBooks();
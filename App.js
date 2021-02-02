
class Book {
    constructor(title, author, numPages, haveRead) {
        this.title = title,
        this.author = author,
        this.numPages = numPages
        this.haveRead = haveRead;
    };
    readBook(){  
        this.haveRead = !this.haveRead;
        }; 
};

function library() {
    const myLibrary = [];

    function showBookForm(){
        bookForm = document.getElementById("addBookForm");
        bookForm.classList.add("show");
    }

    function addBookToLibrary(e){
        e.preventDefault(e);
        
        const newBook = new Book(title.value, author.value, numPages.value, haveRead.checked);
        myLibrary.push(newBook);
        bookArray = [newBook];
        displayLibrary(bookArray);

        //clear and hide the form
        bookForm.reset();
        bookForm.classList.remove("show");
    }

    //delete book
    function deleteBook(e){
        const indexBook = this.parentElement.getAttribute('data-index');
        myLibrary.splice(indexBook,1);
        const library = document.getElementById("library");
        library.innerHTML = '';
        displayLibrary(myLibrary);
    }

    function displayLibrary(libraryArray){
        const library = document.getElementById("library");
        for (let i = 0; i < libraryArray.length; i++){
        
        const book = libraryArray[i];

        const newBookDiv = document.createElement("div");
        newBookDiv.classList.add("book", "card", "col-md-4", "m-2","text-center");
        newBookDiv.setAttribute('data-index', i);

        const newTitleDiv = document.createElement("h2");
        newTitleDiv.innerText = book.title;
        newTitleDiv.classList.add("book-title");
        newBookDiv.appendChild(newTitleDiv);

        const newAuthorDiv = document.createElement("div");
        newAuthorDiv.innerText = `Author: ${book.author}`;
        newAuthorDiv.classList.add("book-author");
        newBookDiv.appendChild(newAuthorDiv);

        const newPagesDiv = document.createElement("div");
        newPagesDiv.innerText = `Pages: ${book.numPages}`;
        newPagesDiv.classList.add("book-pages", "mb-3");
        newBookDiv.appendChild(newPagesDiv);

        const newReadBtn = document.createElement("button");
        newReadBtn.classList.add("read-button", "btn", "my-2", "mx-5");

        function displayReadBtn (){
            if (book.haveRead === false) {
                newReadBtn.textContent = "Not Read";
                newReadBtn.style.backgroundColor = "tomato";
            } else {
                newReadBtn.textContent = "Read";
                newReadBtn.style.backgroundColor = "lightseagreen";
            }
        }
        displayReadBtn();
            
        newBookDiv.appendChild(newReadBtn); 
        newReadBtn.addEventListener('click', () => {
            book.readBook(book);
            displayReadBtn();   
        } );

        const newDeleteBtn = document.createElement("button");
        newDeleteBtn.classList.add("delete-button", "btn", "btn-secondary", "my-2", "mx-5");
        newDeleteBtn.textContent = "delete";
        newDeleteBtn.addEventListener('click',deleteBook);
        newBookDiv.appendChild(newDeleteBtn); 
        
        library.appendChild(newBookDiv);
        }  
    }
    const testBook1 = new Book("First Test Book", "Fred Smith", 123, false);
    myLibrary.push(testBook1);
    const testBook2 = new Book("Second Test Book", "Jenny Smith", 456, true)
    myLibrary.push(testBook2);
    displayLibrary(myLibrary);

    addBookBtn = document.getElementById("addBookBtn");
    addBookBtn.addEventListener("click", showBookForm);
    submitBookForm = document.getElementById("addBookForm");
    submitBookForm.addEventListener("submit", addBookToLibrary);
    
}
library();



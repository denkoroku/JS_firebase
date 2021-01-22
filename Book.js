
    let myLibrary = [{
        title:"First test Book",
            author: "Bob Smith",
            numPages: 234,
            haveRead:true
        },
        {
        title: "Second Test Book",
                author: "Fred Jones",
                numPages: 789,
                haveRead: false
            }
    ];

function Book(title, author, numPages, haveRead) {
    this.title = title,
    this.author = author,
    this.numPages = numPages
    this.haveRead = haveRead;
};

Book.prototype.changeRead = function (){
   console.log("changeRead function has fired");
}

addBook = document.getElementById("addBookBtn");
addBook.addEventListener("click",addBookForm);
bookForm = document.getElementById("addBookForm");
bookForm.addEventListener("submit", addBookToLibrary);

function addBookForm (e){
    bookForm.classList.add("show");
}

function addBookToLibrary(e){
    e.preventDefault(e);
    //add book to library array
    const newBook = new Book(title.value, author.value, numPages.value,haveRead.checked);
    myLibrary.push(newBook);

    //display the new book in library table
    const tableBody = document.getElementById("tableBody");
    const newTR = document.createElement("tr");
    tableBody.appendChild(newTR);
    const newTDtitle = document.createElement("td");
    newTDtitle.innerText = title.value;
    newTR.appendChild(newTDtitle);

    const newTDauthor = document.createElement("td");
    newTDauthor.innerText = author.value;
    newTR.appendChild(newTDauthor);

    const newTDnumPages = document.createElement("td");
    newTDnumPages.innerText = numPages.value;
    newTR.appendChild(newTDnumPages);

    const newTDhaveRead = document.createElement("td");
    newTDhaveRead.innerText = haveRead.checked;
    newTR.appendChild(newTDhaveRead);

    //clear and hide the form
    bookForm.reset();
    bookForm.classList.remove("show");
    }

function displayLibrary (){
    const tableBody = document.getElementById("tableBody");
    for (let i=0; i<myLibrary.length; i++) {
        const newTR = document.createElement("tr");
        tableBody.appendChild(newTR);

        const newTDtitle = document.createElement("td");
        newTDtitle.innerText = myLibrary[i].title;
        newTR.appendChild(newTDtitle);

        const newTDauthor = document.createElement("td");
        newTDauthor.innerText = myLibrary[i].author;
        newTR.appendChild(newTDauthor);

        const newTDnumPages = document.createElement("td");
        newTDnumPages.innerText = myLibrary[i].numPages;
        newTR.appendChild(newTDnumPages);

        const newTDhaveRead = document.createElement("td");
        newTDhaveRead.innerText = myLibrary[i].haveRead;
        newTR.appendChild(newTDhaveRead);
    }
};
            displayLibrary();

            
            

 
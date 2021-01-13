
    let myLibrary = [{
        title:"First test Book",
            author: "Bob Smith",
            numPages: 234,
            haveRead:"Yes"
        },
        {
        title: "Second Test Book",
                author: "Fred Jones",
                numPages: 789,
                haveRead: "Not read yet"
            }
    ];

function Book(title, author, numPages, haveRead) {
    this.title = title,
    this.author = author,
    this.numPages = numPages,
    this.haveRead = haveRead,
    this.info = function () {
        return `${title} by ${author}, ${numPages}, ${haveRead}`
        }
};

function addBookToLibrary(){
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

            const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, "not read yet");
            console.log(theHobbit.info());

 
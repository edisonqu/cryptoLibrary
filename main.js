

let myLibrary = []




function Book(title, author, pages, read){

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

   this.info = function( ){
       return (this.title +", "+ this.author+", "+this.pages+", "+ this.read)
    }
}


let theHobbit = new Book("The Hobbit","J.R.R. Tolkien", "295 pages","False")
console.log(theHobbit.info())

let title = document.getElementById("title").value
console.log(title)

function addBookToLibrary(title, author, pages, read){





}
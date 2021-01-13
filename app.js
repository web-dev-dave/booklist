//  Book Constructor
function Book(title, author, isbn) {
  this.title = title
  this.author = author
  this.isbn = isbn
}

// UI Constructor
function UI() {}

UI.prototype.addBookToList = function(book) {
  // console.log(book)
  const list = document.getElementById('book-list')

  // Create a tr element
  const row = document.createElement('tr')
  // Insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href='#' class='delete'>X</a></td>
  `
  // Add class
  row.className = 'book-item'
  // Append row to list
  list.appendChild(row)
  // console.log(row)
}

// Event Listeneres
document.getElementById('book-form').addEventListener('submit', 
function(e) {
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  // console.log(title, author, isbn)

  // Initialize book
  const book = new Book(title, author, isbn)
  // console.log(book)

  // Initialize UI
  const ui = new UI()

  console.log(ui)

  // Add book to list
  ui.addBookToList(book)

  e.preventDefault()
})
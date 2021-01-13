//  Book Constructor
function Book(title, author, isbn) {
  this.title = title
  this.author = author
  this.isbn = isbn
}

// UI Constructor
function UI() {}

UI.prototype.addBookToList = function(book) {
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

  // Append row to list
  list.appendChild(row)
}

// Show alert
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement('div')

  // Get elements
  const form = document.querySelector('.container')
  const heading = document.querySelector('h1')

  // Add class
  div.className = `alert ${className}`

  // Create text node and append to div
  div.appendChild(document.createTextNode(message))

  // Insert error above heading
  form.insertBefore(div, heading)

  // Set timeout
  setTimeout(() => {
    document.querySelector('.alert').remove()
  }, 3000)
}

UI.prototype.clearFields = function() {
  document.getElementById('title').value = ''
  document.getElementById('author').value = ''
  document.getElementById('isbn').value = ''
}

// Event Listeneres
document.getElementById('book-form').addEventListener('submit', 
function(e) {
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  // Initialize book
  const book = new Book(title, author, isbn)

  // Initialize UI
  const ui = new UI()

  // Validate
  if (title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error')
  } else {
    // Add book to list
    ui.addBookToList(book)

    // Show success
    ui.showAlert('Book has been added', 'success')
  
    // Clear fields
    ui.clearFields()
  }


  e.preventDefault()
})
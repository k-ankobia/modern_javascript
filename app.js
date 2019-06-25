// REPLACING ELEMENTS 

// Create Element
const newHeading = document.createElement('h2')

// Add id
newHeading.id = 'task-title'

// New text node
newHeading.appendChild(document.createTextNode('Task List'))

// Get the old heading
const oldHeading = document.getElementById('task-title')

// Parent
const cardAction = document.querySelector('.card-action')

// Replace
cardAction.replaceChild(newHeading, oldHeading)

//REMOVE ELEMENT 

const lis = document.querySelectorAll('li')
const list = document.querySelector('ul')


// Remove list item
lis[0].remove()

// Remove child element
list.removeChild(lis[3])

// CLASSES & ATTRIBUTES 
const firstLi = document.querySelector('li:first-child')
const link = firstLi.children[0]

// Classes 

let val 
val = link.className
val = link.classList
link.classList.add('test')
link.classList.remove('test')
// Attributes

val = link.getAttribute('href')
val = link.setAttribute('href', 'http://google.com')
val = link.hasAttribute('href')

console.log(val)


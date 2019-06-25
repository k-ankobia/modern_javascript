// create element

const li = document.createElement('li')

// Add class 
li.className = 'collection-item'

// Add attribute 
li.setAttribute('title', 'New Item')

// Create text node and append
li.appendChild(document.createTextNode('Hello World'))

// Append li as child to ul 
document.querySelector('ul.collection').appendChild(li)



// Create 'x'  new link element
const link = document.createElement('a')

// Add class 
link.className = 'delete-item secondary-content'

// Add icon HTML 
link.innerHTML = '<i class="fa fa-remove"></i>'

// Append link into li
li.appendChild(link)


console.log(li)
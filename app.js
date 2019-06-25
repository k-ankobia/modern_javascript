// DOM SELECTORS

// document.getElementById()

let val

// val = document.getElementById('task-title')

// const taskTitle = document.getElementById('task-title')

// // changing styling
// taskTitle.style.background = '#333'
// taskTitle.style.color = '#fff'
// taskTitle.style.padding = '5px'
// // taskTitle('task-title').style.display = 'none'


// // changning content 

// taskTitle.textContent = 'Task List'
// taskTitle.innerText = 'My Task'
// taskTitle.innerHTML = '<span style ="color:red"> Task List </span>'

// DOCUMENT.QUERYSELECTOR()


// console.log(document.querySelector('#task-title'))
// console.log(document.querySelector('.card-title'))
// console.log(document.querySelector('h5'))

document.querySelector('li').style.color = 'red'
document.querySelector('li:last-child').style.color = 'blue'
document.querySelector('li:nth-child(3)').style.color = 'green'
document.querySelector('li:nth-child(4)').textContent = 'Hello World'
document.querySelector('li:nth-child(odd)').style.background= '#ccc'
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'
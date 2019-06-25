const form = document.querySelector('form')
const taskInput = document.getElementById('task')
const heading = document.querySelector('h5')

// Clear input 
taskInput.value = ''
// form.addEventListener('submit', runEvent)

// Keydown
// taskInput.addEventListener('keydown', runEvent)

// Keyup
// taskInput.addEventListener('keyup', runEvent)

// Keypress
taskInput.addEventListener('keypress', runEvent)

function runEvent(e){
  // e.preventDefault()

  console.log(`EVENT TYPE: ${e.type}`)

  heading.innerText = e.target.value
  // Get the task input
  // console.log(taskInput.value)
  console.log(e.target.value)
}

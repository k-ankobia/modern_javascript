// EVENT LISTENERS 

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   e.preventDefault()

//   console.log('Hello World')
// })

document.querySelector('.clear-tasks').addEventListener('click', onClick)

function onClick(e){
  e.preventDefault()
  // console.log('Hello World')

  let val 
  
  // event target element 
  val = e.target.className
  val = e.target.classList

  e.target.innerText = 'Hello'
  


  console.log(val)
}
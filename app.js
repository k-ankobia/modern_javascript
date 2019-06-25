// Function Declartion with defaults

// function greet(firstname = 'john', lastname = 'Doe') {
//   return `Hello ${firstname} ${lastname}`
// }

// console.log(greet('richard', 'dickson'))


// USING CONST TO DECLARE FUNCTIONS
// const multiply = function(x = 2)  {
//   return x * x
// }
// console.log(multiply())

// ES6 DECLARATION 

// const add = (x =2 ) => {
//   return x + x 
// }

// console.log(add())


// IMMEDIATELY INVOKABLE FUNCTION EPRESSIONS - IFFES

// (function(name){
//   console.log('IFFE Ran...' + name)
// })('kwaku');

// PROPERTY METHODS FOR OBJECTS

const todo = {
  add: function() {
    console.log('Add todo...')
  }, 
  edit: function(id){
    console.log(`Edit todo ${id}`)
  }
}

todo.delete = function() {
  console.log('Delte todo...')
}

todo.add()
todo.edit(2)
todo.delete()

console.log(todo)
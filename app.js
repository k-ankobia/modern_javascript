// Function Declartion with defaults

function greet(firstname = 'john', lastname = 'Doe') {
  return `Hello ${firstname} ${lastname}`
}

console.log(greet('richard', 'dickson'))

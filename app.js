//SCOPE 

// global score 

var a = 1 
let b = 2
const c = 3 

// FUNCTION SCOPE
// function test() {
//   var a = 4 
//   let b = 5
//   const c = 6 
//   console.log('Function scope: ', a, b, c)
// }

// test()

// BLOCK SCOPE 
// if(true) {
//   // Block Scope 
//   var a = 4 
//   let b = 5
//   const c = 6
//   console.log('If scope: ', a, b, c)
// }

for(let a = 0; a < 10; a++) {
  console.log(`${a}`)
}
console.log('Global scope: ', a, b, c)

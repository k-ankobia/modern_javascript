// Arrays

let numbers = [32,43,234,23,234,4]
let val

console.log(numbers)

numbers.sort(function(x, y){
  return y - x  
})


// find functions 
function under50(num) {
  return num < 50
}

val = numbers.find(under50)

console.log(numbers)
console.log(val)
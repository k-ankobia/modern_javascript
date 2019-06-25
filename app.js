// LOOP AND ITERATIONS 


// FOR LOOP 

// for(let i = 0; i < 10; i ++){
//   if( i === 2){
//     console.log("2 is the magic number") 
//     continue
//   } 
//   if (i === 5) {
//     console.log("stop the loop")
//     break
//   }
//   console.log('Number ' + i)
// }


// WHILE LOOP

// let i = 0 

// while (i < 10) {
//   console.log('Number ' + i)
//   i++
// }


// DO WHILE

// let i = 0 

// do {
//   console.log('Number ' + i)
//   i++
// }

// while(i < 10)

// LOOP THROUGH ARRAYS 

// const cars = ['ford', 'honda', 'chevvy', 'mercedes' ]

// for(let i = 0; i < cars.length; i++) {
//   console.log(cars[i])
// }

// FOR EARCH LOOP THROUGH ARRAYS 

const cars = ['ford', 'honda', 'chevvy', 'mercedes' ]

// cars.forEach(function(car, index, array){
//   console.log(`${index} : ${car}`)
//   console.log(array)
// })

// cars.forEach( car => {
//   console.log(car)
// });

// MAP 

// const users = [
//   {id:1, name:'john'},
//   {id:2, name: 'bismark'},
//   {id:3, name: 'richard'}
// ]

// const ids = users.map(function(user){
//   return user.name
// })

// console.log(ids)


// FOR IN LOOP 
// wwhere x will give the keys 

const user = { 
  firstName : 'John',
  lastName : 'Bismark',
  age : 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`)
}
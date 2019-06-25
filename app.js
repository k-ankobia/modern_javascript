// Object Literals
const person =  {
  firstName : 'steve',
  lastName : 'john',
  email : 'steve@gmail.com',
  city : 'miami',
  age : 30,
  getBirthYear : function(){
    return 2017 - this.age
  },
  hobbies : ['football', 'wrestling']

}

val = person.hobbies[1]
val = person.getBirthYear()



console.log(val)

const people = [
  {name: 'john', age: 30},
  {name: 'mike', age: 33},
  {name: 'nancy', age: 40}
]

for(let i = 0; i < people.length; i++) {
  console.log(people[i].name)
}

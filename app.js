// document.getElementsByClassName

// let items = document.getElementsByClassName('collection-item')
// console.log(items[0])
// items[0].style.color = 'red'
// items[3].textContent = 'Hello World'


// const listItems = document.querySelector('ul').getElementsByClassName('collection-item')

// console.log(listItems)

//document.getElementByTagName

// let lis = document.getElementsByTagName('li')
// // console.log(lis[0])
// lis[0].style.color = 'red'
// lis[3].textContent = 'Hello World'

// console.log(lis)
// // Convert HTML Collection into array
// lis = Array.from(lis)

// lis.reverse()

// lis.forEach(function(li) {
//   console.log(li.className)
//   li.textContent = 'Hello'
// })
// console.log(lis)

// QUERYSELECTORALL
// this produces a nodelist

const items = document.querySelectorAll('ul.collection li.collection-item')
console.log(items)

items.forEach(function(item) {
    item.textContent = 'Test'
  })

  const liOdd = document.querySelectorAll('li:nth-child(odd')
  const liEven = document.querySelectorAll('li:nth-child(even')

liOdd.forEach(function(li) {
  li.style.background = '#ccc'
})

for(let i =0; i < liEven.length; i++){
  console.log('test')
  liEven[i].style.background = '#f4f4f4'
}

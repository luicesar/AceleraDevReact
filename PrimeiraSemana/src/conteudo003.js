//Default Function Parameters
function add(x=5, y=7) {
  return (x+y);
}
console.log(add(), add(12, 15));

function test(word1='Hello', word2) {
  return `${word1} there, ${word2}!`
}
console.log(test(), test('Hi', 'Bunny'));

//Destructuring Assignment
var [firstItem, fifthItem] = ['Carrots', 'Carrot Bits', 'Grass', 'Berries', 'Papaya', 'Apples'];
console.log(firstItem, fifthItem)
console.log()

// Wohoo! Let’s try some more! Which item in the array will this get?
var [firstItem,,guessThisItem,,fifthItem] = ['Carrots', 'Carrot Bits', 'Grass', 'Berries', 'Papaya', 'Apples'];
console.log(firstItem, guessThisItem, fifthItem)
console.log()

const {cost, title, type} = {
  cost: 3.99,
  title: 'Ice Cream Flavors',
  type: ['chocolate', 'vanilla', 'caramel', 'strawberry', 'watermelon']
}
console.log(cost, title, type[2]) 
console.log()

const iceCream = {
  cost: 3.99,
  name: 'Ice Cream Flavors',
  type: ['chocolate', 'vanilla', 'caramel', 'strawberry', 'watermelon']
}
const sushi = {
  cost: 5.99,
  name: 'Sushi Combinations',
  type: ['Eel Roll', 'Philadelphia Roll', 'Spicy Salmon Handroll', 'Rainbow Roll', 'Special Roll']
}
const fruit = {
  cost: 1.99,
  name: 'Fruits', 
  type: ['cherry', 'watermelon', 'strawberry', 'cantaloupe', 'mangosteen']
}
function favThings({cost, name, type}) {
  var randomNum = Math.floor((Math.random() * 4) + 1);
  console.log(`Bunny loves her ${name}! She especially loves ${type[randomNum]} for only $${cost}!`);
}
favThings(iceCream)
favThings(sushi)
favThings(fruit)
console.log()

var aboutEdward = {
  info: ['Edward', 30],
  favColor: 'blue',
  favSushiRoll: 'Squidy squid squid'
}
function profilePage({favColor} = {favColor: 'vintage pink'}, [name, age] = ['Bunny', 24]) {
  console.log(`My name is ${name}. I am ${age} years old and my favorite color is ${favColor}!`)
}
profilePage();
profilePage(aboutEdward, aboutEdward.info);
console.log();

//Repeat strings without using your own algorithm
console.log('Bunny'.repeat(3), 'Bunny'.repeat(2.5));
console.log();

//node src/conteudo003.js
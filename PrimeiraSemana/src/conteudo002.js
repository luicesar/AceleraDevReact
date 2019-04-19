// Arrow functions
const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
materials.map(material => {
  console.log(`A palavra ${material} tem ${material.length} caracteres.`);
});
console.log("");

// Desestruturação (destructuring) dentro da lista de parâmetros também é suportado
var f = ([a, b] = [1, 2], { x: c } = { x: a + b }) => a + b + c;
console.log(f());
console.log("");

function Person() {
  var that = this;
  that.age = 0;

  setTimeout(function growUp() {
    that.age++;
  }, 1000);
}
console.log(new Person());
console.log("");

//Invocação por call
var adder = {
  base: 1,

  add: function(a) {
    var f = v => v + this.base;
    return f(a);
  },

  addThruCall: function(a) {
    var f = v => v + this.base;
    var b = {
      base: 2
    };

    return f.call(b, a);
  }
};
console.log(adder.add(1)); // Deve logar 2
console.log(adder.addThruCall(0)); // Deve logar 2 ainda
console.log("");

// Funcao normal
const falar = function(palavra) {
  console.log(palavra);
};

// Funcao normal
const somar = function(num1, num2) {
  return num1 + num2;
};

//Arrow Functions
const somar2 = (num1, num2) => num1 + num2;
const mediaLouca = (soma, num) => {
  soma++;
  num++;
  return soma / num;
};

falar("imprimindo ....");
console.log(somar2(1, 2), mediaLouca(10, 5));

//Arrow Functions: Avancado
const animal = (nome, grunido) => nome + grunido();
console.log(animal("Cachorro1", () => " Latido1"));
console.log(
  animal("Cachorro2", function() {
    return " Latido2";
  })
);
console.log("");

//Ordem de análise
let callback;
callback = callback || function() {}; // ok
callback = callback || (() => {}); // ok

var simple = valor => (valor > 15 ? "SIM" : "NAO");
console.log(simple(16));
console.log("");

//Spread Operators
var squirrelNames = [
  "Lady Nutkins",
  "Squirrely McSquirrel",
  "Sergeant Squirrelbottom"
];
var bunnyNames = ["Lady FluffButt", "Brigadier Giant"];
var animalNames = ["Lady Butt", squirrelNames, "Juicy Biscuiteer", bunnyNames];

// Para achatar esse array, precisamos de outro passo:
var flattened = [].concat.apply([], animalNames);
console.log(flattened);
console.log("");

//Math.max
var values = [25, 50, 75, 100];
console.log(Math.max(25, 50, 75, 100)); // => 100
console.log(Math.max(...values)); // => 100
console.log("");

function myFunction(x, y, z) {
  console.log("Somando: ", x + y + z);
}
var args = [1, 2, 3];
myFunction(...args);
console.log("");

//Generators
function* callMe() {
  yield "1";
  yield "…and a 2";
  yield "…and a 3";
  return;
  yield "this won’t print";
}
var anAction = callMe();
console.log(anAction.next());
console.log(anAction.next());
console.log(anAction.next());
console.log(anAction.next());
console.log(anAction.next());
console.log("");

//Generators are super useful when it comes to asynchronous functions calls.
// Bunny precisa fazer compras para a festa de aniversário de sua amiga.
var groceries = "";

// Vamos criar três funções que precisam ser chamadas para o Bunny.
var buyCarrots = function() {
  groceries += "carrots";
};

var buyGrass = function() {
  groceries += ", grass";
};

var buyApples = function() {
  groceries += ", and apples";
};

// Bunny está com pressa, então você tem que comprar as compras dentro de um certo período de tempo!
// Este é um exemplo de quando você usaria um timer com um Generator.
// Primeiro armazene as funções dentro de um array:
var buyGroceries = [buyCarrots, buyGrass, buyApples];

// Em seguida, percorra a matriz dentro de um Generator:
// Existem alguns problemas ao fazer isso com o forEach, recriar isso usando um loop for.
function* loopThrough(arr) {
  for (var i = 0; i < arr.length; i++) {
    yield arr[i]();
  }
}

// adiciona a matriz de três funções à função loopThrough.
var functions = loopThrough(buyGroceries);

// Por fim, defina a hora que você deseja pausar antes da próxima chamada de função
// usando o método setInterval (chama uma função / expressão após um tempo definido específico).
var timedGroceryHunt = setInterval(function() {
  var functionCall = functions.next();
  if (!functionCall.done) {
    console.log(`Bunny bought ${groceries}!`);
  } else {
    clearInterval(timedGroceryHunt);
    console.log(
      `Thank you! Bunny bought all the ${groceries} in time thanks to your help!`
    );
  }
}, 1000);

//node src/conteudo002.js

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

//node src/conteudo002.js

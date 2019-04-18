// Template literals
const pessoa = {
    nome: 'Luis',
    cargo: 'Programador de Sistemas'
}
console.log(`O Sr. ${pessoa.nome} é ${pessoa.cargo}`)

//Spread
let planetas = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno']
let novosPlanetas = [...planetas]
console.log(novosPlanetas)

//REST
const herois = ['Batman', 'Thor', 'Homem-Aranha', 'Hulk']
const [Batman, Thor, ...rest] = herois
console.log(...rest)

//Arrow Function
const nomes = ['Luis', 'Cesar', 'Rafaela', 'Maria', 'Benedita', 'João'].map(
    nome => nome.toUpperCase()
);
console.log(nomes)

//Map: arrays de objetos
const houseStark = [
    { id: 1, name: 'Luis Cesar' },
    { id: 2, name: 'Rafaela Silva' },
    { id: 3, name: 'Maria Fernanda' },
    { id: 4, name: 'Benedita Pereira' },
    { id: 5, name: 'João Dito' },
]
const allHouseStark = houseStark.map(
    house => house.name.toLowerCase()
)
console.log(allHouseStark)

//Filter
const numeros = [1, 5, 3, 6, 8, 9]
const numerosPares = numeros.filter((valor, index, numeros) => {
    return valor % 2 === 0;
})
console.log(numerosPares)

//Reduce
const meuArray = [1, 2, 3, 4]
const soma = meuArray.reduce((prevValue, currentValue, index, meuArray) => {
    return prevValue + currentValue;
}, 0)
console.log("A soma: " + soma)

//Promises
const tempo = time => new Promise(
        (resolve) => setTimeout(resolve(time), reject())
);
tempo(3000).then( (tempo) => console.log(tempo + ' segundos'));

//node src/conteudo001.js
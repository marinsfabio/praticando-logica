// 1. PAR OU IMPAR:

// - De acordo com o input do usuario (number), printar se eh Par ou Impar
// - Se input nao for um numero, printar "Nao eh um numero"

const readline = require('readline-sync');

let inputUsuario = readline.question('Digite um numero: ')

inputUsuario % 2 === 0 ? console.log('par') : console.log('impar')

// if (inputUsuario % 2 === 0) {
//   console.log('par')
// } else {
//   console.log('impar')
// }

console.log(Number(inputUsuario))
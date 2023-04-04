// VALIDADOR DE MAIOR-IDADE

// - O club Jaspion quer um programa que facilite checagem de idade por ID
// - O programa deve receber 3 inputs do usuario com um ano de nascimento, mes de nascimento, dia de nascimento
// - De acordo com esses dados, o programa deve printar: AUTHORIZADO ou BARRADO sendo que para ser authorizado
//   o visitante deve ter ao menos 18 anos de idade

const readline = require('readline-sync');

let anoAtual = 2023
let diaAtual = 4
let mesAtual = 4

console.log('Bem-vindo(a)')

let anoNascimento = readline.question('Ano de nascimento: ')
let mesNascimento = readline.question('Mês de nascimento: ')
let diaNascimento = readline.question('Dia de nascimento: ')


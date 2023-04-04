// 2. PEDRA PAPEL E TESOURA SO QUE USUARIO NUNCA GANHA

// - Crie um jogo de pedra papel ou tesoura
// - Pege input do usuario
// - De acordo com o input garanta que o programa SEMPRE VENÇA

const readline = require('readline-sync')

let inputUsuario = readline.question('Pedra, Papel ou Tesoura? \n')

// console.time('switch')
// switch(inputUsuario) {
//   case 'pedra':
//     console.log('Papel \n voce perdeu')
//     break
//   case 'papel':
//     console.log('Tesoura \n voce perdeu')
//     break
//   case 'tesoura': 
//   console.log('Pedra \n voce perdeu')
// }
// console.timeEnd('switch')

console.time('if')
if(inputUsuario === 'pedra') {
  console.log('Papel \n voce perdeu')
} else if(inputUsuario === 'papel') {
  console.log('Tesoura \n voce perdeu')
} else if(inputUsuario === 'tesoura'){
  console.log('Pedra \n voce perdeu')
} else (
  console.log('Jogue novamente')
)
console.timeEnd('if')
console.log(inputUsuario)
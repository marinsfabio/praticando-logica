// 4. QUANTOS DIAS ME RESTAM DE VIDA

// - Buscar qual a expectativa media de vida: 76
// - Permitir o usuario a entrar sua idade atual: 31
// - Calcular quantos dias de vida o usuario ainda tem considerando que: 76(dias)-31(dias)

// 1. Ignore anos "leap": 365 como padrao pra calculos
// 2. Printar quantos dias a pessoa JAH viveu
// 3. Printar quantos dias a pessoa AINDA vivera caso morra com a media

const readline = require('readline-sync')

let idadeMedia = 76
let diasMedia = idadeMedia * 76

let idadeUsuario = readline.question('Qual sua idade? ')

let idadeEmdias = idadeUsuario * 365

let diasRestante = idadeEmdias - diasMedia

console.log(`Viveu ${idadeEmdias} dias ate o momento`)
console.log(`Restam ${diasRestante} dias ate sua morte`)
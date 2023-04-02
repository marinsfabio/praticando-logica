// const inputDoUsuario = require("readline-sync");

//  Avaliando com console.log()
// console.log(typeof console); // type object
// console.log(console); // see the methods available

// console.assert(1 ** 2 === 0, "IMPAR");

// console.time("trackMyLog");
// console.log("TICKING");
// console.timeEnd("trackMyLog");

// Strings e Numbers
// console.log("Sou uma string");

// console.log("Sou\numa\nstring");
// console.log("\tSou uma string");

// console.log(typeof "eu amo comer");

// console.log(typeof "10"+"10");

// console.log(Number ("10"));

// console.log(typeof Number ("10"));

// console.log(Number("23bottles"));

// const anoNascimento=2000;
// console.log(anoNascimento);

// let sobrenome="gabriele";
// console.log(sobrenome);
// sobrenome="uesugi";
// console.log(sobrenome);

// const primeiroNumero=2;
// const segundoNumero=5;
// const adicao=primeiroNumero+segundoNumero;
// const subtracao=primeiroNumero-segundoNumero;
// console.log(adicao);
// console.log(subtracao);


// joão fez 3 provas, 1 - 5.3,  2 - 4.8, 3 - 6.9, media 7.5
// subir media do joão ate passar e retornar x vezes que subiu ate aprovar


let provaOne = 5.3
let provaTwo = 4.8
let provaThree = 6.9
console.log(`prova 1: ${provaOne}`)
console.log(`prova 2: ${provaTwo}`)
console.log(`prova 3: ${provaThree}`)
let media = ((provaOne + provaTwo + provaThree) / 3).toFixed(1)
let mediaGeral = parseInt(media)
console.log(`sua media das provas foi de ${media}`)

console.log('Voce tera que realizar 4 trabalhos de recuperação!\n')

let trabalhoOne = 10
let trabalhoTwo = 9.3
let trabalhoThree = 7.7
let trabalhoFour = 8.0
let mediaTrabalhos = ((mediaGeral + trabalhoOne + trabalhoTwo + trabalhoThree + trabalhoFour) / 4 ).toFixed(1)
let mediaGeralTrabalhos = parseInt(mediaTrabalhos)
console.log(`media geral de 4 trabalhos foi de ${mediaTrabalhos}`)
console.log(`trabalho 1: ${trabalhoOne}`)
console.log(`trabalho 2: ${trabalhoTwo}`)
console.log(`trabalho 3: ${trabalhoThree}`)
console.log(`trabalho 4: ${trabalhoFour}`)
console.log('Parabéns você foi muto bem nos trabalhos de recuperação!!!\n')

let resultado = ((mediaGeral + mediaGeralTrabalhos) / 2).toFixed(1)

console.log(`Resultado: a media das provas e dos trabalhos foi de ${resultado}`)
console.log('Voce realizou 3 provas durante o semestre e 4 trabalhos para a recuperação\n')

if (resultado >= 7.5) {
    console.log('Parabéns você está APROVADO')
} else {
    console.log('infelizmente reprovou')
}
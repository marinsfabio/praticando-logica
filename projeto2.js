// PROJETO:

// Jogo MadLibs Console Interface:
// Eh um jogo para criancas que ensina pronome, adjetivo, verbos, etcs...
// Com uma historia PRE Estabelecida, a crianca preenche campos que seram insertados na historia
// Seu objetivo eh criar um programa que aceita ao menos 5 inputs do usuario, e
// printa a historia utilizando os inputs, ela deve estar entre " " e implementar "pular linha".

// DICAS:
// 1- Utilize pacote READLINE
// 2- Peguem TODOS os inputs primeiro, antes de printar a historia
// 3- Pode utilizar quantos console.log() voce queira

// Diferenciais:
// Executar operacoes (matematicas) com almenos um dos inputs
// PARSE (Number(), String()) ao menos um campo

// TEMPLATE STORIA UM
// "[pronome] Passeava pelo parque quando um [adjetivo] passaro pousou em sua cabeca. Apos [verbo] muito, voltou para
// [substantivo] onde contou tudo pra sua mae, como recomendou Popis"

// Certo dia, eu estava [verbo no gerúndio] no parque quando vi um [animal] [verbo no gerúndio] no lago. 
// Fiquei [adjetivo] e comecei a [verbo] em direção a ele. Quando cheguei perto, percebi que era um [objeto] 
// [verbo no passado] no lago! Fiquei [emoção] e corri para chamar a equipe de resgate. No final, tudo deu certo e o 
// [animal] foi resgatado com segurança.

const readline = require("readline-sync");

console.log('Bem vindo ao MadLibs\n')
let verboGerundio = readline.question('Digite um verbo gerundio (exemplo: andando, correndo, falando): ')
let animal = readline.question('Digite o nome de um animal: ')
let adjetivo = readline.question('Digite um adjetivo (exemplo: qualidade, defeito): ')
let verbo = readline.question('Digite um verbo: ')
let obj = readline.question('Digite um objeto: ')
let verboPassado = readline.question('Digite um verbo no passado : ')
let emotivo = readline.question('Digite uma emoção: ')

console.log('\n')
console.log(`Certo dia, eu estava ${verboGerundio} no parque quando vi um ${animal} ${verboGerundio} no lago.
Fiquei ${adjetivo} e comecei a ${verbo} em direção a ele. Quando cheguei perto, percebi que era um ${obj}
${verboPassado} no lago! Fiquei ${emotivo} e corri para chamar a equipe de resgate. No final, tudo deu certo e o
${animal} foi resgatado com segurança.`)

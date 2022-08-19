import chalk from 'chalk';
import readlineSync from 'readline-sync';

let quem = readlineSync.question ('Quem quer comprar?');
let oQue = readlineSync.question ('O que você quer comprar?');
let paraQue = readlineSync.question ('Qual o motivo da sua compra?');

console.log ( 'Como' + (chalk.green(quem)) + 'eu desejo comprar ' + (chalk.red(oQue)) + (chalk.blue ( paraQue)  );

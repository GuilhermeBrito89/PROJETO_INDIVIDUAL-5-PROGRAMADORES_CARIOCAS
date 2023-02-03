import readlineSync from "readline-sync"
import chalk from "chalk";

const verde = chalk.green

const propriedades = [];
let input = "";

while (input != "sair") {
    propriedades.push(input);//push é uma adiçao que é feita
    input = readlineSync.question("Digite uma propriedade do CSS:").toLocaleLowerCase();
}

console.log(verde(propriedades.sort().join("\n")));/* o sort ordena os elementos em ordem alfabetica e o join
 junta todos os elementos da array em uma string e retorna esta string.*/
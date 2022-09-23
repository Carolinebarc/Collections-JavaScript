import PromptSync = require('prompt-sync');

const prompt = PromptSync()

function adicionar    (list) {
const position = list.length;
const produto = prompt('Digite o novo item: ');
list[position] = produto;
console.log(`\n${produto} Adicionou o item na lista!`);

}

export { adicionar }
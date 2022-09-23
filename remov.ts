import { Mostrar } from './Mostrar';
import PromptSync = require('prompt-sync');

const prompt = PromptSync()

function Remov    (list) {
    Mostrar
    const positionText = prompt('Qual elemento vocêquer excluir?: ')
    const position = Number(positionText) - 1
    list.splice(position, 1);
}

export { Remov }
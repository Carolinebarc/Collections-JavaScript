import { deposito } from "./deposito";
import { mostrarCardapio } from "./cardapio";
import PromptSync = require('prompt-sync');
import { adicionar } from "./adicionar";
import { mostrar } from "./Mostrar";
import { Remov } from "./Remov";

const prompt = PromptSync()
let list : string [] = []
let option = 0

do {
    console.clear();
    mostrarCardapio();
    console.log();
    option = Number(prompt('Escolha uma opção: '))

    switch (option) {
        case 1:
            addToList(list);
            break;
        case 2:
            Remov(list);
            break
        case 3:
        mostrar(list)
        Remov(list)
        addToList(list)
            break
        case 4:
            mostrar(list);
            break
        case 5:
            console.log('Finalizando.');
            
        default:
            console.log('NOT FOUND!')
            break;
    }
    prompt(' > ENTER para continuar.')
    }while (option != 5);
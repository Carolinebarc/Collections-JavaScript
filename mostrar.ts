function mostrar(list) {
    console.log('*Listagem completa do depósito *\n');
    for (let i = 0; i < list.length; i++) {
        console.log(`${i + 1} - ${list[i]}`);
    }
    
}

export { mostrar }
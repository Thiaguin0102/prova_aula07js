const listaDeNomes = []

while (true){
    const escolha = prompt('1- Adicionar  2- Filtrar  3- Buscar  4-Transformar  5-Verificar');
    
    if (escolha === '1'){
        const nomeAdd = prompt('Digite o nome que deseja adicionar:')
        listaDeNomes.push(nomeAdd)
    
    }else if (escolha === '2'){
        const letra_escolhida = prompt('Digite a letra inicial de um nome:').toUpperCase()
        const nomes_com_letraEscolhida = listaDeNomes.filter(e=>e[0] === letra_escolhida)
        console.log(`Nomes somente com a letra ${letra_escolhida}:
            ${nomes_com_letraEscolhida}`)
            break
    
    }else if (escolha === '3'){
        const nome_buscar = prompt('Qaul nome vc deseja procurar?')
        const nome_buscado = listaDeNomes.find( e => e === nome_buscar)
        nome_buscado ? console.log(`O nome encontrado foi: ${nome_buscado}`) : console.log(`Nome ${nome_buscar} não foi encontrado`)
        break

    }else if (escolha === '4'){
        const nomes_tranformados = listaDeNomes.map(e=>e.toLocaleUpperCase())
        console.log(listaDeNomes)
        console.log(`Nomes Transformados: ${nomes_tranformados}`) 
        break
    }else if (escolha === '5'){
        const verificar_nomes = listaDeNomes.every(e => e.length > 3)
        verificar_nomes ? console.log('Todos os nomes tem mais de 3 caracteres') : console.log('Algum nome tem meno de 3 caracteres')
        break
    }else{
        alert('Digite apenas os números de 1 a 5')
    }
}




function calcularTotal (itens) {
    let total =  1
0
    for (let i = 0; i < itens.lenght; i++){
        total += itens[i].preco
    }

    //aplica desconto de fidelidade
    //antes de retornar o valor final

    return total
}

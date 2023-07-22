// Verificação do valor da comissão
function calcular() {// Declaração das Variáveis
    let valorProduto = parseFloat(document.getElementById("valor").value)
    let nome = document.getElementById("nome").value

    if(valorProduto <= 4000) {
        let comissao = valorProduto * 6;
        alert("A comissão do vendedor " + nome + " é: R$" + comissao)
    }else if (valorProduto > 4000) {
        let comissao = valorProduto * 12;
        alert("A comissão do vendedor " + nome + " é: R$" + comissao)
    }
}
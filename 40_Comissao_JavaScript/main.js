// Verificação do valor da comissão
function calcular() {// Declaração das Variáveis
    let valorProduto = parseFloat(document.getElementById("valor").value)
    let nome = document.getElementById("nome").value

    if(valorProduto <= 5000) {
        let comissao = valorProduto * 0.05;
        alert("A comissão do vendedor " + nome + " é: R$" + comissao)
    }else if (valorProduto > 5000) {
        let comissao = valorProduto * 0.10;
        alert("A comissão do vendedor " + nome + " é: R$" + comissao)
    }
}
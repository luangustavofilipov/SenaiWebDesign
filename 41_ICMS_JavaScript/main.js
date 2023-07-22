function calcular() {
// Declaração da Variáveis
let valorProduto = parseFloat(document.getElementById("valor").value)
let estado = document.getElementById("estado").value
let nome = document.getElementById("nome").value

// Condicionais
if (estado == "SP") {
    let valorICMS = valorProduto * 0.18
    alert(nome + " o valor do prduto com ICMS aplicado no estado de SP é: R$" + valorICMS)
}

if (estado == "RS") {
    let valorICMS = valorProduto * 0.12
    alert(nome + " o valor do prduto com ICMS aplicado no estado de RS é: R$" + valorICMS)
}

if (estado == "BA") {
    let valorICMS = valorProduto * 0.07
    alert(nome + " o valor do prduto com ICMS aplicado no estado de BA é: R$" + valorICMS)
}
}
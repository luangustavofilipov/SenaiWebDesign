// Declarar a variável
let idade = Number(prompt("Informe a sua idade:"))

// Verificações de Idade
if (idade >= 16 || idade < 17) {
    alert("Voto opcional")
}
    else if (idade <= 70) {
        alert("Voto obriagtório!")
    }

    else if (idade > 70) {
        alert("Voto opcional!")
    }
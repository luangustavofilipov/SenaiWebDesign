// Declaração de Variáveis
let operador = prompt("Informe a operação: ")
let numero1 = Number(prompt("Informe o primeiro número: "))
let numero2 = Number(prompt("Informe o segundo número: "))

// Verifica a operação selecionada
if(operador == "+") {
    let resultado = numero1 + numero2
    alert("A soma de " + numero1 + " e " + numero2 + " é: " + resultado + ".")
}
if(operador == "-") {
    let resultado = numero1 - numero2
    alert("A subtração de " + numero1 + " e " + numero2 + " é: " + resultado + ".")
}
if(operador == "/") {
    let resultado = numero1 / numero2
    alert("A divisão de " + numero1 + " e " + numero2 + " é: " + resultado + ".")
}
if(operador == "*" || operador == "x") {
    let resultado = numero1 * numero2
    alert("A multiplicação de " + numero1 + " e " + numero2 + " é: " + resultado + ".")
}
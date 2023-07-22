function calculo(){
    let nome = document.getElementById("nome").value;
    let p = parseFloat(document.getElementById("p").value);
    let a = parseFloat(document.getElementById("a").value);

    let resultado = p / (a * a);

    alert("O IMC de " + nome + " é: " + resultado);
}
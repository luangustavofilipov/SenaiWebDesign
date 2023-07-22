function somar() {
    let n1 = parseFloat(document.getElementById("n1").value)
    let n2 = parseFloat(document.getElementById("n2").value)
    let n3 = parseFloat(document.getElementById("n3").value)
    let soma = n1 + n2 + n3

    alert("A soma entre " + n1 + ", " + n2 + " e " + n3 + " é: " + soma)
}
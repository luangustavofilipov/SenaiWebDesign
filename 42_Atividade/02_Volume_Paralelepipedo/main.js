function calcular() {
    let a = parseFloat(document.getElementById("a").value)
    let b = parseFloat(document.getElementById("b").value)
    let l = parseFloat(document.getElementById("l").value)
    let volume = a * b * l

    alert("O volume do paralelepípedo é: " + volume)
}
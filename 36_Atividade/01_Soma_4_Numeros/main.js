
function soma() {
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var n3 = parseInt(document.getElementById("n3").value);
    var n4 = parseInt(document.getElementById("n4").value);

    var soma = n1 + n2 + n3 + n4;

    alert("A soma de " + n1 + "," + n2 + "," + n3 + "," + n4 + " é: " + soma + ".");

}
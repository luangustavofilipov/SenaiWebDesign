function media() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    var media = (nota1 + nota2 + nota3)/3;

    if(media >= 7)
        if(media == 10)
            alert("Parabéns! Aprovado com perfeição! Média " + media);
        else
            alert("Parabéns, aprovado com média " + media);
    else
        alert("Reprovado! Média " + media);
}
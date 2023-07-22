function calculo(){
    let b1 = parseFloat(document.getElementById("b1").value);
    let b2 = parseFloat(document.getElementById("b2").value);
    let a = parseFloat(document.getElementById("a").value);

    let resultado = ((b1 + b2) * a) / 2;

    alert("A área do trapézio é: " + resultado);
}
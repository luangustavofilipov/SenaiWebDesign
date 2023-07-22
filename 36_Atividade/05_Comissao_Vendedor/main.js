function calculo(){
    let p = parseFloat(document.getElementById("p").value);
    let c = parseFloat(document.getElementById("c").value);

    let resultado = p * c;

    alert("A comissão é: " + resultado);
}
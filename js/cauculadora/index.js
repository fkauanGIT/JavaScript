

function exibir(x, y){
    let p = document.createElement("p")
    p.innerHTML = 
    "O seu número é:  " + x + ", " + y + "<br>" +
    " O dobro é: " + mult(x, y) + "<br>" +
    " A metade é: " + metade(x, y) 

    document.body.appendChild(p);
}

function inicio(){
    let x = prompt("Digite seu Primeiro número: ")
    let y = prompt("Digite seu segundo número: ")
    x = parseFloat(x)
    y = parseFloat(y)
    exibir(x, y)
}

function mult(x, y){
    let valor = x * y
    return valor
}
function metade(x, y){
    let valor = x / y
    return valor
}


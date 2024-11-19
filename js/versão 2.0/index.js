

function exibir(nome){
    let p = document.createElement("p")
    p.textContent = "Olá, " + nome + " É um prazer te conhecer!";

    document.body.appendChild(p);
}

function inicio(){
    let nome = prompt("Digite seu nome: ")
    alert(nome)
    exibir(nome)
}


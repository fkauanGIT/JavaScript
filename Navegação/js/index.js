const paginas = {
    "inicio": "<h1>Início</h1><p>Seja muito bem vindo ao seu site de finaças</p>",
    "sobre": "<h1>sobre</h1><p>Conheça nosso projeto</p>",
    "servicos": "<h1>serviços</h1><p>veja nosso serviços</p>",
    "contato": "<h1>contato</h1><p>Entre em contato</p>"
};

let conteudo = document.getElementById("conteudo");

function navegarPara(pagina){
    conteudo.innerHTML = paginas [pagina]
}
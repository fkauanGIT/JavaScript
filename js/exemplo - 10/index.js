function clicou(botao) {
    const paragrafo = document.createElement('p');
    
    paragrafo.textContent = "CLICOU NO BOTÃO " + botao.textContent;

    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = ""; 
    mensagemDiv.appendChild(paragrafo); 
}

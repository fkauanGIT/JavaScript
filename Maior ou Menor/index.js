function clique() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    const mensagemDiv = document.querySelector(".mensagem"); 

    if (num1 > num2) {
        mensagemDiv.textContent = "O " + num1 + " é maior que o " + num2;
    } else if (num1 < num2) {
        mensagemDiv.textContent = "O " + num2 + " é maior que o " + num1;
    } else {
        mensagemDiv.textContent = "Os dois números são iguais";
    }
};
document.getElementById("send").addEventListener("click", clique);

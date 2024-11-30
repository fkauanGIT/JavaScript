let number = parseInt(document.getElementById("new").textContent);

function colors(){
    if(number < 0){
        document.getElementById("new").style.color = "red";
    }else if(number > 0) {
        document.getElementById("new").style.color = "green";
    } else{
        document.getElementById("new").style.color = "white";
    }

    return;
};

document.getElementById("diminuir").addEventListener("click", function(){
    number--;
    document.getElementById("new").textContent = number;

    colors();
});

document.getElementById("aumentar").addEventListener("click", function(){
    number++;
    document.getElementById("new").textContent = number;

    colors();
});

document.getElementById("reset").addEventListener("click", function(){
    number = 0;
    document.getElementById("new").textContent = number;
    
    colors();
});
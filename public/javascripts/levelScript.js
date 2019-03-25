console.log(document.title);


window.onload = function(){

    function randomNum(min, max){
        return Math.floor(Math.random() * (+max - +min)) + +min
    }

    let questionBox = document.getElementById("questionBox");

    if(document.title === "Easy"){
        questionBox.innerText = "What is "+ randomNum(1, 6)+ "+" + randomNum(1, 6);
    }else if(document.title === "Medium"){
        questionBox.innerText = "What is "+ randomNum(10, 21)+ "+" + randomNum(10, 21);
    }else if(document.title === "Hard"){
        questionBox.innerText = "What is "+ randomNum(50, 101)+ "+" + randomNum(50, 101);
    }

};
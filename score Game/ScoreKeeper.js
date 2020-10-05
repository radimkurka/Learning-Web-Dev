var P1button = document.querySelector("#p1");
var P2button = document.querySelector("#p2");
var Resetbutton = document.querySelector("#reset");
var P1display = document.querySelector("#span1");
var P2display = document.querySelector("#span2");
var P1score = 0;
var P2score = 0;
var gameOver = false;
var numInput = document.querySelector("#goal");
var goalCounter = document.querySelector("#goalCounter");


P1button.addEventListener("click", function(){
    if(!gameOver){
        P1score++;
        if(P1score == winningScore) {
            gameOver = true;
            P1display.classList.add("winner");
            P2display.classList.add("loser");
            alert("Game over!!!");
        }
        P1display.textContent = P1score;
    }    
});

P2button.addEventListener("click", function(){
    if(!gameOver){
        P2score++;
        if(P2score == winningScore) {
            gameOver = true;
            P2display.classList.add("winner");
            P1display.classList.add("loser");
            alert("Game over!!!");
        }
        P2display.textContent = P2score;
    }
});

Resetbutton.addEventListener("click", function(){
    if(gameOver){
        P1score = 0;
        P2score = 0;
        P2display.textContent = P2score;
        P1display.textContent = P1score;
        P1display.classList.remove("winner", "loser");
        P2display.classList.remove("winner", "loser");
        gameOver = false;
    }
});

numInput.addEventListener("change", function(){
    goalCounter.textContent = numInput.value;
    winningScore = numInput.value; 
});
document.querySelector("h1").addEventListener("click", dice);

function dice(){
    randomNumber1=Math.floor(Math.random()*6+1);
    document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");

    randomNumber2=Math.floor(Math.random()*6+1);
    document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");

    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="✌Player 1 Wins!<br>Click Here to Play Again!";
    }
    else if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML="✌Player 2 Wins!<br>Click Here to Play Again!";
    }
    else{
        document.querySelector("h1").innerHTML="🎮Draw!<br>Click Here to Play Again!";
    }
}
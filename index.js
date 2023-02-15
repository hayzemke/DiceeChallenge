// Dicee 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png"; // dice1 -> dice 6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);

// Dicee 2

var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


// Title
if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = " 🚩Player one wins!";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player two wins! 🚩";
}
else if(randomNumber1 === randomNumber2)
{
    document.querySelector("h1").innerHTML = "Draw!";
}

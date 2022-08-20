var rNum1 = Math.floor(Math.random() * 6) + 1;
var rImg = "dice" + rNum1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", rImg);
var rNum2 = Math.floor(Math.random() * 6) + 1;
var rImg2 = "dice" + rNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", rImg2);

if (rNum1 > rNum2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!!";
} else if (rNum1 < rNum2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!!";
} else {
    document.querySelector("h1").innerHTML = "Draw!!!"
}
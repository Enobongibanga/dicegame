

const randomNumber1 = Math.floor(Math.random() * 6) + 1
let randomDice1 = "images/dice" + randomNumber1 + ".png"
document.querySelector(".img1"). setAttribute("src", randomDice1 )

const randomNumber2 = Math.floor(Math.random()* 6) + 1
document.querySelector(".img2"). setAttribute("src", `images/dice${randomNumber2}.png`)


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML= "🚩PLAYER 1 WON"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩PLAYER 2 WON"

}
else {
    document.querySelector("h1").innerHTML = "DRAW"
}
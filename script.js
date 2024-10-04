const deck = [{ name: "King of Hearts", value: 10, pic: "KH.png", },
{ name: "Qween of Hearts", value: 10, pic: "QH.png", },
{ name: "jack of Hearts", value: 10, pic: "JH.png", },
{ name: "Ace of Hearts", value: 11, pic: "AH.png", },
{ name: "Two of Hearts", value: 2, pic: "2H.png", },
{ name: "Three of Hearts", value: 3, pic: "3H.png", },
{ name: "Four of Hearts", value: 4, pic: "4H.png", },
{ name: "Five of Hearts", value: 5, pic: "5H.png", },
{ name: "Six of Hearts", value: 6, pic: "6H.png", },
{ name: "Seven of Hearts", value: 7, pic: "7H.png", },
{ name: "Eight of Hearts", value: 8, pic: "8H.png", },
{ name: "Nine of Hearts", value: 9, pic: "9H.png", },
{ name: "Ten of Hearts", value: 10, pic: "10H.png", },

{ name: "King of Diamonds", value: 10, pic: "KD.png", },
{ name: "Qween of Diamonds", value: 10, pic: "QD.png", },
{ name: "jack of Diamonds", value: 10, pic: "JD.png", },
{ name: "Ace of Diamonds", value: 11, pic: "AD.png", },
{ name: "Two of Diamonds", value: 2, pic: "2D.png", },
{ name: "Three of Diamonds", value: 3, pic: "3D.png", },
{ name: "Four of Diamonds", value: 4, pic: "4D.png", },
{ name: "Five of Diamonds", value: 5, pic: "5D.png", },
{ name: "Six of Diamonds", value: 6, pic: "6D.png", },
{ name: "Seven of Diamonds", value: 7, pic: "7D.png", },
{ name: "Eight of Diamonds", value: 8, pic: "8D.png", },
{ name: "Nine of Diamonds", value: 9, pic: "9D.png", },
{ name: "Ten of Diamonds", value: 10, pic: "10D.png", },

{ name: "King of Spades", value: 10, pic: "KS.png", },
{ name: "Qween of Spades", value: 10, pic: "QS.png", },
{ name: "jack of Spades", value: 10, pic: "JS.png", },
{ name: "Ace of Spades", value: 11, pic: "AS.png", },
{ name: "Two of Spades", value: 2, pic: "2S.png", },
{ name: "Three of Spades", value: 3, pic: "3S.png", },
{ name: "Four of Spades", value: 4, pic: "4S.png", },
{ name: "Five of Spades", value: 5, pic: "5S.png", },
{ name: "Six of Spades", value: 6, pic: "6S.png", },
{ name: "Seven of Spades", value: 7, pic: "7S.png", },
{ name: "Eight of Spades", value: 8, pic: "8S.png", },
{ name: "Nine of Spades", value: 9, pic: "9S.png", },
{ name: "Ten of hearts", value: 10, pic: "10D.png", },

{ name: "King of Clubs", value: 10, pic: "KC.png", },
{ name: "Qween of Clubs", value: 10, pic: "QC.png", },
{ name: "jack of Clubs", value: 10, pic: "JC.png", },
{ name: "Ace of Clubs", value: 11, pic: "AC.png", },
{ name: "Two of Clubs", value: 2, pic: "2C.png", },
{ name: "Three of Clubs", value: 3, pic: "3C.png", },
{ name: "Four of Clubs", value: 4, pic: "4C.png", },
{ name: "Five of Clubs", value: 5, pic: "5C.png", },
{ name: "Six of Clubs", value: 6, pic: "6C.png", },
{ name: "Seven of Clubs", value: 7, pic: "7C.png", },
{ name: "Eight of Clubs", value: 8, pic: "8C.png", },
{ name: "Nine of Clubs", value: 9, pic: "9C.png", },
{ name: "Ten of Clubs", value: 10, pic: "10C.png", },]

let tempDeck = JSON.parse(JSON.stringify(deck));;
function draw() {
    let index = Math.floor(Math.random() * tempDeck.length)
    let card = tempDeck[index];
    tempDeck.splice(index, 1);
    return card;
}

const compare = (x, y) => {
    score = document.getElementById("score");
    if (x > y) {
        score.innerHTML = "Computer wins"
    } else if (y > x) {
        score.innerHTML = "Player wins"
    }
    else { score.innerHTML = "Draw!" }
}

let sum1 = 0;
let sum2 = 0;
let list1 = document.getElementById("list1");
let images1 = document.getElementById("images1");
let list2 = document.getElementById("list2");
let images2 = document.getElementById("images2");

let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");


function appendCard(x, y, z) {
    let paragraph = document.createElement("p");
    let image = document.createElement("img");
    paragraph.innerHTML = z.name;
    image.src = "./cardsPictures/" + z.pic;
    x.appendChild(paragraph);
    y.appendChild(image);
}

function ng() {
    tempDeck = JSON.parse(JSON.stringify(deck));;;
    let d1Card1 = draw();
    let d1Card2 = draw();
    let d2Card1 = draw();
    let d2Card2 = draw();

    list1.innerHTML = "";
    images1.innerHTML = "";
    list2.innerHTML = "";
    images2.innerHTML = "";
    score1.innerHTML = "";
    score2.innerHTML = "";

    appendCard(list1, images1, d1Card1);
    appendCard(list1, images1, d1Card2);
    sum1 = (Number(d1Card1.value) + Number(d1Card2.value));;
    let p1 = document.createElement("p")
    p1.innerHTML = sum1;
    score1.appendChild(p1);

    appendCard(list2, images2, d2Card1);
    appendCard(list2, images2, d2Card2);
    sum2 = (Number(d2Card1.value) + Number(d2Card2.value));
    let p2 = document.createElement("p")
    p2.innerHTML = sum2;
    score2.appendChild(p2);

    compare(sum1, sum2);

}

const hit = () => {
    let d2Card3 = draw();
    appendCard(list2, images2, d2Card3);
    sum2 += Number(d2Card3.value);
    console.log(sum2)
score2.innerHTML = sum2;
if(sum2<=21){
    compare(sum1, sum2);}else{
        score.innerHTML = "Computer Wins!"
    }

}

const stand = () => {
    let d1Card3 = draw();
    appendCard(list1, images1, d1Card3);
    sum1 += Number(d1Card3.value);
    console.log(sum1)
score1.innerHTML = sum1;
if(sum1<=21){
    compare(sum1, sum2);}else{
        score.innerHTML = "Player Wins!"
    }

}



let btn = document.getElementById("ng");
btn.addEventListener("onclick", ng);

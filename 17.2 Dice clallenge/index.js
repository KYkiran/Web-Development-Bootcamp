function image1(){
    let randomNumber=Math.floor(Math.random()*6)+1;
    if (randomNumber===1) document.querySelector('.img1').setAttribute('src','images/dice1.png');
    else if (randomNumber===2) document.querySelector('.img1').setAttribute('src','images/dice2.png');
    else if (randomNumber===3) document.querySelector('.img1').setAttribute('src','images/dice3.png');
    else if (randomNumber===4) document.querySelector('.img1').setAttribute('src','images/dice4.png');
    else if (randomNumber===5) document.querySelector('.img1').setAttribute('src','images/dice5.png');
    else if (randomNumber===6) document.querySelector('.img1').setAttribute('src','images/dice6.png');
    return randomNumber
}
function image2(){
    let randomNumber=Math.floor(Math.random()*6)+1;
    if (randomNumber===1) document.querySelector('.img2').setAttribute('src','images/dice1.png');
    else if (randomNumber===2) document.querySelector('.img2').setAttribute('src','images/dice2.png');
    else if (randomNumber===3) document.querySelector('.img2').setAttribute('src','images/dice3.png');
    else if (randomNumber===4) document.querySelector('.img2').setAttribute('src','images/dice4.png');
    else if (randomNumber===5) document.querySelector('.img2').setAttribute('src','images/dice5.png');
    else if (randomNumber===6) document.querySelector('.img2').setAttribute('src','images/dice6.png');
    return randomNumber
}
a=image1();
b=image2();
if (a>b){
    document.querySelector('h1').innerHTML="🚩Player 1 Wins!"
}
else if (b>a) document.querySelector('h1').innerHTML="Player 2 Wins!🚩"
else document.querySelector('h1').innerHTML="Draw!"
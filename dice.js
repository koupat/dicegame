var randomnumber1=Math.floor(Math.random()*6)+1;
var randomimg="dice"+randomnumber1+".png";
var randomimgsrc="images/"+randomimg;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimgsrc);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimgsrc2="images/dice"+randomnumber2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimgsrc2);


if(randomnumber1>randomnumber2)
{
  document.querySelector("h1").innerHTML="Player 1 Win!"
}
else if(randomnumber1<randomnumber2)
{
  document.querySelector("h1").innerHTML="player 2 Win!"
}
else{
  document.querySelector("h1").innerHTML="Its A Tie!"
}

function myFunction(){
var r1=Math.random();
r1=Math.floor(r1*6);
var r2=Math.random();
r2=Math.floor(r2*6);
var URL=["./images/dice1.png","./images/dice2.png","./images/dice3.png",
            "./images/dice4.png","./images/dice5.png","./images/dice6.png"]

var d1=document.getElementById("P1");
d1.setAttribute("src",URL[r1]);

var d2=document.getElementById("P2");
d2.setAttribute("src",URL[r2]);

if(r1>r2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins🚩";
}
else if(r1<r2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}
else if(r1==r2)
{
    document.querySelector("h1").innerHTML="Draw!";
}
}
function playGame(){
  var randomNum1=Math.floor(Math.random()*6)+1;
  var randomNum2=Math.floor(Math.random()*6)+1;

  var randomImageSrc1="images/dice"+randomNum1+".png";
  var randomImageSrc2="images/dice"+randomNum2+".png";

  document.querySelectorAll("img")[0].setAttribute("src",randomImageSrc1);
  document.querySelectorAll("img")[1].setAttribute("src",randomImageSrc2);

  if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="🏆Player1 Wins!";
  }
  else if(randomNum2>randomNum1){
    document.querySelector("h1").innerHTML="Player2 Wins!🏆";
  }else{
    document.querySelector("h1").innerHTML="Draw!";
  }
}

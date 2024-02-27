function handelKeyUpEvent(event){
   const keyprass = event.key;


   const currentAlphabet = document.getElementById('current-alphabet')
   const alphabet = currentAlphabet.innerText;
   const finalAlphabet = alphabet.toLowerCase();

  


   if(keyprass===finalAlphabet){
      console.log('ok');

      const currentScore = document.getElementById('current-score')
      const currentScoreText = currentScore.innerText;
      const currentPoint = parseInt(currentScoreText)
      
      const newScore = currentPoint + 1;
      currentScore.innerText = newScore;


      removeBackGroundColour(finalAlphabet);
      continueGame();
     
   }
   else{
      const currentPointElement = document.getElementById('current-life')
      const currentPoint = currentPointElement.innerText;
      const point = parseInt(currentPoint);
      const newLife = currentPoint - 1 ;
      currentPointElement.innerText = newLife
      
   }
}

document.addEventListener('keyup', handelKeyUpEvent)


function continueGame (){
   const leters = randomAlphabet();

   const display =document.getElementById('current-alphabet')
   display.innerText=leters;

   setBackGroundColour(leters);
   

}




function playGame(){
   hiddenElement ('home')
   showElement ('playGround')
   continueGame ()
}



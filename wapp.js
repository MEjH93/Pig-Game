//BUTTON ROLL
document.querySelector('.btn-roll').addEventListener('click', function(){

	if(gamePlaying) {
  	var dice = 6;
    
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block'; 
    diceDOM.src ='dice-' + dice + '.png';
    console.log(dice);

    if (dice === 6 && lastDice === 6)
    {
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = 0;
            nextPlayer();
          
    } 
        else if (dice !== 1)
    {
            roundScore = roundScore + dice; 
          document.querySelector("#current-" + activePlayer).textContent = roundScore;
          lastDice = dice;
    } 
        else 
    {
            nextPlayer();
    }
    }});
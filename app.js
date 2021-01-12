

var scores, roundScore, activePlayer, gamePlaying, lastDice;
init();


//BUTTON ROLL
document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gamePlaying) {
     var dice = Math.ceil(Math.random() * 6 );

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




//BUTTON HOLD
    document.querySelector('.btn-hold').addEventListener('click', function(){
    lastDice = 0;
    //console.log("HOLD: " + lastDice);
   if(gamePlaying){
       
    scores[activePlayer] = scores[activePlayer] + roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 20) {
        var pobednik = prompt("What's your name?");
        document.querySelector('#name-' + activePlayer).textContent = pobednik + " is the Winner!";
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
        document.querySelector('.dice').style.display = 'none';
        gamePlaying = false;
    } else {
    nextPlayer();
    }
  }
})
//BUTTON NEW GAME
document.querySelector('.btn-new').addEventListener('click', init);

//          F  U  N  K  C  I  J  E

// F1
function init(){
scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;


// default 0 score everywhere

document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
            document.getElementById('name-0').textContent = 'Player 1';
            document.getElementById('name-1').textContent = 'Player 2';
                document.querySelector('.player-0-panel').classList.remove('winner')
                document.querySelector('.player-1-panel').classList.remove('winner')
                document.querySelector('.player-0-panel').classList.remove('active')
                document.querySelector('.player-1-panel').classList.remove('active')
                document.querySelector('.player-0-panel').classList.add('active')


}

//Function 2
function nextPlayer(){

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
      document.querySelector('.player-1-panel').classList.toggle('active');
      document.querySelector('.player-0-panel').classList.toggle('active');

      document.querySelector('.dice').style.display = 'none';
      lastDice = 0;
    
}


/*
GAME RULES: 
-The game has 2 players, playing in rounds
-In each turn, a player rolls a dice as many times as he wishes. 
Each result gets added to his ROUND score
-BUT, if the player rolls a 1, his ROUND score gets lost. Then it's the next player's turn
-The player can choose to "HOLD", which means that their score gets added to their OVERALL score. 
After that, it's the next player's turn.
-The first player to reach 100 points on their OVERALL score wins the game. 
*/

//document.querySelector('#current-' + activePlayer).textContent = dice;
//var x = document.querySelector('#score-0').textContent;

//Defining variables so that I can use them later and give them a value
var scores, roundScore, activePlayer, gamePlaying;

gameStart();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {

    }
    //Generate random dice roll
    var dice = Math.floor(Math.random() * 6) + 1;

    //Display dice result 
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //Update the round score IF the rolled number is not 1
    if (dice !== 1) {
        //Add score 
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next player
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        //Add CURRENT score to OVERALL score
        scores[activePlayer] += roundScore;
    
         //Update the webpage
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //Check if player won the game
    if (scores[activePlayer] >= 100) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
        gamePlaying = false;
        } else {
            //Next player 
            nextPlayer();
        }
    }
});

function nextPlayer () {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', gameStart());

function gameStart() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    var gamePlaying = true;


    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('name-0').textContent = 'Player 1';
    document.querySelector('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('Winner!');
    document.querySelector('.player-1-panel').classList.remove('Winner!');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}






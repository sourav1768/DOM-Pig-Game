/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore,activePlayer,gamePlaying,dice2,totalScore;

init();



//ocument.querySelector('#current-0').textContent = dice;




var x = document.querySelector('#score-0').textContent;
//this is a getter, we get the values

document.querySelector('#dice-1').style.display = 'none'; 
document.querySelector('#dice-2').style.display = 'none';
//changing the CSS of some element with a class 




//there are two arguements in the addEventListener function
//the events are listed on the MDN
//no paranthesis after btn,if used in addEventListener because we will not call the function
//anonymous function is a function that does not have a name, so it cannot be reused


document.querySelector('#score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';


document.querySelector('.btn-roll').addEventListener('click',function() {
   
    if(gamePlaying) {
        //Steps to do:
        //1. Generate a random number
        var dice = Math.floor(Math.random()*6)+1;
        var dice3 = Math.floor(Math.random()*6)+1;
        

        //2. Display the result

       var diceDOM = document.querySelector('#dice-1'); 
        
        diceDOM.style.display='block';
        diceDOM.src = 'dice-' + dice + '.png';
        
        var diceDOM3 = document.querySelector('#dice-2');
        diceDOM3.style.display='block';
        diceDOM3.src = 'dice-' + dice3 + '.png';
        
        if(dice == dice2) {
            document.getElementById('score-' + activePlayer).textContent = '0';
            console.log('ok');
            nextPlayer();
        }

        //3.Update the round score only if the rolled number is not 1.
        // note the difference of == and ===, the latter does type coercion
        else if((dice!==1)&&(dice3!==1)) {
            //Add score
            roundScore+=dice;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
            dice2=dice;
        }
        else {
            //Next Player
            nextPlayer();

        }
    }
    
        
});

document.querySelector('.btn-hold').addEventListener('click',function() {
   if(gamePlaying) {
       //ADD CURRENT score to global score
        scores[activePlayer] += roundScore;
        // Update the UI
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
       
       var input = document.querySelector('.final-score').value;
       
       if(!input)
           {
               input = 100;
           }
       

        //Check if the player won the game
        if (scores[activePlayer] >=input) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        }
        else {
            nextPlayer();


        }
   }
    
    
});



function nextPlayer() {
    dice2=-1;
    
     activePlayer == 0?activePlayer = 1:activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',init);



function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    dice2 = -1;
    
    gamePlaying = true;
    var x = document.querySelector('#score-0').textContent;

    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    
    
    document.querySelector('#score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    
}



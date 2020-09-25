/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundscore, activePlayer, gameplaying;

//for this we created function init//
// score = [0, 0];
// roundscore = 0;
// activePlayer = 0;

init();

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;

//for this we created function init//
// document.querySelector(".dice").style.display = "none";

// document.getElementById("score-0").textContent = "0";
// document.getElementById("score-1").textContent = "0";
// document.getElementById("current-0").textContent = "0";
// document.getElementById("current-1").textContent = "0";

//-----------------------------------------btn roll-- --------- -------------------------------- //

document.querySelector(".btn-roll").addEventListener("click", function () {
  //wriiten any thing//

  if (gameplaying) {
    //1.random numbers
    var dice = Math.floor(Math.random() * 6) + 1;

    //2.display the result
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";

    //3.update the round score if roll nnumber is not 1

    if (dice !== 1) {
      roundscore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundscore;
    } else {
      nextplayer();
    }
  }
});

//-----------------------------------------btn hold-------------------------------------//

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gameplaying) {
    //add a current score to global score

    score[activePlayer] += roundscore;

    //update the ui and next player

    document.querySelector("#score-" + activePlayer).textContent =
      score[activePlayer];

    // //next player
    // nextplayer();

    //check if player won the game

    if (score[activePlayer] >= 20) {
      document.querySelector("#name-" + activePlayer).textContent = "winner!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("winner");
      gameplaying = false;
    } else {
      //next player
      nextplayer();
    }
  }
});

//----created the function for both the next players to use -----------------//

function nextplayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundscore = 0;

  document.querySelector("#current-0").innerText = "0";
  document.querySelector("#current-1").innerText = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  nextplayer;
  document.querySelector(".dice").style.display = "none";
}
document.querySelector(".btn-new").addEventListener("click", init);

//In  this we are creating a function for new game select the new game score as same  we used for the starting once
//now we are copy the same code and paste here thats it and make the new game scores 0//

function init() {
  score = [0, 0];
  roundscore = 0;
  activePlayer = 0;
  gameplaying = true;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "player-1";
  document.getElementById("name-1").textContent = "player-2";
  document.querySelector(".player-0-panel").classList.remove("wineer");
  document.querySelector(".player-1-panel").classList.remove("wineer");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");
}

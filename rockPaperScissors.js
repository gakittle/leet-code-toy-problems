/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (n) {
  // input: number --> number of games
  // output: array of arrays, where each array is n-long sequence of rocks/papers/scissors
  // constraints: N/A
  // edge cases: N/A

  // declare solutions array
  // declare playsLeft variable = n
  // declare list of players
  // declare recursive subfunction
    // define base case - plays left = 0
    // for each option
      // push ith option into subarray
      // decrement playsLeft
      // recusive call
      // test if done
        // push subarray into solutions array
      // increment playsLeft
      // pop last play from array
  // invoke recursive function
  // return solutions array

  var allPlays = [];
  var onePlay = [];
  var playsLeft = n;
  var players = ['rock', 'paper', 'scissors'];

  var traversePlays = function() {
    if (!playsLeft) {
      return;
    }

    for (var i = 0; i < players.length; i++) {
      onePlay.push(players[i]);
      playsLeft--;
      traversePlays();
      if (playsLeft === 0) {
        allPlays.push(Array.from(onePlay));
      }
      playsLeft++;
      onePlay.pop();
    }
  }
  
  traversePlays();
  return allPlays;
}

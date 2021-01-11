const TOTALTIME = 30;   // total time for game
const TIMEPENALTY = 2; // penalty in seconds for wrong answer
var penalty = false; // penalty flag 
var user = { initials: '', score: 0 };

var correctAnswer = ''; //Button number of qArr[i].solution
var qIndex = -1; // index to qArr

var timeLeft = 5; // countdown varible
var timesUp = false;
var gameOver = false;
var currentScore = 0;

// each question is an object in an array
// in the file questions.js of the form:
// const questions = [
//   {
//     q: 'Where is JavaScript code placed?',
//     a: 'inside the html <head> element',
//     b: 'inside the html <body> element',
//     c: 'Inside a <script> tag',
//     d: 'In a file named \'script\'',
//     solution: 'c'
//   }]

function finishGame() {
  answerDivEl.innerHTML = '';
  console.log('finishing game');
  gameOver = true;
  if (timesUp) mainPromptEl.textContent =
    `Time's Up. Your score is ${currentScore} out of ${qArr.length}`;
  else {
    mainPromptEl.textContent =
      `Congratulations! Your score is ${currentScore} out of ${qArr.length}`;
    
  }
}


//****************************************
// FUNCTION nextQuestion (index) 
// Accepts the index to an array of question objects
// Places each of the four answer strings on a button
// attaches an event listener
// and recursively calls the next question on each button

// revision - remove passed index & drive questions here
//**************************************** 
function nextQuestion() {
  // increment question number
  qIndex++;
  console.log(`after increment qIndex is: ${qIndex} qArr.length is ${qArr.length}`)
  if (qIndex >= qArr.length) {
    gameOver = true;
    finishGame();
    return; 
  }

  // clear div and display the question
  answerDivEl.innerHTML = '';
  mainPromptEl.innerHTML = '';
  mainPromptEl.textContent = qArr[qIndex].q;

  // Create answer buttons  
  var Button1El = document.createElement('button');
  Button1El.textContent = qArr[qIndex].opt1;
  Button1El.setAttribute("class", "qbtn");
  Button1El.id = '1';
  Button1El.addEventListener("click" , function () {
    if (Button1El.id == qArr[qIndex].solution) {
      penalty = false;
      currentScore++;
      answerFeedbackEl.textContent = `Correct! Your score is ${currentScore}`;
    } else {
      penalty = true;
      answerFeedbackEl.textContent = `Wrong. ${qArr[qIndex].solution} Your score is ${currentScore}`;
    }
    nextQuestion(); // call nextQ after done
  });

  var Button2El = document.createElement('button');
  Button2El.textContent = qArr[qIndex].opt2;
  Button2El.id = '2';
  Button2El.setAttribute("class", "qbtn");
  Button2El.addEventListener("click" , function() { 
    if (Button2El.id == qArr[qIndex].solution) {
    penalty = false;
    currentScore++;
    answerFeedbackEl.textContent = `Correct! Your score is ${currentScore}`;
  } else {
    penalty = true;
    answerFeedbackEl.textContent = `Wrong. ${qArr[qIndex].solution} Your score is ${currentScore}`;
  }
    nextQuestion(); 
  });

  var Button3El = document.createElement('button');
  Button3El.textContent = qArr[qIndex].opt3;
  Button3El.id = '3';
  Button3El.setAttribute("class", "qbtn");
  Button3El.addEventListener("click" , function() {  
  if (Button3El.id == qArr[qIndex].solution) {
    penalty = false;
    currentScore++;
    answerFeedbackEl.textContent = `Correct! Your score is ${currentScore}`;
  } else {
    penalty = true;
    answerFeedbackEl.textContent = `Wrong. ${qArr[qIndex].solution} Your score is ${currentScore}`;
  }
    nextQuestion(); 
  });
  
  var Button4El = document.createElement('button'); 
  Button4El.textContent = qArr[qIndex].opt4;
  Button4El.setAttribute("class", "qbtn");
  Button4El.id = '4';
  Button4El.addEventListener("click" , function() {  
  if (Button4El.id == qArr[qIndex].solution) {
    penalty = false;
    currentScore++;
    answerFeedbackEl.textContent = `Correct! Your score is ${currentScore}`;
  } else {
    penalty = true;
    answerFeedbackEl.textContent = `Wrong. ${qArr[qIndex].solution} Your score is ${currentScore}`;
  }
    nextQuestion(); 
  });
  
// Display question buttons in answer Div
  answerDivEl.append(Button1El, Button2El, Button3El, Button4El);


}

//**********************************
//FUNCTION getSavedScore
//retrieves saved user initials and score
// from local storage (if any)
// and displays
//**********************************
function getSavedScore (){
  user.initials = localStorage.getItem("user-initials", initials);
  user.score = localStorage.getItem("user-score", score);
  if (!user.initials || !user.score)
    return; 
  savedScoreEl.textContent = `${user.initials} + ${user.score}`;
  console.log('saved score:' + savedScoreEl.textContent);
}
  
function saveScore() {
   
  user.score = currentScore.toString; // xxxxxx whatever it's called
  // Get the user input
  // for debug we will assign this ANON
  // user.initials = document.querySelector('#user-initialsxxx').value;

  user.initials = 'ANON';
  localStorage.setItem("user-initials", user.initials);
  localStorage.setItem("user-score", user.score);


}

//****************************************** 
// FUNCTION startGame ()
//****************************************** 
// Start the clock
// --for each tick, decrement time left
// --subtract penalty, if any
// --if timer <= 0 call finishGame()
// CALL nextQuestion ()
//******************************************
function startGame() {
  timeLeft = TOTALTIME;
  timesUp = false;
  
  var gameClock = setInterval(function () {
    --timeLeft;
    timerEl.textContent = ' ' + timeLeft;
    if (penalty) {
      timeLeft -= TIMEPENALTY;
      penalty = false;
    }
    // set flag if time is up
    // otherwise update clock on screen
    if (timeLeft <= 0) {
      timesUp = true;
      clearInterval(gameClock);
      finishGame();
    } else if (gameOver) {
      console.log('clearing interval gameOver');
        clearInterval(gameClock);
    }
}, 1000);
  
  nextQuestion();

} //startGame ********************************


// ***********************************************
// *********** PAGE LOAD 
//************************************************

// Attach start button
var startBtnEl = document.querySelector('#start-btn');

// attach text spans
var savedScoreEl = document.querySelector('#savedscore');
var timerEl = document.querySelector('#timeleft');
var mainPromptEl = document.querySelector('#start-prompt');
var answerFeedbackEl = document.querySelector('#feedback');
var answerDivEl = document.querySelector('#answerdiv');


//******** LISTEN FOR START ************** */

mainPromptEl.textContent = 'Click Start to Begin Timed Quiz';
answerFeedbackEl.textContent = '';
startBtnEl.addEventListener("click", function () {
  startBtnEl.remove();
  startGame();
});



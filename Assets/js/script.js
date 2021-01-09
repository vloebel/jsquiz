var startBtnEl = document.querySelector('#start-btn');

var timeLeft = 30; // 30 seconds to take quiz
const timePenalty = 10; // 10 seconds penalty for wrong answer

var user = { initials: 'vl', score: 999 };
var currentScore = 0;

// questions are in quiz-question.js
// each question is an object in an array
// of the form:
// const questions = [
//   {
//     q: 'Where is JavaScript code placed?',
//     a: 'inside the html <head> element',
//     b: 'inside the html <body> element',
//     c: 'Inside a <script> tag',
//     d: 'In a file named \'script\'',
//     ans: 'c'
//   }]




// Display next question and score answer

// var questionText = document.querySelector("#nextQuestion")
// for (const nextQ of questions) {
//   //get question and options
//   questionText.value = nextQ.q;
//   optiona.value = nextQ.a;
//   optionb.value = nextQ.b;
//   optionc.value = nextQ.c;
//   optiond.value = nextQ.d;
  // wait for button press
  
  // test answer
  // if (userAnswer == nextQ.ans)
  // output correct and increment score //

    //output wrong and deduct time penalty//

// end loop through questions


function countdown(timeLeft) {
  

  // TODO: Use the `setInterval()` method to call a function 
  // to be executed every 1000 milliseconds (to tick down currentClock)
  // 
 
  var timeInterval = setInterval(function () {
  
    if (timeLeft) {
      timerEl.textContent = 'Time remaining: ' + timeLeft + ' second' + (timeLeft == 1 ? '!' : 's');
      timeLeft--;
    }
    else {
      timerEl.textContent = 'K A B O O M';
      //  stop the timer
      clearInterval(timeInterval);
      // display has to go here or it will run before the clock
      displayMessage ();
    }
  }, 1000);
}

//******** LISTEN FOR START ************** */

var startPromptEl = document.querySelector('#start-prompt');
var nextQuestionEL = document.querySelector('#next-question');

// run the game in a loop

  startPromptEl.textContent = 'Click Start to Begin Timed Quiz';
 
startBtnEl.addEventListener("click", function () {
  
  nextQuestionEL.textContent = qArr[0].q;


    // Run the game
    // Output the score
    //  nextQuestionEL.textContent = (`Your score was ${currentScore}`);
    // ask for initials
  });





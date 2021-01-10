const TOTALTIME = 10;   // total time for game
const TIMEPENALTY = 5; // penalty in seconds for wrong answer
var penalty = false; // penalty flag 
var user = { initials: '', score: 0 };

var correctAnswer=''; //Button number of aQrr[i].solution

var timeLeft = 5; // countdown varible
var gameOver = false;

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
//****************************************** 
// FUNCTION startGame ()
//****************************************** 
// Start the clock
// --for each tick, decrement time left
// --subtract penalty, if any
// --if timer <= 0 set gameOver flag
// CALL runGame ()
//******************************************
function startGame() {
  timeLeft = TOTALTIME;
  var gameClock = setInterval(function () {
    --timeLeft;
    timerEl.textContent = ' ' + timeLeft;
    console.log('time left: ' + timeLeft);
    if (penalty) {
      timeLeft -= TIMEPENALTY;
      penalty = false;
    }
    // set flag if time is up
    // otherwise update clock on screen
    if (timeLeft <= 0) {
      gameOver = true;
      clearInterval(gameClock);
      console.log('timeLeft ran out');
    }
}, 1000);
  
  runGame();

} //startGame



// Clear the screen
// display the next question and response buttons
// wait for user to click button
// check whether answer was correct
// display "correct" or "wrong" at bottom of quiz
// if wrong, set penalty flag to deduct time from clock
// if time is not up, advance to next question

//****************************************
// FUNCTION configureButton (buttonElement) 
// adds uniform style to the argument button
// and attaches an event listener
// WHEN one of the buttons is clicked
// 
//**************************************** 


function configureButton(elem){
  elem.setAttribute('style',
    'display:block; color: black; margin: auto; text-align: center;'
  );

  elem.addEventListener("click", function() {                          
    if (elem.id == correctAnswer) {
      ++user.score;
      answerFeedbackEl.textContent = 'Correct! Current score: ' + user.score;
      elem.setAttribute('style',
        'display:block; color: blue;background:yellow; margin: auto; text-align: center;'
      );
    } else {
      penalty = true;
      answerFeedbackEl.textContent = 'Sorry, wrong. Current score: ' + user.score;
      elem.setAttribute('style',
      'display:block; color: red;  margin: auto; text-align: center;'
      );
    }
    
  });  //addEventListener
} // configure button

//****************************************
// FUNCTION nextQuestion (index) 
// Accepts the index to an array of question objects
// Places each of the four answer strings on a button
// calls configureButon to style button and 
// attach an event listener
// and then appends them to the DOM
//**************************************** 
function nextQuestion(j) {
  
  var answerDivEl = document.querySelector('#answerdiv');
  correctAnswer = qArr[j].solution;

  // display the question
  mainPromptEl.textContent = qArr[j].q;

  // attach question to each button
  // call configureButton to style the buttons
  // and wait for click
  
  opt1El.textContent = qArr[j].opt1; 
  configureButton(opt1El);
  
  opt2El.textContent = qArr[j].opt2;
  configureButton(opt2El);

  opt3El.textContent = qArr[j].opt3;
  configureButton(opt3El);

  opt4El.textContent = qArr[j].opt4;
  configureButton(opt4El);

// Display question buttons in answer Div
  answerDivEl.append(opt1El, opt2El, opt3El, opt4El);


//Remove event listeners here? test with button 1
opt1El.removeEventListener("click", function () {
  console.log('removing event listner from button ' + opt1El.id);

}); //removeEventListener from button that was clicked

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
 
//*************************** */
// FUNCTION runGame()
// builds the questions
function runGame() {
  // remove the start button
  startBtnEl.remove();
  // TO DO retrieve LAST saved score and initials 
  // from local storage and display on screen


  //ask the next question 
  for (var i = 0; i < 1; i++) {
    nextQuestion(i);
    console.log('Back in the for loop');

  }
  
 
}





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

// Create answer buttons for quiz but don't display yet
var opt1El = document.createElement('button');
var opt2El = document.createElement('button');
var opt3El = document.createElement('button');
var opt4El = document.createElement('button');

//questions will appear on buttons
// Button id indicates which answer is picked
opt1El.id = '1';
opt2El.id = '2';
opt3El.id = '3';
opt4El.id = '4';





//******** LISTEN FOR START ************** */

mainPromptEl.textContent = 'Click Start to Begin Timed Quiz';
answerFeedbackEl.textContent = '';
startBtnEl.addEventListener("click", function () {
  startGame()
});

// anything else here will run before the quiz, so....
 




// -1- Make an array of question objects
// -2- make a timer that counts down throughout the quiz
// -- save the time when a question is submitted
// -- if next question is correct, reset timer to saved value
// -3- Set up loop to display qeustions
// -4- Set up html & css to display questions
// -5- link js to html buttons

var questions = [
  {
    q: 'Where is JavaScript code placed?',
    a: 'inside the html <head> element',
    b: 'inside the html <body> element',
    c: 'Inside a <script> tag',
    d: 'In a file named \'script\'',
    ans: 'c'
  },
  { q: 'What is the result of the following code: \n return(is_string("Type me"))',
    a: 'Console output\: "Type me"',
    b: 'True',
    c: 'Boolean',
    d: 'Syntax error',
    ans: 'b'
  },
  
  { q: 'Assuming min < max, how do you generate a random integer between min and max (inclusive)',
    a: 'Math.floor(Math.random() * (max - min + 1) + min);',
    b: 'Math.floor(Math.random() * (max - min) + min);',
    c: 'Math.floor(Math.random() * (min - max) + 1);',
    d: 'Math.floor(Math.random() * (max) + min);',
    ans: 'a'
  },

  { q: 'How do you access the last element in an array?',
    a: 'array.last',
    b: 'array[length]',
    c: 'array[array.length]',
    d: 'array[array.length-1]',
    ans: 'd'
}
{ q: 'Which of the following is not a valid test?))',
    a: 'if !Null',
    b: 'if (apples & oranges)',
    c: 'if (!True)',
    d: 'if (a = b)',
    ans: 'b'
  }

];

// Create variables for user initials and high score
var user = { initials = 'vl', score= 1000 };
var currentScore = 0;

// Listen for start button
// Display next question and score answer

var questionText = document.querySelector("#nextQuestion")
for (const nextQ of questions) {
  //get question and options
  questionText.value = nextQ.q;
  optiona.value = nextQ.a;
  optionb.value = nextQ.b;
  optionc.value = nextQ.c;
  optiond.value = nextQ.d;
  // wait for button press
  
  // test answer
  if (userAnswer == nextQ.ans)
  // output correct and increment score //
  else
    //output wrong and deduct the time//

}// end loop through questions


//***********MAIN PROGRAM ************** */

var startButton = document.querySelector('#startBtn');
var quizText = document.querySelector("#nextQuestion");

//// **************** Listen for start button

// output final score
// prompt save of high score and initials to localStorage 
// restart game

alert (`Final score is ${userScore}`);



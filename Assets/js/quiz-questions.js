// An array of question objects
// for the javascript quiz

const qArr = [
  {
    q: 'Where is JavaScript code placed?',
    opt1: 'inside the html <head> element',
    opt2: 'inside the html <body> element',
    opt3: 'Inside a <script> tag',
    opt4: 'In a file named \'script\'',
    solution: 3
  },
  { q: 'What is the result of the following code: \n return(is_string("Type me"))',
    opt1: 'Console output\: "Type me"',
    opt2: 'True',
    opt3: 'Boolean',
    opt4: 'Syntax error',
    solution: 2
  },
  
  { q: 'Assuming min < max, how do you generate a random integer between min and max (inclusive)',
    opt1: 'Math.floor(Math.random() * (max - min + 1) + min);',
    opt2: 'Math.floor(Math.random() * (max - min) + min);',
    opt3: 'Math.floor(Math.random() * (min - max) + 1);',
    opt4: 'Math.floor(Math.random() * (max) + min);',
    solution: 1
  },

  { q: 'How do you access the last element in an array?',
    opt1: 'array.last',
    opt2: 'array[length]',
    opt3: 'array[array.length]',
    opt4: 'array[array.length-1]',
    ans: 4
},
{ q: 'Which of the following is not a valid test?))',
    opt1: 'if !Null',
    opt2: 'if (apples & oranges)',
    opt3: 'if (!True)',
    opt4: 'if (a = b)',
    solution: 2
  }]


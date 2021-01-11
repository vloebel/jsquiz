# 04 Web APIs: Code Quiz
## University of Arizona Bootcamp  
## January 10, 2021
### Vicky Loebel

[vloebel.github.io/jsquiz](https://vloebel.github.io/jsquiz/) 

**Modification History**  
TBD: add retrieval of high score and save user initials to local storage
* Added fn to end game and display results
* Added CSS  to style generated buttons
* Made question fn recursive for multiple questions
* Added fn to build question & answer buttons, attach event listeners, and score answers
* Initalized question object array, added Game timer
* Set up HTML & basic CSS

## Overview
This application presents a timed, browser-based JavaScript quiz in the form of multiple-choice questions. It must feature dynamically updated HTML and CSS, make use of localStorage, and be mobile-responsive.

## Requirements
* Start button starts timer and presents first question
* When answer is submitted: 
  * If the answer is wrong, time penalty is subtracted from the clock.
  * The next question appears

* When all the question are answered  
OR timer reaches 0
* Display final score
  * User can save initials and score
  * Game ends

## Mockup

The following animation demonstrates the application functionality:

![code quiz](./Assets/04-web-apis-homework-demo.gif)


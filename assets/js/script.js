//js code for quiz.html 

/* I have used the tutorial from:
https://www.youtube.com/watch?v=PBcqGxrr9g8
as a base for the quiz
*/
//add to load questions from json file
async function loadQuestions() {
  const response = await fetch('./questions.json');
  const questions = await response.json();
  return questions;
}

//Wrapped entire code in an async function,to be able to use 'await' to load the questions
(async () => {
  let questions = await loadQuestions();

 


// Global variables, list
let newQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10); // shuffles question array and picks first 10 items from it.
let questionHeader = document.getElementById('question-header'); //question
let answerArea = document.getElementById('answer-area'); // holding all answers, button per answer
let nextQuestion = document.getElementById('next-btn'); // button to go to next question
let currentQuestionIndex = 0;
let time = setInterval(showTimer, 1000); //showTimer(); , 1000 miliseconds for each second
let min = 0; // showTimer();
let sec = 0; //showTimer();
let checkLeaderBoard = document.getElementById('leaderboard'); // used to manipulate leaderboard 
let leaderBoard = document.getElementById('highscore-container'); //used to manipulate leaderboard

//LIST OF FUNCTIONS

/**
 * A function to show and run timer 
 * for the player to see how long it took to take the quiz
 * function called soon as user clicks START button
 * interval called every 1000miliseconds / every sec
 * then when sec = 60, the fucntion will add a minute and start sec again
 */

//https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz used for help with building the timer.
//last example, reversed and counted up rather than count-down

function showTimer(time) {
  document.getElementById('timer').innerHTML = `${min} : ${sec}`;
  if (currentQuestionIndex < newQuestions.length) {
    sec++;
  } else {
    clearInterval(time);
  }
  if (sec == 60) {
    sec = 0;
    min++;
  }
}
/**
 * Main function called as soon as user clicks on START button from index page
 * starts of with question index 0
 * sets navigation buttons inner text to 'next'
 * then calls showQuestion function 
 */
function runGame() {
  currentQuestionIndex = 0;
  checkLeaderBoard.style.display = 'none';
  leaderBoard.style.display = 'none';
  document.getElementById('score-area').style.display = 'block';
  nextQuestion.innerHTML = 'NEXT';
  showQuestion();
}

/** Function to stop answers from multiple questions to pile on each other: 
 * it will remove answers from previous question 
 * in order to replace them later with new answers for new question
 */
function initialState() {
  while (answerArea.firstChild) {
    answerArea.removeChild(answerArea.firstChild);
  }
}
/**
 * Function showing question and question number in header/ question area 
 * remove next button before answer is selected
 * getting current question from randomly selected newQuestion array
 * question number to be displayed in front of a question which is an array index plus 1
 * text content for the question number is then set 
 * and show answers function called
 */
function showQuestion() {
  nextQuestion.style.display = 'none';
  if (currentQuestionIndex > 0) {
    initialState();
  }
  let currentQuestion = newQuestions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionHeader.textContent = `${questionNumber}.${currentQuestion.question}`;
  showAnswers();
}

/**
 * Function to show answers against each question = showing answer's first property(text) values
 * add a button for each answer to be displayed
 * collecting dataset from the value of second property(correct)
 * event listener to answer buttons, which then calls select and check answer function when button is clicked
 */
function showAnswers() {
  let currentQuestion = newQuestions[currentQuestionIndex];
  currentQuestion.answers.forEach(answer => {
    let answerButton = document.createElement('button');
    answerButton.innerHTML = answer.text;
    answerButton.classList.add('btn-answer');
    answerArea.appendChild(answerButton);
    if (answer.correct) {
      answerButton.dataset.correct = answer.correct;
    }
    answerButton.addEventListener('click', selectAndCheckAnswer);

  });
}

/**
 * 
 * Function validating if the answer clicked by user is true or false
 * Then adding classes to show correct/incorrect answer/this was distinguished by color
 * depending on answer either correct or wrong score will be incremented
 * Then answer buttons disabled to not allow choosing second answer
 * once answer is selected the 'next' button will show
 */
function selectAndCheckAnswer(event) {
  let selectedAnswer = event.target;
  let correctAnswer = selectedAnswer.dataset.correct === 'true';
  if (correctAnswer) {
    selectedAnswer.classList.add('correct-answer');
    incrementCorrectAnswerCount();
  } else {
    selectedAnswer.classList.add('incorrect-answer');
    incrementWrongAnswerCount();
  }
  Array.from(answerArea.children).forEach(button => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct-answer');
    }
    button.disabled = true;
  });

  nextQuestion.style.display = 'block';
}

/*As in previous function the nextQuestion button has been displayed,
event listener to it has been applied*/
nextQuestion.addEventListener('click', () => {
  if (currentQuestionIndex < newQuestions.length) {
    handleNextQuestion();
  } else {
    runGame();
  }
});

/**
 * question index incremented by 1
 * if incremented index is less than randomly picked array's length
 * showQuestion(); function will be called
 * otherwise showTotalScore(); function will be called
 */
function handleNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < newQuestions.length) {
    showQuestion();
  } else {
    showTotalScore();
  }
}

/**
 * incrementing the number of correctly answered questions
 * getting the number from a span in html doc and incrementing it by one
 */
function incrementCorrectAnswerCount() {
  let correctScore = parseInt(document.getElementById("add-correct-score").innerText);
  document.getElementById("add-correct-score").innerText = ++correctScore;
}
//for both increment functions I have used love maths project for help
/**
 * incrementing the number of incorrectly answered questions
 * getting the number from a span with wrong answers and incrementing it by one
 */
function incrementWrongAnswerCount() {
  let incorrectScore = parseInt(document.getElementById("add-incorrect-score").innerText);
  document.getElementById("add-incorrect-score").innerText = ++incorrectScore;
}

// FOLLOWING FUNCTIONS/CODE DEALS WITH TOTAL SCORE PAGE AND LEADERBOARD

/* for help with building a leaderboard I have used:
https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68
&
https://www.youtube.com/watch?v=o3MF_JmQxYg&list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF&index=7  
(videos7,8,9)
*/


//add event listener for the button encouraging user to view leaderboard.The button will call the showLeaderBoard function
/*checkLeaderBoard.addEventListener('click', showLeaderBoard);*/

checkLeaderBoard.addEventListener('click', () => {
  if (showLeaderBoard() === false) {
    showLeaderBoard();
  } else if (showLeaderBoard() === true) {
    showTotalScore();
  }
});

/**
 * current correct score will be taken and used in final messege
 * get item from local storage / username previously provided 
 * question header will now be set as a message including the username correct score and time taken to complete quiz
 * timer (min and sec) and incremented scores will be set back to zero
 * next button will be displayed and set to try again which will take a user back to rungame
 * leaderBoardButton function will be called
 */
function showTotalScore() {
  initialState();
  let correctScore = document.getElementById('add-correct-score').innerHTML;
  localStorage.setItem('correctScore', correctScore);
  let username = localStorage.getItem('name');
  questionHeader.innerHTML = ` ${username} you answered correctly ${correctScore} out of ${newQuestions.length} questions in ${min} min : ${sec} sec!`;
  nextQuestion.innerHTML = 'Try again!';
  nextQuestion.style.display = 'block';
  document.getElementById('add-correct-score').innerHTML = 0;
  document.getElementById('add-incorrect-score').innerHTML = 0;
  document.getElementById('score-area').style.display = 'none';
  sec = 0;
  min = 0;
  leaderBoardButton();
}

/**
 * This function although very simple,
 *  helps with giving the user an option of viewing leaderboard if they want to
 * it sets the div and the button held within the div from display='none' to display='block'
 * as the add event listener has been set above, it means that if user clicks on the button
 * it will show the leaderboard by calling showLeaderBoard function.
 * If user doesn't want to view it they will still have an option of clicking 'try again' from previous function
 */
function leaderBoardButton() {
  checkLeaderBoard.style.display = 'block';
  leaderBoard.style.display = 'block';
}
/**
 * please note I have added the same comments against most of the lines of code for this function, for ease of understanding
 * This function will show the username and total score from local storage
 * changing the heading of the leaderboard once user clicks on the button to open as per previous function
 * getting and displying a list which will later hold usernames and scores
 * getting username from local storage, previously stored with setItem
 * getting total correct score from local storage
 * getting high scores from local storage, if nothing to return it has an option of displaying empty array instead:
 * score object, creating an array
 * from highest to lowest score
 * and getting first 10 items
 * setting previously called list into HTML
 * iterating through the score object and returning <li> element for each
 * map method allows us to convert the array into list element with the help of template literal
 * the empty join string will convert the returned array back into a string
 * 
 */
function showLeaderBoard() {
  checkLeaderBoard.innerHTML = 'WIZARDS:'; //changing the heading of the leaderboard once user clicks on the button to open as per previous function
  let highScoresList = document.getElementById('highscore-list'); //getting and displying a list which will later hold usernames and scores
  highScoresList.style.display = 'block';
  const username = localStorage.getItem('name'); //getting username from local storage, previously stored with setItem
  const correctScore = localStorage.getItem('correctScore'); //getting total correct score from local storage.
  const highScores = JSON.parse(localStorage.getItem('highScores')) || []; // getting high scores from local storage, if nothing to return it has an option of displaying empty array instead:
  let score = {
    score: correctScore,
    name: `${username}`
  }; //score object, creating an array 
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score); //from highest to lowest
  highScores.splice(10); //and getting first 10 items 
  localStorage.setItem('highScores', JSON.stringify((highScores)));
  //setting previously called list into HTML
  highScoresList.innerHTML = highScores //iterating through the score object and returning <li> element for each
    .map(score => { // map method allows us to convert the array into list element with the help of template literal
      return `<li class='high-scores'>${score.name}-${score.score}</li>`;
    })
    .join(''); //the empty join string will convert the returned array back into a string
}



runGame();
console.log(JSON.parse(questions));
})();
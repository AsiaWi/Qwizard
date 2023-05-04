// Variable holding all quiz questions
let questions = [{
    question: 'What goes up and down but can\'t move?',
    answers: [{
        text: 'A staircase',
        correct: true
      },
      {
        text: 'A lift',
        correct: false
      },
      {
        text: 'Age',
        correct: false
      },
    ]
  },
  {
    question: 'What’s something that can be broken but never held?',
    answers: [{
        text: ' Trust',
        correct: false
      },
      {
        text: ' A promise',
        correct: true
      },
      {
        text: 'A glass',
        correct: false
      },
    ]
  },
  {
    question: 'What word is spelled incorrectly in every single dictionary?',
    answers: [{
        text: 'Incorrectly',
        correct: true
      },
      {
        text: 'Misspel',
        correct: false
      },
      {
        text: 'Nauseous',
        correct: false
      },
    ]
  },
  {
    question: 'If two\’s company and three’s a crowd, what do four and five make?',
    answers: [{
        text: 'A strike',
        correct: false
      },
      {
        text: 'A group',
        correct: false
      },
      {
        text: 'Nine',
        correct: true
      },
    ]
  },
  {
    question: 'If you were running a race and passed the person in second place, what place would you be in now?',
    answers: [{
        text: 'First place',
        correct: false
      },
      {
        text: 'Second place',
        correct: true
      },
      {
        text: ' Third place',
        correct: false
      },
    ]
  },
  {
    question: ' What two words, when combined, hold the most letters?',
    answers: [{
        text: ' Post office',
        correct: true
      },
      {
        text: ' Large envelope',
        correct: false
      },
      {
        text: ' Post box',
        correct: false
      },
    ]
  },
  {
    question: ' What five-letter word becomes smaller when you add two letters and even smaller when you add three?',
    answers: [{
        text: ' Baby',
        correct: false
      },
      {
        text: ' Tiny',
        correct: false
      },
      {
        text: 'Small',
        correct: true
      },
    ]
  },
  {
    question: 'There are ten fingers on two hands. How many fingers are there on ten hands?',
    answers: [{
        text: '100',
        correct: false
      },
      {
        text: '10',
        correct: false
      },
      {
        text: '50',
        correct: true
      },
    ]
  },
  {
    question: 'There were ten cars in the shop. Customers bought all but nine of them. How many remain in the shop?',
    answers: [{
        text: '9',
        correct: true
      },
      {
        text: '1',
        correct: false
      },
      {
        text: '0',
        correct: false
      },
    ]
  },
  {
    question: 'Where can you find cities, towns, shops, and streets but no people?',
    answers: [{
        text: ' A movie',
        correct: false
      },
      {
        text: 'A cinema',
        correct: false
      },
      {
        text: 'A map',
        correct: true
      },
    ]
  },
  {
    question: 'Where can you add 2 to 11 and get 1?',
    answers: [{
        text: 'A calculator',
        correct: false
      },
      {
        text: ' A bank',
        correct: false
      },
      {
        text: 'A clock',
        correct: true
      },
    ]
  },
  {
    question: 'How many letters are in \'the alphabet\'?',
    answers: [{
        text: '11',
        correct: true
      },
      {
        text: '26',
        correct: false
      },
      {
        text: '37',
        correct: false
      },
    ]
  },
  {
    question: 'What is something that you can catch that isn’t thrown?',
    answers: [{
        text: 'A ball',
        correct: false
      },
      {
        text: 'A slipper',
        correct: false
      },
      {
        text: 'A cold',
        correct: true
      },
    ]
  },
  {
    question: 'What has a thumb and four fingers but isn\’t alive?',
    answers: [{
        text: 'A hand',
        correct: false
      },
      {
        text: 'A glove',
        correct: true
      },
      {
        text: 'A foot',
        correct: false
      },
    ]
  },
  {
    question: ' What goes up but never down?',
    answers: [{
        text: 'An elevator',
        correct: false
      },
      {
        text: ' A staircase',
        correct: false
      },
      {
        text: ' Your age',
        correct: true
      },
    ]
  },
  {
    question: 'I have one head, one foot, and four legs. What am I?',
    answers: [{
        text: 'A dog',
        correct: false
      },
      {
        text: 'A person',
        correct: false
      },
      {
        text: ' A bed',
        correct: true
      },
    ]
  },
  {
    question: ' I’m light as a feather, but not even the strongest girl can hold me for more than 5 minutes. What am I?',
    answers: [{
        text: 'A parrot',
        correct: false
      },
      {
        text: 'Breath',
        correct: true
      },
      {
        text: 'A mouse',
        correct: false
      },
    ]
  },
  {
    question: 'What has one eye but can’t see anything at all?',
    answers: [{
        text: ' A needle',
        correct: true
      },
      {
        text: 'A snake',
        correct: false
      },
      {
        text: ' A bat',
        correct: false
      },
    ]
  },
  {
    question: 'What has a face and two hands, but no arms or legs?',
    answers: [{
        text: ' A person',
        correct: false
      },
      {
        text: 'A cat',
        correct: false
      },
      {
        text: ' A clock',
        correct: true
      },
    ]
  },
  {
    question: 'I’m so fragile that if you say my name, you\’ll break me. What am I?',
    answers: [{
        text: ' A promise',
        correct: false
      },
      {
        text: ' An oath',
        correct: false
      },
      {
        text: ' Silennce',
        correct: true
      },

    ]
  }

];
//js code for quiz.html 

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

/**
 * incrementing the number of incorrectly answered questions
 * getting the number from a span with wrong answers and incrementing it by one
 */
function incrementWrongAnswerCount() {
  let incorrectScore = parseInt(document.getElementById("add-incorrect-score").innerText);
  document.getElementById("add-incorrect-score").innerText = ++incorrectScore;
}

// FOLLOWING FUNCTIONS/CODE DEALS WITH SCORE PAGE AND LEADERBOARD

//add event listener for the button encouraging user to view leaderboard.The button will call the showLeaderBoard function
checkLeaderBoard.addEventListener('click', showLeaderBoard);

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
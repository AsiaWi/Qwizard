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

// Global variables, list
let questionHeader = document.getElementById('question-header');
let newQuestions = questions.sort(() => Math.random() - 0.5).slice(0,10); // shuffles question array and picks first 10 items from it.
let currentQuestionIndex = 0;
let answerArea = document.getElementById('answer-area');
let totalScore = 0;
let nextQuestion = document.getElementById('next-btn');
let sec = 0;
let time = setInterval(showTimer, 1000);
let userName= [];


// list of functions

/**
* Function allowing user to input their username and then 
* see personalised welcome message
*/
function username() {
let username = [document.getElementById("username").value];
if (username == '') {
  alert('Please enter your username!');
} else {
  localStorage.setItem('name', username);
  document.getElementById("name").innerHTML = `${username}!<br> Are you the quiz wizard?`;
  let submit = document.getElementById('submit-username');
  submit.style.display = 'none';
  let clearUsername = document.getElementById('username');
  clearUsername.style.display = 'none';
  let startQuiz = document.getElementById('start-quiz');
  startQuiz.style.display = 'block';
  let instructions = document.getElementById('instructions-container');
  instructions.style.display = 'none';
  //document.getElementById("quiz-header").innerHTML = `Good luck with Qwizard <br>${username}!`;
  //push method? create new array as global and push username in?
}
}

/**
* Main function called when script is fully loaded 
*/
function runGame() {
currentQuestionIndex = 0;
totalScore = 0;
nextQuestion.innerHTML = 'NEXT';
showQuestion();
}

/**
* A function to show and run timer 
* for the player to see how long it took to take the quiz
*/
function showTimer() {
document.getElementById('timer').innerHTML = sec;
if (currentQuestionIndex < newQuestions.length) {
  sec++;
} else {
  clearInterval(time);
}
}

/**
* Function showing question and question number in header/ question area 
*/
function showQuestion() {
initialState();
let currentQuestion = newQuestions[currentQuestionIndex];
let questionNumber = currentQuestionIndex + 1;
questionHeader.textContent = `${questionNumber}.${currentQuestion.question}`;
showAnswers();
}

/**
* Function shuffling and picking random questions
*/
/*
function pickRandomQuestion() {
currentQuestionIndex++;
let randomNumber = Math.floor(Math.random() * questions.length);
if (answeredQuestions.length === 10) {
showTotalScore();
} else {
if (answeredQuestions.length > 0) {
  if (answeredQuestions.includes(randomNumber)) {
    pickRandomQuestion();
  } else {
    Index = randomNumber;
    showQuestion();
  }
}
if (answeredQuestions.length == 0) {
  Index = randomNumber;
  showQuestion();
}
answeredQuestions.push(randomNumber);
}
}
*/
function handleNextQuestion() {
currentQuestionIndex++;
if (currentQuestionIndex < newQuestions.length) {
  showQuestion();
} else {
  showTotalScore();
}
}
//Event listener for next button to go to next question
nextQuestion.addEventListener('click', () => {
if (currentQuestionIndex < newQuestions.length) {
  handleNextQuestion();
} else {
  runGame();
}
});

/** Function to stop answers from multiple questions to pile on each other: 
* it will remove answers from previous question 
* in order to replace them later with new answers for new question
*/
function initialState() {
nextQuestion.style.display = 'none';
while (answerArea.firstChild) {
  answerArea.removeChild(answerArea.firstChild);
}
}

/**
* Function to show answers against each question = showing answer's first property(text) values
* add a button for each answer to be displayed
* collecting dataset from the value of second property(correct)
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

function incrementCorrectAnswerCount(){
  let correctScore = parseInt(document.getElementById("add-correct-score").innerText);
  document.getElementById("add-correct-score").innerText = ++correctScore;
 }

 function incrementWrongAnswerCount(){
  let incorrectScore = parseInt(document.getElementById("add-incorrect-score").innerText);
  document.getElementById("add-incorrect-score").innerText = ++incorrectScore;
 }

/**
* 
* Function validating if the answer clicked by user is correct or not
* Then adding classes to show correct/incorrect answer
* Then answer buttons disabled to not allow choosing second answer
* once answer is selected the 'next' button will show
*/
function selectAndCheckAnswer(event) {
let selectedAnswer = event.target;
let correctAnswer = selectedAnswer.dataset.correct === 'true';
if (correctAnswer) {
  selectedAnswer.classList.add('correct-answer');
  incrementCorrectAnswerCount();
  totalScore++;
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


/**
* Function to show a total score and total time taken to take the quiz
* then an option to try again is provided
*/
function showTotalScore() {
initialState();
let username = localStorage.getItem('name');
questionHeader.innerHTML = ` ${username} You answered correctly ${totalScore} out of ${newQuestions.length} questions in ${sec} seconds!`;
nextQuestion.innerHTML = 'Try again!';
nextQuestion.style.display = 'block';
document.getElementById('add-correct-score').innerHTML = 0;
document.getElementById('add-incorrect-score').innerHTML = 0;
sec = 0;
}


runGame();
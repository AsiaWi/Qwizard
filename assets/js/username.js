//js code for index.html

/* https://stackoverflow.com/questions/58750774/ask-user-enter-name-with-javascript-and-html
used to create username function (answer from Zevan used as a base)*/

// variable 
let submit = document.getElementById('submit-username');

// event listener for submit button 
submit.addEventListener('click', username);

/**
 * Function allowing user to input their username
 * username added to local storage to be used later in score function at the end of game 
 * personalised welcome message displayed
 * styling added to hide instructions and form input and show START button
 */
function username() {
  let username = document.getElementById("username").value;
  if (username == '') {
    alert('Please enter your username!');
  } else {
    localStorage.setItem('name', username);
    document.getElementById("name").innerHTML = `Welcome ${username}!<br> Are you the quiz wizard?`;
    submit.style.display = 'none';
    let clearUsername = document.getElementById('username');
    clearUsername.style.display = 'none';
    let startQuiz = document.getElementById('start-quiz');
    startQuiz.style.display = 'block';
    let instructions = document.getElementById('instructions-container');
    instructions.style.display = 'none';
  }
}
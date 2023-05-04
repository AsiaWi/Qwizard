let submit = document.getElementById('submit-username');

submit.addEventListener('click', username);
// list of functions
/**
* Function allowing user to input their username and then 
* see personalised welcome message
*/
function username() {
let username = document.getElementById("username").value;
if (username == '') {
  alert('Please enter your username!');
} else {
  localStorage.setItem('name', username);
  document.getElementById("name").innerHTML = `${username}!<br> Are you the quiz wizard?`;
  submit.style.display = 'none';
  let clearUsername = document.getElementById('username');
  clearUsername.style.display = 'none';
  let startQuiz = document.getElementById('start-quiz');
  startQuiz.style.display = 'block';
  let instructions = document.getElementById('instructions-container');
  instructions.style.display = 'none';
}
}

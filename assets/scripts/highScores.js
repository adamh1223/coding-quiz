const scoreContainerEl = document.getElementById('render-scores')
const submitScoreBtn = document.getElementById('submit-score')
const highScoresContainer = document.getElementById('high-scores')

//render scores on the page
function renderSavedScores(){
  var savedScores = JSON.parse(localStorage.getItem("saved-scores"))
  if(savedScores.length == 0){
    return
  }
  scoreContainerEl.innerHTML = ""
  for (let i = 0; i < savedScores.length; i++) {
    const element = savedScores[i];
    //append it to the parent Container
  }

};

document.addEventListener('DOMContentLoaded', (event) => {
  renderSavedScores(); //Call the renderSavedScores function when the page loads
});


function saveToStorage(newScore){
  //Get saved scores from local storage. If not, saved scores will be an empty array
  var savedScores = JSON.parse(localStorage.getItem("saved-scores")) || [];
  //Push the new score to the array
  savedScores.push(newScore);
  //Set the new array to local storage
  localStorage.setItem("saved-scores", JSON.stringify(savedScores));
}

//Form functionality for adding new high score
formEl = document.getElementById("highscore-form")
formEl.addEventListener("submit", handleFormSubmission)

function handleFormSubmission(event){
  event.preventDefault();
  console.log("FORM SUBMITTED!!")
  //validation of inputs
  var initialsInputEl = document.getElementById("initials-input")
  console.log("initials el : ", initialsInputEl);
  var submittedInitials = initialsInputEl.value.trim();
  //if its not valid, return
  if(submittedInitials.length > 10 || submittedInitials === ""){
    //
    return
  }

  //Get score from url
  const urlParams = new URLSearchParams(window.location.search); const score = urlParams.get('score');

  var scoreObj = {
    initials: submittedInitials,
    score:score
  }
  //Save new score object with initials + score to local storage
  saveToStorage(scoreObj)
  //Show high scores
  displayHighScores()
}

function displayHighScores() {
  const allHighScores = JSON.parse(localStorage.getItem('saved-scores'))
  //Create a div and an ordered list to place the high scores in
  const highScoreDiv = document.createElement('div')
  const orderedScores = document.createElement('ol')

  //Loop through the array
  for(i=0; i < allHighScores.length; i++) {
    //For every index (score object), create a list element, display the initials and score in it, and add it to the bottom of the ol
    const currentScore = document.createElement('li')
    currentScore.textContent = `${allHighScores[i].initials}: ${allHighScores[i].score}`
    orderedScores.appendChild(currentScore)
  }
  highScoreDiv.appendChild(orderedScores)
  //Make sure we are not adding the whole list every time
  highScoresContainer.textContent = ''
  //Add the highscore div to the bottom of the container
  highScoresContainer.appendChild(highScoreDiv)
}

function showHighScores() {
  //Get scores
  const urlParams = new URLSearchParams(window.location.search); const showscores = urlParams.get('showscores');
  //If there are any scores, hide the form
  if (showscores) {
    formEl.classList.add('hide')
  }
  displayHighScores();
}
//show the scores
showHighScores()
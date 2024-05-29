const scoreContainerEl = document.getElementById('render-scores')
const submitScoreBtn = document.getElementById('submit-score')
const highScoresContainer = document.getElementById('high-scores')


console.log(submitScoreBtn)
console.log("hi")
function renderSavedScores(){
  console.log("rendering scores!")
  var savedScores = JSON.parse(localStorage.getItem("saved-scores"))
  //when do I know I don't want to do this?
  if(savedScores.length == 0){
    return
  }
  console.log(scoreContainerEl)
  //i need somewhere to put this

  //im going to render many items
  //what do I need to do in the container
  //empty the container before you dynamically add a list
  scoreContainerEl.innerHTML = ""
  for (let i = 0; i < savedScores.length; i++) {
    const element = savedScores[i];
    console.log(element);
    // create element
    // populate the text from the element
    
    //append it to the parent Container
  }

};

//renderSavedScores();



document.addEventListener('DOMContentLoaded', (event) => {
  renderSavedScores(); // ADD: Call the renderSavedScores function when the page loads
});


function saveToStorage(newScore){
  var savedScores = JSON.parse(localStorage.getItem("saved-scores")) || [];
  savedScores.push(newScore);
  localStorage.setItem("saved-scores", JSON.stringify(savedScores));
}

formEl = document.getElementById("highscore-form")
console.log(formEl);
formEl.addEventListener("submit", handleFormSubmission)

function handleFormSubmission(event){
  event.preventDefault();
  console.log("FORM SUBMITTED!!")
  //validation of inputs
  var initialsInputEl = document.getElementById("initials-input")
  console.log("initials el : ", initialsInputEl);
  var submittedInitials = initialsInputEl.value.trim();
  //if its not valid, let the user know the error and return
  if(submittedInitials.length > 10 || submittedInitials === ""){
    //
    return
  }

  //document.location.href = 'highScores.html?score=' + score;

  console.log(document.location.href)


  const urlParams = new URLSearchParams(window.location.search); const score = urlParams.get('score');

  var scoreObj = {
    initials: submittedInitials,
    score:score
  }
  console.log(scoreObj)
  saveToStorage(scoreObj)
  displayHighScores()
}

function displayHighScores() {
  const allHighScores = JSON.parse(localStorage.getItem('saved-scores'))
  const highScoreDiv = document.createElement('div')
  const orderedScores = document.createElement('ol')

  for(i=0; i < allHighScores.length; i++) {
    const currentScore = document.createElement('li')
    currentScore.textContent = `${allHighScores[i].initials}: ${allHighScores[i].score}`
    orderedScores.appendChild(currentScore)
  }
  highScoreDiv.appendChild(orderedScores)
  highScoresContainer.textContent = ''
  highScoresContainer.appendChild(highScoreDiv)
}

function showHighScores() {
  const urlParams = new URLSearchParams(window.location.search); const showscores = urlParams.get('showscores');
  console.log(showscores)
  if (showscores) {
    formEl.classList.add('hide')
  }
  displayHighScores();
}
showHighScores()
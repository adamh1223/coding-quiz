//Begin quiz
const begin = document.getElementById('begin').addEventListener('click', () => {
  var section = document.querySelector('.a-home-text');
  var questionEl = document.getElementById('questionContent');
  questionEl.classList.remove('hide');
  section.classList.add('hide');
  startTimer();
  renderQuestion();
});

const highScores = document.getElementById('high-scores')
const questionContainer = document.getElementById('question-container')
//Start with score of 0
let score = 0;
const viewHighScores = document.getElementById('view-high-scores')

//Questions are stored as an array of objects
var questions = [{
  question: 'Inside which HTML element do you link a JavaScript file?',
  answers: [
    '<script>',
    '<javascript>',
    '<scripting>',
    '<href>'
  ],
  //Correct answer index
  correctAnswer: 0
 }, {
  question: 'In which language do you stylize the visible elements on a webpage?',
  answers: [
    'JavaScript',
    'CSS',
    'HTML',
    'React'
  ],
  correctAnswer: 1
}, {
  question: 'A ____ in programming is a tool that provides ready-made components or solutions that are customized to speed up development. It provides a foundation for developing software applications.',
  answers: [
    'Library',
    'API',
    'Application',
    'Framework'
  ],
  correctAnswer: 3
}, {
  question: 'In which language is functionality created? (example: you click a button, and it does something)',
  answers: [
    'JavaScript',
    'CSS',
    'HTML',
    'React'
  ],
  correctAnswer: 0
}, {
  question: 'In which language is the basic structure of a webpage created?',
  answers: [
    'JavaScript',
    'CSS',
    'HTML',
    'React'
  ],
  correctAnswer: 2
}, {
  question: 'In CSS, we target the class of an element with a ____',
  answers: [
    '.',
    '$',
    '#',
    '@'
  ],
  correctAnswer: 0
}, {
  question: 'To link a JavaScript file to an HTML file, best practice is to link a script tag at ____',
  answers: [
    'The beginning of the body',
    'The beginning of the header',
    'The end of the body',
    'Anywhere in the body'
  ],
  correctAnswer: 2
}, {
  question: 'In JavaScript, a function is called using ____',
  answers: [
    'The name of the function followed by ()',
    'The name of the function followed by {}',
    'callFunction',
    'initiateFunction'
  ],
  correctAnswer: 0
}
]
//activeQuestion starts at 0
//selectedAnswer doesn't have a value by default (until user makes a selection)
//Feedback is blank by defualt (until user makes a selection)
//create the timer
//90 seconds remaining
//questionCount keeps track of how many questions have been asked at any point
//attemptNumber keeps track of how many quiz attempts have been made
let activeQuestion = 0;
let selectedAnswer = null;
let feedback = '';
let timer;
let timeRemaining = 90;
let questionCount = 0;
let attemptNumber = 0;

//function to render each question
const renderQuestion = () => {
  const currentScore = document.getElementById('current-score')
  const questionElement = document.getElementById('question-1')
  questionElement.innerText = questions[activeQuestion].question;
  let answerElement1 = document.getElementById('answer-1')
  let answerElement2 = document.getElementById('answer-2')
  let answerElement3 = document.getElementById('answer-3')
  let answerElement4 = document.getElementById('answer-4')
  currentScore.innerText = `${score} / ${questionCount}`
  answerElement1.innerText = questions[activeQuestion].answers[0];
  answerElement2.innerText = questions[activeQuestion].answers[1];
  answerElement3.innerText = questions[activeQuestion].answers[2];
  answerElement4.innerText = questions[activeQuestion].answers[3];

  document.getElementById('feedback').innerText = '';
  document.getElementById('feedback').classList.add('hide');
  selectedAnswer = null;
  feedback = '';

  // Remove active classes
  answerElement1.classList.remove('active');
  answerElement2.classList.remove('active');
  answerElement3.classList.remove('active');
  answerElement4.classList.remove('active');

  const answerButtons = document.querySelectorAll('.btn-secondary');
  answerButtons.forEach(button => {
    button.classList.remove('btn-light');
  });
}

const selectAnswer = (answerIndex) => {
  selectedAnswer = answerIndex;

   // Remove 'btn-light' class from all answer buttons
   const answerButtons = document.querySelectorAll('.btn-secondary');
   answerButtons.forEach(button => {
     button.classList.remove('btn-light');
   });
 
   // Highlight selected answer
   const selectedButton = document.getElementById(`answer-${answerIndex + 1}`);
   selectedButton.classList.add('btn-light');

  if (selectedAnswer === questions[activeQuestion].correctAnswer) {
    feedback = 'Correct!';
    score += 1;
    let LSScore = localStorage.getItem('saved-scores')
    LSScore +=1;
    //localStorage.setItem('saved-scores', LSScore)
    questionCount += 1;
  } else {
    feedback = 'Incorrect';
    questionCount += 1;
  }

  // Highlight selected answer
  let answerElement1 = document.getElementById('answer-1')
  let answerElement2 = document.getElementById('answer-2')
  let answerElement3 = document.getElementById('answer-3')
  let answerElement4 = document.getElementById('answer-4')

  answerElement1.classList.remove('active');
  answerElement2.classList.remove('active');
  answerElement3.classList.remove('active');
  answerElement4.classList.remove('active');

  //In any case, highlight the selected answer
  switch (answerIndex) {
    case 0:
      answerElement1.classList.add('active', 'btn-light');
      break;
    case 1:
      answerElement2.classList.add('active', 'btn-light');
      break;
    case 2:
      answerElement3.classList.add('active', 'btn-light');
      break;
    case 3:
      answerElement4.classList.add('active', 'btn-light');
      break;
  }
};

const startTimer = () => {
  const timerElement = document.getElementById('timer');
  timerElement.classList.add('text-light', 'fs-4', 'text-center', 'my-3');
  //Display time remaining
  timerElement.innerText = `Time Remaining: ${timeRemaining}s`;

  timer = setInterval(() => {
    //Timer counts down
    timeRemaining--;
    timerElement.innerText = `Time Remaining: ${timeRemaining}s`;

    if (timeRemaining <= 0) {
      //Clear timer and end quiz if time runs out
      clearInterval(timer);
      endQuiz();
    }
    //1000 milliseconds = timer unit (s)
  }, 1000);
};

const endQuiz = () => {
  //Popup when quiz ends
  alert('Time is up! The quiz has ended.');
  //show high scores
  showHighScores();
  //increase the attempt number
  attemptNumber++;
  //Save scores to local storage
  saveScoresToLS();
  //Save score in URL
  document.location.href = 'highScores.html?score=' + score; 
};

const showHighScores = () => {
  //Reveal highscores, hide quiz
  highScores.classList.remove('hide');
  questionContainer.classList.add('hide');
}

document.getElementById('next').addEventListener('click', () => {
  const feedbackElement = document.getElementById('feedback');
  if (selectedAnswer === null) {
    //Make sure user selects an answer for each question
    alert('Please select an answer before proceeding.');
  } else {
    //Provide correct/incorrect feedback
    feedbackElement.innerText = feedback;
    feedbackElement.classList.remove('hide', 'text-success', 'text-danger');
    //If correct, give it bootstrap class that makes it green, if not, make it red
    feedbackElement.classList.add(feedback === 'Correct!' ? 'text-success' : 'text-danger');

    setTimeout(() => {
      //Set timer for feedback
      //Move on to next question in the array
      activeQuestion++;
      if (activeQuestion < questions.length) {
        //Render next question
        renderQuestion();
      } else {
        // Alert the user that the quiz was completed, increase attempt number, show highscores, clear timer, save to local storage, get score in URL
        alert('Quiz completed!');
        attemptNumber++;
        showHighScores();
        clearInterval(timer);
        saveScoresToLS();
        document.location.href = 'highScores.html?score=' + score;
      }
    }, 2000); // Display feedback for 2 seconds before moving to the next question
  }
});

//Save to local storage
const saveScoresToLS = () => {
  localStorage.setItem(`score ${attemptNumber}`, score)
  localStorage.setItem('attemptNumber', attemptNumber)
  localStorage.setItem('questionCount', questionCount)
}

//If local storage doesn't exist yet
function initializeStorage(){
  var savedScores = localStorage.getItem("saved-scores")
  if(savedScores !== null){
      return;
  } 
  //If savedScores is null, create an empty array in local storage
  localStorage.setItem("saved-scores", JSON.stringify([]));
}

// Initial rendering of the first question
renderQuestion();

//navigate to high scores, scores show up
function goToHighScores(evt) {
  evt.preventDefault()
  document.location.href = 'highScores.html?showscores=' + true;
}

//on click of the view high scores button, take us to high scores page, but only show the scores
viewHighScores.addEventListener('click', goToHighScores)
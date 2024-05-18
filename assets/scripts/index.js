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
let score = 0;
let attemptNumber = 0;

var questions = [{
  question: 'Inside which HTML element do you link a JavaScript file?',
  answers: [
    '<script>',
    '<javascript>',
    '<scripting>',
    '<href>'
  ],
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

let activeQuestion = 0;
let selectedAnswer = null;
let feedback = '';
let timer;
let timeRemaining = 10;
let questionCount = 0;

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

  timerElement.innerText = `Time Remaining: ${timeRemaining}s`;

  timer = setInterval(() => {
    timeRemaining--;
    timerElement.innerText = `Time Remaining: ${timeRemaining}s`;

    if (timeRemaining <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
};

const endQuiz = () => {
  alert('Time is up! The quiz has ended.');
  // You can add logic to display the score or final results here
  showHighScores();
  attemptNumber++;
  saveScoresToLS();
  document.location.href = 'highScores.html'
};

const showHighScores = () => {
  highScores.classList.remove('hide');
  questionContainer.classList.add('hide');
}

document.getElementById('next').addEventListener('click', () => {
  const feedbackElement = document.getElementById('feedback');
  if (selectedAnswer === null) {
    alert('Please select an answer before proceeding.');
  } else {
    feedbackElement.innerText = feedback;
    feedbackElement.classList.remove('hide', 'text-success', 'text-danger');
    
    feedbackElement.classList.add(feedback === 'Correct!' ? 'text-success' : 'text-danger');

    setTimeout(() => {
      activeQuestion++;
      if (activeQuestion < questions.length) {
        renderQuestion();
      } else {
        // Logic for quiz completion, e.g., displaying the score, can be added here
        alert('Quiz completed!');
        attemptNumber++;
        showHighScores();
        clearInterval(timer);
        saveScoresToLS();
        document.location.href = 'highScores.html'
      }
    }, 2000); // Display feedback for 2 seconds before moving to the next question
  }
});

const saveScoresToLS = () => {
  localStorage.setItem(`score ${attemptNumber}`, score)
  localStorage.setItem('attemptNumber', attemptNumber)
  localStorage.setItem('questionCount', questionCount)
}

// Boolean true or false
// Number
// String - "" , '', ``
// Array - []  == useful for storing many similar things
//Obnject - {key: value} = useful for storing multiple information about one thing
//when I'm working with local Storage I need to ask myself one thing - WIll I have multiple of this or no?

//when I want to store many what Javascript Data TYpe is best for that?
// Storage - [{
//   initials: "AH",
//   attempted: Number,
//   correct: Number
// }]


//My website when I create it first, does local storage exist?
var myStorage = localStorage.getItem("hardcoded-key")
console.log("My Storage: ", myStorage)

//what should I first do if I know that my localStorage doesn't exist.??
function initializeStorage(){
  console.log("INITIALIZE STORAGE")
  var savedScores = localStorage.getItem("saved-scores")
  if(savedScores !== null){
      return;
  } 
  localStorage.setItem("saved-scores", JSON.stringify([]));
}

function saveToStorage(newScore){
  var savedScores = JSON.parse(localStorage.getItem("saved-scores"))
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
  if(submittedInitials.length > 3 || submittedInitials === ""){
    //
    return
  }
  var scoreObj = {
    initials: submittedInitials,
    score:score
  }
  saveToStorage(scoreObj)
}
// Initial rendering of the first question
renderQuestion();
initializeStorage();
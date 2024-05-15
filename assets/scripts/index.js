const begin = document.getElementById('begin').addEventListener('click', () => {
  var section = document.querySelector('.a-home-text');
  var questionEl = document.getElementById('questionContent');
  questionEl.classList.remove('hide');
  section.classList.add('hide');
  startTimer();
  renderQuestion();
});

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
let timeRemaining = 90;

const renderQuestion = () => {
  const questionElement = document.getElementById('question-1')
  questionElement.innerText = questions[activeQuestion].question;
  let answerElement1 = document.getElementById('answer-1')
  let answerElement2 = document.getElementById('answer-2')
  let answerElement3 = document.getElementById('answer-3')
  let answerElement4 = document.getElementById('answer-4')

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
  } else {
    feedback = 'Incorrect';
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
};

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
      }
    }, 2000); // Display feedback for 2 seconds before moving to the next question
  }
});

// Initial rendering of the first question
renderQuestion();
const begin = document.getElementById('begin').addEventListener('click', () => {
  var section = document.querySelector('.a-home-text');
  var questionEl = document.getElementById('questionContent');
  questionEl.removeAttribute('class');
  section.setAttribute('class','hide');
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
  question: '',
  answers: [
    'The beginning of the body',
    'The beginning of the header',
    'The end of the body',
    'Anywhere in the body'
  ],
  correctAnswer: 2
}
]
let activeQuestion = 0;
let selectedAnswer = null;

const renderQuestion = () => {
  const questionElement = document.getElementById('question-1')
  questionElement.innerText = questions[activeQuestion].question;
  let answerElement = document.getElementById('answer-1')

  answerElement.innerText = questions[activeQuestion].answers[0];
  answerElement = document.getElementById('answer-2')
  answerElement.innerText = questions[activeQuestion].answers[1];
  answerElement = document.getElementById('answer-3')
  answerElement.innerText = questions[activeQuestion].answers[2];
  answerElement = document.getElementById('answer-4')
  answerElement.innerText = questions[activeQuestion].answers[3];

  document.getElementById('feedback').innerText = '';
}

const selectAnswer = (answerIndex) => {
  selectedAnswer = answerIndex;
};


document.getElementById('next').addEventListener('click', () => {
  activeQuestion++;
  renderQuestion();
});

renderQuestion();
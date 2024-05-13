const begin = document.getElementById('begin').addEventListener('click', () => {
  var section = document.querySelector('.a-home-text');
  var questionEl = document.getElementById('questionContent');
  questionEl.removeAttribute('class');
  section.setAttribute('class','hide');
});

const checkAnswer = document.get

var questions = [{
  question: 'first question',
  answers: [
    'thing',
    'ans 2',
    'ans 3',
    'ans 4'
  ],
  correctAnswer: 0
}, {
  question: 'first question',
  answers: [
    'other thing',
    'ans 2',
    'ans 3',
    'ans 4'
  ],
  correctAnswer: 'ans 3'
}
]
let activeQuestion = 0;

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
}

renderQuestion();

document.getElementById('next').addEventListener('click', () => {
  activeQuestion++;
  renderQuestion();
})
const renderScores = document.getElementById('render-scores')

const displayScores = () => {
  const attemptNumber = localStorage.getItem('attemptNumber')
  const currentAttempt = localStorage.getItem(`score ${attemptNumber}`)
  const questionCount = localStorage.getItem('questionCount')
  renderScores.innerText = `Attempt ${attemptNumber}: ${currentAttempt} / ${questionCount}`
}

displayScores();
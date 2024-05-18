const scoreContainerEl = document.getElementById('render-scores')
console.log("Linked!")
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
    console.log("++++++++++++++++++++++")
    console.log(element);
    // create element
    // populate the text from the element
    
    //append it to the parent Container
  }

};

renderSavedScores();
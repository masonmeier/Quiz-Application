//when the user clicks on the start quiz buttons
function beginTest {
$("#start-btn").on('click', function(event){
  nextQuestion();
}
})

//displays the question
function nextQuestion() {
  let question = STORE.questions[STORE.currentQuestion];
  updateQuestionAndScore();
  const questionHtml = $('

  <div class="container">
  <button id="start-btn" class="start-btn btn">Start</button>
  </div>

    ')
}
//display options for current questions


//displays question number and score obtained


//Displays results and restart buttons by running tokens obtained/tokens
//possible


//checks whether it reached the end of the question list


//checks whether the chosen option is right or wrong and displays the
//respective message

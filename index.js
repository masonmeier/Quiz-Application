const container = $('div.container');

function gradeQuestion(e) {
  e.preventDefault();
  const answer = $('input[type="radio"]:checked').val()
  console.log(answer)
  const correctAnswer = STORE.correctAnswers[STORE.index];

  const isCorrect = correctAnswer.includes(answer);
  const correctText = isCorrect ? "correct" : `incorrect. The correct answer was: <br/>${correctAnswer}`;

  if (isCorrect) STORE.score++;

  nextQuestion(correctText);
}

function makeQuestion() {
  const answers = STORE.answers[STORE.index]

  container.empty();
  container.append(`
    <form>
    <div class="question-number">Question ${STORE.index + 1}/${STORE.answers.length}</div>
    <div class="total-score">Score: ${STORE.score}/${STORE.answers.length}</div><br>
      <div class="question">${STORE.questions[STORE.index]}</div>
      <ul>
          <li><input id="answer1" type="radio" name="answers" value=${answers[0]} onclick="gradeQuestion(this)" required="required"><label for="answer1">${answers[0]}</label></li>
          <li><input id="answer2" type="radio" name="answers" value=${answers[1]} onclick="gradeQuestion(this)"><label for="answer2">${answers[1]}</label></li>
          <li><input id="answer3" type="radio" name="answers" value=${answers[2]} onclick="gradeQuestion(this)"><label for="answer3">${answers[2]}</label></li>
          <li><input id="answer4" type="radio" name="answers" value=${answers[3]} onclick="gradeQuestion(this)"><label for="answer4">${answers[3]}</label></li>
       </ul>
      <div class=sbmt-cont>
        <button id="submit-btn">Submit</button>
      </div>
    </form>
  `);
$('form').submit(gradeQuestion)

}

function nextQuestion(isCorrect) {
  container.empty();
  container.append(`
    <div class="question-number">Question ${STORE.index + 1}/${STORE.answers.length}</div>
    <div class="total-score">Score: ${STORE.score}/${STORE.answers.length}</div><br>
    <div>Your answer was ${isCorrect}!</div>
    <button id='next-question'>NEXT</button>
  `)

  STORE.index++;

  $('#next-question').click(() => {
    STORE.index === STORE.questions.length ? endQuiz() : makeQuestion();
  })
}

function startQuiz() {
  makeQuestion();
}

function endQuiz() {
  container.empty();
  container.append(`
    <div>Quiz finished. Your score was ${STORE.score} out of ${STORE.questions.length}</div>
    <button id="restart-btn">Restart</button>
  `)

  $('#restart-btn').click(function(){
    STORE.score=0;
    STORE.index=0;
    makeQuestion();
  })
}

$('.start-button').click(startQuiz);
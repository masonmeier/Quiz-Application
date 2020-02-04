const container = $('div.container');

function gradeQuestion(element) {
  const answer = element.value;
  const correctAnswer = STORE.correctAnswers[STORE.index];

  const isCorrect = correctAnswer.includes(answer);
  const correctText = isCorrect ? "correct" : "incorrect";

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
          <input id="answer1" type="radio" name="answers" value=${answers[0]} onclick="gradeQuestion(this)">${answers[0]}
          <input id="answer2" type="radio" name="answers" value=${answers[1]} onclick="gradeQuestion(this)">${answers[1]}
          <input id="answer3" type="radio" name="answers" value=${answers[2]} onclick="gradeQuestion(this)">${answers[2]}
          <input id="answer4" type="radio" name="answers" value=${answers[3]} onclick="gradeQuestion(this)">${answers[3]}
     </form>
  `);
}

function nextQuestion(isCorrect) {
  container.empty();
  container.append(`
    <div class="question-number">Question ${STORE.index + 1}/${STORE.answers.length}</div>
    <div class="total-score">Score: ${STORE.score}/${STORE.answers.length}</div><br>
    <div>Your answer was ${isCorrect}!</div>
    <button class='next-question'>NEXT</button>
  `)

  STORE.index++;

  $('.next-question').click(() => {
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
  `)
}

$('.start-button').click(startQuiz);
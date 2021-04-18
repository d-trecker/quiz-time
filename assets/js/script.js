const container = document.getElementById("multiple-questions");
const startButton = document.getElementById("start-button");
const startQuiz = document.getElementById("start-quiz");
const question = document.getElementById("questions");
const answerButton = document.getElementById("answer-btn");

var score = 0;
var count = 60;
var time;

let currentQuestion;

//stop HERE
document.getElementById("timer-clock").innerHTML = "60";

startButton.addEventListener("click", runQuiz);

//----Countdown Function----
function countDown() {
  if (count < 60) {
    document.getElementById("timer-clock").innerHTML = count;
  }
  if (count > 0) {
    count--;
  } else {
    debugger;
    return alert("You are out of time!");
  }
}
document.getElementById("start-button").onclick = function () {
  if (!time) {
    time = window.setInterval(function () {
      countDown();
    }, 1000);
  }
};

//----Run Quiz Function----
function runQuiz() {
  startQuiz.classList.add("hide");
  container.classList.remove("hide");
  currentQuestion = 0;
  countDown();
  nextQ();
}

//----Next Question Function----
function nextQ() {
  debugger;
  clearBoard();
  displayQuestion(quizQuestions[currentQuestion]);
}

//----Show Question + Answers ----
function displayQuestion(q) {
  question.innerText = q.q;
  q.answer.forEach((answer) => {
    const aButton = document.createElement("button");
    aButton.innerText = answer.choice;
    aButton.classList.add("button");
    if (answer.check) {
      aButton.dataset.check = answer.check;
    }
    aButton.addEventListener("click", answerF);
    answerButton.appendChild(aButton);
  });
}

//----Clear Container Function----
function clearBoard() {
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

//----Answer Function----
function answerF(event) {
  debugger;
  var userSelection = event.target;
  var check = userSelection.dataset.check;
  rightOrWrong(check);
  Array.from(answerButton.children).forEach((button) => {
    rightOrWrong(button, button.dataset.check);
  });
}
//rigth or wrong
function rightOrWrong(check) {
  debugger;
  //determine if answer is correct or wrong
  if (check) {
    //add to score
    score++;
    console.log(score);
    //add 5 seconds to timer
    count + 5;
    console.log(count);
    // next question
    currentQuestion++;
    nextQ();
  } else {
    score += 5;
    console.log(score);
    count -= 20;
    quizQuestions++;
    //next question
    nextQ();
  }

  //have wrong or right pop up on the screen
}

// Questions Array
var quizQuestions = [
  {
    q: "Which of the following is not a HTML Sematic Element?",
    answer: [
      { choice: "header", check: false },
      { choice: "div", check: true },
      { choice: "figure", check: false },
      { choice: "aside", check: false },
    ],
  },
  {
    q: "What would be the proper syntax to start a media rule in CSS?",
    answer: [
      { choice: "some", check: false },
      { choice: "all", check: true },
      { choice: "none", check: false },
      { choice: "ok", check: false },
    ],
  },
  {
    q: "Arrays use ___ as element indexes.",
    answer: [
      { choice: "header", check: false },
      { choice: "div", check: true },
      { choice: "figure", check: false },
      { choice: "aside", check: false },
    ],
  },
  {
    q: "Which is the correct decending order of the DOM?",
    answer: [
      { choice: "header", check: false },
      { choice: "div", check: true },
      { choice: "figure", check: false },
      { choice: "aside", check: false },
    ],
  },
];

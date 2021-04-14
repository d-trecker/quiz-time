var score = 0;
var count = 60;
var time;
var container = document.getElementById("multiple-questions");
var startButton = document.getElementById("start-button");
var startQuiz = document.getElementById("start-quiz");

document.getElementById("timer-clock").innerHTML = "60";

startButton.addEventListener("click", runQuiz);

//----Countdown Function----
function countDown() {
  if (count < 60) {
    document.getElementById("timer-clock").innerHTML = count;
  }
  if (count > 0) {
    count--;
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
  countDown();
  nextQ();
  debugger;
}

//----Next Question Function----
function nextQ() {}

//----Answer Function----
function answer() {}

// Questions
var quizQuestions = [
  {
    q: "Which of the following is not a HTML Sematic Element?",
    a: [
      { answer: "header", check: false },
      { answer: "div", check: true },
      { answer: "figure", check: false },
      { anser: "aside", check: false },
    ],
  },
  {
    q: "What would be the proper syntax to start a media rule in CSS?",
    a: [
      { answer: "header", check: false },
      { answer: "div", check: true },
      { answer: "figure", check: false },
      { anser: "aside", check: false },
    ],
  },
  {
    q: "Arrays use ___ as element indexes.",
    a: [
      { answer: "header", check: false },
      { answer: "div", check: true },
      { answer: "figure", check: false },
      { anser: "aside", check: false },
    ],
  },
  {
    q: "Which is the correct decending order of the DOM?",
    a: [
      { answer: "header", check: false },
      { answer: "div", check: true },
      { answer: "figure", check: false },
      { anser: "aside", check: false },
    ],
  },
];

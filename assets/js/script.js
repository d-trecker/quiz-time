const container = document.getElementById("multiple-questions");
const startButton = document.getElementById("start-button");
const startQuiz = document.getElementById("start-quiz");
const question = document.getElementById("questions");
const answerButton = document.getElementById("answer-btn");
const userInt = document.getElementById("end-game");
const saveBtn = document.getElementById("saveButton");

var score = 0;
var count = 60;
var time;

let alertBox = false;
let currentQuestion;

document.getElementById("timer-clock").innerHTML = "60";

startButton.addEventListener("click", runQuiz);

//----Countdown Function----
function countDown() {
  if (count < 60) {
    document.getElementById("timer-clock").innerHTML = count;
  }
  if (count > 0) {
    count--;
  } else if (count <= 0 && !alertBox) {
    alertBox = true;
    endGame();
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
  if (quizQuestions.length > currentQuestion) {
    clearBoard();
    console.log(currentQuestion);
    displayQuestion(quizQuestions[currentQuestion]);
  } else {
    endGame();
  }
}

//----Show Question + Answers ----
function displayQuestion(q) {
  console.log(q.q);
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
  var userSelection = event.target;
  var check = userSelection.dataset.check;
  rightOrWrong(check);
}
//rigth or wrong
function rightOrWrong(check) {
  //determine if answer is correct or wrong
  if (check) {
    //increased score since answer was correct
    score++;
    //have right pop up on the screen
    alert("Correct!");
    console.log(score);
    // next question
    currentQuestion++;
    nextQ();
  } else {
    //time is subtracted since answer was wrong
    count -= 20;
    //have wrong right pop up on the screen
    alert("Sorry! That was incorrect!");
    //next question
    currentQuestion++;
    nextQ();
  }
}

//----End Game Function----
function endGame() {
  container.classList.add("hide");
  userInt.classList.remove("hide");
  //calculate final score
  var finalScore = (score / 4) * 100 + "%";
  //display final score
  var contain = document.getElementById("container");
  var endGameText = document.createElement("div");
  endGameText.style.padding = "10px";
  endGameText.innerHTML =
    "Congrats you have completed the quiz you scored " + finalScore + ".";
  contain.prepend(endGameText);

  //grabs username.
  var userName = document.getElementById("user-initials");

  userName.addEventListener("keyup", () => {
    console.log(userName.value);
  });

  saveBtn.addEventListener("click", saveGame);

  //----Save Button Function----
  function saveGame() {
    console.log(finalScore);
    console.log(userName.value);
    //grabs username input and highscore.
    var userFinalScore = {
      User: userName.value,
      Score: finalScore,
    };
    console.log(userFinalScore);
    localStorage.setItem("User Scores", JSON.stringify(userFinalScore));
  }
}

// Questions Array
var quizQuestions = [
  {
    q: "What is not a Primitive?",
    answer: [
      { choice: "div", check: true },
      { choice: "string", check: false },
      { choice: "boolean", check: false },
      { choice: "bigint", check: false },
    ],
  },
  {
    q: "What is proper syntax for an array?",
    answer: [
      { choice: "||", check: false },
      { choice: "{}", check: false },
      { choice: "()'", check: false },
      { choice: "[]", check: true },
    ],
  },
  {
    q: "Arrays use ___ as element indexes.",
    answer: [
      { choice: "integers", check: true },
      { choice: "symbol", check: false },
      { choice: "figure", check: false },
      { choice: "value", check: false },
    ],
  },
  {
    q: "For loops are handy for?",
    answer: [
      { choice: "Running a line of code once.", check: false },
      { choice: "If you want to trigger an event once.", check: false },
      {
        choice: "If you want to run the same code over and over.",
        check: true,
      },
      { choice: "Debugging code", check: false },
    ],
  },
];

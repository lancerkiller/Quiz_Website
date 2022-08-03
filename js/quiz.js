console.log("welcome to add some  code vishwa,");
const start_btn = document.querySelector(".start_button");
const ques_div = document.getElementById("ques_div");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBarFull");
var storage_answer = [];
var final_answers;
const questions = [
  {
    question: "Question 1?",
    choice1: "youtube",
    choice2: "Pokemon ",
    choice3: "Pikachu",
    choice4: "pull and push coding",
    Answer: "1",
  },
  {
    question: "Question 2",
    choice1: "youtube",
    choice2: "Pokemon ",
    choice3: "Pikachu",
    choice4: "pull and push coding",
    Answer: "2",
  },
  {
    question: "Question 3",
    choice1: "youtube",
    choice2: "Pokemon ",
    choice3: "Pikachu",
    choice4: "pull and push coding",
    Answer: "3",
  },
];

const MAX_QUESTION = 3;
var questionCounter = 0;

function game_start() {
  availableQuestion = [...questions];
  display_question();
}
var acceptingAnswers;
function display_question() {
  if (availableQuestion.length == 0 || questionCounter > MAX_QUESTION) {
    return window.location.assign("/end.html");
  }
  console.log(availableQuestion);
  questionCounter++;

  progressBar.style.width = `${(questionCounter / MAX_QUESTION) * 100}% `;
  console.log(questionCounter);
  const questionIndex = Math.floor(Math.random() * availableQuestion.length);
  currentQuestion = availableQuestion[questionIndex];
  progressText.innerHTML = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerHTML = currentQuestion["choice" + number];
  });

  acceptingAnswers = true;

  availableQuestion.splice(questionIndex, 1);

  /*
  for (let i = 1; i <= 4; i++) {
    var btn = document.createElement("button");
    btn.id = "btn" + i;
    console.log(btn.id);
    var btn_text = document.createTextNode(currentQuestion["choice" + i]);
    btn.appendChild(btn_text);
    ques_div.appendChild(btn);
  }
  */
}

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) {
      return;
    }

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    let classApply =
      selectedAnswer == currentQuestion.Answer ? "correct" : "wrong";

    selectedChoice.parentElement.classList.add(classApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classApply);
      display_question();
    }, 500);
  });
});

game_start();

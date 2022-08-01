const start_btn = document.querySelector(".start_button");
const ques_div = document.getElementById("ques_div");
var storage_answer = [];

const questions = [
  {
    question: "what is github?",
    choice1: "youtube",
    choice2: "Pokemon ",
    choice3: "Pikachu",
    choice4: "pull and push coding",
    Answer: "choice4",
  },
  {
    question: "what is github2?",
    choice1: "youtube",
    choice2: "Pokemon ",
    choice3: "Pikachu",
    choice4: "pull and push coding",
    Answer: "choice4",
  },
  {
    question: "what is github3?",
    choice1: "youtube",
    choice2: "Pokemon ",
    choice3: "Pikachu",
    choice4: "pull and push coding",
    Answer: "choice4",
  },
];

const MAX_QUESTION = 3;

/*
function verify_ans(client_ans) {
  if (client_ans == questions[questions.Answer]) {
    alert("red");
  }
  console.log(client_ans);
}
*/

function display_question() {
  /*
  for (let i = 1; i <= 4; i++) {
    //ques_div.innerHTML = questions[i];
    let btn = document.createElement("button");
    btn.id = "button" + i;
    let btn_text = document.createTextNode(questions[i]);
    btn.appendChild(btn_text);
    ques_div.appendChild(btn);
    btn.onclick = function () {
      verify_ans(btn.textContent);
    };
  }
  */
}

display_question();
//alert(btn.textContent);
/*
function store_ans(ans) {
  storage_answer.push(ans);
}

const button1 = document.getElementById("button1");
button1.onclick = function () {
  alert(button1.textContent);

  store_ans(questions[1]);
  console.log(storage_answer);
};
*/

//buttons.style.color = "red";

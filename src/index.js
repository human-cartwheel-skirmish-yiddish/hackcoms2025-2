if (module.hot) {
  module.hot.accept();
}

import "./styles/styles.css";
import "./styles/mcq.css";
import { questionMaking } from "./cqselection";

let points = 0;
const QUESTIONS_MAX = 4;
const questionElt = document.getElementById("text--question");
const answersElt = document
  .getElementById("container--answers")
  .querySelectorAll("li");
const pointsElt = document.getElementById("text--points");
const continueBtnElt = document.getElementById("button--continue");
const feedbackElt = document.getElementById("text--feedback");

console.log(answersElt, typeof answersElt);

let questionsDone = 0;

let user_answer = "";

let { answers, question, answer } = questionMaking();
questionElt.innerHTML = question;

// Populate answers
for (let index = 0; index < 4; index++) {
  answersElt[index].innerHTML = answers[index];
}

continueBtnElt.addEventListener("click", () => {
  questionsDone++;
  if (questionsDone < QUESTIONS_MAX) {
    const newQuestionSet = questionMaking();
    answers = newQuestionSet["answers"];
    answer = newQuestionSet["answer"];
    question = newQuestionSet["question"];

    console.log(answers, question, answer);
    questionElt.innerHTML = question;

    // Populate answers
    for (let index = 0; index < 4; index++) {
      answersElt[index].innerHTML = answers[index];
    }
    continueBtnElt.style.display = "none";
    feedbackElt.innerHTML = "";
  } else {
    feedbackElt.innerHTML = `Congrats! You're done with the quiz! Your score was ${points}/${QUESTIONS_MAX}`;
  }
  answersElt.forEach(elt => {
    elt.style.backgroundColor = "";
    elt.style.color = "";
    elt.style.borderColor = "";
  })
});

answersElt.forEach(function (elt) {
  elt.addEventListener("click", () => {
    let feedback = "";
    if (questionsDone < QUESTIONS_MAX) {
      user_answer = elt.innerHTML;

      if (user_answer == answers[answers.indexOf(answer)]) {
        feedback = "You got it right!";
        elt.style.backgroundColor = "green";
        elt.style.color = "white";
        points += 1;
      } else {
        feedback = "You got it wrong! The correct answer is " + answer;
        answersElt.forEach((elt2) => {
          if (elt2.innerHTML != answer) {
            elt2.style.backgroundColor = "red";
          }
          else {
            elt2.style.backgroundColor = "green";
          }
          elt2.style.color = "white";

          elt2.style.borderColor = "black";
        });
      }

      pointsElt.innerHTML = points;
      feedbackElt.innerHTML = feedback;
      continueBtnElt.style.display = "inline-block";

      if (points == QUESTIONS_MAX) {
        console.log("Congrats, you got the highest possible score!");
      }
    }
  });
});

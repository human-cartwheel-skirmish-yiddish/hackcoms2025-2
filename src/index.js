if (module.hot) {
  module.hot.accept();
}

import "./styles/styles.css";
import "./styles/mcq.css";
import { questionMaking } from "./cqselection";

let points = 0;
const questionElt = document.getElementById("text--question");
// const answersElt = document.getElementById("container--answers");
const answersElt = document
  .getElementById("container--answers")
  .querySelectorAll("li");
console.log(answersElt, typeof answersElt);

let questionsDone = 0;

let user_answer = "";

let { answers, question, answer } = questionMaking();
questionElt.innerHTML = question;

// Populate answers
for (let index = 0; index < 4; index++) {
  answersElt[index].innerHTML = answers[index];
}

answersElt.forEach(function (elt) {
  elt.addEventListener("click", () => {
    if (questionsDone < 4) {
      // let { answers, question, answer } = questionMaking();
      // questionElt.innerHTML = question;

      // // Populate answers
      // for (let index = 0; index < 4; index++) {
      //   answersElt[index].innerHTML = answers[index];
      // }
      user_answer = elt.innerHTML;

      // let user_answer = prompt("What is the answer? (answer in array# 0, 1, 2, or 3)");
      if (user_answer == answers[answers.indexOf(answer)]) {
        console.log("You got it right!");
        points += 1;
      } else {
        console.log("You got it wrong! The correct answer is " + answer);
      }
      console.log(points);

      if (points == 12) {
        console.log("Congrats, you got the highest possible score!");
      }

      questionsDone++;
      if (questionsDone < 12) {
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
      }
    }
  });
});

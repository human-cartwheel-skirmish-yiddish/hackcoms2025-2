// END PAGE the If statements to see their role after completing test

let result = 10
let score = result
console.log("Your score you got it", score, "/12")

function getResults(result) { 
  let msg;

  if (result >= 11) {
    msg = "Very Smart!";
  } else if (result >= 8) {
    msg = "This is a good score!";
  } else if (result >= 5) {
    msg = "You need to keep studying!";
  } else if (result >= 2) {
    msg = "Go back to the flashcards!";
  } else if (result == 0) {
    msg = "You got none right!";
  }

  console.log(msg);
}

for (let index = 0; index < 14; index++) {
  console.log(index);
  getResults(index);
}
//random selection: categories and questions
import {years,names,laws} from './flashcards.js';
function questionMaking(){
    let categorylist = [years,names,laws];
    let category = categorylist[Math.floor(Math.random()*3)];
//random q selection
    let randomQuestion = Math.floor(Math.random()*4);
    let chosenQuestion = category[randomQuestion]["q"];
    let chosenAnswer = category[randomQuestion]["a"];
    console.log(chosenQuestion);

    let array = [];
    for (let i = 0; i < 4; i++){
        let answerarray = [category[i]["a"]];
        array = array.concat(answerarray);
    }

    console.log(array);
    return [array, chosenAnswer];
}

let points = 0;
for (let i = 0; i < 12; i++){
    let [array, chosenAnswer] = questionMaking();
    let user_answer = prompt("What is the answer? (answer in array# 0, 1, 2, or 3)");
    if (user_answer == array.indexOf(chosenAnswer)){
        alert("You got it right!");
        points += 1;
    }
    else{
        alert("You got it wrong! The correct answer is " + chosenAnswer);
    }
    console.log(points);
}
if (points == 12){
    console.log("Congrats, you got the highest possible score!");
}
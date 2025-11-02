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

    let array = new Array(4).fill(0); // Array of length 4 filled with 0s
    let answerBankRemovedRightAnswer = [];
    category.forEach((flashcard) => {
        if (flashcard["a"] != chosenAnswer) {
            answerBankRemovedRightAnswer.push(flashcard["a"]);
        }
    });

    let removed = 0;
    let randomizedAnswersIndex = 0;
    let correctAnswerIndex = Math.floor(Math.random()*4);
    array[correctAnswerIndex] = chosenAnswer; // Random placement of answer
    while (removed < 3) {
        // If randomIndex == correctAnswerindex, increment it
        randomizedAnswersIndex += Number(randomizedAnswersIndex == correctAnswerIndex);

        // Generate random index to remove from wrong Answer bank, ranges from [0, len(wrongAnswerBank))
        let removedItemIndex = Math.floor(Math.random()*(answerBankRemovedRightAnswer.length)) ;
        let removedAnswer = answerBankRemovedRightAnswer[removedItemIndex];
        array[randomizedAnswersIndex] = removedAnswer;
        
        // remove it
        let postRemovedArray = []
        for (let index = 0; index < answerBankRemovedRightAnswer.length; index++) {
            if (index == removedItemIndex) {
                continue;
            }
            postRemovedArray.push(answerBankRemovedRightAnswer[index]);
            
        }
        answerBankRemovedRightAnswer = postRemovedArray;

        // increment index
        randomizedAnswersIndex++;
        // increment removed 
        removed++;
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
//random selection: categories and questions
import {years,names,laws} from './flashcards.js';
let categorylist = [years,names,laws];
let category = categorylist[Math.floor(Math.random()*3)];
//random q selection
let randomQuestion = Math.floor(Math.random()*5);
let chosenQuestion = category[randomQuestion]["q"];
//console.log(chosenQuestion);


let chosenAnswer = category[randomQuestion]["a"]
console.log(chosenAnswer);

var inquirer = require('inquirer')
var Word = require('./Word.js');

var wordChoices = ["watermelon", "tangerine", "grapefruit", "strawberry", "blueberry", "cantaloupe"]
var hangWord = wordChoices[(Math.floor(Math.random() * wordChoices.length))];

var wordObject = new Word(hangWord);
wordObject.makeAndPushLettersIntoWord();
console.log("  "); // for spacing;
console.log("Guess the fruit - 5 wrong letters and you lose!");
console.log(wordObject.display());

function askLetter(){
    inquirer.prompt([
    {
    type: "input",
    name: "guess",
    message: "What letter do you guess?"},
    ]).then(function(data){
    
        console.log("  ");  // add some spacing to help with display
        wordObject.updateLetter(data.guess);
              
        console.log(wordObject.display());

        if (wordObject.wrong.length > 0) {
            console.log("wrong letters: " + wordObject.wrong)
            console.log(" ");  // for spacing
        }

        if (wordObject.wrong.length == 5) {
            console.log("You lost - the correct word was " + hangWord + ".")
        } else {
            if (wordObject.display().indexOf("_") != -1){
                askLetter();
            } else {
                console.log("You Won!")
            }
        }
    });
}

askLetter();
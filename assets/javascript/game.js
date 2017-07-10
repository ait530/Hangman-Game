/* var worlist is an array [] that stores the words(answers) for hangman game*/
var wordList = [
 "coffee",
 "latte",
 "cappuccino",
 "americano",
 "macchiato",
 "doppio",
 "espresso",
 "ristretto",
 "bombon",
 "frappe",
 "antoccino",
 "marocchino",
 "affogato",
 "mocha",
 "redeye"
]

/* "" stands for a string; when we select a word at random, it goes in this array; the word that the user has to guess */
var chosenWord = "";
/*Array that breaks up the chosen word into letters so that the user can guess, and we can manipulate those letters throughout the game*/
var letterInChosenWord = [];
/*Holds the number of letters in the word*/
var numBlanks = 0;
/*Holds both underscores and letters; whether the user guesses right or wrong*/
var blanksAndSuccesses = [];

/*Holds wrong guesses; holds the incorrect letters*/
var wrongGuesses = [];

/*Win counter starts at 0 and builds up with number of wins*/
var winCounter = 0;
/*Number of losses*/
var lossCounter = 0;

/*Number of chances you have before the game is over*/
var numGuesses = 10;


function startGame(){
/*
1. select a word at random x
2. want to break up that random word into letters and replace them with
underscores x
3. we want to add those underscores to the HTML 
4. numguesses always equals 11 , and blankandsuccess is an empty array, 
and wronggueses is empty as well x
*/
wrongGuesses = [];
console.log("this is wrong guesses in startGame", wrongGuesses);
numGuesses = 10;
blanksAndSuccesses = [];

/*Randomly generates word from the list*/
chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
/*separating the strings into substrings*/
lettersInChosenWord = chosenWord.split("");
numBlanks = lettersInChosenWord.length;
console.log(chosenWord);
console.log(numBlanks)

for(var i = 0; i < numBlanks; i++){
    blanksAndSuccesses.push("_");
}
console.log(blanksAndSuccesses);
document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
document.getElementById('guesses-left').innerHTML = numGuesses;


}


/*OnkeyUp function passes letter into this function*/
function checkLetters(letter){
    /*
    1. Compare the letter the user picks matches any of the letters in the word
    2. I want a conditional statement to determine if the letter the user picked
    is in the word. If so, do something, if not, do something else
    3. If the user is wrong we want to decrease the numGuesses variables by one
    */

    var letterInWord = false;

    for(var i = 0; i < numBlanks; i++){
        if(chosenWord[i] === letter){
            letterInWord = true;

        }
    }

    if(letterInWord){
        for(i = 0; i < numBlanks; i++){
            if(chosenWord[i] === letter){
            blanksAndSuccesses[i] = letter;

        }

        }
    }else{
        numGuesses --;
        wrongGuesses.push(letter)
    }

    /*
    to check if a letter is already in the wrong guesses array. What we want to do
    is set up an if/else conditional that will run a for loop that will iterate over
    all the letters and then use the if/else to check if it it already exists.

    */

}


function roundComplete(){
    /*
    1. Its going to update the HTML with letters that are in the word
    2. Its going to update the HTML with guesses we have left
    3. Its going to update the HTML to show the wrong guesses
    4. Its going to determine whether the use won the game or not
    */

    document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById('guesses-left').innerHTML = numGuesses;
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");


    // if(blanksAndSuccesses.indexOf(letter >= 1)){
    //     console.log(letter)
    // }
    console.log(lettersInChosenWord);
    console.log(blanksAndSuccesses);
    if(lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")){
        winCounter++;
        alert("You win!");
        document.getElementById('win-counter').innerHTML = winCounter;
        startGame();
    }else if(numGuesses === 0){
        document.getElementById('loss-counter').innerHTML  = lossCounter ++;
        document.getElementById('wrong-guesses').innerHTML = "";
        alert("Sorry, you loss this round.");        
        startGame();
    }

}

startGame();
document.onkeyup = function(event){
    /*
    1. it going to take in the letter that we type in
    2. its going to pass it through the CheckLetter function 
    */
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("this is the letter we typed", letterGuessed)
    checkLetters(letterGuessed)
    roundComplete();
}
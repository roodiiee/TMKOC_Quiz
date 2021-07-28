// Importing Neccessary Modules 

var readlineSync = require('readline-sync')
const chalk = require('chalk')

var score = 0;
// Reading UserName and Greet Him.
var userName = readlineSync.question("Hello, I am Quiz Oraganizer Tell me your Name: ")
var greetUser = "Welcome" + userName
console.log(greetUser)
console.log(chalk.greenBright('--------------------------------'))
console.log(chalk.blueBright('How Much You Know About The Show Called Taarak Mehta Ka Oolta Chasma'))
console.log(chalk.greenBright('--------------------------------'))

// Asking User If he is ready to play game or not
var choiceToPlay = readlineSync.question("Do You Want to Play: ")
console.log('Type `y` for yes and `n` for no');

// // If User Enter Yes or 'y'
// function userPlay(accept){
//     play()
// }

function play(question, answer){
    var userAnswer = readlineSync.question(question, + "/n")
    if(userAnswer == answer){
        console.log("You are Right","\n")
        score = score + 1;
    }
    else{
        console.log("sorry you are wrong")
    }
}

// Question
var questions = [{
    question : `Who is Taarak Mehta ?
    a: Writer
    b: poet
    c: None of the above
    Give Your Answer `,
    answer: "a",
},
{
    question = `Is the Based on true story?
    a: yes
    b: no
    Give Your Answer`,
    answer: "a",
},
{
    question: `If the Story is based on true story then from which area is originated ?
    a: Rajasthan
    b: Gujrat
    c: Chennai
    d: None of above
    Give Your Answer `,
    answer: "b",
    
},
{
    question: `Jheta Lal belong too ?
    a: Run Of Kacch
    b: Ahemdabad
    c: Mumbai
    Give Your Answer `,
    answer: "a",

},
{
    question: `Which of the character background sound played kem palty??
    a: Baka
    b: Sundar
    Give Your Answer `,
    answer: "a",


},
{
    question: `Did Daya lives without garba ?
    a: Yes
    b: No
    c: mayBe
    Give Your Answer `,
    answer : "c",


},
{
    question: `Did Jhetalal like Babita Ji
    a: Yes
    b: Definitely
    c: No
    Give Your Answer `,
    answer: "b",

},
{
    question: `Did Ever Popatlal get married until show end ??
    a: Yes
    b: never
    Give Your Answer `,
    answer: "b",

}]

// Loop to display all question one by one
for(var i=0 ; i<questions.length;i++ ){
    var currentQuestion = questions[i]
    play(currentQuestion.question, currentQuestion.answer)
    console.log(chalk.red('Current Score ", chalk.blue(score'), "\n")
}
console.log("You Scored: ", (score) + "/" + (questions.length))
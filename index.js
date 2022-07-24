var readlineSync = require("readline-sync");
console.log("Hi!!, Welcome to this quizz on marvel! ");
var score = 0;
console.log("");
var userName = readlineSync.question("please enter your name ");
console.log("");
console.log("Hello! ", userName);
questions = [{
  question: "is loki alive ",
  answer: "no"
},
{
  question: "who has the reality stone before thanos ",
  answer: "collector"
},
{
  question: "did ever steve jumped on a grenade ",
  answer: "yes"
},
{
  question: "where is captain america from ",
  answer: "brooklyn"
},
{
  question: "did cap ever kissed nat? ",
  answer: "yes"
},
{
  question: "did ant-man fought againt falcon? ",
  answer: "yes"
},
{
  question: "harry styles in which marvel movie? ",
  answer: "eternals"
}]
function play(question, answer) {
  userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("you're right!");
    console.log("");
    score++;
  } else {
    console.log("grrrr...Wrong!");
    score--;
    console.log("the correct answer is ",answer);
    console.log("");
  }
}
for (var i = 0; i < questions.length; i++) {
  currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
  console.log("");

}
console.log("Great you've scored: " + score + "/7");
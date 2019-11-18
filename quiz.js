const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreText = document.getElementById("score");
const questionCounterText = document.getElementById("questionCounter");
const loader = document.getElementById("loader");
const gameScreen = document.getElementById("game");
const progressText = document.getElementById("progressText");
const progressBarFull = document.querySelector(
  "#progress-bar > .progress-bar-full"
);
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let questions = [];
fetch("questions.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(loadedQuestions) {
    
  })
  .catch(err => {
    console.error("Something bad happened", err);
  });

fetch(
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
)
  .then(function(response) {
    return response.json();
  })
  .then(function(loadedQuestions) {
    questions = loadedQuestions.results.map(loadedQuestion => {
      const formattedQuestion = {
        question: loadedQuestion.question
      };
      const answerChoices = [...loadedQuestion.incorrect_answers];
      //inject correct answer into random position
      formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );
      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });
      return formattedQuestion;
    });
    console.log(questions);
    
    startGame();
  })
  .catch(err => {
    console.error("Something bad happened, getting backup questions", err);
    fetch("questions.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(loadedQuestions) {
        questions = loadedQuestions;
        startGame();
      })
      .catch(err => {
        console.error("Something bad happened", err);
      });
  });

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
  
  loader.classList.add("hidden");
  gameScreen.classList.remove("hidden");
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    
    localStorage.setItem("mostRecentScore", score);
    
    return window.location.assign("/end.html");
  }


  questionCounter++;
  progressText.innerText = `Question: ${questionCounter}/${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

 
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerHTML = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  
  availableQuestions.splice(questionIndex, 1);

  
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    

    selectedChoice.parentElement.classList.add(classToApply);

    
    incrementScore(classToApply === "correct" ? CORRECT_BONUS : 0);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerHTML = `${score}`;
};
var questions = [{
    question: "1. Who was Ellen Page's love interest in the movie Juno??",
    choices: ["msg('Jesse Eisenberg')", "msgBox('Martin Starr');", "alertBox('Michael Cera');", "alert('Joseph Gordon-Levitt');"],
    correctAnswer: 2
}, {
    question: "2. Who directed Us?",
    choices: ["Keegan-Michael Key", "Jordan Peele", "Ari Aster", "James Wan"],
    correctAnswer: 2
}, {
    question: "3. How many Pixar animated films have been released?",
    choices: ["21", "25", "23", "18"],
    correctAnswer: 0
}, {
    question: "4. Who was the youngest Oscar winner of all time?",
    choices: ["Anna Paquin", "Haley Joel Osment", "Tatum O'Neal", "Saoirse Ronan"],
    correctAnswer: 2
}, {
    question: "5. What was Johnny Depp's first movie?",
    choices: ["Platoon", "Cry-Baby", "Sleepy Hollow", "A Nightmare on Elm Street"],
    correctAnswer: 3
},{
	question: "6. What did Zach Galifianakis call this baby in The Hangover?",
    choices: ["Carlos", "Kyle", "Juan", "Ben"],
    correctAnswer: 1
},{
	question: "7. What Game Does Bond Play In Casino Royale?",
    choices: ["Roulette", "Blackjack", "Poker", "Craps"],
    correctAnswer: 2
},{
	question: "8. Who Directed Batman Begins?",
    choices: ["Martin Scorsese", "Ridley Scott", "Tony Scott", "Christopher Nolan"],
    correctAnswer: 3
},{
	question: "9. HWho Played The Grinch?",
    choices: ["aBill Murray", "Mike Myers", "Jim Carey", "Owen Wilson"],
    correctAnswer: 2
},{
	question: "10. What Planet Does Avatar Take Place On?",
    choices: ["Pandora", "Venus", "Mars", "Prometheus"],
    correctAnswer: 0
}];

var currentQuestion = 0;
var viewingAns = 0;
var correctAnswers = 0;
var quizOver = false;
var iSelectedAnswer = [];
	var c=180;
	var t;


let quizContainer = document.getElementById("quiz-container");
let startBtn = document.getElementById("start-btn");
let nextBtn = document.getElementById("next-btn");
let submitBtn = document.getElementById("submit-btn");
let cancelBtn = document.getElementById("cancel-btn");
let restartBtn = document.getElementById("restart-btn");
let welcomeMsg = document.getElementById("welcome");

document.getElementById("cancel-btn").style.display = "none";

let currentQuestionIndex = 0;
let userAnswers = [];

const quizQuestions = [
    { type: "truefalse", question: "JavaScript är ett objektorienterat programmeringsspråk.", correctAnswer: "false" },
    { type: "truefalse", question: "JavaScript kan användas för att manipulera HTML-dokument.", correctAnswer: "true" },
    { type: "multiple", question: "Vilken metod används för att lägga till ett nytt element i slutet av en array?", options: ["push()", "pop()", "shift()", "unshift()"], correctAnswer: "push()" },
    { type: "multiple", question: "Vilken metod används för att ta bort det första elementet från en array?", options: ["push()", "pop()", "shift()", "unshift()"], correctAnswer: "shift()" },
    { type: "checkbox", question: "Vilka av följande är giltiga sätt att deklarera variabler i JavaScript?", options: ["let", "var", "constant", "const"], correctAnswers: ["let", "var", "const"] },
    { type: "checkbox", question: "Vilka av följande metoder används för att manipulera strängar i JavaScript?", options: ["split()", "join()", "toUpperCase()", "slice()"], correctAnswers: ["split()", "toUpperCase()", "slice()"] },
    { type: "truefalse", question: "JavaScript använder strikt typning, vilket betyder att du inte kan ändra en variabels datatyp.", correctAnswer: "false" },
    { type: "truefalse", question: "En funktion i JavaScript kan anropas innan den deklareras om den deklareras med `function`-nyckelordet.", correctAnswer: "true" },
    { type: "multiple", question: "Vad gör `parseInt()`-metoden i JavaScript?", options: ["Konverterar en sträng till ett heltal", "Lägger till ett element i en array", "Slår ihop två strängar", "Skapar en ny funktion"], correctAnswer: "Konverterar en sträng till ett heltal" },
    { type: "multiple", question: "Vad är resultatet av `typeof null` i JavaScript?", options: ["'object'", "'null'", "'undefined'", "'boolean'"], correctAnswer: "'object'" },
    { type: "checkbox", question: "Vilka av följande metoder används för att manipulera DOM-element i JavaScript?", options: ["document.getElementById()", "document.createElement()", "document.getElementByTagName()", "document.style()"], correctAnswers: ["document.getElementById()", "document.createElement()", "document.getElementByTagName()"] },
    { type: "checkbox", question: "Vilka av följande är falska JavaScript-metoder?", options: ["isNaN()", "isArray()", "Array.push()", "Date.now()"], correctAnswers: ["isArray()"] }
];

function startQuiz() {
    welcomeMsg.style.display = "none";
    quizContainer.style.display = "block";
    nextBtn.style.display = "block";
    cancelBtn.style.display = "block";
    submitBtn.style.display = "none";
    restartBtn.style.display = "none";
    startBtn.style.display = "none";
}
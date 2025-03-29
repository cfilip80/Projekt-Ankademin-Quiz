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
    loadQuestion();
}

function loadQuestion() {
    quizContainer.innerHTML = "";
    let q = quizQuestions[currentQuestionIndex];
    let div = document.createElement("div");
    div.innerHTML = `<p>${q.question}</p>`;
    if (q.type === "truefalse") {
        div.innerHTML += `<label><input type="radio" name="q" value="true"> Sant</label>`;
        div.innerHTML += `<label><input type="radio" name="q" value="false"> Falskt</label>`;
    } else if (q.type === "multiple") {
        q.options.forEach(option => {
            div.innerHTML += `<label><input type="radio" name="q" value="${option}"> ${option}</label>`;
        });
    } else if (q.type === "checkbox") {
        q.options.forEach(option => {
            div.innerHTML += `<label><input type="checkbox" name="q" value="${option}"> ${option}</label>`;
        });
    }
    quizContainer.appendChild(div);
}

function nextQuestion() {
    const inputs = document.getElementsByName("q");
    let selectedValues = [...inputs].filter(input => input.checked).map(input => input.value);
    userAnswers.push(selectedValues);

    if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
    }

    else if (currentQuestionIndex === quizQuestions.length - 1) {
    nextBtn.style.display = "none";
    submitBtn.style.display = "block";
    }
    console.log(userAnswers);
}

function cancelQuiz() {

    currentQuestionIndex = 0;
    userAnswers = [];
    // Göm quiz-relaterade element
    document.getElementById("quiz-container").style.display = "none"; // Göm quizet
    document.getElementById("next-btn").style.display = "none"; // Göm nästa knapp
    document.getElementById("submit-btn").style.display = "none"; // Göm skicka in knapp
    document.getElementById("cancel-btn").style.display = "none"; // Göm avbryt knapp

    // Visa välkomstmeddelandet och start-knappen
    document.getElementById("welcome").style.display = "block"; // Visa välkomstmeddelandet
    document.querySelector(".btn").style.display = "block"; // Visa start-knappen
}
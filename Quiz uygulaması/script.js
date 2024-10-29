const questions = [
    {
        question: "1. JavaScript'in çıkış yılı hangisidir?",
        choices: ["1990", "1995", "2000", "2005"],
        answer: 1
    },
    {
        question: "2. CSS'in açılımı nedir?",
        choices: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        answer: 0
    },
    {
        question: "3. HTML'in en son sürümü hangisidir?",
        choices: ["XHTML", "HTML4", "HTML5", "HTML6"],
        answer: 2
    },
    {
        question: "4. Web tarayıcılarında JavaScript'i çalıştıran nedir?",
        choices: ["Compiler", "Interpreter", "Engine", "Assembler"],
        answer: 2
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-text").textContent = currentQuestion.question;
    document.querySelectorAll(".choice").forEach((button, index) => {
        button.textContent = currentQuestion.choices[index];
        button.disabled = false;
    });

    document.getElementById("result").textContent = "";
    document.getElementById("next-btn").style.display = "none";
}

function selectAnswer(selectIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectIndex === currentQuestion.answer;

    if (isCorrect) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    document.getElementById("result").textContent = isCorrect ? "Doğru!" : "Yanlış!";
    document.querySelectorAll(".choice").forEach(button => button.disabled = true);
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length - 1) {
        document.getElementById("result").textContent = `Şu ana kadar doğru: ${correctAnswers}, yanlış: ${incorrectAnswers}`;
    }
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question-container").style.display = "none";
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("result").textContent = `Quiz bitti! Toplam doğru: ${correctAnswers}, yanlış: ${incorrectAnswers}`;
    }
}

// Sayfa yüklendiğinde ilk soruyu yükle
loadQuestion();

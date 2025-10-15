const quizData = [
    {
        question: "hva er 2+2?",
        options: [
            "4",
            "22",
            "bob",
        ],
        correctAnswer: "bob"
    },
    {
        question: "hvem er den beste karakteren i Lego Ninjago?",
        options: [
            "Jay",
            "Kai",
            "Cole",
            "Zane",
        ],
        correctAnswer: "Jay"
    },
    {
        question: "hvem er Ice Kongen?",
        options: [
            "Jay",
            "Kai",
            "Cole",
            "Zane",
        ],
        correctAnswer: "Zane"
    },
    {
        question: "Hvor var Kais ild sverd?",
        options: [
            "I ildtempelet",
            "I jungeltempelet",
            "I istempelet",
            "I jordtempelet",
        ],
        correctAnswer: "I ildtempelet"
    }
]


var poeng = 0;
var currentQuiz = 0;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    answerEl.innerHTML = '';
    currentQuizData.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => selectAnswer(option));
        answerEl.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    const currentQuizData = quizData[currentQuiz];
    if (selectedOption === currentQuizData.correctAnswer) {
        poeng++;
        alert("Riktig!");
    } else {
        alert("Feil!");
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        showResults();
    }
}

function showResults() {
    questionEl.innerText = `Du hast ${poeng} von ${quizData.length} Fragen richtig beantwortet!`;
    answerEl.innerHTML = '';
}

loadQuiz();
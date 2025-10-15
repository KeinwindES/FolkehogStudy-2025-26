const quizData = [
    {
        question: "was ist 2+2?",
        options: [
            "4",
            "22",
            "bob",
        ],
        correctAnswer: "bob"
    },
    {
        question: "wer ist der beste Charakter von Lego Ninjago?",
        options: [
            "Jay",
            "Kai",
            "Cole",
            "Zane",
        ],
        correctAnswer: "Jay"
    },
    {
        question: "wer ist der Ice König?",
        options: [
            "Jay",
            "Kai",
            "Cole",
            "Zane",
        ],
        correctAnswer: "Zane"
    },
    {
        question: "Wo war Kais Feuer Schwert?",
        options: [
            "Im Feuer Tempel",
            "Im Dschungel Tempel",
            "Im Eis Tempel",
            "Im Erde Tempel",
        ],
        correctAnswer: "Im Feuer Tempel"
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
        alert("Correct!");
    } else {
        alert("Falsch!");
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
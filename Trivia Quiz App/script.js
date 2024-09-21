const quizContainer = document.getElementById('quizContainer');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const scoreContainer = document.getElementById('scoreContainer');
const scoreElement = document.getElementById('score');
const restartBtn = document.getElementById('restartBtn');

let questions = [];
let currentQuestionIndex = 0;
let score = 0;

// Fetch questions from the API
async function fetchQuestions() {
    const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
    const data = await response.json();
    questions = data.results;
    startQuiz();
}

// Start the quiz
function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    quizContainer.style.display = 'block';
    scoreContainer.style.display = 'none';
    showQuestion();
}

// Show current question
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    
    const options = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
    options.sort(() => Math.random() - 0.5); // Shuffle options

    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(option));
        optionsElement.appendChild(button);
    });
}

// Handle answer selection
function selectAnswer(selected) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selected === currentQuestion.correct_answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Show the score
function showScore() {
    quizContainer.style.display = 'none';
    scoreContainer.style.display = 'block';
    scoreElement.textContent = `${score} out of ${questions.length}`;
}

// Restart the quiz
restartBtn.addEventListener('click', fetchQuestions);
nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

// Start fetching questions when the page loads
fetchQuestions();

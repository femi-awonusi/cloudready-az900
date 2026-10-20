
"use strict";

// Get the buttons and page sections.
const startButton = document.querySelector("#start-btn");
const learningDomains = document.querySelector("#learning-domains");
const statusMessage = document.querySelector("#status-message");
const quizSection = document.querySelector("#quiz-section");
const exitQuizButton = document.querySelector("#exit-quiz-btn");

// Get the quiz display elements.
const questionCounter = document.querySelector("#question-counter");
const scoreLabel = document.querySelector("#score-label");
const progressTrack = document.querySelector("#progress-track");
const progressFill = document.querySelector("#progress-fill");
const quizDomain = document.querySelector("#quiz-domain");
const quizQuestion = document.querySelector("#quiz-question");
const answerOptions = document.querySelector("#answer-options");
const answerFeedback = document.querySelector("#answer-feedback");
const feedbackHeading = document.querySelector("#feedback-heading");
const feedbackExplanation = document.querySelector("#feedback-explanation");
const nextQuestionButton = document.querySelector("#next-question-btn");

// Load the questions from data/questions.js.
const questions = window.CLOUDREADY_QUESTIONS;

// Track the learner's progress.
let currentQuestionIndex = 0;
let score = 0;
let quizComplete = false;

// Start or restart the quiz.
function startQuiz() {
    if (!Array.isArray(questions) || questions.length === 0) {
        statusMessage.textContent =
            "The question bank could not be loaded. Please refresh the page.";
        return;
    }

    currentQuestionIndex = 0;
    score = 0;
    quizComplete = false;

    statusMessage.textContent = "";
    quizSection.hidden = false;
    nextQuestionButton.textContent = "Next question →";

    showQuestion();

    quizSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Display the current question and its four options.
function showQuestion() {
    const question = questions[currentQuestionIndex];

    questionCounter.textContent =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    scoreLabel.textContent = `Score: ${score}`;
    quizDomain.textContent = question.domain;
    quizQuestion.textContent = question.question;

    progressTrack.setAttribute("aria-valuemax", questions.length);
    progressTrack.setAttribute("aria-valuenow", currentQuestionIndex);
    progressFill.style.width =
        `${(currentQuestionIndex / questions.length) * 100}%`;

    answerOptions.replaceChildren();
    answerFeedback.hidden = true;
    nextQuestionButton.disabled = true;

    // Create one answer button for each option.
    question.options.forEach(function (option, index) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-option";

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = String.fromCharCode(65 + index);

        const answerText = document.createElement("span");
        answerText.textContent = option;

        button.append(letter, answerText);

        button.addEventListener("click", function () {
            selectAnswer(index);
        });

        answerOptions.appendChild(button);
    });
}

// Check the selected answer and explain the result.
function selectAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const optionButtons = answerOptions.querySelectorAll(".answer-option");

    // Prevent the learner from answering the same question twice.
    if (nextQuestionButton.disabled === false) {
        return;
    }

    const isCorrect = selectedIndex === question.correctAnswer;

    if (isCorrect) {
        score++;
    }

    optionButtons.forEach(function (button, index) {
        button.disabled = true;

        if (index === question.correctAnswer) {
            button.classList.add("correct");
        } else if (index === selectedIndex) {
            button.classList.add("incorrect");
        }
    });

    feedbackHeading.textContent = isCorrect
        ? "Correct! Well done."
        : "Not quite. Review the explanation.";

    const correctAnswer = question.options[question.correctAnswer];
    const explanation = question.explanation || "";

    feedbackExplanation.textContent = isCorrect
        ? explanation
        : `Correct answer: ${correctAnswer}. ${explanation}`;

    // Use option-specific feedback when the question provides it.
    if (
        Array.isArray(question.optionExplanations) &&
        question.optionExplanations[selectedIndex]
    ) {
        feedbackExplanation.textContent =
            `${feedbackExplanation.textContent} ` +
            question.optionExplanations[selectedIndex];
    }

    answerFeedback.hidden = false;
    scoreLabel.textContent = `Score: ${score}`;

    progressTrack.setAttribute(
        "aria-valuenow",
        currentQuestionIndex + 1
    );

    progressFill.style.width =
        `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

    nextQuestionButton.disabled = false;

    if (currentQuestionIndex === questions.length - 1) {
        nextQuestionButton.textContent = "See results →";
    }
}

// Move forward or show the final result.
function goToNextQuestion() {
    if (quizComplete) {
        startQuiz();
        return;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResults();
    }
}

// Display the learner's final score.
function showResults() {
    quizComplete = true;

    questionCounter.textContent = "Quiz complete";
    scoreLabel.textContent = `Score: ${score} / ${questions.length}`;
    quizDomain.textContent = "YOUR RESULTS";

    quizQuestion.textContent =
        `You scored ${score} out of ${questions.length}.`;

    answerOptions.replaceChildren();
    answerFeedback.hidden = false;
    feedbackHeading.textContent = "Practice session complete";

    const percentage = Math.round((score / questions.length) * 100);

    feedbackExplanation.textContent =
        `${percentage}% correct. Review the explanations and try again ` +
        "to strengthen your understanding of Azure concepts.";

    progressTrack.setAttribute("aria-valuenow", questions.length);
    progressFill.style.width = "100%";

    nextQuestionButton.disabled = false;
    nextQuestionButton.textContent = "Try again ↻";
}

// Connect the buttons to their actions.
startButton.addEventListener("click", startQuiz);

nextQuestionButton.addEventListener("click", goToNextQuestion);

exitQuizButton.addEventListener("click", function () {
    quizSection.hidden = true;

    learningDomains.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

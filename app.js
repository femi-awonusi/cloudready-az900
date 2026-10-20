
"use strict";

// CloudReady AZ-900 app logic.
// Practice questions are original learning materials, not official exam questions.

// -----------------------------------------------------------------------------
// Page elements
// -----------------------------------------------------------------------------

const startButton = document.querySelector("#start-btn");
const learningDomains = document.querySelector("#learning-domains");
const statusMessage = document.querySelector("#status-message");
const quizSection = document.querySelector("#quiz-section");
const exitQuizButton = document.querySelector("#exit-quiz-btn");

// Dashboard elements
const attemptCount = document.querySelector("#attempt-count");
const answeredCount = document.querySelector("#answered-count");
const overallAccuracy = document.querySelector("#overall-accuracy");
const domainStats = document.querySelector("#domain-stats");

// Missed-question review element
const missedQuestionsList = document.querySelector("#missed-questions-list");

// Quiz elements
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

// Questions are loaded by data/questions.js before this file.
const questions = window.CLOUDREADY_QUESTIONS;

// -----------------------------------------------------------------------------
// Quiz state and saved history
// -----------------------------------------------------------------------------

const STORAGE_KEY = "cloudready-az900-attempts";

let currentQuestionIndex = 0;
let score = 0;
let quizComplete = false;
let quizAttempts = [];
let domainScores = {};
let missedQuestions = [];

// -----------------------------------------------------------------------------
// Local storage
// -----------------------------------------------------------------------------

function loadQuizAttempts() {
    try {
        const savedAttempts = localStorage.getItem(STORAGE_KEY);

        if (!savedAttempts) {
            return [];
        }

        const parsedAttempts = JSON.parse(savedAttempts);

        return Array.isArray(parsedAttempts) ? parsedAttempts : [];
    } catch (error) {
        console.error("Could not load saved quiz attempts:", error);
        return [];
    }
}

function saveQuizAttempts() {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(quizAttempts)
        );
    } catch (error) {
        console.error("Could not save quiz attempts:", error);

        statusMessage.textContent =
            "Your quiz finished, but progress could not be saved in this browser.";
    }
}

// Restore saved attempts when the page loads.
quizAttempts = loadQuizAttempts();

// -----------------------------------------------------------------------------
// Shared helpers
// -----------------------------------------------------------------------------

function calculateAccuracy(correct, total) {
    if (!total) {
        return 0;
    }

    return Math.round((correct / total) * 100);
}

function resetDomainScores() {
    domainScores = {};

    questions.forEach(function (question) {
        if (!domainScores[question.domain]) {
            domainScores[question.domain] = {
                total: 0,
                correct: 0
            };
        }

        domainScores[question.domain].total++;
    });
}

// -----------------------------------------------------------------------------
// Progress dashboard
// -----------------------------------------------------------------------------

function renderDashboard() {
    const totalAttempts = quizAttempts.length;

    const totalAnswered = quizAttempts.reduce(function (sum, attempt) {
        return sum + (Number(attempt.total) || 0);
    }, 0);

    const totalCorrect = quizAttempts.reduce(function (sum, attempt) {
        return sum + (Number(attempt.score) || 0);
    }, 0);

    attemptCount.textContent = String(totalAttempts);
    answeredCount.textContent = String(totalAnswered);

    overallAccuracy.textContent =
        `${calculateAccuracy(totalCorrect, totalAnswered)}%`;

    domainStats.replaceChildren();

    const domains = [
        ...new Set(
            questions.map(function (question) {
                return question.domain;
            })
        )
    ];

    if (totalAttempts === 0) {
        const message = document.createElement("p");

        message.textContent =
            "Complete a quiz to see your domain performance.";

        domainStats.appendChild(message);
        return;
    }

    domains.forEach(function (domain) {
        let domainTotal = 0;
        let domainCorrect = 0;

        // Combine results from all completed attempts.
        quizAttempts.forEach(function (attempt) {
            const result =
                attempt.domainScores &&
                attempt.domainScores[domain];

            if (result) {
                domainTotal += Number(result.total) || 0;
                domainCorrect += Number(result.correct) || 0;
            }
        });

        const accuracy = calculateAccuracy(
            domainCorrect,
            domainTotal
        );

        const card = document.createElement("article");
        card.className = "domain-stat-card";

        const heading = document.createElement("h4");
        heading.textContent = domain;

        const details = document.createElement("p");

        details.textContent =
            `${domainCorrect} of ${domainTotal} correct · ${accuracy}% accuracy`;

        const track = document.createElement("div");
        track.className = "domain-progress-track";

        const fill = document.createElement("div");
        fill.className = "domain-progress-fill";
        fill.style.width = `${accuracy}%`;

        track.appendChild(fill);
        card.append(heading, details, track);
        domainStats.appendChild(card);
    });
}

// -----------------------------------------------------------------------------
// Review missed questions
// -----------------------------------------------------------------------------

function renderMissedQuestions() {
    missedQuestionsList.replaceChildren();

    // Collect unique question IDs from all saved attempts.
    const missedIds = [
        ...new Set(
            quizAttempts.flatMap(function (attempt) {
                return Array.isArray(attempt.missedQuestions)
                    ? attempt.missedQuestions
                    : [];
            })
        )
    ];

    // Find the matching questions in the question bank.
    const missedItems = questions.filter(function (question) {
        return missedIds.includes(question.id);
    });

    if (missedItems.length === 0) {
        const message = document.createElement("p");

        message.textContent =
            "No missed questions yet. Complete a quiz to build your revision list.";

        missedQuestionsList.appendChild(message);
        return;
    }

    // Display each missed question once.
    missedItems.forEach(function (question) {
        const card = document.createElement("article");
        card.className = "missed-question-card";

        const domain = document.createElement("p");
        domain.className = "missed-question-domain";
        domain.textContent =
            `${question.domain} · ${question.topic}`;

        const heading = document.createElement("h3");
        heading.textContent = question.question;

        const answer = document.createElement("p");
        answer.textContent =
            `Correct answer: ${question.options[question.correctAnswer]}`;

        const explanation = document.createElement("p");

        explanation.textContent =
            question.explanation ||
            "Review this topic in the AZ-900 study materials.";

        card.append(domain, heading, answer, explanation);
        missedQuestionsList.appendChild(card);
    });
}

// -----------------------------------------------------------------------------
// Start and display the quiz
// -----------------------------------------------------------------------------

function startQuiz() {
    if (!Array.isArray(questions) || questions.length === 0) {
        statusMessage.textContent =
            "The question bank could not be loaded. Please refresh the page.";
        return;
    }

    currentQuestionIndex = 0;
    score = 0;
    quizComplete = false;
    missedQuestions = [];

    resetDomainScores();

    statusMessage.textContent = "";
    quizSection.hidden = false;
    nextQuestionButton.textContent = "Next question →";

    showQuestion();

    quizSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function showQuestion() {
    const question = questions[currentQuestionIndex];

    questionCounter.textContent =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    scoreLabel.textContent = `Score: ${score}`;
    quizDomain.textContent = question.domain;
    quizQuestion.textContent = question.question;

    progressTrack.setAttribute(
        "aria-valuemax",
        String(questions.length)
    );

    progressTrack.setAttribute(
        "aria-valuenow",
        String(currentQuestionIndex)
    );

    progressFill.style.width =
        `${(currentQuestionIndex / questions.length) * 100}%`;

    answerOptions.replaceChildren();
    answerFeedback.hidden = true;
    nextQuestionButton.disabled = true;
    nextQuestionButton.textContent = "Next question →";

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

// -----------------------------------------------------------------------------
// Answer checking and feedback
// -----------------------------------------------------------------------------

function selectAnswer(selectedIndex) {
    // Prevent answering again after the quiz has finished.
    if (quizComplete || !nextQuestionButton.disabled) {
        return;
    }

    const question = questions[currentQuestionIndex];

    const optionButtons =
        answerOptions.querySelectorAll(".answer-option");

    const isCorrect =
        selectedIndex === question.correctAnswer;

    // Record the result for this question's domain.
    if (isCorrect) {
        score++;
        domainScores[question.domain].correct++;
    } else {
        missedQuestions.push(question.id);
    }

    // Disable all options and show the correct answer.
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

    const correctAnswer =
        question.options[question.correctAnswer];

    const explanation = question.explanation || "";

    feedbackExplanation.textContent = isCorrect
        ? explanation
        : `Correct answer: ${correctAnswer}. ${explanation}`;

    // Add the explanation for the selected option when available.
    if (
        Array.isArray(question.optionExplanations) &&
        question.optionExplanations[selectedIndex]
    ) {
        feedbackExplanation.textContent +=
            ` ${question.optionExplanations[selectedIndex]}`;
    }

    answerFeedback.hidden = false;
    scoreLabel.textContent = `Score: ${score}`;

    progressTrack.setAttribute(
        "aria-valuenow",
        String(currentQuestionIndex + 1)
    );

    progressFill.style.width =
        `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

    nextQuestionButton.disabled = false;

    if (currentQuestionIndex === questions.length - 1) {
        nextQuestionButton.textContent = "See results →";
    }
}

// -----------------------------------------------------------------------------
// Navigation and final results
// -----------------------------------------------------------------------------

function goToNextQuestion() {
    if (quizComplete) {
        startQuiz();
        return;
    }

    // Do not advance until an answer has been selected.
    if (nextQuestionButton.disabled) {
        return;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    // Prevent a completed attempt from being saved twice.
    if (quizComplete) {
        return;
    }

    quizComplete = true;

    // Save a snapshot of the completed attempt.
    quizAttempts.push({
        date: new Date().toISOString(),
        score: score,
        total: questions.length,
        accuracy: calculateAccuracy(score, questions.length),
        domainScores: JSON.parse(JSON.stringify(domainScores)),
        missedQuestions: [...new Set(missedQuestions)]
    });

    saveQuizAttempts();
    renderDashboard();
    renderMissedQuestions();

    // Display the final score.
    questionCounter.textContent = "Quiz complete";

    scoreLabel.textContent =
        `Score: ${score} / ${questions.length}`;

    quizDomain.textContent = "YOUR RESULTS";

    quizQuestion.textContent =
        `You scored ${score} out of ${questions.length}.`;

    answerOptions.replaceChildren();
    answerFeedback.hidden = false;

    feedbackHeading.textContent =
        "Practice session complete";

    const percentage =
        calculateAccuracy(score, questions.length);

    feedbackExplanation.textContent =
        `${percentage}% correct. Review the explanations and try again ` +
        "to strengthen your understanding of Azure concepts.";

    progressTrack.setAttribute(
        "aria-valuenow",
        String(questions.length)
    );

    progressFill.style.width = "100%";

    nextQuestionButton.disabled = false;
    nextQuestionButton.textContent = "Try again ↻";
}

// -----------------------------------------------------------------------------
// Button events and initial page rendering
// -----------------------------------------------------------------------------

startButton.addEventListener("click", startQuiz);

nextQuestionButton.addEventListener(
    "click",
    goToNextQuestion
);

exitQuizButton.addEventListener("click", function () {
    quizSection.hidden = true;

    learningDomains.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Render saved information when the page opens.
renderDashboard();
renderMissedQuestions();

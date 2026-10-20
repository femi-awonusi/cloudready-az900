
"use strict";

// Find the button and the area where feedback will appear.
const startButton = document.querySelector("#start-btn");
const learningDomains = document.querySelector("#learning-domains");
const statusMessage = document.querySelector("#status-message");

// Respond when the user clicks "Start learning".
startButton.addEventListener("click", function () {
    // Move the page down to the learning domains.
    learningDomains.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    // Display a message to confirm that the button works.
    statusMessage.textContent =
        "Your learning journey starts here. Topic-based quizzes are coming next!";
});

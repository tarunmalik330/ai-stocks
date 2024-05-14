const lottiePlayers = {
    company: {
        element: document.getElementById("company"),
        played: false,
    },
    invest: {
        element: document.getElementById("invest"),
        played: false,
    },
    shares: {
        element: document.getElementById("shares"),
        played: false,
    },
};

let activeButtonIndex = 0; // To keep track of the currently active button index
let timer; // Timer variable
let automaticSwitching = true; // Flag to control automatic button switching

// Function to reset timer and switch to the next button
const resetTimerAndSwitchButton = () => {
    clearTimeout(timer); // Reset the timer
    if (automaticSwitching) {
        activeButtonIndex = (activeButtonIndex + 1) % buttonValues.length; // Increment the active button index cyclically
        changeImageHandler(buttonValues[activeButtonIndex]); // Change the image to the next button
        timer = setTimeout(resetTimerAndSwitchButton, 6000); // Start the timer again
    }
};

// Function to handle button clicks
const changeImageHandler = (value) => {
    // Restart the currently playing animation before starting a new one
    restartCurrentAnimation();

    // If the clicked button is not already active, update the active button index and start automatic switching
    if (activeButtonIndex !== buttonValues.indexOf(value)) {
        clearTimeout(timer); // Clear the timer
        activeButtonIndex = buttonValues.indexOf(value); // Update the active button index
        automaticSwitching = true; // Set automatic switching flag to true
        startAutomaticButtonSwitching(); // Restart automatic button switching
    }

    // Call the changeLottiePlayer function with the clicked button value
    changeLottiePlayer(value);
};

// Function to restart the currently playing animation
const restartCurrentAnimation = () => {
    for (const player of Object.values(lottiePlayers)) {
        if (player.element.playing) {
            player.element.stop(); // Stop the current animation
            player.element.goToAndPlay(0); // Go to the beginning and play again
        }
    }
};

// Define an array of button values
const buttonValues = ["company", "invest", "shares"];

// Event listeners for buttons
buttonValues.forEach((value, index) => {
    const button = document.querySelector(
        `[data-title="${value}"] .trade_shares_btns`
    );
    button.addEventListener("click", () => {
        clearTimeout(timer); // Clear the timer
        activeButtonIndex = index; // Update the active button index
        changeImageHandler(value); // Change image to the clicked button
        automaticSwitching = true; // Set automatic switching flag to true
        startAutomaticButtonSwitching(); // Restart automatic button switching
    });
});
document
    .querySelector(".trade_line_first")
    .classList.add("tradeLinetransitionFirst");
const changeLottiePlayer = (value) => {
    // Hide all Lottie players initially
    for (const player of Object.values(lottiePlayers)) {
        player.element.style.display = "none";
        player.element.loop = false; // Set loop to false for all players
    }

    // Show the clicked Lottie player
    const currentPlayer = lottiePlayers[value];
    currentPlayer.element.style.display = "block";

    // Set loop to true for the active player
    currentPlayer.element.loop = true;

    // Stop the current animation and go to the first frame
    currentPlayer.element.stop();

    // Highlight the clicked button
    const allButtons = document.querySelectorAll(".trade_shares_btns");
    allButtons.forEach((btn) => btn.classList.remove("trade_shares_active_btns"));
    document
        .querySelector(`[data-title="${value}"] .trade_shares_btns`)
        .classList.add("trade_shares_active_btns");

    // Activate dots based on the clicked button
    const allDots = document.querySelectorAll(".timeline_dot");
    allDots.forEach((dot) => dot.classList.remove("active_timeline_dot"));
    if (value === "company") {
        document
            .querySelector("[data-title='company'] .timeline_dot")
            .classList.add("active_timeline_dot");
        document
            .querySelector(".trade_line_first")
            .classList.add("tradeLinetransitionFirst");
        document
            .querySelector(".trade_line_second")
            .classList.remove("tradeLinetransitionFirst");
        document
            .querySelector(".trade_line_second")
            .classList.remove("tradeLineSecondAfter");
        document
            .querySelector(".trade_timeline")
            .classList.remove("trade_timeline_gradient");
    } else if (value === "invest") {
        document
            .querySelector("[data-title='company'] .timeline_dot")
            .classList.add("active_timeline_dot");
        document
            .querySelector("[data-title='invest'] .timeline_dot")
            .classList.add("active_timeline_dot");
        document
            .querySelector(".trade_line_first")
            .classList.add("tradeLineSecondAfter");
        document
            .querySelector(".trade_line_second")
            .classList.add("tradeLinetransitionFirst");
        document
            .querySelector(".trade_line_first")
            .classList.remove("tradeLinetransitionFirst");
        document
            .querySelector(".trade_timeline")
            .classList.remove("trade_timeline_gradient");
    } else if (value === "shares") {
        allDots.forEach((dot) => dot.classList.add("active_timeline_dot"));
        document
            .querySelector(".trade_timeline")
            .classList.add("trade_timeline_gradient");
        document
            .querySelector(".trade_line_first")
            .classList.remove("tradeLinetransitionFirst");
        document
            .querySelector(".trade_line_first")
            .classList.remove("tradeLineSecondAfter");
        document
            .querySelector(".trade_line_second")
            .classList.remove("tradeLinetransitionFirst");
    } else {
        document
            .querySelector(`[data-title="${value}"] .timeline_dot`)
            .classList.add("active_timeline_dot");
        document
            .querySelector(".trade_line_first")
            .classList.remove("tradeLineSecondAfter");
    }

    // Play the animation
    currentPlayer.element.play();
};

// Event listener for automatic button switching
const startAutomaticButtonSwitching = () => {
    // Start the timer initially
    timer = setTimeout(resetTimerAndSwitchButton, 7000);
};

// Start automatic button switching
startAutomaticButtonSwitching();

/*
 * 49 DAYS — LONG-DISTANCE SURPRISE ♡
 *
 * PASSWORD:
 * Select 28 August 2026 using the date picker.
 *
 * MUSIC:
 * Add your MP3 to assets/our-song.mp3.
 * Uncomment the <source> element in index.html.
 *
 * NOTE:
 * A date password on GitHub Pages is not secure authentication.
 */

// ========================================
// 1. CONFIGURATION
// ========================================

// Change the year here if your anniversary was in a different year.
const CORRECT_DATE = "2026-08-28";

// ========================================
// 2. HTML ELEMENTS
// ========================================

const gateScreen = document.getElementById("gateScreen");
const storyScreen = document.getElementById("storyScreen");

const passwordForm = document.getElementById("passwordForm");
const datePassword = document.getElementById("datePassword");
const passwordError = document.getElementById("passwordError");

const music = document.getElementById("backgroundMusic");
const replayButton = document.getElementById("replayButton");

// ========================================
// 3. DATE PICKER SETUP
// ========================================

// Prevent selecting future dates.
datePassword.max = new Date().toISOString().split("T")[0];

// ========================================
// 4. CHECK THE DATE PASSWORD
// ========================================
passwordForm.addEventListener("submit", function (event) {
    // Prevent the browser from reloading the page.
    event.preventDefault();

    const selectedDate = datePassword.value;

    if (!selectedDate) {
        passwordError.textContent =
            "Choose our special date first, sweetheart. ♡";
        return;
    }

    if (selectedDate === CORRECT_DATE) {
        passwordError.textContent = "";

        gateScreen.classList.add("hidden");
        storyScreen.classList.remove("hidden");
        storyScreen.setAttribute("aria-hidden", "false");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        playBackgroundMusic();
        sprinkleHearts(20);

    } else {
        passwordError.textContent =
            "So close, darling… ♡ Think of the day we got together!";

        datePassword.classList.add("wrong-date");

        setTimeout(function () {
            datePassword.classList.remove("wrong-date");
        }, 500);
    }
});


// ========================================
// 5. BACKGROUND MUSIC
// ========================================

function playBackgroundMusic() {

    // Music will only play if a source has been added in index.html.
    const musicSource = music.querySelector("source");

    if (!musicSource) {
        return;
    }

    music.volume = 0.35;

    music.play().catch(function () {

        // Some browsers may block playback.
        // The rest of the website will still work.
        console.log(
            "Music playback was blocked by the browser."
        );
    });
}

// ========================================
// 6. FLOATING HEART ANIMATION
// ========================================

function sprinkleHearts(count = 16) {

    for (let i = 0; i < count; i++) {

        setTimeout(function () {

            const heart = document.createElement("span");

            heart.className = "heart-float";

            // Alternate between outlined and filled hearts.
            heart.textContent =
                Math.random() > 0.45 ? "♡" : "♥";

            // Random horizontal position.
            heart.style.left =
                `${8 + Math.random() * 84}vw`;

            // Random starting height.
            heart.style.top =
                `${55 + Math.random() * 35}vh`;

            // Random heart size.
            heart.style.fontSize =
                `${14 + Math.random() * 18}px`;

            // Add the heart to the page.
            document.body.appendChild(heart);

            // Remove it after its animation finishes.
            setTimeout(function () {
                heart.remove();
            }, 3000);

        }, i * 90);
    }
}

// ========================================
// 7. REPLAY THE PHOTO ANIMATIONS
// ========================================

if (replayButton) {

    replayButton.addEventListener("click", function () {

        const photoCards =
            document.querySelectorAll(".photo-card");

        photoCards.forEach(function (card) {

            // Reset the animation.
            card.style.animation = "none";

            // Force the browser to register the reset.
            void card.offsetWidth;

            // Restart the original CSS animation.
            card.style.animation = "";

        });

        // Return to the beginning of the surprise.
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // Add a few more hearts.
        sprinkleHearts(10);
    });
}

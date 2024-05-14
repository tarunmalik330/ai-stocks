//    < !-- ------back to top----- -->

document.addEventListener("DOMContentLoaded", function () {
    var backToTopBtn = document.getElementById("backToTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "flex";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});



// ---------------------------header-video---------------------------
document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('videoPlayer');
    var playButton = document.getElementById('playButton');
    playButton.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            playButton.style.display = 'none';
        } else {
            video.pause();
        }
    });
    video.addEventListener('play', function () {
        playButton.style.display = 'none';
    });

    video.addEventListener('pause', function () {
        playButton.style.display = 'block';
    });
});


// ------------------------------------nav-tabs------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-item');
    const panes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all tabs and panes
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            // Add active class to clicked tab and corresponding pane
            tab.classList.add('active');
            const target = document.querySelector(tab.querySelector('a').getAttribute('href'));
            if (target) {
                target.classList.add('active');
            }
        });
    });
});

//================================= STATISTICS COUNTER=================================
const options = {
    threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const target = entry.target.querySelector(".counter");
            const countTo = parseInt(target.innerText);

            if (target.id === "placesLeftCounter") {
                let currentCount = 10;

                const counter = setInterval(() => {
                    if (currentCount >= countTo) {
                        target.innerText = currentCount--;
                    } else {
                        clearInterval(counter);
                    }
                }, 300);
            } else {
                let currentCount = countTo - 5;

                const counter = setInterval(() => {
                    if (currentCount <= countTo) {
                        target.innerText = currentCount++;
                    } else {
                        clearInterval(counter);
                    }
                }, 300);
            }
        }
    });
}, options);
document.querySelectorAll(".statistics_cards_parent").forEach((card) => {
    observer.observe(card);
});
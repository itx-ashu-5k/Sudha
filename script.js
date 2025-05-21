document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js for sparkles
    particlesJS('sparkles', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: {
                value: 0.5,
                random: true,
                animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                animation: { enable: true, speed: 2, minimumValue: 0.1, sync: false }
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "bounce" },
            }
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true
            }
        },
        retina_detect: true
    });

    // Force music to play immediately
    const music = document.getElementById('birthdayMusic');
    music.volume = 0.5;

    // Function to force play music
    const forcePlayMusic = () => {
        const playAttempt = setInterval(() => {
            music.play()
            .then(() => {
                clearInterval(playAttempt);
            })
            .catch(() => {
                // Keep trying
            });
        }, 100);
    };

    // Try multiple methods to autoplay
    forcePlayMusic();
    
    // Also try on user interaction events
    const events = ['click', 'touchstart', 'keydown', 'scroll', 'mousemove'];
    events.forEach(event => {
        document.addEventListener(event, () => {
            music.play().catch(() => {});
        }, { once: true });
    });

    // Create confetti effect
    function createConfetti() {
        const colors = ['#ff4081', '#ffd3e0', '#ffeb3b', '#ff9800', '#4caf50'];
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.opacity = Math.random();
        document.querySelector('.confetti').appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }

    // Start confetti
    setInterval(createConfetti, 200);

    // Create floating hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
        heart.style.fontSize = (Math.random() * 15 + 10) + 'px';
        document.getElementById('floating-hearts').appendChild(heart);
        
        setTimeout(() => heart.remove(), 5000);
    }

    // Start floating hearts
    setInterval(createHeart, 500);

    // Instagram link
    document.getElementById('ashish').addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://www.instagram.com/itx_ashu_5k', '_blank');
    });

    // Add shine effect to golden frame on hover
    const goldenFrame = document.querySelector('.golden-frame');
    goldenFrame.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.02)';
    });
    goldenFrame.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });

    // Smooth reveal of elements
    const elements = document.querySelectorAll('.animate__animated');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.opacity = '1';
        }, index * 200);
    });
});

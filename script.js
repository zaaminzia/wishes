let currentScreen = 1;
const totalScreens = 3;

function nextScreen() {
    // Hide current screen
    document.getElementById(`screen${currentScreen}`).classList.add('hidden');
    
    // Show next screen
    currentScreen = currentScreen === totalScreens ? 1 : currentScreen + 1;
    const nextScreenEl = document.getElementById(`screen${currentScreen}`);
    nextScreenEl.classList.remove('hidden');
    
    // Add animation
    nextScreenEl.classList.add('screen-transition');
    setTimeout(() => {
        nextScreenEl.classList.remove('screen-transition');
    }, 800);
    
    // Confetti on final screen
    if (currentScreen === 3) {
        setTimeout(() => {
            const confettiSettings = { 
                target: 'confetti',
                max: 150,
                size: 1.5,
                animate: true,
                colors: [[255, 192, 203], [255, 105, 180], [186, 85, 211], [238, 130, 238]]
            };
            const confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
        }, 500);
    }
}

function startConfetti() {
    const confettiCanvas = document.getElementById('confetti');
    confettiCanvas.classList.remove('hidden');
    
    const confetti = new ConfettiGenerator({
        target: 'confetti',
        max: 200,
        size: 1.5,
        respawn: true,
        animate: true,
        clock: 50,
        colors: [[255, 192, 203], [255, 105, 180], [186, 85, 211], [238, 130, 238]],
        rotate: true
    });
    
    confetti.render();
    
    // Stop confetti after 10 seconds
    setTimeout(() => {
        confetti.clear();
        confettiCanvas.classList.add('hidden');
    }, 10000);
}
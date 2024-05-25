document.getElementById('openButton').addEventListener('click', function() {
    var envelope = document.getElementById('envelope');
    var content = document.getElementById('content');
    var cover = document.getElementById('cover');
    var birthdayMessage = document.getElementById('birthdayMessage');

    // Animate the envelope opening
    cover.style.transform = 'rotateX(-180deg)';

    // Show the content and birthday message after a delay
    setTimeout(function() {
        content.style.opacity = 1;
        birthdayMessage.style.opacity = 1;
        // Start confetti effect
        startConfetti();
    }, 1000);
});

// Confetti effect
function startConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const confettiCount = 100;
    const colors = ['#ff5722', '#ff9800', '#ffeb3b', '#4caf50', '#2196f3', '#9c27b0'];

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiContainer.appendChild(confetti);
    }
}

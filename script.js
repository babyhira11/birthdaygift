document.getElementById('openButton').addEventListener('click', function() {
    var envelope = document.getElementById('envelope');
    var content = document.getElementById('content');
    var cover = document.getElementById('cover');
    var birthdayMessage = document.getElementById('birthdayMessage');
    var confetti = document.getElementById('confetti');

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
    const

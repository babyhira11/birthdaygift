document.getElementById('openButton').addEventListener('click', function() {
    var envelope = document.getElementById('envelope');
    var content = document.getElementById('content');
    var cover = document.getElementById('cover');
    var birthdayMessage = document.getElementById('birthdayMessage');
    var confetti = document.getElementById('confetti');

    // Animate the envelope opening
    cover.style.transform = 'rotateX(-180deg)';

    // Show the content and birthday message immediately
    content.style.opacity = 1;
    birthdayMessage.style.opacity = 1;

    // Start confetti effect immediately
    startConfetti();
});

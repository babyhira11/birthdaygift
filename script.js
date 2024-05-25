document.getElementById('openButton').addEventListener('click', function() {
    var envelope = document.getElementById('envelope');
    var content = document.getElementById('content');

    // Animate the envelope opening
    envelope.querySelector('.cover').style.transform = 'rotateX(-180deg)';

    // Show the content after a delay
    setTimeout(function() {
        content.style.opacity = 1;
    }, 1000);
});

document.getElementById('openButton').addEventListener('click', function() {
    console.log('Button clicked'); // Log to console to ensure click event is triggered

    var envelope = document.getElementById('envelope');
    var content = document.getElementById('content');
    var cover = document.getElementById('cover');

    // Animate the envelope opening
    cover.style.transform = 'rotateX(-180deg)';

    // Show the content after a delay
    setTimeout(function() {
        content.style.opacity = 1;
    }, 1000);
});

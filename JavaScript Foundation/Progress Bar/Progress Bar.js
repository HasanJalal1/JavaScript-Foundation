document.addEventListener('scroll', function () {
    // Calculate the scroll progress
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;

    // Update the width of the progress bar
    document.getElementById('progressBar').style.width = `${progress}%`;

    // Show/hide the progress bar container based on scroll position
    const progressBarContainer = document.getElementById('progressBarContainer');
    progressBarContainer.style.display = (scrollTop > 20) ? 'block' : 'none';
});
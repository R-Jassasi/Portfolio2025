AOS.init({
    duration: 800, // Animation duration
    easing: 'ease-in-out',
    once: true // Animates only once
});


//scroll progress bar
document.addEventListener('DOMContentLoaded', function () {
    window.onscroll = function () {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("progress-bar").style.width = scrolled + "%";
    };
});



// Filter Functionality
function filterGrid(category) {
    const items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Initialize Lenis 
const lenis = new Lenis({
    lerp: 0.1, // Adjust this value for smoother scrolling 
    smoothWheel: true, smoothTouch: false, smoothFrequency: 1.2, duration: 1.2, smoothInputs: true, touchMultiplier: 2,
}); // Use requestAnimationFrame to continuously update the scroll 
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); } requestAnimationFrame(raf); 
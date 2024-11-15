/*SEARCH ICON*/


const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');



// Hamburger Menu Toggle
hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
});


/*ANIMATION EASE UP ANIMATION*/
const sections = document.querySelectorAll('.hidden');

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // If the section is in the viewport
        if (entry.isIntersecting) {
            // Add the 'visible' class to trigger the animation
            entry.target.classList.add('visible');
            // Optional: Stop observing once the animation is triggered
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Trigger the animation when 10% of the element is visible
});

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});




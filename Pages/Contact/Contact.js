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




document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Select all inputs and error message elements
    const fields = [
      { id: "firstName", error: "firstNameError", message: "First name is required" },
      { id: "lastName", error: "lastNameError", message: "Last name is required" },
      { id: "email", error: "emailError", message: "Email address is required" },
      { id: "phone", error: "phoneError", message: "Phone number is required" },
      { id: "comment", error: "commentError", message: "Comment is required" },
    ];
  
    let formIsValid = true;
  
    // Check each field for validity
    fields.forEach(field => {
      const inputElement = document.getElementById(field.id);
      const errorElement = document.getElementById(field.error);
  
      if (inputElement.value.trim() === "") {
        errorElement.textContent = field.message;
        errorElement.style.visibility = "visible";
        formIsValid = false;
      } else {
        errorElement.style.visibility = "hidden";
      }
    });
  
    if (formIsValid) {
      alert("Form submitted successfully!");
      // Add form submission code here if needed
    }
  });
  
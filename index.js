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

    // Close dropdown after selection
    const dropdown = document.querySelector('.filter-dropdown ul');
    dropdown.style.display = 'none';
}

// Show the dropdown when clicking the button
document.querySelector('.filter-dropdown button').addEventListener('click', function () {
    const dropdown = document.querySelector('.filter-dropdown ul');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown if user clicks outside of it (optional)
document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.filter-dropdown ul');
    const button = document.querySelector('.filter-dropdown button');
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});


//preloader for every new session
document.addEventListener("DOMContentLoaded", () => {
    // Check if the user has visited the site during this session
    const hasVisited = sessionStorage.getItem("visited");

    const preloader = document.getElementById("preloader");
    const pagecontent = document.getElementById("pagecontent");

    if (!hasVisited) {
        // Show preloader and hide page content
        setTimeout(() => {
            preloader.style.display = "none"; // Hide preloader
            pagecontent.style.display = "block"; // Show main content

            // Reinitialize AOS after showing content
            AOS.refresh();
        }, 2000); // 3 seconds delay

        // Set the "visited" flag in sessionStorage
        sessionStorage.setItem("visited", "true");
    } else {
        // Skip preloader and show content directly
        preloader.style.display = "none";
        pagecontent.style.display = "block";

        // Initialize AOS directly when skipping preloader
        AOS.refresh();
    }
});


//scroll top arrow
// Get the scroll-to-top button
const scrollToTopBtn = document.querySelector('.scroll-to-top');

// Function to check scroll position and toggle button visibility
function toggleScrollToTopButton() {
    if (window.scrollY > 200) { // If scrolled down 200px or more
        scrollToTopBtn.style.display = 'flex'; // Show the button
    } else {
        scrollToTopBtn.style.display = 'none'; // Hide the button
    }
}

// Check on page load
toggleScrollToTopButton();

// Check on scroll
window.addEventListener('scroll', toggleScrollToTopButton);


//email contact form submits from email.js https://www.youtube.com/watch?v=dgcYOm8n8ME&ab_channel=CodewithVoran with a condtion to fill all forms correctly to succeseed
function sendMail() {
    // Get form field values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Get warning message element
    var warningMessage = document.getElementById("warning-message");

    // Check if any field is empty
    if (name === "" || email === "" || message === "") {
        warningMessage.textContent = "Please fill out all fields!";
        warningMessage.style.color = "red";
        return; // Exit function if any field is empty
    }

    // Check if email is in valid format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        warningMessage.textContent = "Please enter a valid email address!";
        warningMessage.style.color = "red";
        return; // Exit function if email format is invalid
    }

    // If all fields are filled and email format is valid, proceed with sending email
    var serviceID = "service_exrh0vu";
    var templateID = "template_rpfnkec";

    var params = {
        name: name,
        email: email,
        message: message
    };

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            // Clear form fields after successful submission
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!!");
            warningMessage.textContent = ""; // Clear warning message
        })
        .catch(err => console.log(err));
}


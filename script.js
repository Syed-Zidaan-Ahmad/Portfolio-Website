// Portfolio Website (JavaScript Part)
// Execute the code once the DOM (Document Object Model) has been fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Typed.js for the typing animation effect
    var typed = new Typed(".text", {
        strings: ["Web Developer", "Android Developer", "Programming Enthusiast", "Tech-Savvy Student", "Tutor"], // An array of strings to be typed
        typeSpeed: 80, // Speed at which characters are typed
        backSpeed: 80, // Speed at which characters are erased (backspace)
        backDelay: 1000, // Delay before starting to type
        startDelay: 500, // Time to wait before starting to backspace after reaching the end of a string
        loop: true // Run the loop infinite times
    });
    // Function to open social media links in a new tab
    function openSocialMediaLink(link) {
        window.open(link, '_blank');
    }
// Event listeners for social media icons in the home section

    // Github Page (Home Section)
    document.querySelector('.home-sci .bx.bxl-github').parentElement.addEventListener('click', function () {
        openSocialMediaLink('https://github.com/Syed-Zidaan-Ahmad'); // Your github profile link
    });
    // Facebook Profile (Home Section)
    document.querySelector('.home-sci .bx.bxl-facebook-circle').parentElement.addEventListener('click', function () {
        openSocialMediaLink('https://www.facebook.com/Syed.Zidaan.Ahmad/'); // Your facebook profile link
    });
    // Instagram Profile (Home Section)
    document.querySelector('.home-sci .bx.bxl-instagram').parentElement.addEventListener('click', function () {
        openSocialMediaLink('https://www.instagram.com/_the_rayonix_/?hl=en'); // Your instagram profile link
    });
    // LinkedIn Profile (Home Section)
    document.querySelector('.home-sci .bx.bxl-linkedin-square').parentElement.addEventListener('click', function () {
        openSocialMediaLink('https://www.linkedin.com/in/syed-zidaan-ahmad-1448a1298/'); // Your linkedin profile link
    });

    // Github Page (Contact Section)
    document.querySelector('.contact-icons .bx.bxl-github').parentElement.addEventListener('click', function () {
        openSocialMediaLink('https://github.com/Syed-Zidaan-Ahmad'); // Your github profile link
    });
    // Facebook Profile (Contact Section)
    document.querySelector('.contact-icons .bx.bxl-facebook-circle').parentElement.addEventListener('click', function () {
        openSocialMediaLink('https://www.facebook.com/Syed.Zidaan.Ahmad/'); // Your facebook profile link
    });
    // Instagram Profile (Contact Section)
    document.querySelector('.contact-icons .bx.bxl-instagram-alt').parentElement.addEventListener('click', function () {
        openSocialMediaLink('https://www.instagram.com/_the_rayonix_/?hl=en'); // Your instagram profile link
    });
    // LinkedIn Profile (Contact Section)
    document.querySelector('.contact-icons .bx.bxl-linkedin-square').parentElement.addEventListener('click', function () {
        openSocialMediaLink('https://www.linkedin.com/in/syed-zidaan-ahmad-1448a1298/'); // Your linkedin profile link
    });
});
// End of Program
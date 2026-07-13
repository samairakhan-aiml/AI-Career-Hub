// =============================
// Get Started Button
// =============================
const getStartedBtn = document.getElementById("getStartedBtn");

if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => {
        document.getElementById("roadmaps").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// =============================
// Dark Mode
// =============================
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.innerHTML = "☀️";
        } else {
            themeToggle.innerHTML = "🌙";
        }

    });

}

// =============================
// Contact Form
// =============================
const contactForm = document.querySelector(".contact form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been submitted successfully.");

        contactForm.reset();

    });

}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
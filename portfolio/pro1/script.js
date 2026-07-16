/* ==========================================
        BUSINESS PRO - SCRIPT.JS
========================================== */

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});


/* ==========================================
        STICKY NAVBAR
========================================== */

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(15,23,42,.95)";
        navbar.style.padding = "10px 0";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";

    } else {

        navbar.style.background = "rgba(15,23,42,.80)";
        navbar.style.padding = "16px 0";
        navbar.style.boxShadow = "none";

    }

});


/* ==========================================
        ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
        REVEAL ANIMATION
========================================== */

const reveals = document.querySelectorAll(
    ".service-card,.blog-card,.contact-box,.about-image,.hero-image,.hero-text"
);

function reveal() {

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

reveals.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".8s";

});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


/* ==========================================
        BUTTON RIPPLE EFFECT
========================================== */

const buttons = document.querySelectorAll(".btn-main");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});


/* ==========================================
        NEWSLETTER VALIDATION
========================================== */

const newsletterBtn = document.querySelector(".newsletter-form button");

if (newsletterBtn) {

    newsletterBtn.addEventListener("click", function (e) {

        e.preventDefault();

        const input = document.querySelector(".newsletter-form input");

        if (input.value.trim() === "") {

            alert("Please enter your email.");

            input.focus();

            return;

        }

        alert("🎉 Thank you for subscribing!");

        input.value = "";

    });

}


/* ==========================================
        CONTACT FORM
========================================== */

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("✅ Your message has been sent successfully!");

        form.reset();

    });

}


/* ==========================================
        IMAGE HOVER EFFECT
========================================== */

const images = document.querySelectorAll(".blog-card img,.hero-image img");

images.forEach(img => {

    img.addEventListener("mouseover", () => {

        img.style.transform = "scale(1.05)";

    });

    img.addEventListener("mouseout", () => {

        img.style.transform = "scale(1)";

    });

});


/* ==========================================
        LOADED MESSAGE
========================================== */

window.addEventListener("load", () => {

    console.log("BusinessPro Website Loaded Successfully!");

});
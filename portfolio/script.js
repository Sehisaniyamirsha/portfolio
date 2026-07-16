/*=========================================
    PORTFOLIO JAVASCRIPT
=========================================*/

// ================================
// Loading Screen
// ================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 500);

});


// ================================
// Typing Animation
// ================================

const words = [
    "Front-End Developer",
    "Web Designer",
    "Creative Coder",
    "UI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


// ================================
// Scroll Progress Bar
// ================================

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";

});


// ================================
// Sticky Navbar Shadow
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";

    }

    else {

        header.style.boxShadow = "none";

    }

});


// ================================
// Active Navigation
// ================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

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

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


// ================================
// Reveal Animation
// ================================

const revealElements = document.querySelectorAll(

    ".card,.skill,.timeline-box,.experience-card,.project-card,.certificate-card"

);

function reveal() {

    const trigger = window.innerHeight - 100;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// ================================
// Counter Animation
// ================================

const counters = document.querySelectorAll(".card h3");

let counted = false;

window.addEventListener("scroll", () => {

    const about = document.querySelector("#about");

    if (window.scrollY > about.offsetTop - 350 && !counted) {

        counters.forEach(counter => {

            const text = counter.innerText;

            const number = parseInt(text);

            if (!isNaN(number)) {

                let count = 0;

                const speed = number / 50;

                const update = () => {

                    count += speed;

                    if (count < number) {

                        counter.innerText = Math.floor(count);

                        requestAnimationFrame(update);

                    }

                    else {

                        counter.innerText = text;

                    }

                }

                update();

            }

        });

        counted = true;

    }

});


// ================================
// Scroll To Top Button
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ================================
// Project Card Hover Animation
// ================================

const projects = document.querySelectorAll(".project-card");

projects.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


// ================================
// Button Ripple Effect
// ================================

const buttons = document.querySelectorAll(".btn1,.btn2,.resume-btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(button.clientWidth, button.clientHeight);

        circle.style.width = diameter + "px";

        circle.style.height = diameter + "px";

        circle.style.left = e.offsetX - diameter / 2 + "px";

        circle.style.top = e.offsetY - diameter / 2 + "px";

        circle.classList.add("ripple");

        button.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});


// ================================
// Console Message
// ================================

console.log(

"Designed & Developed by Sehi Saniya Mirsha"

);
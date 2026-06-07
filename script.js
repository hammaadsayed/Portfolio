// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }, 1500);

});

// ==========================
// AOS ANIMATION
// ==========================

AOS.init({
    duration: 1000,
    once: true
});

// ==========================
// TYPING EFFECT
// ==========================

var typed = new Typed(".typing", {

    strings: [

        "Computer Engineering Student",

        "Aspiring Full Stack Developer",

        "Web Developer",

        "Problem Solver",

        "Tech Enthusiast"

    ],

    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true

});

// ==========================
// ROBOT MESSAGES
// ==========================

const robotMessages = [

    "👋 Hello! Welcome to my Portfolio.",

    "💻 I am Hammaad Sayed.",

    "🚀 Computer Engineering Student.",

    "🌟 Aspiring Full Stack Developer.",

    "🏆 Byte Battle 2026 Co-Organizer.",

    "📢 GDGC Marketing Team Member.",

    "⚡ Passionate about Technology & Innovation."

];

let currentMessage = 0;

const robotText = document.getElementById("robot-text");

function changeRobotMessage() {

    if (!robotText) return;

    robotText.style.opacity = "0";

    setTimeout(() => {

        robotText.innerHTML = robotMessages[currentMessage];

        robotText.style.opacity = "1";

        currentMessage++;

        if (currentMessage >= robotMessages.length) {

            currentMessage = 0;

        }

    }, 500);

}

setInterval(changeRobotMessage, 3500);

// ==========================
// ROBOT VOICE INTRO
// ==========================

function speakIntro() {

    const text =

        "Hello. My name is Hammaad Sayed. I am a Computer Engineering student and an aspiring Full Stack Developer. Welcome to my portfolio website. Please explore my projects, certificates, skills and achievements.";

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";

    speech.rate = 1;

    speech.pitch = 1;

    speech.volume = 1;

    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speech);

}

// Auto Speak

window.addEventListener("load", () => {

    setTimeout(() => {

        speakIntro();

    }, 2500);

});

// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-menu");

    });

}

// ==========================
// ACTIVE NAVBAR LINK
// ==========================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================
// NAVBAR BACKGROUND
// ==========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(15,23,42,0.95)";

        navbar.style.backdropFilter =
            "blur(20px)";

    } else {

        navbar.style.background =
            "rgba(255,255,255,0.05)";
    }

});

// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";

topBtn.style.bottom = "25px";

topBtn.style.right = "25px";

topBtn.style.width = "50px";

topBtn.style.height = "50px";

topBtn.style.border = "none";

topBtn.style.borderRadius = "50%";

topBtn.style.background = "#3b82f6";

topBtn.style.color = "#fff";

topBtn.style.fontSize = "22px";

topBtn.style.cursor = "pointer";

topBtn.style.display = "none";

topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================
// CONTACT FORM
// ==========================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert(
            "Thank you for contacting me! Your message has been received."
        );

        contactForm.reset();

    });

}

// ==========================
// CERTIFICATE HOVER EFFECT
// ==========================

function openCertificate(src){

    document.getElementById(
        "certificateModal"
    ).style.display = "flex";

    document.getElementById(
        "modalImage"
    ).src = src;
}

function closeCertificate(){

    document.getElementById(
        "certificateModal"
    ).style.display = "none";
}

// ==========================
// CONSOLE MESSAGE
// ==========================

console.log(`

===================================

     HAMMAAD SAYED PORTFOLIO

===================================

Portfolio Loaded Successfully 🚀

`);
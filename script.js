/* ==========================================
   HAMMAAD PORTFOLIO
   SCRIPT.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* Loader */

    const loader = document.getElementById("loader");

    if (loader) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                loader.style.opacity = "0";
                loader.style.visibility = "hidden";
            }, 800);
        });
    }

    /* AOS */

    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    /* Typed JS */

    if (document.getElementById("typing")) {

        new Typed("#typing", {

            strings: [
                "Computer Engineering Student",
                "Cybersecurity Enthusiast",
                "Full Stack Developer",
                "Cloud Computing Learner",
                "Open Source Enthusiast"
            ],

            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 1500,
            loop: true

        });

    }

});

/*=========================================
        STICKY NAVBAR
=========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (navbar) {

        if (window.scrollY > 60) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

});

/*=========================================
        SCROLL PROGRESS BAR
=========================================*/

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=========================================
        SMOOTH SCROLL
=========================================*/

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (href.startsWith("#")) {

            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        }

    });

});

/*=========================================
        SCROLL TO TOP BUTTON
=========================================*/

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (!scrollTopBtn) return;

    if (window.scrollY > 300) {

        scrollTopBtn.style.display = "flex";

    } else {

        scrollTopBtn.style.display = "none";

    }

});

if (scrollTopBtn) {

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*=========================================
        COUNTER ANIMATION
=========================================*/

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let current = 0;

            const speed = target / 80;

            function updateCounter() {

                current += speed;

                if (current < target) {

                    counter.innerText = Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            }

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

}, {

    threshold: 0.5

});

document.querySelectorAll(".counter").forEach(counter => {

    counterObserver.observe(counter);

});

/*=========================================
        CERTIFICATE IMAGE MODAL
=========================================*/

const certificateModal = document.getElementById("certificateModal");
const certificateImage = document.getElementById("certificateImage");

document.querySelectorAll(".certificate-card img").forEach(img => {

    img.addEventListener("click", () => {

        if (!certificateModal || !certificateImage) return;

        certificateImage.src = img.src;

        const modal = new bootstrap.Modal(certificateModal);

        modal.show();

    });

});

/*=========================================
        CARD HOVER EFFECT
=========================================*/

document.querySelectorAll(

".project-card,.skill-card,.experience-card,.education-card,.certificate-card"

).forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

/*=========================================
        EMAILJS CONTACT FORM
=========================================*/

emailjs.init({
    publicKey: "f-C5HQ7YefRWZ1OjS"
});

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const submitBtn = contactForm.querySelector("button[type='submit']");

        const originalText = submitBtn.innerHTML;

        submitBtn.disabled = true;

        submitBtn.innerHTML = `
            <span class="spinner-border spinner-border-sm me-2"></span>
            Sending...
        `;

        try {

            const response = await emailjs.sendForm(
                "service_ob9bwlm",
                "template_xjq08zy",
                contactForm
            );

            console.log(response);

            alert("✅ Message sent successfully!");

            contactForm.reset();

        }

        catch (error) {

            console.error(error);

            alert("❌ Failed to send message.\n\nCheck Console (F12).");

        }

        finally {

            submitBtn.disabled = false;

            submitBtn.innerHTML = originalText;

        }

    });

}
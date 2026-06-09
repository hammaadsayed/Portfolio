/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }, 1500);

});


/* ==========================
   AOS ANIMATION
========================== */

AOS.init({

    duration: 1000,

    once: true

});


/* ==========================
   TYPED TEXT
========================== */

var typed = new Typed(".typing", {

    strings: [

        "Computer Engineering Student",

        "Full Stack Developer",

        "Web Developer",

        "Tech Enthusiast",

        "Problem Solver"

    ],

    typeSpeed: 60,

    backSpeed: 40,

    backDelay: 1500,

    loop: true

});


/* ==========================
   HUMAN VOICE INTRO
========================== */

function speakIntro() {

    const text =

        "Hello, I am Hammaad Imtiyaz Sayed. A Computer Engineering student and aspiring Full Stack Developer. I am passionate about web development, software engineering and building innovative digital solutions. Thank you for visiting my portfolio.";

    const speech =

        new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";

    speech.rate = 1;

    speech.pitch = 1;

    speech.volume = 1;

    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speech);

}


/* ==========================
   CERTIFICATE POPUP
========================== */

function openCertificate(src) {

    document.getElementById(
        "certificateModal"
    ).style.display = "flex";

    document.getElementById(
        "modalImage"
    ).src = src;

}

function closeCertificate() {

    document.getElementById(
        "certificateModal"
    ).style.display = "none";

}


/* Close Modal on Outside Click */

window.onclick = function (event) {

    const modal =
        document.getElementById(
            "certificateModal"
        );

    if (event.target === modal) {

        modal.style.display = "none";

    }

};


/* ==========================
   EMAILJS CONTACT FORM
========================== */

const contactForm =
    document.getElementById(
        "contact-form"
    );

if (contactForm) {

    contactForm.addEventListener(
        "submit",

        function (e) {

            e.preventDefault();

            emailjs.sendForm(

                "service_ob9bwlm",

                "template_xjq08zy",

                this

            )

            .then(() => {

                alert(
                    "Message sent successfully!"
                );

                contactForm.reset();

            })

            .catch((error) => {

                console.error(
                    "EmailJS Error:",
                    error
                );

                alert(
                    "Failed to send message!"
                );

            });

        }

    );

}

/* ==========================
   MOBILE MENU
========================== */

const menuBtn =

    document.querySelector(
        ".menu-btn"
    );

const navLinks =

    document.querySelector(
        ".nav-links"
    );

if (menuBtn) {

    menuBtn.addEventListener(

        "click",

        () => {

            navLinks.classList.toggle(
                "active"
            );

        }

    );

}


/* ==========================
   ACTIVE NAV LINK
========================== */

const sections =

    document.querySelectorAll(
        "section"
    );

const navItems =

    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener(

    "scroll",

    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (
                pageYOffset >=
                sectionTop
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );

            }

        });

        navItems.forEach(link => {

            link.classList.remove(
                "active"
            );

            if (
                link.getAttribute("href")
                === "#" + current
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }

);


/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(

        "click",

        function (e) {

            e.preventDefault();

            document.querySelector(

                this.getAttribute(
                    "href"
                )

            ).scrollIntoView({

                behavior: "smooth"

            });

        }

    );

});
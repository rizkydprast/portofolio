/*=====================================
        PORTFOLIO PREMIUM JS
======================================*/

/*==============================
        TYPED JS
==============================*/

const typed = new Typed("#typing", {
    strings: [
        "Web Developer",
        "Frontend Developer",
        "UI Designer",
        "Programmer"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

/*==============================
        STICKY NAVBAR
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    header.classList.toggle("sticky", window.scrollY > 80);

});

/*==============================
        MOBILE MENU
==============================*/

const menu = document.querySelector("#menu");

const nav = document.querySelector(".nav-menu");

menu.onclick = () => {

    nav.classList.toggle("show");

}

/*==============================
    CLOSE MENU
==============================*/

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show");

    });

});

/*==============================
      ACTIVE MENU
==============================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {

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

/*==============================
      BACK TO TOP
==============================*/

const topBtn = document.querySelector(".top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.opacity = "1";
        topBtn.style.visibility = "visible";

    } else {

        topBtn.style.opacity = "0";
        topBtn.style.visibility = "hidden";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

}

/*==============================
      DARK MODE
==============================*/

const darkBtn = document.querySelector("#darkMode");

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light");

    darkBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;

}

darkBtn.onclick = () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        localStorage.setItem("theme", "light");

        darkBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;

    } else {

        localStorage.setItem("theme", "dark");

        darkBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;

    }

}

/*==============================
      PRELOADER
==============================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("preloader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 600);

});

/*==============================
      AOS
==============================*/

AOS.init({

    duration: 1000,
    once: true,
    easing: "ease-in-out"

});

/*==============================
      COUNTER
==============================*/

const counters = document.querySelectorAll(".counter-box h2");

const speed = 80;

counters.forEach(counter => {

    const update = () => {

        const target = parseInt(counter.innerText);

        const count = +counter.getAttribute("data-count") || 0;

        const inc = Math.ceil(target / speed);

        if (count < target) {

            counter.setAttribute("data-count", count + inc);

            counter.innerText = count + inc + "+";

            requestAnimationFrame(update);

        } else {

            counter.innerText = target + "+";

        }

    }

    update();

});

/*==============================
    SCROLL REVEAL
==============================*/

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-item");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll(".project-card,.certificate-card,.experience-card,.info-card,.soft-card,.tech-card").forEach(el => {

    observer.observe(el);

});

/*==============================
      PARALLAX HERO
==============================*/

window.addEventListener("mousemove", e => {

    const hero = document.querySelector(".hero-right img");

    const x = (window.innerWidth / 2 - e.pageX) / 40;

    const y = (window.innerHeight / 2 - e.pageY) / 40;

    hero.style.transform = `translate(${x}px,${y}px)`;

});

/*==============================
      SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

/*==============================
      FLOAT CARDS
==============================*/

const cards = document.querySelectorAll(".info-card,.experience-card,.project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(59,130,246,.25), rgba(255,255,255,.05))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.05)";

    });

});

/*==============================
      CURRENT YEAR
==============================*/

const year = document.querySelector("#year");

if(year){

    year.textContent = new Date().getFullYear();

}
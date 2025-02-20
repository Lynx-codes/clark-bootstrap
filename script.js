// counter section code
document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('count');
    const targetNumber = 120;
    const duration = 2000; // 2 seconds
    const steps = 80; // Number of steps to reach target
    const increment = targetNumber / steps;
    let currentNumber = 0;
    let currentStep = 0;

    const updateCounter = () => {
        currentStep++;
        currentNumber = Math.min(Math.round(increment * currentStep), targetNumber);
        counter.textContent = currentNumber;

        if (currentNumber < targetNumber) {
            setTimeout(updateCounter, duration / steps);
        }
    };

    updateCounter();
});

// blog section counter
document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter-1');
    const targetNumber = 100;
    const duration = 2000; // 2 seconds
    const steps = 80; // Number of steps to reach target
    const increment = targetNumber / steps;
    let currentNumber = 0;
    let currentStep = 0;

    const updateCounter = () => {
        currentStep++;
        currentNumber = Math.min(Math.round(increment * currentStep), targetNumber);
        counter.textContent = currentNumber;

        if (currentNumber < targetNumber) {
            setTimeout(updateCounter, duration / steps);
        }
    };

    updateCounter();
});

document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter-2');
    const targetNumber = 1200;
    const duration = 2000; // 2 seconds
    const steps = 80; // Number of steps to reach target
    const increment = targetNumber / steps;
    let currentNumber = 0;
    let currentStep = 0;

    const updateCounter = () => {
        currentStep++;
        currentNumber = Math.min(Math.round(increment * currentStep), targetNumber);
        counter.textContent = currentNumber;

        if (currentNumber < targetNumber) {
            setTimeout(updateCounter, duration / steps);
        }
    };

    updateCounter();
});

document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter-3');
    const targetNumber = 1200;
    const duration = 2000; // 2 seconds
    const steps = 80; // Number of steps to reach target
    const increment = targetNumber / steps;
    let currentNumber = 0;
    let currentStep = 0;

    const updateCounter = () => {
        currentStep++;
        currentNumber = Math.min(Math.round(increment * currentStep), targetNumber);
        counter.textContent = currentNumber;

        if (currentNumber < targetNumber) {
            setTimeout(updateCounter, duration / steps);
        }
    };

    updateCounter();
});

document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter-4');
    const targetNumber = 500;
    const duration = 2000; // 2 seconds
    const steps = 80; // Number of steps to reach target
    const increment = targetNumber / steps;
    let currentNumber = 0;
    let currentStep = 0;

    const updateCounter = () => {
        currentStep++;
        currentNumber = Math.min(Math.round(increment * currentStep), targetNumber);
        counter.textContent = currentNumber;

        if (currentNumber < targetNumber) {
            setTimeout(updateCounter, duration / steps);
        }
    };

    updateCounter();
});

// navbar scroll active
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const aboutSection = document.getElementById('scrollspyHeading2');
    const sections = document.querySelectorAll('div[id^="scrollspyHeading"]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Function to handle navbar position
    function handleNavbar() {
        const aboutOffset = aboutSection.offsetTop;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= aboutOffset - 100) {
            navbar.classList.add('navbar-sticky');
        } else {
            navbar.classList.remove('navbar-sticky');
        }
    }

    // Function to handle active state
    function setActiveLink() {
        let found = false;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionBottom = sectionTop + section.clientHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => link.classList.remove('active'));
                
                const currentLink = document.querySelector(`a[href="#${section.id}"]`);
                if (currentLink) {
                    currentLink.classList.add('active');
                    found = true;
                }
            }
        });

        if (!found && window.scrollY < 100) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[0].classList.add('active');
        }
    }

    // Add scroll event listener with throttling
    let isScrolling = false;
    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                handleNavbar();
                setActiveLink();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    // Set initial states
    handleNavbar();
    setActiveLink();

    // Handle click events on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

// hamburger toggle
const navbarToggler = document.querySelector('.navbar-toggler');
const nav = document.querySelector('.nav');

navbarToggler.addEventListener('click', () => {
    nav.classList.toggle('show');
});
// Typed-Text---------
var typed = new Typed('#typetext', {
  strings: ["Fullstak Developer.", "Web Developer.", "Coding Enthusiast.", "Freelancer."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
// Typed-Text End-----

//Hire me Button-----
function openGmail() {
  var recipient = 'charanrajkbk@gmail.com';

  var url = 'https://mail.google.com/mail/?view=cm&to=' + recipient + '&su=';

  window.open(url, '_blank');
}
//Hire me Button End-----

document.addEventListener("DOMContentLoaded", function () {
    // Navigation active state
    const navLinks = document.querySelectorAll(".nav-box ul li a");
    const sections = document.querySelectorAll(".section");
    const body = document.body;
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    // Handle navigation clicks
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            navLinks.forEach((link) => link.classList.remove("active"));
            this.classList.add("active");
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Handle scroll for active navigation
    window.addEventListener("scroll", () => {
        let fromTop = window.scrollY + 100;

        sections.forEach((section) => {
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                navLinks.forEach((link) => link.classList.remove("active"));
                const correspondingLink = document.querySelector(`.nav-box ul li a[href="#${section.id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add("active");
                }
            }
        });
    });

    // Handle mobile menu toggle
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
        body.classList.toggle('menu-open');
        body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
});

// Animated icons for social media icons-----------------
document.addEventListener('DOMContentLoaded', function () {
  const iconContainers = document.querySelectorAll('.icon-container');

  iconContainers.forEach(container => {
    const animationPath = container.getAttribute('data-animation-path');
    const animation = lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      loop: true, // set loop to false by default
      autoplay: false,
      path: animationPath
    });

    container.addEventListener('mouseenter', function () {
      animation.play();
    });

    container.addEventListener('mouseleave', function () {
      if (container.dataset.loop !== 'false') {
        animation.stop();
      }
    });
  });
});

// To avoide loop animation of instagram icon
document.addEventListener('DOMContentLoaded', function () {
  const iconContainers = document.querySelectorAll('.icon-container1');

  iconContainers.forEach(container => {
    const animationPath = container.getAttribute('data-animation-path');
    const animation = lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: animationPath
    });

    container.addEventListener('mouseenter', function () {
      animation.play();
    });

    container.addEventListener('mouseleave', function () {
      if (container.dataset.loop !== 'false') {
        animation.stop();
      }
    });
  });
});
// Animated icons for social media icons End---------

document.addEventListener("DOMContentLoaded", function() {
  const getInTouchButton = document.getElementById("getin-touch");

  getInTouchButton.addEventListener("click", function() {
      const contactSection = document.getElementById("contact");
      contactSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Number counting animation
function animateNumbers() {
    const numberElements = document.querySelectorAll('.aboutData-number');
    
    numberElements.forEach(element => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const startTime = performance.now();
        const startValue = 0;
        
        function updateNumber(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuad = t => t * (2 - t);
            
            const currentValue = Math.floor(easeOutQuad(progress) * target);
            
            // Update the number display
            if (element.textContent.includes('+')) {
                element.textContent = currentValue + '+';
            } else {
                element.textContent = currentValue;
            }
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            }
        }
        
        requestAnimationFrame(updateNumber);
    });
}

// Start animation when the about section is in view
const aboutSection = document.querySelector('.about');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(aboutSection);


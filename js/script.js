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
  const navLinks = document.querySelectorAll(".nav-box ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      this.classList.add("active");
    });
  });

  highlightActiveNavLink();
});

function highlightActiveNavLink() {
  const sections = document.querySelectorAll(".section");

  window.addEventListener("scroll", () => {
    let fromTop = window.scrollY + 100;

    sections.forEach((section) => {
      if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        document.querySelectorAll(".nav-box ul li a").forEach((link) => {
          link.classList.remove("active");
        });
        const correspondingLink = document.querySelector(`.nav-box ul li a[href="#${section.id}"]`);
        if (correspondingLink) {
          correspondingLink.classList.add("active");
        }
      }
    });
  });
}

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


// Dark Mode Toggle
const toggleBtn = document.getElementById("modeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Contact Form
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const userMessage = document.getElementById("message").value;

  console.log(name, email, userMessage);

  message.innerText = "Message Sent Successfully!";
  message.style.color = "green";

  form.reset();
});

// Initialize Animation
AOS.init({
  duration: 1000,
});


<script>
const circles = document.querySelectorAll(".circle");

const animateCircles = () => {
  circles.forEach(circle => {
    const degree = circle.getAttribute("data-degree");
    circle.style.background =
      `conic-gradient(#00f5ff ${degree}deg, #1e293b 0deg)`;
  });
};

window.addEventListener("scroll", () => {
  const section = document.querySelector("#skills");
  const sectionTop = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 100) {
    animateCircles();
  }
});
</script>

// Contact Section Particles
particlesJS("contact-particles", {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    color: { value: "#00f5ff" },
    move: { speed: 2 },
    line_linked: { enable: true, distance: 120, color: "#00f5ff", opacity: 0.3, width: 1 }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } }
  }
});

// Sticky Navbar on Scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar-sticky");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Dark Mode Toggle
document.getElementById("modeToggle").addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
});
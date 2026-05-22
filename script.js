// Typewriter
const phrases = [
  "Cloud Engineer ☁️",
  "DevOps Specialist ⚙️",
  "Kubernetes Enthusiast 🐳",
  "Infrastructure as Code 🏗️",
  "AWS | Azure | GCP 🚀"
];
let phraseIndex = 0, charIndex = 0, isDeleting = false;
const el = document.getElementById("typewriter");

function type() {
  const current = phrases[phraseIndex];
  el.textContent = isDeleting ? current.substring(0, charIndex--) : current.substring(0, charIndex++);
  if (!isDeleting && charIndex === current.length + 1) {
    setTimeout(() => { isDeleting = true; type(); }, 1800);
    return;
  }
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }
  setTimeout(type, isDeleting ? 50 : 90);
}
type();

// Navbar scroll effect
window.addEventListener("scroll", () => {
  document.getElementById("navbar").style.background =
    window.scrollY > 50 ? "rgba(10,14,26,0.98)" : "rgba(10,14,26,0.85)";
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = "translateY(0)"; } });
}, { threshold: 0.1 });

document.querySelectorAll(".skill-card, .project-card, .cert-card").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(el);
});

// Hamburger menu
document.getElementById("hamburger").addEventListener("click", () => {
  const links = document.querySelector(".nav-links");
  links.style.display = links.style.display === "flex" ? "none" : "flex";
  links.style.flexDirection = "column";
  links.style.position = "absolute";
  links.style.top = "70px";
  links.style.left = 0;
  links.style.right = 0;
  links.style.background = "#0a0e1a";
  links.style.padding = "1rem 2rem";
  links.style.borderBottom = "1px solid #1e2d45";
});
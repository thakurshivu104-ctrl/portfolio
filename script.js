// Dark Mode Toggle
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Animation on scroll
const animatedItems = document.querySelectorAll(".animate");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

animatedItems.forEach(el => observer.observe(el));

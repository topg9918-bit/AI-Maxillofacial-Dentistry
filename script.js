// Navbar shrink on scroll
window.addEventListener("scroll", function() {
const nav = document.querySelector("nav");
nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".service, .review, .doctor-text");

function revealOnScroll(){
const triggerBottom = window.innerHeight * 0.85;

revealElements.forEach(el=>{
const boxTop = el.getBoundingClientRect().top;

if(boxTop < triggerBottom){
el.style.opacity = "1";
el.style.transform = "translateY(0)";
}
});
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Smooth Button Scroll Example
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e) {
e.preventDefault();
document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior: "smooth"
});
});
});
// Smooth header shift
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.background = "rgba(10, 10, 11, 0.8)";
        nav.style.padding = "10px 0";
    } else {
        nav.style.background = "transparent";
        nav.style.padding = "20px 0";
    }
});

// Subtle background mouse follow effect
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.bg-glow');
    glow.style.left = (e.clientX - 300) + 'px';
    glow.style.top = (e.clientY - 300) + 'px';
});

// Form Submission feedback
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Connection Request Sent. Welcome to the future of Risk.");
});
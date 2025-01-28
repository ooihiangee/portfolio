// Typing Animation
const roles = ["Simon", "a Data Analyst", "a Developer", "a Problem Solver"];
const dynamicText = document.querySelector('.dynamic-text');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (!isDeleting) {
        dynamicText.textContent = currentRole.slice(0, charIndex++);
        if (charIndex > currentRole.length) {
            isDeleting = true;
            setTimeout(typeRole, 2000);
        } else {
            setTimeout(typeRole, 150);
        }
    } else {
        dynamicText.textContent = currentRole.slice(0, charIndex--);
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 500);
        } else {
            setTimeout(typeRole, 50);
        }
    }
}

// Start animation
typeRole();

// Other JavaScript functions
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.nav').classList.toggle('dark-mode');
}

// Smooth scroll and other functions...

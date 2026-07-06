import * as data from './data.js';

const THEME_STORAGE_KEY = 'portfolio-theme';
const ACCESS_CODE = '3096';

function applyTheme(theme) {
    document.body.classList.toggle('dark', theme === 'dark');
    document.body.setAttribute('data-theme', theme);

    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.setAttribute('aria-pressed', String(theme === 'dark'));
        const icon = toggleButton.querySelector('[data-lucide]');
        const label = toggleButton.querySelector('span');

        if (icon) {
            icon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
        }

        if (label) {
            label.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
        }
    }

    lucide.createIcons();
}

function initializeTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const preferredTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    applyTheme(preferredTheme);

    const toggleButton = document.getElementById('theme-toggle');
    toggleButton?.addEventListener('click', () => {
        const nextTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
        applyTheme(nextTheme);
    });
}

function initLucideIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}

function initializeAccessGate() {
    const gate = document.getElementById('access-gate');
    const content = document.getElementById('portfolio-content');
    const form = document.getElementById('passcode-form');
    const input = document.getElementById('passcode-input');
    const message = document.getElementById('passcode-message');

    if (!gate || !content || !form || !input || !message) return;

    const storedAccess = sessionStorage.getItem('portfolio-access');
    if (storedAccess === 'granted') {
        gate.classList.add('hidden');
        content.classList.remove('hidden');
        return;
    }

    input.focus();

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const enteredCode = input.value.trim();

        if (enteredCode === ACCESS_CODE) {
            sessionStorage.setItem('portfolio-access', 'granted');
            gate.classList.add('hidden');
            content.classList.remove('hidden');
            message.textContent = 'Access granted. Welcome!';
            message.style.color = '#16a34a';
        } else {
            message.textContent = 'Incorrect passcode. Please try again.';
            message.style.color = '#dc2626';
            input.value = '';
            input.focus();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeAccessGate();
    initializeTheme();
    renderHero();
    renderSkills();
    renderExperience();
    renderProjects();
    renderEducation();
    renderCerts();
    renderContact();
    renderFooter();

    requestAnimationFrame(initLucideIcons);
});

function renderHero() {
    const container = document.getElementById('hero-content');
    if (!container) return;

    container.innerHTML = `
        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">${data.bioData.name}</h1>
        <h2 class="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">${data.bioData.title}</h2>
        <p class="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">${data.bioData.summary}</p>
        <div class="flex flex-wrap items-center gap-4">
            <a href="${data.bioData.socials.github}" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub" class="social-icon-button bg-slate-100 hover:bg-blue-600 hover:text-white rounded-full transition-all inline-flex items-center justify-center">
                <img src="images/github.png" alt="GitHub" class="social-icon">
            </a>
            <a href="${data.bioData.socials.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn" class="social-icon-button bg-slate-100 hover:bg-blue-600 hover:text-white rounded-full transition-all inline-flex items-center justify-center">
                <img src="images/linkedin.png" alt="LinkedIn" class="social-icon">
            </a>
            <a href="mailto:${data.bioData.email}" aria-label="Send email" class="social-icon-button bg-slate-100 hover:bg-blue-600 hover:text-white rounded-full transition-all inline-flex items-center justify-center">
                <img src="images/email.png" alt="Email" class="social-icon">
            </a>
            <a href="${data.bioData.resume}" download class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-full shadow-lg shadow-blue-100 transition-all">
                <i data-lucide="download" class="w-4 h-4"></i>
                <span>Download Resume</span>
            </a>
        </div>
    `;

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}

function renderSkills() {
    const container = document.getElementById('skills-grid');
    container.innerHTML = data.skills.map(group => `
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
            <h3 class="font-bold text-lg mb-4 text-blue-600">${group.category}</h3>
            <div class="flex flex-wrap gap-2">
                ${group.items.map(item => `<span class="px-3 py-1 bg-slate-50 text-slate-700 text-sm font-medium rounded-lg">${item}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function formatDescription(desc) {
    if (!desc) return '';
    const lines = desc.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
    const isBulleted = lines.every(l => /^[-*•]\s+/.test(l));
    if (isBulleted) {
        return `<ul class="list-disc ml-6 space-y-2">${lines.map(l => `<li class="text-slate-600 leading-relaxed">${l.replace(/^[-*•]\s+/, '')}</li>`).join('')}</ul>`;
    }
    // fallback: preserve line breaks as separate paragraphs
    return lines.map(l => `<p class="text-slate-600 leading-relaxed mb-2">${l}</p>`).join('');
}

function renderExperience() {
    const container = document.getElementById('experience-timeline');
    container.innerHTML = data.experience.map(exp => `
        <div class="relative timeline-dot">
            <span class="text-sm font-bold text-blue-600 uppercase tracking-widest">${exp.period}</span>
            <h3 class="text-xl font-bold mt-1">${exp.role}</h3>
            <p class="text-slate-500 font-semibold mb-3">${exp.company}</p>
            ${formatDescription(exp.description)}
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-grid');
    container.innerHTML = data.projects.map(proj => `
        <div class="bg-white rounded-2xl overflow-hidden border border-slate-100 project-card flex flex-col h-full">
            <div class="h-40 w-full overflow-hidden bg-slate-100">
                <img src="${proj.thumbnail || 'images/profile.jpg'}" alt="${proj.title} thumbnail" class="object-cover w-full h-full">
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <span class="text-xs font-bold text-blue-600 uppercase tracking-widest">${proj.category}</span>
                <h3 class="text-xl font-bold mt-2 mb-3">${proj.title}</h3>
                <p class="text-slate-600 text-sm mb-6 flex-grow">${proj.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${proj.tags.map(tag => `<span class="text-[10px] font-bold bg-blue-50 text-blue-700 px-2 py-1 rounded-md uppercase">${tag}</span>`).join('')}
                </div>
                <div class="flex gap-6 border-t pt-4 mt-auto">
                    <a href="${proj.github}" class="flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors">
                        <i data-lucide="github" class="w-4 h-4"></i> Code
                    </a>
                    <a href="${proj.demo}" class="flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors">
                        <i data-lucide="external-link" class="w-4 h-4"></i> Demo
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderEducation() {
    const container = document.getElementById('education-list');
    container.innerHTML = data.education.map(edu => `
        <div class="flex gap-5">
            <div class="mt-1 bg-blue-50 p-3 rounded-xl text-blue-600 h-fit"><i data-lucide="book-open" class="w-6 h-6"></i></div>
            <div>
                <h3 class="font-bold text-xl">${edu.degree}</h3>
                <p class="text-slate-600 text-lg">${edu.school}</p>
                <p class="text-sm font-bold text-slate-400 mt-2">${edu.year}</p>
            </div>
        </div>
    `).join('');
}

function renderCerts() {
    const container = document.getElementById('certifications-list');
    container.innerHTML = data.certifications.map(cert => `
        <div class="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-sm transition-all">
            <i data-lucide="award" class="text-blue-600 w-6 h-6"></i>
            <span class="font-bold text-slate-700">${cert}</span>
        </div>
    `).join('');
}

function renderContact() {
    const container = document.getElementById('contact-container');
    container.innerHTML = `
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4">Contact <span class="text-blue-600">Me!</span></h2>
            <p class="text-slate-600 text-lg">Interested in a project or collaboration? Drop me a line!</p>
        </div>

        <form action="${data.contactConfig.formspreeUrl}" method="POST" class="space-y-6 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="name" placeholder="Full Name" required 
                    class="w-full p-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 transition-all">
                <input type="email" name="email" placeholder="Email Address" required 
                    class="w-full p-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 transition-all">
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="tel" name="mobile" placeholder="Mobile Number" 
                    class="w-full p-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 transition-all">
                <input type="text" name="subject" placeholder="Email Subject" 
                    class="w-full p-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 transition-all">
            </div>
            <textarea name="message" rows="6" placeholder="Your Message" required 
                class="w-full p-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 transition-all"></textarea>
            <div class="text-center">
                <button type="submit" 
                    class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl shadow-blue-100">
                    Send Message
                </button>
            </div>
        </form>
    `;
}

function renderFooter() {
    const container = document.getElementById('footer-content');
    if (!container) return;

    const year = new Date().getFullYear();
    container.innerHTML = `
        <div class="flex justify-center gap-8 mb-10">
            <a href="${data.bioData.socials.github}" target="_blank" rel="noopener noreferrer" class="social-icon-button text-slate-400 hover:text-white transition-colors inline-flex items-center justify-center bg-slate-800/10 hover:bg-blue-600">
                <img src="images/github.png" alt="GitHub" class="social-icon">
            </a>
            <a href="${data.bioData.socials.linkedin}" target="_blank" rel="noopener noreferrer" class="social-icon-button text-slate-400 hover:text-white transition-colors inline-flex items-center justify-center bg-slate-800/10 hover:bg-blue-600">
                <img src="images/linkedin.png" alt="LinkedIn" class="social-icon">
            </a>
            <a href="mailto:${data.bioData.email}" class="social-icon-button text-slate-400 hover:text-white transition-colors inline-flex items-center justify-center bg-slate-800/10 hover:bg-blue-600">
                <img src="images/email.png" alt="Email" class="social-icon">
            </a>
        </div>
        <p class="text-slate-500 font-medium">© ${year} ${data.bioData.name}. All rights reserved.</p>
    `;
}
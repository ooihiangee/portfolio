// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Sticky Navbar & Active Link highlighting
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    let header = document.querySelector('.header');

    window.onscroll = () => {
        // Sticky Header
        header.classList.toggle('sticky', window.scrollY > 100);

        // Active Section Link Highlighting
        let top = window.scrollY;

        sections.forEach(sec => {
            let offset = sec.offsetTop - 150; // Adjust offset as needed
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                // Find the link corresponding to the current section id
                let activeLink = document.querySelector('header nav a[href="#' + id + '"]');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });

        // Remove active class if scrolled back to top (optional)
        if (top < sections[0].offsetTop - 150) {
             navLinks.forEach(link => {
                    link.classList.remove('active');
             });
             // Optionally re-activate home link
             let homeLink = document.querySelector('header nav a[href="#home"]');
              if (homeLink) {
                    homeLink.classList.add('active');
                }
        }
    };

    // Typed.js Initialization for the typing effect
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'YouTuber', 'Blogger'], // CHANGE THESE STRINGS
        typeSpeed: 100, // Speed of typing
        backSpeed: 60, // Speed of backspacing
        backDelay: 1000, // Delay before backspacing
        loop: true // Loop the animation
    });

    // Optional: Add smooth scrolling for footer icon click
    let footerIcon = document.querySelector('.footer-iconTop a');
    if (footerIcon) {
        footerIcon.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor jump
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Use smooth scrolling behavior
            });
             // Manually set home link active after scroll (optional)
             navLinks.forEach(link => link.classList.remove('active'));
             let homeLink = document.querySelector('header nav a[href="#home"]');
             if (homeLink) homeLink.classList.add('active');
        });
    }

     // Optional: Basic Scroll Reveal (add more selectors for other elements)
     // You might need to include a library like ScrollReveal for more advanced effects
     const sr = ScrollReveal({
        // reset: true, // Uncomment to re-animate on each scroll up/down
        distance: '80px',
        duration: 2000,
        delay: 200
     });

     sr.reveal('.home-content, .heading', { origin: 'top' });
     sr.reveal('.home-img img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
     sr.reveal('.home-content h1, .about-img img', { origin: 'left' });
      sr.reveal('.home-content p, .about-content', { origin: 'right' });


    // --- IMPORTANT ---
    // If you add a hamburger menu for mobile, add its toggle logic here
    // Example:
    // let menuIcon = document.querySelector('#menu-icon'); // Assuming you add an icon with this ID
    // let navbar = document.querySelector('.navbar');
    // if (menuIcon && navbar) {
    //     menuIcon.onclick = () => {
    //         menuIcon.classList.toggle('bx-x'); // Toggle icon class (if using boxicons for menu icon)
    //         navbar.classList.toggle('active'); // Toggle navbar visibility class
    //     };
    //      // Close menu when a nav link is clicked (optional)
    //      navLinks.forEach(link => {
    //         link.addEventListener('click', () => {
    //              if(navbar.classList.contains('active')) {
    //                 menuIcon.classList.remove('bx-x');
    //                 navbar.classList.remove('active');
    //              }
    //         });
    //      });
    // }
});
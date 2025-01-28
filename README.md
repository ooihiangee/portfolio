<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name | Portfolio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        /* Base Styles */
        :root {
            --primary-color: #2ecc71;
            --dark-color: #2c3e50;
            --light-color: #ecf0f1;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            background-color: var(--light-color);
            color: var(--dark-color);
            transition: background-color 0.3s ease;
        }

        /* Dark Mode */
        body.dark-mode {
            background-color: var(--dark-color);
            color: var(--light-color);
        }

        /* Utility Classes */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }

        /* Navigation */
        .nav {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            padding: 1rem 0;
            z-index: 1000;
        }

        .nav.dark-mode {
            background: rgba(44, 62, 80, 0.95);
        }

        .nav-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .nav-links a {
            margin-left: 2rem;
            text-decoration: none;
            color: var(--dark-color);
            transition: color 0.3s ease;
        }

        .nav.dark-mode .nav-links a {
            color: var(--light-color);
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            text-align: center;
        }

        .hero-content h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
        }

        .hero-content p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }

        /* Projects Grid */
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 4rem 0;
        }

        .project-card {
            background: white;
            border-radius: 10px;
            padding: 1.5rem;
            transition: transform 0.3s ease;
        }

        .project-card:hover {
            transform: translateY(-5px);
        }

        /* Skills Section */
        .skills-container {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            justify-content: center;
        }

        .skill-item {
            background: var(--primary-color);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
        }

        /* Contact Form */
        .contact-form {
            max-width: 600px;
            margin: 0 auto;
        }

        .form-group {
            margin-bottom: 1rem;
        }

        input, textarea {
            width: 100%;
            padding: 0.8rem;
            border: 2px solid #ddd;
            border-radius: 5px;
        }

        /* Footer */
        footer {
            text-align: center;
            padding: 2rem 0;
            background: var(--dark-color);
            color: white;
        }

        /* Dark Mode Toggle */
        .theme-toggle {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: var(--primary-color);
            color: white;
            padding: 1rem;
            border-radius: 50%;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="nav">
        <div class="container nav-content">
            <h1>Your Name</h1>
            <div class="nav-links">
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container hero-content">
            <img src="your-photo.jpg" alt="Profile Photo" style="width: 200px; border-radius: 50%; margin-bottom: 2rem;">
            <h1>Frontend Developer</h1>
            <p>Turning ideas into interactive experiences</p>
            <div class="social-links">
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="container">
        <h2>Featured Projects</h2>
        <div class="projects-grid">
            <div class="project-card">
                <h3>Project 1</h3>
                <p>Project description goes here</p>
                <a href="#">Live Demo</a>
            </div>
            <!-- Add more project cards -->
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="container">
        <h2>Technical Skills</h2>
        <div class="skills-container">
            <div class="skill-item">HTML5</div>
            <div class="skill-item">CSS3</div>
            <div class="skill-item">JavaScript</div>
            <!-- Add more skills -->
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="container">
        <h2>Get in Touch</h2>
        <form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
            <div class="form-group">
                <input type="text" name="name" placeholder="Your Name" required>
            </div>
            <div class="form-group">
                <input type="email" name="email" placeholder="Your Email" required>
            </div>
            <div class="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
        </form>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2023 Your Name. All rights reserved.</p>
    </footer>

    <!-- Dark Mode Toggle -->
    <div class="theme-toggle" onclick="toggleTheme()">
        <i class="fas fa-moon"></i>
    </div>

    <script>
        // Dark Mode Toggle
        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
            document.querySelector('.nav').classList.toggle('dark-mode');
        }

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Form Submission
        const form = document.querySelector('.contact-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
        });
    </script>
</body>
</html>

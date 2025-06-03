// Function to create and insert the navigation bar
function createNavbar() {
    // Navbar HTML structure
    const navbarHTML = `
    <nav class="navbar">
        <div class="navbar-container">
            <!-- Logo on the left -->
            <a href="Images/FORMA FITNESS Logo.png" class="navbar-logo">
            <img src="Images/FORMA FITNESS Logo.png" alt="Images/FORMA FITNESS Logo.png" class="Images/FORMA FITNESS Logo.png" width = "100">
            </a>
            
            <!-- Hamburger menu for mobile -->
            <div class="navbar-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            
            <!-- Navigation links on the right -->
            <ul class="navbar-menu">
                <li class="navbar-item">
                    <a href="Home.html" class="navbar-links">Home</a>
                </li>
                <li class="navbar-item">
                    <a href="About Us.html" class="navbar-links">About Us</a>
                </li>
                <li class="navbar-item">
                    <a href="Services.html" class="navbar-links">Services</a>
                </li>
                <li class="navbar-item">
                    <a href="contact.html" class="navbar-links">Contact</a>
                </li>
                <li class="navbar-item">
                    <a href="gallery.html" class="navbar-links">gallery</a>
                </li>
            </ul>
        </div>
    </nav>
    `;

    // Insert the navbar at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // Add event listeners for mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');

    mobileMenu.addEventListener('click', function () {
        mobileMenu.classList.toggle('is-active');
        navbarMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav item
    const navLinks = document.querySelectorAll('.navbar-links');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('is-active');
            navbarMenu.classList.remove('active');
        });
    });
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createNavbar);

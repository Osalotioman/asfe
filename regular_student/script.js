// Select all navigation links
const navLinks = document.querySelectorAll('.nav-link');
const qrCode = document.getElementById("qr-code")

// Function to update active class
function setActiveLink() {
    // Remove the active class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add the active class to the clicked link
    this.classList.add('active');
}

function toggleQRCodeVis() {
    qrCode.classList.toggle('open')
}

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', setActiveLink);
});

// Optional: Highlight the active link based on the current page URL
window.addEventListener('load', () => {
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if (link.getAttribute('href') === `./${currentPage}`) {
            link.classList.add('active');
        }
    });
});
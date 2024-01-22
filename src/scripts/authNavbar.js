// Selecting elements for login, logout, and registration
const div_login = document.querySelector('#login-btn').parentNode;
const div_logout = document.querySelector('#logout-btn').parentNode;
const div_register = document.querySelector('#register-btn').parentNode;
const span_login = document.querySelector('#login');
const span_logout = document.querySelector('#logout');
const span_register = document.querySelector('#register');

// Function to add hover effects
function addHoverEffect(div, textElement, text, svgElement) {
    div.addEventListener('mouseenter', () => {
        textElement.innerText = text;
        div.classList.add('bg-slate-500', 'rounded-full');
        svgElement.style.stroke = '#0B3156'; // Change SVG stroke color
    });

    div.addEventListener('mouseleave', () => {
        textElement.innerText = '';
        div.classList.remove('bg-slate-500', 'rounded-full');
        svgElement.style.stroke = 'white'; // Revert SVG stroke color
    });
}

// Apply the function to login, logout, and register buttons
addHoverEffect(div_login, span_login, 'Connexion', div_login.querySelector('svg'));
addHoverEffect(div_logout, span_logout, 'Déconnexion', div_logout.querySelector('svg'));
addHoverEffect(div_register, span_register, 'Inscription', div_register.querySelector('svg'));

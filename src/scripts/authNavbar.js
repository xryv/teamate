const div_login = document.querySelector('#div-login');
const div_register = document.querySelector('#div-register');
const div_logout = document.querySelector('#div-logout');

const a_login = document.querySelector('#login-btn');
const a_logout = document.querySelector('#logout-btn');
const a_register = document.querySelector('#register-btn');

const span_login = document.querySelector('#login');
const span_logout = document.querySelector('#logout');
const span_register = document.querySelector('#register');


function addHoverEffect(div, a_Element, span_Element, text_Span, svg_Element) {
    
    div.addEventListener('mouseenter', () => {
        span_Element.innertText= text_Span;
        a_Element.classList.add('bg-slate-500', 'rounded-full');
        svg_Element.style.stroke = '#0B3156'; 
    });

    div.addEventListener('mouseleave', () => {
        span_Element.innertText= '';
        div.classList.remove('bg-slate-500', 'rounded-full');
        svg_Element.style.stroke = 'white'; 
    });
}


addHoverEffect(div_login, a_login, span_login, 'Connexion', div_login.querySelector('svg'));
addHoverEffect(div_logout, a_logout, span_logout, 'Déconnexion', div_logout.querySelector('svg'));
addHoverEffect(div_register, a_register, span_register, 'Inscription', div_register.querySelector('svg'));

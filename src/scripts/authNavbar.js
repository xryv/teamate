function setupHoverEffect(divSelector, btnSelector, spanSelector, svgColorEnter, svgColorLeave, textSpan) {
    const div = document.querySelector(divSelector);
    const a = document.querySelector(btnSelector);
    const span = document.querySelector(spanSelector);
    const svg = div.querySelector('svg');

    div.addEventListener('mouseenter', () => {
        span.innerText = textSpan;
        a.classList.add('bg-slate-500', 'rounded-full');
        svg.style.stroke = svgColorEnter;
    });

    div.addEventListener('mouseleave', () => {
        span.innerText = '';
        a.classList.remove('bg-slate-500', 'rounded-full');
        svg.style.stroke = svgColorLeave;
    });
}


setupHoverEffect('#div-login', '#login-btn', '#login', '#0B3156', 'white', 'Login');
setupHoverEffect('#div-register', '#register-btn', '#register', '#0B3156', 'white', 'Register');
setupHoverEffect('#div-logout', '#logout-btn', '#logout', '#0B3156', 'white', 'Logout');
setupHoverEffect('#div-dashboard', '#a-five', '#dashboard', '#0B3156', 'white', 'Dashboard');


setupHoverEffect('#div-home', '#a-One', '#home', '#0B3156', 'white', 'Home');
setupHoverEffect('#div-search', '#a-Two', '#search', '#0B3156', 'white', 'Search');
setupHoverEffect('#div-event', '#a-Three', '#event', '#0B3156', 'white', 'Events');
setupHoverEffect('#div-browse', '#a-Four', '#browse', '#0B3156', 'white', 'Browse');


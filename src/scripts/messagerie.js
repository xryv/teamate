const barMessage = document.querySelector('#bar-message')
const barAbsolute = document.querySelector('#bar-absolute')
const iconPlus = document.querySelector('#icon-plus')


iconPlus.addEventListener('click', () => {
    barAbsolute.classList.add('opacity-0')
})
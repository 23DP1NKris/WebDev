const themeToggle = document.getElementById('themeToggle')
const themeIcon = themeToggle.querySelector('i')
const burger = document.getElementById('burger')
const navMenu = document.getElementById('navMenu')

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon')
        themeIcon.classList.add('fa-sun')
    } else {
        themeIcon.classList.remove('fa-sun')
        themeIcon.classList.add('fa-moon')
    }
})

burger.addEventListener('click', () => {
    navMenu.classList.toggle('active')
    themeToggle.style.display = navMenu.classList.contains('active') ? 'block' : 'none'
})
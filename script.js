const openBtn = document.getElementById('open-btn')
const closeBtn = document.getElementById('close-btn')
const navbar = document.getElementById('navbar')

openBtn.addEventListener('click', () => {
    navbar.style.backgroundColor = '#fff'
    navbar.classList.add('show')
})

closeBtn.addEventListener('click', () => {
    navbar.classList.remove('show')
    navbar.style.backgroundColor = 'transparent'
})

window.onscroll = function() {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#fff'
    } else {
        if (!navbar.classList.contains('show')) {
            navbar.style.backgroundColor = 'transparent'
        } else {
            navbar.style.backgroundColor = '#fff'
        }
    }
}
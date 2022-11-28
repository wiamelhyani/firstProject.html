const openMenu = document.getElementById('open-menu')
const menu = document.getElementById('menu')

openMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
})
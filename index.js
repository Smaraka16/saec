const menu = document.querySelector('#mobile_menu');
const menulinks = document.querySelector('.navbar_menu');

const mobileMenu = () => {
    menu.classList.toggle('active')
    menulinks.classList.toggle('is-active')

}
menu.addEventListener('click', mobileMenu)
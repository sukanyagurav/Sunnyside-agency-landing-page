const toggleBtn = document.querySelector('.hamburger-menu')
const menu = document.querySelector('.menu-wrap')

toggleBtn.addEventListener('click',function(){
    menu.classList.toggle('active')
})
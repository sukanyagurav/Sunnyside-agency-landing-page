const toggleBtn = document.querySelector('.hamburger-menu')
const menu = document.querySelector('.menu-wrap')
const backdrop =document.querySelector('.backdrop')
toggleBtn.addEventListener('click',function(){
    if(menu.classList.contains('active')){
        toggleBtn.style.opacity='1'
        menu.classList.remove('active')
    }else{
        toggleBtn.style.opacity='0.6'
        menu.classList.add('active')
    }
})
window.addEventListener('resize', function(event) {
    if(menu.classList.contains('active')){
        toggleBtn.style.opacity='1'
        menu.classList.remove('active')
    }
}, true);

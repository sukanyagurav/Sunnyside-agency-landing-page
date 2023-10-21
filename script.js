const toggleBtn = document.querySelector('.hamburger-menu')
const menu = document.querySelector('.menu-wrap')
toggleBtn.addEventListener('click',function(e){
    e.stopPropagation()
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
});
window.addEventListener('click', function(event) {
    toggleBtn.style.opacity='1'
    menu.classList.remove('active')
});

const sr = ScrollReveal({
    origin:'top',
    distance:'50px',
    duration:1300,
    delay:100,
    reset:true
})
sr.reveal(`.banner`)
sr.reveal(`.about-text`)
sr.reveal(`.testimonials-container div:nth-child(1)`,{origin:'bottom',opacity:1})
sr.reveal(`.testimonials-container div:nth-child(2)`,{origin:'bottom',opacity:1})
sr.reveal(`.testimonials-container div:nth-child(3)`,{origin:'bottom',opacity:1})
sr.reveal(`.projects picture:nth-child(1)`,{origin:'bottom',opacity:1,delay:100})
sr.reveal(`.projects picture:nth-child(2)`,{origin:'bottom',opacity:1,delay:200})
sr.reveal(`.projects picture:nth-child(3)`,{origin:'bottom',opacity:1,delay:300})
sr.reveal(`.projects picture:nth-child(4)`,{origin:'bottom',opacity:1,delay:400})
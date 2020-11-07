burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightNav')
navList = document.querySelector('.nav-list')

burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp')
    navList .classList.toggle('v-class-resp')
})
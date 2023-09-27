/* ======menu show y  hidden  =======*/ 
const navMenu = document.getElementById('nav-menu '),
      toggleMenu = document.getElementById('nav-toggle'),
     closeMenu = document.getElementById('nav-close ')  
    

    
// show
    toggleMenu.addEventListener('click', ()=>{
        navMenu.classList.toggle('show')
    })

// hidden
   closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
 });

 const navlink = document.querySelectorAll('nav__link')

 function linkAction() {
    navMenu.classList.remove('show')
 }
/*====== remove menu  ========= */

navlink.forEach(n => n.addEventListener('click', linkAction))

/*========== scroll  sections active link   ============== */
const sections = document.querySelectorAll ('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrolly = window.pageYOffset  

    sections.forEach(current =>{
        const sectionHeight = current
        const sectionTop = current.offsetTOP - 50
        sectionId = current.getAttribute('id')


        if(scrollY > sectionTop &&  scrollyY <= sectionTop +sectionHeight ) {
            document.querySelector('.nav__menu a[ href*='+ sectionId  +']').classList.add('active')
        }else {
            document.querySelector('.nav__menu a[ href*='+ sectionId  +']').classList.remove('active')
        }
    })
}
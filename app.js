const Hamburger = document.querySelector('.hamrbuger')
const navList = document.querySelector('.nav-lists')
const topLine = document.querySelector('#Top')
const midLine = document.querySelector('#middle')
const botLine = document.querySelector('#bottom')

Hamburger.addEventListener('click', ()=>{
    navList.classList.toggle('isOpen')

    midLine.classList.toggle('active')
    topLine.classList.toggle('turn')
    botLine.classList.toggle('turn-up')
});

const swiper = new Swiper('.courses-details', {
    grabCursor: true,
    spaceBetween:25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints:{
        780:{
            slidesPerView: 2
        }
    },
  
  });
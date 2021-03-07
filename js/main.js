let burger = document.getElementById('burger');
let menu = document.getElementById('menu');
const wrapper = document.querySelector('.wrapper');
let perspective = document.querySelector('.perspective');
let timeout = 400; //same in transition

function toggle(){
    menu.classList.toggle('outer-active');	
    wrapper.classList.toggle('transform');
    if(perspective.classList.contains('.modal-view')){
        setTimeout(function(){
            perspective.classList.remove('modal-view');
        }, timeout)
    }else{
        perspective.classList.add('modal-view');
    }
}
burger.addEventListener('click', function(event){
    event.stopPropagation();
	toggle();
})
wrapper.addEventListener('click', function(){
    if(wrapper.classList.contains('transform')){
        toggle(); 
    }
})
menu.addEventListener('click', function(){
    if(menu.classList.contains('outer-active')){
        toggle();
    }
})
//paralax

function parallax(event){
    this.querySelectorAll('.parallax').forEach(item =>{
        let speed = item.getAttribute('speed');
        item.style.transform = `translateX(-${event.clientX*speed/100}px)`
    })
}
document.addEventListener('mousemove', parallax);


//slider 1

let id = new Array();

const slides = document.querySelectorAll('.slider__slide')
slides.forEach(element => {
    id.push(element.getAttribute('id'));    
}); 

const firstSwiper = new Swiper('.slider', {
    direction: 'vertical',
    speed: 400,
    mousewheel: {
        sensetivity: 0.5,
        eventsTarget: ".slider",
    },

    pagination: {
        el: '.side-nav__bullets',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">'
                + '<span class="slide-num">0' + (index + 1) + '</span>' 
                + '<span class="slide-name">' + id[index] + '</span></span>';
        },       
    }
});


const menuItems = document.querySelectorAll('.outer-menu__item');
menuItems[0].classList.add('active');
menuItems.forEach(element =>{    

    element.addEventListener('click', function(){      
        let index = element.getAttribute('data-index');
        firstSwiper.slideTo(index);
    })
});

firstSwiper.on('slideChange', function(){
    menuItems.forEach(item =>{
        if(item.getAttribute('data-index') == firstSwiper.activeIndex){
            item.classList.add('active');
        }else{
            item.classList.remove('active');
        }
        
    })    
})

const headerBtn = document.querySelector('.header__btn')
firstSwiper.on('slideChange', function(){    
    headerBtn.addEventListener('click', function(){      
        let index = headerBtn.getAttribute('data-index');
        firstSwiper.slideTo(index);
    })
    if(slides[firstSwiper.activeIndex].classList.contains('w-btn')){
        headerBtn.classList.add('hire__btn')
    }else{
        headerBtn.classList.remove('hire__btn')
    }
})

//slider 2

const secondSwiper = new Swiper('.works__slider',{
    navigation: {
        nextEl: '.works__nxt',
        prevEl: '.works__prv',
    },
    speed: 400,
    slidesPerView: 3,
    slidesPerGroup: 1,
    initialSlide: 0,
    loop: true,
    // spaceBetween: 50,
    height: 440,
    centeredSlides: true,
    setWrapperSize: true,
    breakpoints: {
        360: {
            slidesPerView: 1,
        },
        767:{
            slidesPerView: 3,
        }
    }
})

//btn move to

document.querySelectorAll('.hire__btn').forEach(btn =>{
    btn.addEventListener('click', function(){      
        let index = btn.getAttribute('data-index');
        firstSwiper.slideTo(index);
    })
})

//input
s = ' ';
s = s.replace(/^\s+|\s+$/g, '');
let userInput = document.querySelectorAll('.hire__input');
userInput.forEach(userInput =>{
    userInput.addEventListener('blur', () =>{
        if(userInput.value != s){
            userInput.classList.add('has-value');
        }else{
            userInput.classList.remove('has-value');
        }
    })
})
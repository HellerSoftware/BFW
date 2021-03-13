console.log('DarkSwordYTWebPage')

document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');

    document.querySelector('.menu-btn').classList.toggle('menu-btn-rotate');

    document.querySelector('.static1').classList.toggle('move-right');
    document.querySelector('.static2').classList.toggle('move-right');
    document.querySelector('.static3').classList.toggle('move-right');
    document.querySelector('.static4').classList.toggle('move-right');
    document.querySelector('.static5').classList.toggle('move-right');

    document.querySelector('.fs-animation1').classList.toggle('fs-animation-done');
    document.querySelector('.fs-animation2').classList.toggle('fs-animation-done');
    document.querySelector('.fs-animation3').classList.toggle('fs-animation-done');
    document.querySelector('.fs-animation4').classList.toggle('fs-animation-done');
    document.querySelector('.fs-animation5').classList.toggle('fs-animation-done');
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.info-cards', {delay: 50, reset: true, duration:1000});
ScrollReveal().reveal('.cards-banner-one', {delay: 50, reset: true, duration:1000});
ScrollReveal().reveal('.info-cards2', {delay: 50, reset: true, duration:1000});
ScrollReveal().reveal('.cards-banner-two', {delay: 50, reset: true, duration:1000});
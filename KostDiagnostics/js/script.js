
var section__bg = $('.third__section-bg');
var arrow = document.querySelector('.isShownBtn');
var arrowspan = document.querySelector('.arrowspan');
var elemArr = [$('#minusblock-title'), $('#plusblock-title')];
var hiddenContent1 = $('.hiddenContent1');
var hiddenContent2 = $('.hiddenContent2');
var links = document.querySelectorAll('.header__topnavigationlist-links');



var headerElements =
    [$('.menu__burger'), $('.header__topnavigation'), $('.header__bottomnavigation')];

var navigationElements = [$('.header__topnavigation'), $('.header__bottomnavigation')];

headerElements[0].click(function () {
    headerElements[0].toggleClass('active');

    for (i = 0; i < navigationElements.length; i++) {
        navigationElements[i].slideToggle(500);
    }

})







arrowspan.addEventListener('click', function (event) {
    event.preventDefault();
    const blockId = arrowspan.getAttribute('href');
    document.querySelector('' + blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})


window.onscroll = () => {
    if (window.scrollY > 600) {
        arrow.classList.add('isShownBtn_hide');

    } else {
        arrow.classList.remove('isShownBtn_hide');
    }
};




$(document).ready(function () {



    section__bg.toggleClass('active');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
        })
    })





    elemArr[0].click(function (event) {
        event.preventDefault();
        elemArr[0].toggleClass('active');
        hiddenContent1.slideToggle(400);

    })

    elemArr[1].click(function (event) {
        event.preventDefault();
        elemArr[1].toggleClass('active');
        hiddenContent2.slideToggle(400);

    })






});

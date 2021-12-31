var img__box = document.querySelectorAll('.img__box');
var burger = $('.sub__header-burger ');
var basket = $('.sub__header-basket')
basket.css('display', 'none');

var hideElements = [$('.sub__header-searchInput'), $('.header__bottom-navigation')]


burger.attr('title', 'показать меню');
hideElements.forEach(hideElement => {
    hideElement.css('display', 'none');
})



burger.click(function () {
    burger.toggleClass('active');
    basket.slideToggle(500);
    for (let i = 0; i < hideElements.length; i++) {
        hideElements[i].toggle(500);
    }
})














img__box.forEach(items => {
    items.addEventListener('click', function () {
        items.classList.toggle('active');
    })
})


var links = document.querySelectorAll('.footer__service-links')

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
        event.stopPropagation();
        event.preventDefault();
    })
}
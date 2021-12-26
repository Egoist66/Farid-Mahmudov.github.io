var img__box = document.querySelectorAll('.img__box');

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
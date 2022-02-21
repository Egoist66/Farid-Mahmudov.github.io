
var links = document.querySelectorAll('.footer__list-links');
links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
    })
})


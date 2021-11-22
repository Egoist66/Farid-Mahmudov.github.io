var listItem = document.querySelector('.navigation__list-anotherSublist');
var secondItem = document.querySelector('.navigation__list-secondSublist');
var subList = document.querySelector('.subnavigation__list');
var underSubList = document.querySelector('.secondsubnavigation__list');
var details = document.querySelector('details');


listItem.addEventListener('click', function () {
    subList.classList.toggle('showBlock');

})

secondItem.addEventListener('click', function () {
    underSubList.classList.toggle('showBlock');
})






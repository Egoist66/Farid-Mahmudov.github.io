var listItem = document.querySelector('.navigation__list-anotherSublist');
var secondItem = document.querySelector('.navigation__list-secondSublist');
var subList = document.querySelector('.subnavigation__list');
var underSubList = document.querySelector('.secondsubnavigation__list');
var details = document.querySelector('details');
var menuBurger = document.querySelector('#menu__wrapper-hamburgermenu');
var accordeon = document.querySelector('.accordeon');
var diableItems = document.querySelectorAll('.diable_list-items');







listItem.addEventListener('click', function () {
    subList.classList.toggle('showBlock');

})

secondItem.addEventListener('click', function () {
    underSubList.classList.toggle('showBlock');

})










// menu burger




function rotateSpan() {
    menuBurger.classList.toggle('open');
}


menuBurger.addEventListener('click', function () {
    rotateSpan();
    accordeon.classList.toggle('showed');

})

$(document).ready(function () {
    $(".navigation__list").find(".accordeon-toggle").click(function () {
        $(this).next().toggleClass("open").slideToggle("fast");
        $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");
        $('.accordeon-content').css("border-radius", "0px");


    })

})

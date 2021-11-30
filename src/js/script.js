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
        // $('.accordeon-content').css("border-radius", "0px");


    })

})

// hide submenu

let burger = $('#menu__wrapper-hamburgermenu');
let navigation__list = $('.navigation__list ');
let subnav__list = $('.subnavigation__list');
let navigation__links = $('.navigation__list-links ');





$('body').click(function (event) {

    if (!burger.is(event.target) && burger.has(event.target).length === 0 && !navigation__list.is(event.target) && navigation__list.has(event.target).length === 0) {

        navigation__list.toggleClass('showed');
        menuBurger.classList.toggle('open');

        if (menuBurger.classList.contains('open')) {
            menuBurger.classList.remove('open');
            navigation__list.removeClass('showed');
        }


    }


})



// elements focus


// var myLink = $('.footer__navigation-text');
// var elements = $('.social');
// var footerList = $('.footer__navigation-list');


// myLink.click(function () {

//     elements.toggleClass('focus');
//     footerList.toggleClass('showfooterList');
//     myLink.toggleClass('focusText');


// })


var MyLink = document.querySelector('.footer__navigation-text');
var elements = document.querySelectorAll('.social');
var footerList = document.querySelector('.footer__navigation-list');

MyLink.addEventListener('click', function () {

    footerList.classList.toggle('showfooterList');
    MyLink.classList.toggle('focusText');
    elements.forEach(element => {
        element.classList.toggle('focus');
    })
})
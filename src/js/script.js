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




// $('body').click(function (event) {
//     if (!navigation__links.is(event.target) && navigation__links.has(event.target).length === 0) {


//     }


// })




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



// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { a: 10, d: 5 };

// console.log({ ...obj1, d: 4, ...obj2, c: 30 });

// window.setTimeout(() => {
//     alert("Hey!");
// }, 1000);
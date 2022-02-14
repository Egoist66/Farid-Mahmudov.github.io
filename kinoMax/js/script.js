
var search_title = $('.search_title');
var input__box = $('.input__box');
var search = $('.search');
var form__box = $('.form__box');
var sidebar = $('.sidebar');
var filmsbox_items = $('.filmsbox_items');
var main = $('.main');
var navigation__list = $('.navigation__list');
var navigation = $('.navigation');
var preloader__box = $('.preloader__box');
var isShownBtn = $('.isShownBtn');
var positionedLi = $('.positionedLi');
var subnavigation__filmList = $('.subnavigation__filmList');
var subnavParent__li = $('.subnavParent__li');
var subnavigation__bottomFilmList = $('.subnavigation__bottomFilmList');
var links = $('.navigation__list-links');
var positionedLi2 = $('.positionedLi2');
var subnavigation__serialList = $('.subnavigation__serialList');


var header = $('header');
var themeEl_p = $('p');
var themeEl_title = [$('h2'), $('h3')];
var themeEl_p = $('p');

themeEl_title[0].addClass('bright');
themeEl_title[1].addClass('bright');
themeEl_p.addClass('bright');








    var themeBlock = `<div class="theme__block">
                        <div class="theme"></div>  
                     </div>
                      `
    header.prepend(themeBlock);


//    links including

var mainLink = $('.mainlink');

$(document).ready(function () {

    // Links

    mainLink.each(function () {
        $(this).attr('href', '../index.html');
    })



    // theme chnging

    $('body').addClass('body');

   $('.theme').click(function (){
       $(this).toggleClass('active');
      themeEl_title[0].toggleClass('active');
       themeEl_title[1].toggleClass('active');
       themeEl_p.toggleClass('active');




   })




    function preloader() {
        preloader__box.toggleClass('active');
    }
    setTimeout(preloader, 200);


    function time() {


        sidebar.toggleClass('active');
        main.toggleClass('active');
        navigation.toggleClass('active');

    }

    setTimeout(time, 200);

    isShownBtn.on('click', 'a', function (event) {
        event.preventDefault();

        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('html, body').animate({
            scrollTop: top
        });
    });

    positionedLi.hover(function (e) {
        e.preventDefault();
        subnavigation__filmList.slideToggle(300);
    });

    positionedLi2.hover(function (e) {
        e.preventDefault();
        subnavigation__serialList.slideToggle(300);
    });

    $('.read').on('click', () => {
        $('.arrow').toggleClass('active');
        $('.descr__block').fadeToggle(400);
        $('.descr__block').toggleClass('active');

    });


    // navigation__list.on('click', 'a', function (event) {

    //     var target = $(event.target);
    //     if (target.is($('a'))) {
    //         $('a').css('background', 'red');
    //     }
    //     console.log(target);
    // });



});



var arrow = document.querySelector('.isShownBtn');
var arrowspan = document.querySelector('.arrowspan');
var feedBack__block = document.querySelectorAll('.feedBack__block');
var feedbackInput = document.querySelector('.fbinput');
var feedBackField = document.querySelector('#textarea');
var Main = document.querySelector('main');
var first_fbBlock = document.querySelector('.first_fbBlock');
var main__feedBack = document.querySelector('.main__feedBack');
var sendButton = document.getElementById('feedbackButton');
var styleInput = document.querySelectorAll('.styleinput');
var body = document.querySelector('body');
var Theme = document.querySelector('.theme');



// Links including

// var mainlink = document.querySelectorAll('.mainlink');




document.addEventListener("DOMContentLoaded", function(event) {

    body.classList.add('body');

    Theme.addEventListener('click', () => {
        body.classList.toggle('active');
       // window.localStorage.theme = body.className;

    })
    // document.body.className = localStorage.theme;




    window.onscroll = () => {
        if (window.scrollY > 600) {
            arrow.classList.add('isShownBtn_hide');

        } else {
            arrow.classList.remove('isShownBtn_hide');
        }
    };


    // Links including

    // mainlink.forEach(link => {
    //     link.setAttribute('href', '../index.html');
    // })


    sendButton.addEventListener('click', function (event) {

        let newEl = document.createElement('div');
        newEl.className = 'newEl';

        let date = new Date();

        function currentTime() {
            let resultTime = date.toDateString();

            return resultTime;
        }

        newEl.innerHTML = ` <div class="feedBack__block">
        
                    <div class="feedBack__block-element">
        
                        <p class="person">${feedbackInput.value} <span>${currentTime()}</span></p>
                        <p>
                            ${feedBackField.value}
                        </p>
        
                    </div>
        
                    </div>`

        window.localStorage.setItem('block', newEl.innerHTML);

        let inputs = [feedBackField, feedbackInput];

        if(feedbackInput && feedBackField.value ==  '' || null){
            newEl = null;
            inputs.forEach(input => {
                input.style.boxShadow = 'none';
                input.style.border = '1px solid red';

            })
        }else {
            first_fbBlock.insertBefore(newEl, first_fbBlock.previousElementSibling);
            event.preventDefault();

            inputs.forEach(input => {

                input.value = '';
                input.style.border = '1px solid silver';
            });

        }




        // main__feedBack.prepend(newEl);

    });

    // let stor = window.localStorage.getItem('block');
    // JSON.parse(stor);
    // first_fbBlock.append(stor);









});














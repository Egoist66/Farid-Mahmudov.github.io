var link = document.querySelector('.social');

link.addEventListener('click', function (event) {
    event.preventDefault();


})


// $(document).ready(function () {
//     $('body').fadeToggle(1000);
// });


var burger = $('.header__burger');
var navigation = $('.navigation')


$(document).ready(function () {
    burger.click(function () {


        var elements = [burger, navigation];
        for (i = 0; i < elements.length; i++) {
            elements[i].toggleClass('open');
        }




    });
});

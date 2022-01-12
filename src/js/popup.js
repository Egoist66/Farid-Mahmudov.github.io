
var QR = $('.QR');
var popup__box = $('.popup__box');
var popup__img = $('.popup__img');
var close__cross = $('.close__cross');

QR.click(function (e) {
    e.preventDefault();
    popup__box.fadeToggle(500);
    popup__box.toggleClass('active');

})

close__cross.click(function (e) {
    e.preventDefault();

    popup__box.css('display', 'none');

})

// popup__img.click(function (e) {
//     e.preventDefault();
//     popup__img.toggleClass('active');
// })

popup__box.click(function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (!popup__box.is(e.target)) {

        popup__box.hide();
    }


})

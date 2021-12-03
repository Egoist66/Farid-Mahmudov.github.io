var img = $('.about__mebox-img');
console.log(img);

$(document).ready(function () {
    img.click(function () {
        img.toggleClass('active');
    })
});


var read = $('#read');
var text = $('.text');

$(document).ready(function () {
    read.click(function () {
        text.toggleClass('textopacity');
    })
});
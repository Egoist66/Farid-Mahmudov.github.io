var img = $('.about__mebox-img');
console.log(img);

$(document).ready(function () {
    img.click(function () {
        img.toggleClass('active');
    })
});
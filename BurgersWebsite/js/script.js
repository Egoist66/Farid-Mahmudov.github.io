
const elemtsObject = {
    nav: $('.footer__navigation'),
    ElemArray: [$('.first'), $('.second')],
    body: $('body').fadeToggle(1000),
    footer: $('.footer'),
}

// console.log(elemtsObject.ElemArray[0].html());

$(document).ready(function () {

    elemtsObject.nav.click(function (event) {
        if (event.target.closest('.footer__links')) {
            event.preventDefault();
        }
    })


    elemtsObject.footer.toggle(1000);

    // elemtsObject.body.fadeToggle(1000);

    for (i = 0; i < elemtsObject.ElemArray.length; i++) {
        elemtsObject.ElemArray[i].slideToggle(1000);
    }

});











// nav.click(function (event) {
//     if (event.target.closest('.footer__links')) {
//         event.preventDefault();
//     }

// });

// $(document).ready(function () {
//     $('body').fadeToggle(1000);

//     for (i = 0; i < elements.length; i++) {
//         elements[i].slideToggle(1000);
//     }

// });

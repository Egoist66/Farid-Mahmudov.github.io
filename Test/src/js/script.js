
var infobutton = document.querySelector('.info');
var infobutton2 = document.querySelector('.infobutton');
var card__infoBox = document.querySelector('.card__infoBox');
var card__infoBox2 = document.querySelector('.card__infoBox2');
var card2 = document.querySelector('.card2');
var arrow = document.querySelector('.arrow');
var arrow2 = document.querySelector('.arrow2');



var elemArr = [infobutton, card__infoBox, infobutton2, card__infoBox2];





function showblock() {

    elemArr[1].classList.toggle('showblock');


}

function showblocktwo() {

    elemArr[3].classList.toggle('showblocktwo');


}





// function transitionTexttwo() {

//     if (elemArr[2].classList.contains('active')) {
//         elemArr[2].textContent = 'Hide info';
//     } else {
//         elemArr[2].textContent = 'More info';
//     }
// }

infobutton.addEventListener('click', function (e) {
    e.preventDefault();
    arrow.classList.toggle('active');
    infobutton.classList.toggle('hidetext');
    setTimeout(showblock, 200);





})

infobutton2.addEventListener('click', function (e) {
    e.preventDefault();
    arrow2.classList.toggle('active');
    infobutton2.classList.toggle('hidetext');
    setTimeout(showblocktwo, 200);

})


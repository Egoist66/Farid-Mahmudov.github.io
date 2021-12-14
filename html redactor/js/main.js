var create = document.querySelector('.create');
var save = document.querySelector('.save');
var reset = document.querySelector('.reset');
var content = document.querySelector('#content');
var createhtml = document.querySelector('.newhtml');
var li = document.querySelectorAll('li');

// main Page Scripts

content.addEventListener('copy', function () {
    alert('Код скопирован');
})

createhtml.addEventListener('click', function () {
    var query = confirm('Хотите создать стартовую разметку?');



    switch (query) {
        case true:
            alert("let's code!");
            break
        default:
            alert('Возникла ошибка' + '&#128532');
    }
    var doc = document.createElement('div');
    var output = doc.innerHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>`

    content.value = output;




});


reset.addEventListener('click', function () {
    content.value = '';
})

document.querySelector('.downLoad').onclick = function () {
    let content = document.getElementById('content').value;
    if (content != '') {
        let csvData = 'data:application/txt;charset=utf-8,' + encodeURIComponent(content);
        this.href = csvData;
        this.target = '_blank';
        this.download = 'index.html';
    }
    else {
        return false;
    }
};


document.addEventListener("DOMContentLoaded", function () { // событие загрузки страницы

    sessionStorage["key"] = "value";

    content.value = window.localStorage.getItem(content.name, content.value);

    save.addEventListener('click', function () {

        var content = document.querySelector('#content');

        window.localStorage.setItem(content.name, content.value);
        if (true) {
            alert('Изменения сохранены');
        }


    });


});








// var block = document.getElementById('block'); block.onclick = function (e) { var point = document.createElement('div'); point.className = 'point'; point.style.left = e.pageX + 'px'; point.style.top = e.pageY + 'px'; block.appendChild(point); } по клики добвлякм

// const allButtonsToStore = document.getElementsByClassName("button");
// let reason = [];
// for (x=0; x < allButtonsToStore.length; x++) {
//   allButtonsToStore[x].addEventListener("click", function(){
//     /*reason.push([x]); not working*/
//     reason[x] = this.textContent;
//     console.log(reason[x]);
//   });
// }
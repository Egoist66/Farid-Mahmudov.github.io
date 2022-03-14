
// Css page Scripts



var areacss = document.querySelector('#areacss');
var loadcss = document.querySelector('.loadcss');
var savecss = document.querySelector('.savecss');
var clearcss = document.querySelector('.clearcss');


clearcss.addEventListener('click', function () {
    areacss.value = null;
})


sessionStorage["key"] = "value";

areacss.value = window.localStorage.getItem(areacss.name, areacss.value);

savecss.addEventListener('click', function () {

    window.localStorage.setItem(areacss.name, areacss.value);
    if (true) {
        alert('Изменения сохранены');
    }


});

loadcss.addEventListener('click', function () {

    let content = areacss.value;
    if (content != '') {
        let csvData = 'data:application/txt;charset=utf-8,' + encodeURIComponent(content);
        this.href = csvData;
        this.target = '_blank';
        this.download = 'style.css';
    }
    else {
        return false;
    }

});



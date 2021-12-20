
const grayscale = document.getElementById('grayscale');
const contrast = document.getElementById('contrast');
const brightness = document.getElementById('brightness');
const sepia = document.getElementById('sepia');
const saturate = document.getElementById('saturate');
const image = document.getElementById('image');
const invert = document.getElementById('invert');
const blur = document.getElementById('blur');
const save = document.getElementById('save');
const box = document.querySelector('.box');
const readbutton = document.querySelector('.readbutton');
const file = document.getElementById('file');
const reset = document.getElementById('reset');
const imgurl = document.getElementById('img-url');
const labelimg = document.querySelector('.filelabel');
const resetImg = document.getElementById('resetImg');

const defaults = {
    grayscale: 0,
    contrast: 50,
    brightness: 50,
    sepia: 0,
    saturate: 50,
    invert: 0,
    blur: 0,
}


resetImg.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();

    box.innerHTML = null;


})





var settingsList = [grayscale, contrast, brightness, sepia, saturate, invert, blur];

settingsList.forEach(settinglist => {
    settinglist.addEventListener('input', updateFilterValue);




    function updateFilterValue() {

        reset.disabled = false;
        image.style.filter = `
        
        grayscale(${settingsList[0].value}%)
        contrast(${settingsList[1].value}%)
        brightness(${settingsList[2].value}%)
        sepia(${settingsList[3].value}%)
        saturate(${settingsList[4].value}%)
        invert(${settingsList[5].value}%)
        blur(${settingsList[6].value}px)
        
        `;


    }
})

reset.addEventListener('click', resetFilterValue);

function resetFilterValue() {

    grayscale.value = defaults.grayscale;
    contrast.value = defaults.contrast;
    brightness.value = defaults.brightness;
    sepia.value = defaults.sepia;
    saturate.value = defaults.saturate;
    invert.value = defaults.invert;
    blur.value = defaults.blur;

    image.style.filter = `
        
        grayscale(${defaults.grayscale}%)
        contrast(${defaults.contrast}%)
        brightness(${defaults.brightness}%)
        sepia(${defaults.sepia}%)
        saturate(${defaults.saturate}%)
        invert(${defaults.invert}%)
        blur(${defaults.blur}px)
        
        `;
    reset.disabled = true;
}

imgurl.addEventListener('change', updateImageUrl);

function updateImageUrl() {
    var imageSource = imgurl.value;
    image.setAttribute('src', imageSource);
}



sessionStorage["key"] = "value";
localStorage["key"] = "value";

save.addEventListener('click', function () {



    window.localStorage.setItem(settingsList[0].name, settingsList[0].value);
    window.localStorage.setItem(settingsList[1].name, settingsList[1].value);
    window.localStorage.setItem(settingsList[2].name, settingsList[2].value);
    window.localStorage.setItem(settingsList[3].name, settingsList[3].value);
    window.localStorage.setItem(settingsList[4].name, settingsList[4].value);
    window.localStorage.setItem(settingsList[5].name, settingsList[5].value);
    window.localStorage.setItem(settingsList[6].name, settingsList[6].value);

    if (true) {
        alert('Изменения сохранены');
    }

});



for (var i = 0; i < settingsList.length; i++) {
    settingsList[i].value = window.localStorage.getItem(settingsList[i].name, settingsList[i].value);
}






// settingsList[0].value = window.localStorage.getItem(settingsList[0].name, settingsList[0].value);
// settingsList[1].value = window.localStorage.getItem(settingsList[1].name, settingsList[1].value);
// settingsList[2].value = window.localStorage.getItem(settingsList[2].name, settingsList[2].value);
// settingsList[3].value = window.localStorage.getItem(settingsList[3].name, settingsList[3].value);
// settingsList[4].value = window.localStorage.getItem(settingsList[4].name, settingsList[4].value);
// settingsList[5].value = window.localStorage.getItem(settingsList[5].name, settingsList[5].value);
// settingsList[6].value = window.localStorage.getItem(settingsList[6].name, settingsList[6].value);














// grayscale.addEventListener('input', onChange);





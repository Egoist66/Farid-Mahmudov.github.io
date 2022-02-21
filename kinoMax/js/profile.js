let File = document.getElementById('file');
let choosebtn = document.querySelector('.imglabel');
let userimg = document.querySelector('.userimg');
let loadimgbtn = document.querySelector('.loadimgbtn')
let resetimg = document.querySelector('.resetimg');



function LoadImage() {
    let f = File.files[0];
    if (f) {
        userimg.src = URL.createObjectURL(f);
        localStorage.setItem('userimage', userimg.src);

    }
}
userimg.src = localStorage.getItem('userimage');

loadimgbtn.addEventListener('click', function () {
    LoadImage();
})



resetimg.addEventListener('click', () => {


    localStorage.clear();
    userimg.src = '';

})
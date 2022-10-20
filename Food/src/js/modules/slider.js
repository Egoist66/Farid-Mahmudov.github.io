function slider(){
 
    //  Slider
    const slides = document.querySelectorAll('.offer__slide');
    const prev = document.querySelector('.offer__slider-prev');
    const next = document.querySelector('.offer__slider-next');
    const total = document.querySelector('#total');
    const current = document.querySelector('#current');
    const slidesWrapper = document.querySelector('.offer__slider-wrapper');
    const slidesInner = document.querySelector('.offer__slider-inner');
    const width = window.getComputedStyle(slidesWrapper).width

    
    let slideIndex = 1;
    let offset = 0;


    if(slides.length < 10){
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    }
    else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }



   
    slidesInner.style.cssText = `display: flex; width: ${100 * slides.length}%; transition: all 0.5s ease;`;
    slides.forEach(slide => {
        slide.style.cssText = `width: ${width}`;
    });

    slidesWrapper.style.cssText = "overflow: hidden";

    next.addEventListener('click', function(){

       

        if(offset === parseInt(width) * (slides.length - 1)) /* 1950px*/ {
            offset = 0;
        }
        else {
            offset += parseInt(width);
        }
        slidesInner.style.cssText += `transform: translateX(-${offset}px)`;




        if(slideIndex === slides.length){
            slideIndex = 1;
        }
        else {
            slideIndex++;
        }

        if(slides.length < 10){
            current.textContent = `0${slideIndex}`;
        }
        else {
            current.textContent = slideIndex;
        }
    });

    prev.addEventListener('click', function(){


        if(offset === 0){
            offset = parseInt(width) * (slides.length - 1);
        }
        else {
            offset -= parseInt(width);
        }
        slidesInner.style.cssText += `transform: translateX(-${offset}px)`;



        if(slideIndex === 1){
            slideIndex = slides.length;
        }
        else {
            slideIndex--;
        }

        if(slides.length < 10){
            current.textContent = `0${slideIndex}`;
        }
        else {
            current.textContent = slideIndex;
        }
    });





}

export default slider;
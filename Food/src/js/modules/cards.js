function cards(){


    axios.get('db.json')
    .then(res => {
        let data = res["data"];
        console.log(data);
        let out = ``;    
            for(let key in data){

           

                out += `<div class="menu__item">
                
                    <img src="${data[key]["img"]}" alt="${data[key]["alt"]}">
                    <h3 class="menu__item-subtitle">${data[key]["title"]}</h3>
                    <div class="menu__item-descr">
                    <p>${data[key]["descr"]}</p>
                    </div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:<b>${data[key]["price"]}</b></div>
                    <div class="menu__item-total"><span></span> грн/день</div>
                    </div>
                
                </div>`;
            }

        document.querySelector('.menu-container').innerHTML = out; 

    })
    .catch(err => {
        console.error(err); 
    })





}

export default cards;
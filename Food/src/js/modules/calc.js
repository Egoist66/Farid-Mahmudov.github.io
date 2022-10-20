function calc(){


    const result = document.querySelector('.calculating__result > span');
    let sex = "female", height, weight, age, coef = 1.375;



    function calTotal(){

        if(!sex || !height || !weight || !age || !coef){

            result.textContent = "___";

            return;
        }

        if(sex === "female"){
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * coef);
        }
        else {
            result.textContent = Math.round((88.3 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * coef);

        }
    }

    calTotal();

    function getStaticData(parent, activeClass){

       const elements = document.querySelectorAll(`${parent} div`);
       
        document.querySelector(parent).addEventListener('click', function(e){

            if(e.target.id === "coef-block" || e.target.id === "gender"){
                return;
            }

            if(e.target.getAttribute('data-coef')){
                coef = +e.target.getAttribute('data-coef');
            }
            else {
                sex = e.target.id;
            }

            console.log(coef, sex);

            elements.forEach(element => {
                element.classList.remove(activeClass);
            });
            
            e.target.classList.add(activeClass);

            calTotal();

        })


    }

    getStaticData("#gender", "calculating__choose-item_active");
    getStaticData("#coef-block", "calculating__choose-item_active");


    function getInputData(selector){

        const input = document.querySelector(selector);

        input.addEventListener('input', function(){

           

            if(input.value.match(/\D/g)){
                input.style.boxShadow = "0 4px 15px red";
            }
            else {
                input.style.boxShadow = "0 4px 15px green";
            }

            if(input.value === "" || input.value === undefined){
                input.style.boxShadow = "0 4px 15px rgb(0 0 0 / 20%)";
            }

            switch(this.id){

                case "height":
                    height = +this.value;
                    console.log(height);
                    break;
                case "weight":
                    weight = +this.value;
                    console.log(weight);
                    break;
                case "age":
                    age = +this.value;
                    console.log(age);
                    break;
                default:
                    console.log("Something went wrong");        
                    
            }

            calTotal();

        })

    }

    getInputData("#height");
    getInputData("#weight");
    getInputData("#age");
   



}

export default calc;
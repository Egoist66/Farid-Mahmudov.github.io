document.addEventListener('DOMContentLoaded', function(){

    const transformY = document.querySelector('.transform');
    const transformX = document.querySelector('.transformX');
    const test_block = document.querySelector('.app-test-area');
    const radioBlock = document.querySelector('.radio-block');
    const testArea = document.querySelector('.test-box');
    const miniBlocks = [...document.querySelectorAll('.b')];

    transformY.oninput = function(){

        document.querySelector('.transform-out').innerHTML = 'translateY:' + ' ' + `<span>${this.value + 'px' + ';'}</span>` ;
        test_block.style.cssText = `transform: translateY(${this.value + 'px'})`;
    }
    transformX.oninput = function(){

        document.querySelector('.transform-out2').innerHTML = 'translateX:' + ' ' + `<span>${this.value + 'px' + ';'}</span>`;
        test_block.style.cssText = `transform: translateX(${this.value + 'px'})`;
    }


    let outStyles = '';
    radioBlock.addEventListener('click', function(event){

        let target = event.target;
        

        switch(target.id){

            case 'block':
              outStyles = testArea.style.display = target.value;
                for(let i = 0; i < miniBlocks.length; i++){

                    miniBlocks[i].style.display = target.value;

                }
                break;
            case 'flex':
                outStyles = testArea.style.display = target.value;
                break;
                 
            case 'display-inline':
                outStyles = testArea.style.display = target.value;
                for(let i = 0; i < miniBlocks.length; i++){

                    miniBlocks[i].style.display = target.value;

                }
                break;
            case 'inline-flex':
                outStyles = testArea.style.display = target.value;
                break;
            case 'none':
                outStyles = testArea.style.display = target.value;
                break;
            default:
                console.log(new Error('Error'));    
                 
        }

        return outStyles;

    })

    document.querySelector('#flex-select').oninput = function(event){

        testArea.style.cssText += `justify-content: ${this.value}`;

        if(this.value === 'center'){

            for(let i = 0; i < miniBlocks.length; i++){

                miniBlocks[i].style.cssText = "margin: 0px 20px";

            }
        }
        else if(this.value === 'space-between' || this.value === 'space-around' || this.value === 'flex-end' || this.value === 'flex-start'){
            for(let i = 0; i < miniBlocks.length; i++){

                miniBlocks[i].style.cssText = "margin: 20px 0px";

            }
        }
    }
  
    document.querySelector('#align-select').oninput = function(event){

        testArea.style.cssText += `align-items: ${this.value}`;

       
    }

    document.querySelector('#order').onchange = function(){

        if(this.checked){

            document.querySelector('.blocks_1').style.cssText = "order:1";
        }
        else {
            document.querySelector('.blocks_1').style.cssText = "order:0";
        }
    }
  

});


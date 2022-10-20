function formModal(){
    
    // Modal window

    const modalTrigger = document.querySelectorAll('[data-modal]');
    const modalWindow = document.querySelector('.modal');
    const modalCloseBtn = document.querySelectorAll('[data-close]');

    function openModal(){

        css(modalWindow, {
            cssText: `display: block`,
        });
        css(document.querySelector('html'), {
            cssText: `overflow: hidden`,
        });
        
    }


    modalTrigger.forEach(modal => {
        modal.addEventListener('click', openModal);

    });


    function closeModal(event){


        let target = event.target;

        if(target.dataset.close){
            css(this, {
                cssText: `display:none`,
            });

            css(document.querySelector('html'), {
                cssText: `overflow: unset`,
            });
        }
        else if(targetHasClass(event.target, 'modal')){
            css(this, {
                cssText: `display:none`,
            });
            css(document.querySelector('html'), {
                cssText: `overflow: unset`,
            });
        }

    }

    function closeAfterRequestModal(){

        modalWindow.style.display = 'none';
        css(document.querySelector('html'), {
            cssText: `overflow: unset`,
        });
    }


  document.querySelector('.modal').addEventListener('click', closeModal);


    function showModalbyScroll(){

        if(this.pageYOffset >= 3560){

            
            css(modalWindow, {
                cssText: `display: block`,
            });

            css(document.querySelector('html'), {
                cssText: `overflow: hidden`,
            });

            window.removeEventListener('scroll', showModalbyScroll);
        }


    }


       const forms =  document.querySelectorAll('form');

        const message = {
            loading: "icons/spinner.svg",
            success: "Данные пришли! С вами свяжемся",
            failure: "Что-то пошло не так..."
        }

        forms.forEach(item => {
            postRequest(item);
        })


        function postRequest(form){


            form.addEventListener('submit', function(event){
                event.preventDefault();

                const statusMessage = document.createElement('img');
                statusMessage.src = message.loading;
                statusMessage.style.cssText = `display: block; margin: 0 auto`;
                form.append(statusMessage);



                try {

                    const xhr = new XMLHttpRequest();
                    xhr.open('POST', 'handler.php');
        
                
                    const formData = new FormData(form);
        
                    xhr.send(formData);
                    xhr.responseType = "json";
                    xhr.addEventListener('load', function(){
                        
                        if(xhr.status === 200){
                    
                            console.log(xhr.response);
                            showThanksModal(message.success);
                            form.reset();
                         
                            statusMessage.remove();
                         
                        }
                        else {
                            console.log(new Error('Failed POST Request' + ' ' + xhr.statusText));
                            showThanksModal(message.failure);
                            statusMessage.remove();
                            form.reset();
                        }
                    })
        
                }
                catch(e){
                    console.log(e);
                }

            });


        }


        function showThanksModal(message){

            const prevModalDialog = document.querySelector('.modal__dialog');
            prevModalDialog.classList.add('hide');
            openModal();

            const thanksModal = document.createElement('div');
            thanksModal.classList.add('.modal__dialog');
            thanksModal.innerHTML = `

              <div class="modal__content">
              
                <div class="modal__close data-close"></div>
                <div class="modal__title">${message}</div>
              
              </div>

            `;

            document.querySelector('.modal').append(thanksModal);

            setTimeout(() => {

                thanksModal.remove();
                prevModalDialog.classList.add('show');
                prevModalDialog.classList.remove('hide');
                closeAfterRequestModal();

            },4000)
            
        }

}

export default formModal;
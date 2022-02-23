

var modalwrapper = document.createElement('div');

modalwrapper.classList.add('modal__wrapper');
modalwrapper.innerHTML =
	`<div class="modal">
					<div class="cross">
									<i class="far fa-times-circle close__cross"></i>
						</div>
    			<div class="modal__items-box">
    				<form  class="regform">
    				
    				 <input class="firstreginput" required name="name" placeholder="Enter your name" type="text">
	          <br>
	          <input class="secondreginput" required name="email" placeholder="Enter your email" type="email">
	          <br>
	          <input class="thirdreginput" name="password" class="lastreginput" required autocomplete="current-password" minlength="4" maxlength="10"
	         
	           placeholder="Create password " type="password">
	           <br>
	 	         <button name="registered" value="true" type="submit" class="reg_button">Register</button>		
    				
    				
						</form>
	         		
		</div>
		</div>`

body.prepend(modalwrapper);

var modal = document.querySelector('.modal');
var regButton = document.querySelector('.reg_button');
var regInputs = document.querySelectorAll('.regform > input');
console.log(regInputs);

body.prepend(modalwrapper);

function delayShowModal() {
	modal.classList.add('active');
}

function delayHideModal() {
	modal.classList.remove('active');
}

function showmodal() {
	event.preventDefault();
	modalwrapper.classList.add('active');
	setTimeout(delayShowModal, 300);
}

function clear() {
	regInputs.forEach(reginput => {
		reginput.value = '';
		reginput.style.border = 'none';
	})
}








let html = document.querySelector('html');
html.classList.add('html');
console.log(html);

document.querySelectorAll('.login_button').forEach(button => {
	button.addEventListener('click', function (event) {
		event.preventDefault();
		modalwrapper.classList.add('active');
		setTimeout(delayShowModal, 300);
		html.classList.add('modal');
		document.querySelector('.chat__wrapper').classList.add('none');
	})
})


// document.querySelector('.login_button').addEventListener('click', function (event){
//
// })

document.querySelector('.cross').addEventListener('click', function (event) {

	setTimeout(delayHideModal, 300);
	modalwrapper.classList.remove('active');
	html.classList.remove('modal');
	setTimeout(clear, 200);
	regInputs.forEach(input => {
		input.classList.remove('vibrate');
	});
	document.querySelector('.chat__wrapper').classList.remove('none');



});

regButton.addEventListener('click', function (event) {
	if (regButton) {
		setTimeout(clear, 300);
	}
})

document.addEventListener('click', function (event) {
	if (event.target.className == 'modal__wrapper active') {
		modalwrapper.classList.remove('active');
		html.classList.remove('modal');
		setTimeout(clear, 300);
		document.querySelector('.chat__wrapper').classList.remove('none');

	}
});

var nameInput = document.querySelector('.firstreginput');
var emailInput = document.querySelector('.secondreginput');
var passwordInput = document.querySelector('.thirdreginput');

function  Modalcheck(){

	document.querySelector('.login__button').addEventListener('click', function (event) {
		event.preventDefault();
		modalwrapper.classList.add('active');
		setTimeout(delayShowModal, 300);
		html.classList.add('modal');
	})

	if (regButton) {
		setTimeout(clear, 300);
	}

	document.addEventListener('click', function (event) {
		if (event.target.className == 'modal__wrapper active') {
			modalwrapper.classList.remove('active');
			html.classList.remove('modal');
			regInputs.forEach(input => {
				input.style.border = 'none';
			});
			setTimeout(clear, 300);
		}
	});





}



function OpenCabinet() {


	let adminData = {

		name: 'admin',
		password: 'admin1',

	}


	if (nameInput.value == adminData.name && passwordInput.value == adminData.password.toString()) {
		window.open('cabinet/profile.html');




	} else if (nameInput.value == '' && passwordInput.value == '') {

		regInputs.forEach(input => {
			input.classList.toggle('vibrate');
		});

	}else if(nameInput.value !== adminData.name && passwordInput.value !== adminData.password.toString()){

		regInputs.forEach(input => {
			input.classList.toggle('vibrate');
		});
		regInputs.forEach(input => {
			input.style.border = '3px solid red';
		});


	}else {
		console.log('error');
	}



}

regButton.addEventListener('click', function () {
	OpenCabinet()
	setTimeout(clear, 300);



});









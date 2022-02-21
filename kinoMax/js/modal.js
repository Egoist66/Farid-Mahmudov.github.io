

var modalwrapper = document.createElement('div');

modalwrapper.classList.add('modal__wrapper');
modalwrapper.innerHTML =
	`<div class="modal">
					<div class="cross">
									<i class="far fa-times-circle close__cross"></i>
						</div>
    			<div class="modal__items-box">
    				<form target="_blank" method="post" action=https://fe.it-academy.by/TestForm.php?" class="regform">
    				
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


});

regButton.addEventListener('click', function (event) {
	if (regButton) {
		setTimeout(clear, 200);
	}
})

document.addEventListener('click', function (event) {
	if (event.target.className == 'modal__wrapper active') {
		modalwrapper.classList.remove('active');
		html.classList.remove('modal');
		setTimeout(clear, 200);
	}
});


function OpenCabinet() {

	let nameInput = document.querySelector('.firstreginput');
	let emailInput = document.querySelector('.secondreginput');
	let passwordInput = document.querySelector('.thirdreginput');

	let adminData = {

		name: 'admin',
		password: 'admin1',

	}


	if (nameInput.value == adminData.name && passwordInput.value == adminData.password.toString()) {
		window.open('../cabinet/profile.html');





	} else if (nameInput.value == '' && passwordInput.value == '') {
		alert('You entered nothing');

	} else {
		setTimeout(location.reload(), 1000);
		regInputs.forEach(input => {
			input.style.border = '3px solid red';
		});

		alert('Invalid data!');
	}





}

regButton.addEventListener('click', function () {
	setTimeout(clear, 200);
	OpenCabinet()

})










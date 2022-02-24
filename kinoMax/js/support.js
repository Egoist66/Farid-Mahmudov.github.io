let Body = document.querySelector('body');
let chatButton = document.querySelector('.chat__button');


let NewElement = document.createElement('div');
NewElement.classList.add('chat__wrapper');
Body.style.position = 'relative';

NewElement.innerHTML = `<div class="chat">

                <div  class="chat__output"><h2 style="font-size: 20px;margin-bottom: 20px;">Online</h2></div>
              
                <form  class="chat__form">

                    <div class="chat__filebox">
                        <label class="labelinput" for="file">
                           <img alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTFweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMTEgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTIuNSAoNjc0NjkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmF0dGFjaF9maWxlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb25zIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iVHdvLVRvbmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MjMuMDAwMDAwLCAtMjAxNS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IkVkaXRvciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAwLjAwMDAwMCwgMTk2MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJUd28tVG9uZS0vLUVkaXRvci0vLWF0dGFjaF9maWxlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MTYuMDAwMDAwLCA1NC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMCAwIDI0IDAgMjQgMjQgMCAyNCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuNSwyMyBDMTUuNTQsMjMgMTgsMjAuNTQgMTgsMTcuNSBMMTgsNiBMMTYuNSw2IEwxNi41LDE3LjUgQzE2LjUsMTkuNzEgMTQuNzEsMjEuNSAxMi41LDIxLjUgQzEwLjI5LDIxLjUgOC41LDE5LjcxIDguNSwxNy41IEw4LjUsNSBDOC41LDMuNjIgOS42MiwyLjUgMTEsMi41IEMxMi4zOCwyLjUgMTMuNSwzLjYyIDEzLjUsNSBMMTMuNSwxNS41IEMxMy41LDE2LjA1IDEzLjA1LDE2LjUgMTIuNSwxNi41IEMxMS45NSwxNi41IDExLjUsMTYuMDUgMTEuNSwxNS41IEwxMS41LDYgTDEwLDYgTDEwLDE1LjUgQzEwLDE2Ljg4IDExLjEyLDE4IDEyLjUsMTggQzEzLjg4LDE4IDE1LDE2Ljg4IDE1LDE1LjUgTDE1LDUgQzE1LDIuNzkgMTMuMjEsMSAxMSwxIEM4Ljc5LDEgNywyLjc5IDcsNSBMNywxNy41IEM3LDIwLjU0IDkuNDYsMjMgMTIuNSwyMyBaIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0i8J+UuS1QcmltYXJ5LUNvbG9yIiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"><span class="attach">Attach file</span>
                        </label>
                        <input style="display: none" type="file" name="file__chat" id="file">

                    </div>

                    <div class="chat__inputbox">
                        <input  class="input__message" placeholder="Enter your message" type="text">
                        <button type="submit" class="chat__button">Send</button>

                    </div>

                </form>


          </div>
    </div>`;
Body.prepend(NewElement);


function dateData() {


}


document.querySelector('.chat__button').addEventListener('click', function (event) {
	event.preventDefault();


	if(!document.querySelector('.input__message').value == ''){
		let time = new Date();
		time.toDateString();
		let newElement = document.createElement('p');
		newElement.classList.add('output__text');
		newElement.classList.add('active');
		newElement.contentEditable = 'true';
		let result = document.querySelector('.input__message').value;
		document.querySelector('.chat__output').append(newElement);
		newElement.innerHTML = result + '<br><br>' + time.toDateString() + '<br><br>';

	}

	setTimeout(200, inputClear());


});



function inputClear() {
	document.querySelector('.input__message').value = '';
}










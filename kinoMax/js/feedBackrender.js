let send_btn = document.getElementById("feedbackButton");
send_btn.addEventListener("click", function (t) {
	let e = document.createElement("div"), n = new Date;
	e.innerHTML = ` <div class="feedBack__block-element posElement">\n\t\t\n\t\t\t\t\t\t<p class=" bright person">${feedbackInput.value} <span>${n.toDateString()}</span></p>\n\t\t\t\t\t\t<p class="bright" id="person">${feedBackField.value}</p></div>`, window.localStorage.setItem(
		"block",
		e.innerHTML,
	);
	let d = [feedBackField, feedbackInput];
	let feedbackBox = document.querySelector('.feedBack__block');
	feedbackInput && "" == feedBackField.value ? (e = null, d.forEach(t => {
		t.style.boxShadow = "none", t.style.border = "1px solid red";
	})) : (feedbackBox.insertAdjacentHTML("afterend", e.innerHTML), t.preventDefault(), d.forEach(t => {
		t.value = "", t.style.border = "1px solid silver";
	}));
});
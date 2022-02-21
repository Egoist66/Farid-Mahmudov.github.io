var search_title = $(".search_title"), input__box = $(".input__box"), search = $(".search"),
	form__box = $(".form__box"), sidebar = $(".sidebar"), filmsbox_items = $(".filmsbox_items"), main = $(".main"),
	navigation__list = $(".navigation__list"), navigation = $(".navigation"), preloader__box = $(".preloader__box"),
	isShownBtn = $(".isShownBtn"), positionedLi = $(".positionedLi"),
	subnavigation__filmList = $(".subnavigation__filmList"), subnavParent__li = $(".subnavParent__li"),
	subnavigation__bottomFilmList = $(".subnavigation__bottomFilmList"), links = $(".navigation__list-links"),
	positionedLi2 = $(".positionedLi2"), subnavigation__serialList = $(".subnavigation__serialList"),
	menuBg = $(".nav-toggle"), header = $("header"), themeEl_p = $("p"), themeEl_title = [$("h2"), $("h3")],
	person = $(".person"), td = $("td"), th = $("th"), modrow = $(".mod"), paragraph = $(".paragraph");
themeEl_title[0].addClass("bright"), themeEl_title[1].addClass("bright"), themeEl_p.addClass("bright"), td.addClass(
	"bright"), th.addClass("bright"), paragraph.addClass("bright");
var eleArr = [themeEl_title, themeEl_p, td, th, modrow, paragraph], downsidebar = $(".downsidebar"),
	themeBlock = '<div class="theme__block">\n                          <button  class="nav-toggle menuBurger">\n                              <span class="bar-top bgspan"></span>\n                              <span class="bar-mid bgspan"></span>\n                              <span class="bar-bot bgspan"></span>\n                          </button>\n                      <div class="theme"></div>  \n                  </div>\n                 ',
	appearaside = '<aside class="downsidebar">\n                    <div class="search__box sidebarbox">\n                        <form target="_blank" method="get" action="https://fe.it-academy.by/TestForm.php?"\n                            class="form__box">\n                            <h2 class="search_title">Search</h2>\n                            <div class="input__box">\n                                <input name="search" placeholder="Enter your query" required type="search">\n                                <button type="submit" class="search"><i class="fas fa-search search_icon"></i></button>\n                            </div>\n                        </form>\n                    </div>\n                    <div class="enter__box sidebarbox">\n                        <h2>LogIn</h2>\n                        <form method="get" action="https://fe.it-academy.by/TestForm.php?" class="enter__form">\n                            <div class="input__enter-box">\n                                <input autocomplete="on" required placeholder="Enter your Email" type="email">\n                                <input required placeholder="Enter your Password" type="password">\n                                <div class="button_box">\n                                    <button value="registered" type="submit" class="login_button">Sign Up</button>\n                                    <button value="logged in" type="submit" class="login_button">Log In</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                    <div class="news__box sidebarbox">\n                        <h2>News</h2>\n                        <div class="news__text">\n                            <p>03.02.2022</p>\n                            <p class="lastP">We launched our new service</p>\n                        </div>\n                    </div>\n                    <div class="news__box ratings__box sidebarbox">\n                        <h2>Ratings</h2>\n                        <ul class="ratingsFilm__list">\n                            <div class="ratings__box ">\n                                <li><a href="movies/interstellar.html" class="ratingsFilm__list-links">Interstellar</a>\n                                </li>\n                                <p class="firstrating">9.0</p>\n                                <li><a href="movies/avengers.html" class="ratingsFilm__list-links">Avengers</a></li>\n                                <p class="secondrating">9.8</p>\n                                <li><a href="movies/madmax.html" class="ratingsFilm__list-links">Mad Max</a></li>\n                                <p class="thirdtrating">9.1</p>\n                                <li class="lastLi"><a href="movies/freeguy.html" class="ratingsFilm__list-links">Free\n                                        Guy</a></li>\n                                <p class="fourthrating">8.9</p>\n                            </div>\n                        </ul>\n                    </div>\n                    <div class="news__box ratings__box serials__box sidebarbox">\n                        <h2>Serials</h2>\n                        <ul class="ratingsFilm__list serials__list">\n                            <div class="ratings__box serials__box ">\n                                <li><a href="serials/breakingBad.html"\n                                        class="ratingsFilm__list-links serials__list-links">Breaking Bad</a>\n                                </li>\n                                <p class="firstrating">9.5</p>\n                                <li><a href="serials/xfiles.html" class="ratingsFilm__list-links">The X Files</a></li>\n                                <p class="secondrating">8.7</p>\n                                <li><a href="serials/walkingDead.html" class="ratingsFilm__list-links">Walking Dead</a>\n                                </li>\n                                <p class="thirdtrating">8.6</p>\n                                <li class="lastLi"><a href="serials/siliconvalley.html"\n                                        class="ratingsFilm__list-links">Silicon Valley</a></li>\n                                <p class="fourthrating">8.5</p>\n                            </div>\n                        </ul>\n                    </div>\n                </aside>';
header.prepend(themeBlock);
var mainLink = $(".mainlink"), commomLink1 = $("#commonLink1"), nameinput = $(".nameinput"),
	lasnameinput = $(".lastnameinput"), feedbackarea = $(".feedbackarea"),
	inputsArray = [nameinput, lasnameinput, feedbackarea], sendButton = $("#feedbacksend"), empty = "";

function reset() {
	inputsArray.forEach(e => {
		e.val(empty);
	});
}

sendButton.click(function () {
	setTimeout(reset, 500);
}), $(document).ready(function () {
	setTimeout(function () {
		preloader__box.toggleClass("active");
	}, 200), setTimeout(function () {
		sidebar.toggleClass("active"), main.toggleClass("active"), navigation.toggleClass("active");
	}, 200), mainLink.each(function () {
		$(this).attr("href", "../index.html");
	}), commomLink1.each(function () {
		$(this).attr("href", "../serials/breakingBad.html");
	}), $("body").addClass("body"), $(".theme").click(function () {
		$(this).toggleClass("active"), $(eleArr).each(function (e) {
			$(this).toggleClass("active");
		}), paragraph.toggleClass("active");
	}), isShownBtn.on("click", "a", function (e) {
		e.preventDefault();
		var t = $(this).attr("href"), n = $(t).offset().top;
		$("html, body").animate({ scrollTop: n });
	}), positionedLi.hover(function (e) {
		e.preventDefault(), $(window).width() <= 1207
			? subnavigation__filmList.css("display", "none")
			: subnavigation__filmList.slideToggle(300);
	}), positionedLi2.hover(function (e) {
		e.preventDefault(), $(window).width() <= 1207
			? subnavigation__serialList.css("display", "none")
			: subnavigation__serialList.slideToggle(300);
	}), $(".read").on("click", () => {
		$(".arrow").toggleClass("active"), $(".descr__block").fadeToggle(400), $(".descr__block").toggleClass("active");
	});
});
var arrow = document.querySelector(".isShownBtn"), arrowspan = document.querySelector(".arrowspan"),
	feedBack__block = document.querySelectorAll(".feedBack__block"), feedbackInput = document.querySelector(".fbinput"),
	feedBackField = document.querySelector("#textarea"), Main = document.querySelector("main"),
	first_fbBlock = document.querySelector(".first_fbBlock"), main__feedBack = document.querySelector(".main__feedBack"),
	styleInput = document.querySelectorAll(".styleinput"), body = document.querySelector("body"),
	Theme = document.querySelector(".theme"), arrowicon = document.querySelector(".arrowicon"),
	Burger = document.querySelector(".nav-toggle"), midspan = document.querySelector(".bar-mid"),
	bgspan = document.querySelectorAll(".bgspan"), mainnav = document.querySelector(".navigation"),
	list = document.querySelector(".navigation__list"),
	subnavFilmList = (header = document.querySelector(".header"), document.querySelector(".subnavigation__filmList")),
	aside = document.querySelector(".sidebar"), header__section = document.querySelector(".header__section"),
	films__Box = document.querySelector(".films__box");
navlinks = document.querySelectorAll(".navigation__list-links");
var translatedtitle = document.querySelector(".translatedtitle"),
	seocndtranslatedtitle = document.querySelector(".translatedsecondtitle"),
	thirdtranslatedtitle = document.querySelector(".thirdtranslatedtitle"),
	fourthtranslatedtitle = document.querySelector(".fourthtranslatedtitle"),
	subthirdtitle = document.querySelector(".subthirdtitle"), subfourthtitle = document.querySelector(".subfourthtitle"),
	translatedread = document.querySelector(".translatedread"), logotext = document.querySelector(".logo > p"),
	h2 = document.querySelector(".main > h2"), translatedArr = [
		logotext,
		translatedtitle,
		seocndtranslatedtitle,
		thirdtranslatedtitle,
		subthirdtitle,
		translatedread,
		fourthtranslatedtitle,
		subfourthtitle,
	];
const mainnavigation = document.getElementById("mainnavigation");
let downSidebar = document.createElement("aside");
downSidebar.classList.add("downsidebar"), downSidebar.innerHTML = '\n                    <div style="background: none" class="search__box sidebarbox">\n                        <form target="_blank" method="get" action="https://fe.it-academy.by/TestForm.php?"\n                            class="form__box">\n                            <h2 style="background: none; text-align: center; color: silver" class="search_title">Search</h2>\n                            <div style="width: 100%" class="input__box">\n                                <input \n                                style="width: 70%; border: 1px solid orange; border-right: none; margin: 0 -53px " \n                                class="downinput" name="search" placeholder="Enter your query" required type="search">\n                                <button style="border: 1px solid orange; border-left: none; background-color: orange " type="submit" class="search downsearchbtn"><i class="fas fa-search search_icon"></i></button>\n                            </div>\n                        </form>\n                    </div>\n                    <div style="background: none" class="enter__box sidebarbox">\n                        <h2 style="text-align: center; background: none; color: silver">LogIn</h2>\n                        <form method="get" action="https://fe.it-academy.by/TestForm.php?" class="enter__form">\n                            <div class="input__enter-box">\n                                <input autocomplete="on" required placeholder="Enter your Email" type="email">\n                                <input required placeholder="Enter your Password" type="password">\n                                <div class="button_box">\n                                    <button onclick="showmodal()" value="registered" type="submit" class="login_button">Sign Up</button>\n                                    <button value="logged in" type="submit" class="logbutton">Log In</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                    <div style="background: none" class="news__box sidebarbox">\n                        <h2 style="text-align: center; background: none; color: silver">News</h2>\n                        <div class="news__text">\n                            <p>03.02.2022</p>\n                            <p style="font-size: 20px;" class="lastP">We launched our new service</p>\n                        </div>\n                    </div>\n                \t', Main.appendChild(
	downSidebar), document.addEventListener("DOMContentLoaded", function (e) {
	Burger.addEventListener("click", e => {
		Burger.classList.toggle("active"), bgspan.forEach(e => {
			e.classList.toggle("active");
		}), list.classList.toggle("show"), header.classList.toggle("active");
	}), Theme.addEventListener("click", () => {
		body.classList.toggle("active"), arrowicon.classList.toggle("white");
	}), window.onscroll = (() => {
		window.scrollY > 600 ? arrow.classList.add("isShownBtn_hide") : arrow.classList.remove("isShownBtn_hide");
	});
});


var langArr = {
	"nav": {
		"ru": ['Главная', 'Фильмы', 'Сериалы', 'Рейтинги', 'Отзывы'],
		"en": ['Main', 'Films', 'Serials', 'Ratings', 'Feedback'],
	},

	"title": {
		"ru": [
			'Выбери свою страсть',
			'Популярные фильмы',
			'Популярные сериалы',
			'Как снимали Интерстеллар',
			'45 лет исполнилось Кристоферу Нолану — одному из самых успешных режиссеров нашего времени, чьи работы одинаково любимы как взыскательными критиками, так и простыми зрителями. Фильмом изначально занималась студия Paramount. Когда Кристофер Нолан занял место режиссера, студия Warner Bros., которая выпускала его последние фильмы, добилась участия в проекте',
			'Читать',
			'Актер Том Хенкс поделился впечатлением о фестивале',
			'16 февраля в Лондоне состоялась 67-я церемония вручения наград Британской киноакадемии. Леонардо ДиКаприо, Брэд Питт, Анджелина Джоли, Кейт Бланшетт, Хелен Миррен, Эми Адамс, Кристиан Бэйл, Альфонсо Куарон и другие гости и победители премии — в нашем репортаже.',
		],
		"en": [
			'Choose your passion',
			'Popular films',
			'Popular serials',
			'How Interstellar was filmed',
			'Christopher Nolan is 45, one of the most successful directors of our time, whose work is equally loved by both discerning critics and ordinary viewers. The film was originally produced by Paramount Studios. When Christopher Nolan took over as director, Warner Bros., the studio that produced his last films, secured a spot on the project.',
			'Read',
			'Actor Tom Hanks shared his impressions of the festival',
			'The 67th British Academy Film Awards took place on February 16 in London. Leonardo DiCaprio, Brad Pitt, Angelina Jolie, Cate Blanchett, Helen Mirren, Amy Adams, Christian Bale, Alfonso Cuaron and other guests and winners of the award - in our report.',
		],
	},
};



let langdiv = document.createElement('div');
langdiv.classList.add('langBox');

langdiv.innerHTML = ` <select class="select" 
 	style="background: transparent; color: white; border-radius: 4px; padding: 4px; cursor: pointer" name="select">
                        <option value="ru">RU</option>
                        <option selected value="en">EN</option>
                    </select>`;



header.prepend(langdiv);
header.style.position = 'relative';

let Select = document.querySelector('.select');
let  allLang = ['en', 'ru', ];
navlinks.forEach(link => {
	link.classList.add('translated');
})

function changeURLLanguage(){
	let lang = Select.value;
	location.href = window.location.pathname + '#' + lang;
	location.reload();
}

function changeLangugage(){
	let hash = window.location.hash;
	hash = hash.substr(1);
	if(!allLang.includes(hash)){
		location.href = window.location.pathname + '#en';
		location.reload()
	}

	console.log(hash);
	Select.value = hash;
	// navlinks[0].innerHTML = langArr["nav"][hash][0];
	for(let i = 0; i< navlinks.length; i++){

		window.localStorage.setItem('lang', JSON.stringify(langArr['nav']));
		navlinks[i].innerHTML = langArr["nav"][hash][i];
	}

	for(let i = 0; i < translatedArr.length; i++){
		translatedArr[i].innerHTML = langArr["title"][hash][i];
	}



}


Select.addEventListener('change', changeURLLanguage);

changeLangugage();



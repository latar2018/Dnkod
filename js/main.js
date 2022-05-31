$(function () {

})

const nav__linkBtn = document.querySelector('.nav__link-btn');
const menu = document.querySelector('.menu');

nav__linkBtn.addEventListener('click', function (e) {
	e.preventDefault();
	// nav__linkBtn.querySelector('')
	let parent = nav__linkBtn.closest('.nav__list');
	parent.nextElementSibling.classList.toggle('active')
console.log(parent)
	
	if (nav__linkBtn.classList.toggle('active')) {
		nav__linkBtn.previousElementSibling.classList.add('nav__link-left')
	} else {
		nav__linkBtn.previousElementSibling.classList.remove('nav__link-left');
	}
})
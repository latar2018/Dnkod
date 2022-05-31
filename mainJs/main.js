// todo ============================= Открытие меню ================================
const nav__linkBtn = document.querySelector('.nav__link-btn');
const menu = document.querySelector('.menu');
if (nav__linkBtn) {
	nav__linkBtn.addEventListener('click', function (e) {
		e.preventDefault();
		let parent = nav__linkBtn.closest('.nav__list');
		parent.nextElementSibling.classList.toggle('active');
		nav__linkBtn.classList.toggle('active');
		nav__linkBtn.previousElementSibling.classList.add('nav__link-left');
		
		if (!nav__linkBtn.classList.contains('active')) {
			nav__linkBtn.previousElementSibling.classList.remove('nav__link-left')
		} 
	})
	document.querySelector('body').addEventListener('click', function () { 
		if (!event.target.closest('.menu') && !event.target.closest('.nav__link-btn')) {
			closeMenu();
		}
	});
	function closeMenu() {		
		let parent = nav__linkBtn.closest('.nav__list');
		parent.nextElementSibling.classList.remove('active')
		nav__linkBtn.classList.remove('active');
		nav__linkBtn.previousElementSibling.classList.remove('nav__link-left')
	}
}
// todo ============================= Открытие меню ================================



// 	mousewheel: {
// 		sensitivity: 1,
// 		eventsTarget: '.main',
// 		onlyInViewport: true
// 	}
// });
// $(document).ready(function() {
// 	$('#pagepiling').pagepiling({
		
// 	});
// });

// todo =============================Появление элементов при скроле================================
// function onEntry(entry) {
//   entry.forEach((change) => {
//     if (change.isIntersecting) {
//       change.target.classList.add("element-show");
//     }
//     // else {
//     //   change.target.classList.remove("element-show");
//     // }
//   });
// }

// let options = {
//   threshold: [0.5],
// };
// let observer = new IntersectionObserver(onEntry, options);
// let elements = document.querySelectorAll(".element-animation");

// for (let elm of elements) {
//   observer.observe(elm);
// }
// todo =============================Появление элементов при скроле================================



// todo =============================Слайдеры================================
if ($('.control__slider').length > 0) {
	new Swiper('.control__slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		grabCursor: true,
		slidesPerView: 3,
		parallax: true,
		mousewheelControl: true,
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			575: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			993: {
				slidesPerView: 3,
				spaceBetween: 20
			}
		}
	});
}
if ($('.about__inner-slider').length > 0) {
	new Swiper('.about__inner-slider', {
		grabCursor: true,
		slidesPerView: 1.5,
		parallax: true,
		spaceBetween: 80,
		mousewheelControl: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		},
		breakpoints: {
			320: {
				slidesPerView: 1.5,
				parallax: true,
				spaceBetween: 20,
				mousewheelControl: true,
				// spaceBetween: 20,
				slidesPerColumn: 1
			},
		
			575: {
				slidesPerView: 1.8,
				parallax: true,
				grabCursor: true,
				mousewheelControl: true,
				spaceBetween: 80
			},
			992: {
				slidesPerView: 1.5,
				parallax: true,
				grabCursor: true,
				mousewheelControl: true,
				spaceBetween: 120,
				mousewheel: {
					invert: true,
					eventsTarget: '.about__inner-slider',
					ForceToAxis: true
				},
			},
			
		}
	});
}

if ($('.partners__slider').length > 0) {
	new Swiper('.partners__slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		grabCursor: true,
		slidesPerView: 3,
		parallax: true,
		mousewheelControl: true,
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			575: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			867: {
				slidesPerView: 3,
				spaceBetween: 20
			}
		}
	});
}
if ($('.partners__slider1').length > 0) {
	new Swiper('.partners__slider1', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		grabCursor: true,
		slidesPerView: 3,
		parallax: true,
		mousewheelControl: true,
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			575: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			867: {
				slidesPerView: 3,
				spaceBetween: 20
			}
		}
	
	});
}
if ($('.partners__slider2').length > 0) {
	new Swiper('.partners__slider2', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		grabCursor: true,
		slidesPerView: 3,
		parallax: true,
		mousewheelControl: true,
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			575: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			867: {
				slidesPerView: 3,
				spaceBetween: 20
			}
		}
	});
}
if ($('.works__slider').length > 0) {
	new Swiper('.works__slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		grabCursor: true,
		slidesPerView: 1,
		parallax: true,
		mousewheelControl: true
	});
}
let isMobile = window.innerWidth <= 900;
let isDesctop = window.innerWidth;
// todo =============================Слайдеры================================



//TODOO ====================   Добавляем плавную прокрутку для всех страниц   ==============================
$(document).ready(function(){
	$('a[href^="#"].anclick').click(function(){ 
		//var $element = $('a[name=' + $(this).attr('href').substr(1) + ']');
		var $element = $($(this).attr('href'));
		if ($element.length == 1) {			
			//$('html, body').animate({ scrollTop: $element.offset().top }, 500); 
		
			$('.main').animate({ scrollTop: $element.offset().left }, 800);
		}     
		return false;
	});

	let t = 0;
	let horCount = 0;
	let animateSpeed = 800;
	let rightSpeed = 280;
	
	if (isDesctop > 992) {

			

		document.addEventListener('wheel', function (e) {
		if (e.target.closest('.section')) {
			e.preventDefault();
		}	

		clearTimeout(t);
	
		if (e.wheelDelta > 0 ) {
			t = setTimeout(function () {
				if (e.target.closest('.section')) {
					let sect = e.target.closest('.section');

					if (e.target.closest('.sectionScroll')) {
						let content = document.querySelector('.sectionScrollItem');
						let s = content.scrollTop >= 10;
						if (s) { 
							
							$(content).animate({ scrollTop: content.scrollTop - rightSpeed }, 300);
							//content.scrollTop -= rightSpeed
							return true;
						}
					}

					if (e.target.closest('.subsection')) {
						if (e.target.closest('.subsection').previousElementSibling) {
							let hl = e.target.closest('.subsection').previousElementSibling.offsetLeft;
							horCount = hl;
							$(sect).animate({ scrollTop: horCount }, animateSpeed);
							return true;
						}
					}

					//только для блока info
					if (e.target.closest('.info')) {
						let content = document.querySelector('.info__items-content');
						let s = content.scrollTop >= 10;
						if (s) { 
							$(content).animate({ scrollTop: content.scrollTop - rightSpeed }, 500);
							//content.scrollTop -= rightSpeed
							return true;
						}
					}
					

					if (e.target.closest('.section').previousElementSibling) {
						let vl = e.target.closest('.section').previousElementSibling.offsetTop;
						$('html').animate({ scrollTop: vl }, animateSpeed);
						return true;
					}

					
				}

			}, 100);
		}	else {
			t = setTimeout(function () {
				if (e.target.closest('.section')) {
					let sect = e.target.closest('.section');

					if (e.target.closest('.sectionScroll')) {
						let content = document.querySelector('.sectionScrollItem');
						let s = (content.scrollTop + content.clientHeight) < (content.scrollHeight - 20);
						if (s) {
							let curTop = content.scrollTop + rightSpeed;
							$(content).animate({ scrollTop: curTop }, animateSpeed);
							//content.scrollTop += rightSpeed
							return true;
						}
					}

					if (e.target.closest('.subsection')) {
						if (e.target.closest('.subsection').nextElementSibling) {
							let hl = e.target.closest('.subsection').nextElementSibling.offsetLeft;
							horCount = hl;
							$(sect).animate({ scrollTop: horCount }, animateSpeed);
							return true;
						}
					}

					//только для блока info
					if (e.target.closest('.info')) {
						let content = document.querySelector('.info__items-content');
						let s = (content.scrollTop + content.clientHeight) < (content.scrollHeight - 20);
						if (s) {
							let curTop = content.scrollTop + rightSpeed;
							$(content).animate({ scrollTop: curTop }, 500);
							//content.scrollTop += rightSpeed
							return true;
						}
					}

					if (e.target.closest('.section').nextElementSibling) {
						let vl = e.target.closest('.section').nextElementSibling.offsetTop;
						$('html').animate({ scrollTop: vl }, animateSpeed);
						return true;
					}
				}
			}, 100);
		}
		
		return false;
	}, {passive: false});
	}
});



//TODOO ====================   Добавляем плавную прокрутку для всех страниц   ==============================




//TODOO ====================   Добавление слайдера в блоке horizontal для мобилок   ==============================
if ($('.horizontal').length > 0) { 
	let horizontal = document.querySelector('.horizontal');
	let horizontalWrap = horizontal.querySelector('.horizontal__wrap');
	let horizontalInner = horizontal.querySelectorAll('.subsection');
		
	if (window.innerWidth <= 992) { 
		horizontal.classList.add('swiper-container');
		horizontalWrap.classList.add('swiper-wrapper');
		for (let item of horizontalInner) {
			item.classList.add('swiper-slide');
		}
		new Swiper('.horizontal', {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			grabCursor: true,
			slidesPerView: 1,
			parallax: true,
			mousewheelControl: true
		
		});
	}
}
//TODOO ====================   Добавление слайдера в блоке horizontal для мобилок   ==============================




// //TODOO ====================   Добавление слайдера в блоке about для мобилок   ==============================
// if ($('.about__inner-imedia').length > 0) {
// 	let aboutInner = document.querySelector('.about__inner-imedia');
// 	let aboutItems = aboutInner.querySelector('.about__items2');
// 	let aboutItem = aboutInner.querySelectorAll('.about__item3');

// 	if (window.innerWidth <= 576) {
// 		aboutInner.classList.add('swiper-container');
// 		aboutItems.classList.add('swiper-wrapper');
// 		for (let item of aboutItem) {
// 			item.classList.add('swiper-slide');
// 		}
// 		new Swiper('.about__inner-imedia', {
// 			navigation: {
// 				nextEl: '.swiper-button-next',
// 				prevEl: '.swiper-button-prev'
// 			},
// 			grabCursor: true,
// 			slidesPerView: 1,
// 			parallax: true,
// 			mousewheelControl: true
// 		});
// 	}
// }

//TODOO ====================   Добавление слайдера в блоке about для мобилок   ==============================



//TODOO ====================   Создаем обертку для слайдера и добавляем слайдер в блок works   ==============================
if (isDesctop <= 992) {
	const worksItems = document.querySelector('.works__item');
	const worksItemsBlock = document.querySelectorAll('.blocks');
	const worksItemsBlockHidden = document.querySelectorAll('.blockhidden');
	const div = document.createElement('div');
	div.classList.add('works__slider-mobile');
	const body = document.body;


	const ul = `
			<div class="works__slider-mobile swiper-container">
				<div class="swiper-wrapper">

				</div>
				<div class="swiper-button-next"></div>
				<div class="swiper-button-prev"></div>
			</div>
`;

	if (worksItems) {
		worksItems.innerHTML += ul;
		let fff = document.querySelector('.works__slider-mobile .swiper-wrapper');
		for (let block of worksItemsBlock) {
			fff.appendChild(block).classList.remove('blockhidden');
			block.classList.add('swiper-slide');
		}
		var zz = document.querySelectorAll('.blockhidden');
		for (let blockItem of zz) {
			blockItem.remove();
		}
		new Swiper('.works__slider-mobile', {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			grabCursor: true,
			slidesPerView: 1,
			parallax: true,
			mousewheelControl: true
		});
	}

}
//TODOO ====================   Создаем обертку для слайдера и добавляем слайдер в блок works   ==============================




//TODOO ====================   Оценка самочувствия   ==============================
const estimationItem = document.querySelectorAll('.estimation__item');
if (estimationItem.length > 0) {
	estimationItem.forEach(function (item, index) {
	item.setAttribute('data-number', index + 1)
	item.addEventListener('click', function () {
		let cur = this.dataset.number;
		document.querySelector('.estimation__text span').innerHTML = cur;
		estimationItem.forEach(function (item, index) {
			if (index < cur) {
					item.classList.add('active')
			} else { 
					item.classList.remove('active')
			}
		})
	 })
})
}
let butt = document.querySelector('.estimation__box-btn1');
if (butt) {
	butt.addEventListener('click', function () {
		document.querySelector('.estimation__text span').innerHTML = 0;
		estimationItem.forEach(function (item) {
			item.classList.remove('active')
		})
	})
}
//TODOO ====================   Оценка самочувствия   ==============================



//TODOO ====================   popup   ==============================
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
let unclock = true;
let timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener('click', function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		})
	}
}
const closePopupIcon = document.querySelectorAll('.close__popup');
if (closePopupIcon.length > 0) {
	for (let index = 0; index < closePopupIcon.length; index++) {
		let item = closePopupIcon[index];
		item.addEventListener('click', function (e) {
			popupClose(item.closest('.popup'));
			e.preventDefault();
		})
	}
}
function popupOpen(curentPopup) {
	if (curentPopup && unclock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener('click', function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}
function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingight = lockPaddingValue;
		}
	}
	
	body.style.paddingight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unclock = false;
	setTimeout(function() {
		unclock = true;
	}, timeout);
}
//TODOO ====================   popup   ==============================



//TODOO ====================   Карточки на странице Дневник   ==============================
const removeCards = document.querySelectorAll('.diary__items-close');
const addLink = document.querySelector('.popup__form-btn');
if (removeCards.length > 0) {
	for (let removeCard of removeCards) {
		removeCard.addEventListener('click', function () {
			this.closest('.diary__items').classList.add('hidden');
		});
	}
}
function addCard(addLink) {
	for (let removeCard of removeCards) {
		addLink.addEventListener('click', function () {
			removeCard.closest('.diary__items').classList.remove('hidden');
		});
	}
}
if (addLink) {
	addLink.addEventListener('click', function () {
		popupClose(addLink.closest('.popup'));
		addCard(addLink);
	})
}
//TODOO ====================   Карточки на странице Дневник   ==============================



//TODOO ====================   Календарь   ==============================
function startCalendar(calendarEl, date) {
	var calendar = new FullCalendar.Calendar(calendarEl, {
		plugins: ['interaction', 'dayGrid', 'timeGrid', 'list'],
	 header: {
	 //	left: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth', // 'prev,next today',
		  left: '',
		  center: '',
	 //	right: 'prev, today, next',
		 right: '',
		
		},
	  height: 180,
	  themeSystem: 'simplex',
	 //defaultDate: '',
	  locale: 'ru',
	 buttonIcons: true, // show the prev/next text
	 //weekNumbers: true,
	 navLinks: false, // can click day/week names to navigate views
	  editable: false,
	 eventLimit: false, // allow "more" link when too many events
	  displayEventTime: true,
	 eventClick: function(arg) { // клик на название события        
		 printInfo(arg.event._def.extendedProps.otherData);
	 }
 });
 calendar.render();
}
document.addEventListener('DOMContentLoaded', function() {
	var calendarEls = document.querySelectorAll('.calendar-caller');
	for (let calendarEl of calendarEls) {
		let date = calendarEl.getAttribute("data-month");
		startCalendar(calendarEl, date);
	}
});
//TODOO ====================   Календарь   ==============================




//TODOO ====================   Карточки команды   ==============================
const team = document.querySelector('.team');
window.addEventListener('scroll', function () {
	window.pageYOffset;
})
//TODOO ====================   Карточки команды   ==============================




//TODOO ====================   Burger   =============================
const links = document.querySelectorAll('.sidebar__list');
const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
if (burger) {
	burger.addEventListener('click', function () {
	burger.classList.toggle('active');
	sidebar.classList.toggle('active');
	burger.closest('body').classList.toggle('lock');

		links.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinksFade .3s ease forwards ${index/12 + 0.1}s`
			}
		})
	})
	function closeBurger() {		
		burger.classList.remove('active');
		sidebar.classList.remove('active');
		burger.closest('body').classList.remove('lock');
		links.forEach((link) => {
			link.style.animation = '';
		})
	}
	document.querySelector('body').addEventListener('click', function () { 
		if (!event.target.closest('.sidebar') && !event.target.closest('.burger')) {
			closeBurger();
		}
	});
}
//TODOO ====================   Burger   =============================




//TODOO ====================   Открыть карточки плана и Календарь в Планшете   =============================
const planOpen = document.querySelector('.main__plan-open');
const boxOpen = document.querySelector('.box__open');
const lkPlan = document.querySelector('.main__lk-plan');
const lkContent = document.querySelector('.main__lk-content');
const fullCalendar = document.querySelector('.full__calendar');
const mytasks = document.querySelector('.mytasks');
const test = document.querySelector('.test');
const switchMedia = document.querySelector('.switch__media');
const descartes = document.querySelector('.descartes');
if (planOpen) {
	planOpen.addEventListener('click', function () {
		if (lkPlan) {
			lkPlan.classList.toggle('active');
		}
		if (lkContent) {
			lkContent.classList.toggle('active');
		}
		if (fullCalendar) {
			fullCalendar.classList.toggle('active');
		}
		if (mytasks) {
			mytasks.classList.toggle('active');
		}
		if (test) {
			test.classList.toggle('active');
		}
		if (switchMedia) {
			switchMedia.classList.toggle('active');
		}
		if (descartes) {
			descartes.classList.toggle('active');
		}
		
		boxOpen.classList.toggle('open');
		
	})
}
//TODOO ====================   Открыть карточки плана и Календарь в Планшете   =============================




//TODOO ====================   Показать info   =============================
const iconNav = document.querySelector('.icon__nav');
if (iconNav) {
	iconNav.addEventListener('click', function () {
	iconNav.classList.toggle('active')
	document.querySelector('.mytasks__nav').classList.toggle('active');
})
}
//TODOO ====================   Показать info   =============================





//TODOO ====================   Переключатель блоков в планшете и мобилке   =============================
const btnTask = document.querySelector('.btn__task'); // кнопка
const mytasksInner = document.querySelector('.mytasks__inner');// Блок

const btnVerification = document.querySelector('.btn__verification');// кнопка
const verificationtasksItems = document.querySelector('.verificationtasks__items');// Блок
const verificationtasks = document.querySelector('.verificationtasks');
const verificationtasksAddtasks  = document.querySelector('.verificationtasks__addtasks');
const mytasksNav  = document.querySelector('.mytasks__nav');

if (btnTask) {
	btnTask.addEventListener('click', function () {
		btnTask.classList.add('active');                     // кнопка
		mytasksInner.classList.add('active');                    // Блок
		verificationtasksItems.classList.remove('active');         // Блок
		btnVerification.classList.remove('active');                   // кнопка
		verificationtasks.classList.remove('bottom');          
		verificationtasksAddtasks.classList.remove('active');       
		mytasksNav.classList.remove('bottom');         
		iconNav.classList.remove('bottom');         
	})
	btnVerification.addEventListener('click', function () {
		btnVerification.classList.add('active');                    // кнопка
		verificationtasksItems.classList.add('active');     // Блок
		mytasksInner.classList.remove('active')            // Блок
		btnTask.classList.remove('active');                          // кнопка
		verificationtasks.classList.add('bottom'); 
		verificationtasksAddtasks.classList.add('active');            
		mytasksNav.classList.add('bottom');            
		iconNav.classList.add('bottom');            
	})
}
//TODOO ====================   Переключатель блоков в планшете и мобилке   =============================



//TODOO ====================   Показать text   =============================
const openDescartesText = document.querySelector('.open__descartes-text');
const descartesTextMedia = document.querySelector('.descartes-text-media');
const descartesContentText = document.querySelector('.descartes__content-text');
const decartesChildP = document.querySelector('.descartes__content-text p:last-child');

if (openDescartesText) {
	openDescartesText.addEventListener('click', function (e) { 
	e.preventDefault();
	if (openDescartesText.classList.toggle('open')) {
		decartesChildP.appendChild(openDescartesText);
		descartesContentText.classList.add('active');
		descartesTextMedia.classList.add('active');
		openDescartesText.textContent = "Скрыть";
	} else {
		descartesContentText.classList.remove('active');
		descartesTextMedia.classList.remove('active');
		descartesTextMedia.appendChild(openDescartesText);
		openDescartesText.textContent = "Читать";
	}
	
})
}
//TODOO ====================   Select Открытие блока   =============================




//TODOO ====================   Показать text   =============================
const shopArrow = document.querySelector('.shop__group-arrow');
const dropdownButton = document.querySelector('.dropdown__button');
const dropdownNav = document.querySelector('.dropdown__nav');
if (dropdownButton) {
	dropdownButton.addEventListener('click', function () {
	dropdownNav.classList.toggle('visible');
	shopArrow.classList.toggle('active');
})
	
}
//TODOO ====================   Показать text   =============================




//TODOO ====================   Select Открытие блока   ============================
const chartArrow = document.querySelector('.chart__left-arrow');
const chartItems = document.querySelectorAll('.chart__left-item');
if (chartArrow) {
	chartArrow.addEventListener('click', function () {
		for (let chartItem of chartItems) {
			chartItem.classList.toggle('active');
		}
	})
}
//TODOO ====================   Select Открытие блока   ============================




//TODOO ====================   Аккордион   ============================
// Аккордион =========================================
const listHeader = document.querySelectorAll('[data-name="accordion-title"]');
const listContent = document.querySelectorAll('.list-content');
listHeader.forEach(function (item) {
	item.addEventListener('click', showContent);
})
function showContent() {
	this.classList.toggle('active');
	this.nextElementSibling.classList.toggle('hidden')
}
//TODOO ====================   Аккордион   ============================


//TODOO ====================   Римские цифры якоря   ============================
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "nearest"
		});

	});
};
//TODOO ====================   Римские цифры якоря   ============================





import ScrollReveal from 'scrollreveal';

import $ from 'jquery'
export default function initialize() {
	const doc = document.documentElement;
	doc.classList.remove('no-js');
	doc.classList.add('js');
	
}

export function setupHeaderBg() {
	const doc = document.documentElement;
	const win = window;
	const headerBg = document.querySelector('.site-header-large-bg span');

	function setHeaderBgHeight() {
		const bodyHeight = doc.getElementsByTagName('body')[0].clientHeight;
		headerBg.style.height = `${bodyHeight}px`;
	}

	setHeaderBgHeight();
	win.addEventListener('load', setHeaderBgHeight);
	win.addEventListener('resize', setHeaderBgHeight);
}

export function animatedUI(){
	$('.accordion > li:eq(0) a').addClass('active').next().slideDown();

	var dropDown = $(this).closest('li').find('.content');

	$(this).closest('.accordion').find('.content').not(dropDown).slideUp();

	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
	} else {
		$(this).closest('.accordion').find('a.active').removeClass('active');
		$(this).addClass('active');
	}

	dropDown.stop(false, true).slideToggle();
}

export function setupScrollReveal() {
	if (document.body.classList.contains('has-animations')) {
		const { sr = ScrollReveal() } = window;

		sr.reveal('.hero-title, .hero-paragraph, .hero-form', {
			duration: 1000,
			distance: '40px',
			easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
			origin: 'top',
			interval: 150,
		});

		sr.reveal('.hero-ball', {
			delay: 1000,
			duration: 1400,
			distance: '40px',
			easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
			origin: 'bottom',
			interval: 200,
		});

		sr.reveal('.hero-illustration-browser, .hero-squares', {
			delay: 400,
			duration: 600,
			distance: '40px',
			easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
			origin: 'right',
			interval: 150,
		});
	}
}


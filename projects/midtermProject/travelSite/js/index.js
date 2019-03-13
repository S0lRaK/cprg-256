window.onload = startSlideshow;

let slideIndex = 0;

function startSlideshow() {
	let slides = document.querySelectorAll('#slideshow figure');

	for (let index = 0; index < slides.length; index++) {
		slides[index].classList.add('inactive');
	}

	slideIndex++;

	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	slides[slideIndex - 1].classList.replace('inactive', 'active');

	setTimeout(startSlideshow, 3000);
}

const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName('carousel-item');
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove('carousel-item-visible');
  }
  slidePosition++;
  if (slidePosition > x.length) {
    slidePosition = 1;
  }
  x[slidePosition - 1].classList.add('carousel-item-visible');
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

const prev = document.getElementById('carousel-button-prev');
const next = document.getElementById('carousel-button-next');

prev.addEventListener('click', movePrev);
next.addEventListener('click', moveNext);

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove('carousel-item-visible');
    slide.classList.add('carousel-item-hidden');
  }
}

function moveNext() {
  hideAllSlides();

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  slides[slidePosition].classList.add('carousel-item-visible');
}

function movePrev() {
  hideAllSlides();

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  slides[slidePosition].classList.add('carousel-item-visible');
}

const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

const prev = document.getElementById('carousel-button-prev');
const next = document.getElementById('carousel-button-next');

function movePrev() {}

function moveNext() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  slides[slidePosition].classList.add('carousel-item-visible');
}

prev.addEventListener('click', movePrev);
next.addEventListener('click', moveNext);

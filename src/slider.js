
const slider = document.querySelector('.slider_line');
const leftButton = document.querySelector('.button_left');
const rightButton = document.querySelector('.button_right');
const slides = Array.from(slider.querySelectorAll('.slide'));
const slideCount = slides.length;
let slideIndex = 0;
let slideWidth = 100;
let slideInterval = 8000;

leftButton.addEventListener('click', showPreviousSlide);
rightButton.addEventListener('click', showNextSlide);
slider.addEventListener('click', showNextSlide);


let autoSlideInterval = setInterval(showNextSlide, slideInterval);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    showSlides();
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function showSlides() {
  slider.style.transition = "transform 1s ease";
  slider.style.transform = `translateX(${-slideIndex * slideWidth}%)`;
  updateActiveDot();
}

updateSlider();

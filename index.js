// // global imports
// import './src/toggleSidebar.js';
// import './src/cart/toggleCart.js';
// import './src/cart/setupCart.js';
// // specific imports
// import fetchProducts from './src/fetchProducts.js';
// import { setupStore, store } from './src/store.js';
// import display from './src/displayProducts.js';
// import { getElement } from './src/utils.js';

const slidesContainer = document.querySelector('.carousel');
const slide = document.querySelector('.carousel-image');
const prevButton = document.getElementById('carousel-prev-button');
const nextButton = document.getElementById('carousel-next-button');

nextButton.addEventListener('click', () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener('click', () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

// light-dark mode toggle

const toggle = document.getElementById('toggle');
// const toggle = document.querySelector('.toggle');
const body = document.body;

toggle.addEventListener('input', (e) => {
  const isChecked = e.target.checked;

  if (isChecked) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
});

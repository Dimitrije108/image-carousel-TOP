// eslint-disable-next-line no-unused-vars
import html from './index.html';
import './style.css';
import Model from './Model.js';
import View from './View.js';
import Controller from './Controller.js';

const gameList = new Controller(new Model(6, 1000), new View('nav-circle'));

// class ImageCarousel {
//   constructor(totalImages, imageWidth, navElementClass) {
//     this.carousel = document.querySelector('.images-container');
//     this.totalImages = totalImages;
//     this.currentImage = 0;
//     this.currentSize = 0;
//     this.imageWidth = imageWidth;
//     this.currentNav = 0;
//     this.navElements = [...document.querySelectorAll(`.${navElementClass}`)];
//   }

//   addActiveNavStyle = () => {
//     this.navElements[this.currentImage].classList.add('active');
//   };

//   deleteActiveNavStyle = () => {
//     this.navElements[this.currentImage].classList.remove('active');
//   };

//   displayImage = () => {
//     this.carousel.style.transform = `translate(-${this.currentSize}px)`;
//   };

//   nextImage = () => {
//     if (this.currentImage < this.totalImages - 1) {
//       this.currentImage += 1;
//       this.currentSize += this.imageWidth;
//       this.displayImage();
//     }
//   };

//   previousImage = () => {
//     if (this.currentImage > 0) {
//       this.currentImage -= 1;
//       this.currentSize -= this.imageWidth;
//       this.displayImage();
//     }
//   };

//   selectImage = (imgNo) => {
//     this.currentImage = imgNo;
//     this.currentSize = this.currentImage * this.imageWidth;
//     this.displayImage();
//   };
// }

// const myImageCarousel = new ImageCarousel(6, 1000, 'nav-circle');
// // “next” and “previous” will advance to the next or previous slide accordingly
// const slideRight = document.querySelector('.slide-right');
// const slideLeft = document.querySelector('.slide-left');

// slideRight.addEventListener('click', () => {
//   myImageCarousel.nextImage();
// });

// slideLeft.addEventListener('click', () => {
//   myImageCarousel.previousImage();
// });
// // navigation dots at the bottom of the slides
// const navButtons = [...document.querySelectorAll('.nav-btn')];

// navButtons.forEach((navBtn) => {
//   navBtn.addEventListener('click', () => {
//     myImageCarousel.selectImage(navButtons.indexOf(navBtn));
//   });
// });

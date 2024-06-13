// eslint-disable-next-line no-unused-vars
import html from './index.html';
import './style.css';

class ImageCarousel {
  constructor(totalImages, imageWidth) {
    this.carousel = document.querySelector('.images-container');
    this.totalImages = totalImages;
    this.currentImage = 1;
    this.currentSize = 0;
    this.imageWidth = imageWidth;
  }

  nextImage = () => {
    if (this.currentImage < this.totalImages) {
      this.currentImage += 1;
      this.currentSize += this.imageWidth;
      this.carousel.style.transform = `translate(-${this.currentSize}px)`;
    }
  };

  previousImage = () => {
    if (this.currentImage > 1) {
      this.currentImage -= 1;
      this.currentSize -= this.imageWidth;
      this.carousel.style.transform = `translate(-${this.currentSize}px)`;
    }
  };

  // selectImage = () => {
  //   this.currentImage = clickedImage(cont);
  // };
}

const myImageCarousel = new ImageCarousel(6, 1000);

const slideRight = document.querySelector('.slide-right');
const slideLeft = document.querySelector('.slide-left');

slideRight.addEventListener('click', () => {
  myImageCarousel.nextImage();
});

slideLeft.addEventListener('click', () => {
  myImageCarousel.previousImage();
});

// const navButtons = [...document.querySelectorAll('.nav-btn')];
// navButtons.forEach()

// active picture has the circle-full svg
// inactive ones have the empty one
// they're all buttons that on click change the picture position
// and change the empty circle into full one

export default class View {
  constructor(navElementClass) {
    this.carousel = document.querySelector('.images-container');
    this.navElements = [...document.querySelectorAll(`.${navElementClass}`)];
    this.slideRight = document.querySelector('.slide-right');
    this.slideLeft = document.querySelector('.slide-left');
    this.init();
  }

  init() {
    this.slideRight.addEventListener('click', () => {
      this.handleNextImage();
    });

    this.slideLeft.addEventListener('click', () => {
      this.handlePreviousImage();
    });
    // Assign event listener to all the navigation dots at
    // the bottom of the image slides
    // this.navElements.forEach((navBtn, index) => {
    //   navBtn.addEventListener('click', () => {
    //     this.handleNavBtn(index);
    //   });
    // });
  }
  // Creates a custom event so Controller can listen to it
  handleNextImage = () => {
    const nextImageEvent = new CustomEvent('nextImage');
    document.dispatchEvent(nextImageEvent);
  };
  // Creates a custom event so Controller can listen to it
  handlePreviousImage = () => {
    const previousImageEvent = new CustomEvent('previousImage');
    document.dispatchEvent(previousImageEvent);
  };
  // Create a custom event for navigation dots with correct
  // positioning number
  // handleNavBtn = (index) => {
  //   const navBtnEvent = new CustomEvent('navImage', {
  //     detail: index,
  //   });
  //   document.dispatchEvent(navBtnEvent);
  // };

  displayImage = (currentSize) => {
    this.carousel.style.transform = `translate(-${currentSize}px)`;
  };

  // addActiveNavStyle = (currentImage) => {
  //   this.navElements[currentImage].classList.add('active');
  // };

  // deleteActiveNavStyle = (currentImage) => {
  //   this.navElements[currentImage].classList.remove('active');
  // };
}

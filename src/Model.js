export default class Model {
  constructor(totalImages, imageWidth) {
    this.totalImages = totalImages;
    this.currentImage = 0;
    this.currentSize = 0;
    this.imageWidth = imageWidth;
  }

  nextImage = () => {
    if (this.currentImage < this.totalImages - 1) {
      this.currentImage += 1;
      this.currentSize += this.imageWidth;
    }
  };

  previousImage = () => {
    if (this.currentImage > 0) {
      this.currentImage -= 1;
      this.currentSize -= this.imageWidth;
    }
  };

  navImage = (imgNo) => {
    this.currentImage = imgNo;
    this.currentSize = this.currentImage * this.imageWidth;
  };

  sliderInterval = () => {
    if (this.currentImage === this.totalImages - 1) {
      this.currentImage = 0;
      this.currentSize = 0;
    } else {
      this.nextImage();
    }
  };
}

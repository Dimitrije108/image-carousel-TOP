export default class Controller {
  constructor(Model, View) {
    this.Model = Model;
    this.View = View;
    this.init();
  }

  init() {
    // Custom events for next and previous image
    // made in View to keep the code decoupled
    document.addEventListener('nextImage', () => {
      this.handleNextImage();
    });

    document.addEventListener('previousImage', () => {
      this.handlePreviousImage();
    });

    document.addEventListener('navImage', (e) => {
      this.handleNavImage(e.detail);
    });
    // Advances the slide every 5 seconds
    this.setSliderInterval = setInterval(this.handleSliderInterval, 5000);
  }
  // Advances the slide to the next image
  handleNextImage = () => {
    this.View.deleteActiveNavStyle(this.Model.currentImage);
    this.Model.nextImage();
    this.View.updateView(
      this.Model.currentSize,
      this.Model.currentImage,
      this.Model.totalImages
    );
  };
  // Advances the slide to the previous image
  handlePreviousImage = () => {
    this.View.deleteActiveNavStyle(this.Model.currentImage);
    this.Model.previousImage();
    this.View.updateView(
      this.Model.currentSize,
      this.Model.currentImage,
      this.Model.totalImages
    );
  };
  // Advances the slide to the selected one
  handleNavImage = (clickedNav) => {
    this.View.deleteActiveNavStyle(this.Model.currentImage);
    this.Model.navImage(clickedNav);
    this.View.updateView(
      this.Model.currentSize,
      this.Model.currentImage,
      this.Model.totalImages
    );
  };
  // Advances the slide every 5 seconds
  handleSliderInterval = () => {
    this.View.deleteActiveNavStyle(this.Model.currentImage);
    this.Model.sliderInterval();
    this.View.updateView(
      this.Model.currentSize,
      this.Model.currentImage,
      this.Model.totalImages
    );
  };
}

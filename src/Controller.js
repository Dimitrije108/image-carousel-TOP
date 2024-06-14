export default class Model {
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

    // document.addEventListener('navImage', (e) => {
    //   this.handleNavImage(e.detail);
    // });
  }
  // Advances the slide to the next image
  handleNextImage = () => {
    this.Model.nextImage();
    this.View.displayImage(this.Model.currentSize);
  };
  // Advances the slide to the previous image
  handlePreviousImage = () => {
    this.Model.previousImage();
    this.View.displayImage(this.Model.currentSize);
  };
  // Advances the slide to the selected one
  // handleNavImage = (clickedNav) => {
  //   this.View.deleteActiveNavStyle(this.Model.currentImage);
  //   this.Model.navImage(clickedNav);
  //   this.View.displayImage(this.Model.currentSize);
  //   this.View.addActiveNavStyle(this.Model.currentImage);
  // };
}

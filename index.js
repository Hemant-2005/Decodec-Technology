
    const slider = document.getElementById('testimonialSlider');
    let scrollPosition = 0;

    function nextSlide() {
      if (scrollPosition < slider.scrollWidth - slider.clientWidth) {
        scrollPosition += 320;
        slider.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      }
    }

    function prevSlide() {
      if (scrollPosition > 0) {
        scrollPosition -= 320;
        slider.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      }
    }
  
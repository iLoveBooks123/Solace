document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("testimonial-carousel");
  const prevBtn = document.getElementById("prev-testimonial");
  const nextBtn = document.getElementById("next-testimonial");

  if (!carousel || !prevBtn || !nextBtn) {
    console.error("Carousel elements not found");
    return;
  }

  const slides = carousel.children;
  let currentIndex = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });
});

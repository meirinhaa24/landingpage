let slideAtual = 0;
const slides = document.getElementById("slides");
const totalSlides = document.querySelectorAll(".slide").length;

document.getElementById("proximo").addEventListener("click", () => {
  slideAtual = (slideAtual + 1) % totalSlides;
  updateSlider();
});

document.getElementById("anterior").addEventListener("click", () => {
  slideAtual = (slideAtual - 1 + totalSlides) % totalSlides;
  updateSlider();
});

function updateSlider() {
  const offset = -slideAtual * 500;
  slides.style.transform = `translateX(${offset}px)`;
}

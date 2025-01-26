const ideasContainer = document.querySelector(".ideas");
const nextButton = document.querySelector(".slider-btn.next");
const prevButton = document.querySelector(".slider-btn.prev");

let currentIndex = 0; // Keeps track of the current position
const cardWidth = 242; // Card width + gap (adjust as needed)
const totalCards = document.querySelectorAll(".card__article").length;

// Update buttons' state based on the current position
function updateButtons() {
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === totalCards - 4;
}

// Slide to the next card
nextButton.addEventListener("click", () => {
  if (currentIndex < totalCards - 4) {
    currentIndex++;
    ideasContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    updateButtons();
  }
});

// Slide to the previous card
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    ideasContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    updateButtons();
  }
});

updateButtons();
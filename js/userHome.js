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

/////////////************************************************************* */
const prosContainer = document.querySelector(".pros");
const nextButton2 = document.querySelector(".slider-btn.next2");
const prevButton2 = document.querySelector(".slider-btn.prev2");

let currentIndex2 = 0; // Keeps track of the current position
const cardWidth2 = 242; // Card width + gap (adjust as needed)
const totalCards2 = document.querySelectorAll(".card__article").length;

// Update buttons' state based on the current position
function updateButtons2() {
  prevButton2.disabled = currentIndex2 === 0;
  nextButton2.disabled = currentIndex2 === totalCards2 - 4;
}

// Slide to the next card
nextButton2.addEventListener("click", () => {
  if (currentIndex2 < totalCards2 - 4) {
    currentIndex2++;
    prosContainer.style.transform = `translateX(-${currentIndex2 * cardWidth2}px)`;
    updateButtons2();
  }
});

// Slide to the previous card
prevButton2.addEventListener("click", () => {
  if (currentIndex2 > 0) {
    currentIndex2--;
    prosContainer.style.transform = `translateX(-${currentIndex2 * cardWidth2}px)`;
    updateButtons2();
  }
});

/////////////************************************************************* */
const shopsContainer = document.querySelector(".shops");
const nextButton3 = document.querySelector(".slider-btn.next3");
const prevButton3 = document.querySelector(".slider-btn.prev3");

let currentIndex3 = 0; // Keeps track of the current position
const cardWidth3 = 242; // Card width + gap (adjust as needed)
const totalCards3 = document.querySelectorAll(".card__article").length;

// Update buttons' state based on the current position
function updateButtons3() {
  prevButton3.disabled = currentIndex3 === 0;
  nextButton3.disabled = currentIndex3 === totalCards3 - 4;
}

// Slide to the next card
nextButton3.addEventListener("click", () => {
  if (currentIndex3 < totalCards3 - 4) {
    currentIndex3++;
    shopsContainer.style.transform = `translateX(-${currentIndex3 * cardWidth3}px)`;
    updateButtons3();
  }
});

// Slide to the previous card
prevButton3.addEventListener("click", () => {
  if (currentIndex3 > 0) {
    currentIndex3--;
    shopsContainer.style.transform = `translateX(-${currentIndex3 * cardWidth3}px)`;
    updateButtons3();
  }
});

// Initialize buttons' state
updateButtons();
updateButtons2();
updateButtons3();



document.getElementById("view-more").onclick = () => { window.location.href ="../ideasPage.html"};
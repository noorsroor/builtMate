/////////////************************************************************* */
const shopsContainer = document.querySelector(".shops");
const nextButton3 = document.querySelector(".slider-btn.next3");
const prevButton3 = document.querySelector(".slider-btn.prev3");

let currentIndex3 = 0; // Keeps track of the current position
const cardWidth3 = 242; // Card width + gap (adjust as needed)
const totalCards3 = document.querySelectorAll(".card__article3").length;

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
updateButtons3();


//select location slider==================================================
const scrollContainer = document.querySelector(".locations-container");
const scrollLeftBtn = document.querySelector(".scroll-left");
const scrollRightBtn = document.querySelector(".scroll-right");

// Check scroll position to enable/disable buttons
const updateButtons = () => {
  const scrollLeft = scrollContainer.scrollLeft;
  const scrollWidth = scrollContainer.scrollWidth;
  const clientWidth = scrollContainer.clientWidth;

  // Disable left button if at the start
  if (scrollLeft === 0) {
    scrollLeftBtn.classList.add("disabled");
  } else {
    scrollLeftBtn.classList.remove("disabled");
  }

  // Disable right button if at the end
  if (scrollLeft + clientWidth >= scrollWidth) {
    scrollRightBtn.classList.add("disabled");
  } else {
    scrollRightBtn.classList.remove("disabled");
  }
};

// Scroll to the left
scrollLeftBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
});

// Scroll to the right
scrollRightBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
});

// Update buttons on scroll
scrollContainer.addEventListener("scroll", updateButtons);

// Initialize button state on load
updateButtons();
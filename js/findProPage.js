//select pro slider======================================================
const prosContainer = document.querySelector(".pros");
const nextButton2 = document.querySelector(".slider-btn.next2");
const prevButton2 = document.querySelector(".slider-btn.prev2");

let currentIndex2 = 0; // Keeps track of the current position
const cardWidth2 = 242; // Card width + gap (adjust as needed)
const totalCards2 = document.querySelectorAll(".card__article2").length;

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


updateButtons2();

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



const slides = document.querySelectorAll(".slide");
const [buttLeft, buttRight] = document.querySelectorAll(".slider__btn");
const dotContainer = document.querySelector(".dots");
const dots = dotContainer.children;

// Initialization
slides.forEach((slide, i) => {
  slide.dataset.tab = i;
  slide.style.transform = `translateX(${i * 100}%)`;
  const dot = document.createElement("button");
  i === 0 && dot.classList.add("dots__dot--active");
  dot.dataset.tab = i;
  dot.classList.add("dots__dot");
  dotContainer.append(dot);
});

// Functions
const moveSlides = (num, moves = 1) => {
  slides.forEach((slide, i) => {
    slide.dataset.tab = Number(slide.dataset.tab) + moves * num;
    dots[i].dataset.tab = slide.dataset.tab;
    dots[i].classList.remove("dots__dot--active");
    if (slide.dataset.tab === "0") dots[i].classList.add("dots__dot--active");
    slide.style.transform = `translateX(${slide.dataset.tab * 100}%)`;
  });
};

const move = (num) => () => {
  if (!num) return;
  if ([...slides].reverse()[0].dataset.tab === "0" && num < 0) {
    moveSlides(-num, slides.length - 1);
    return;
  }
  if (slides[0].dataset.tab === "0" && num > 0) {
    moveSlides(-num, slides.length - 1);
    return;
  }
  moveSlides(num, 1);
};

const moveDots = (e) => {
  const btn = e.target.closest(".dots__dot");
  if (!btn) return;
  move(-btn.dataset.tab)();
};

// Events
buttRight.addEventListener("click", move(-1));
buttLeft.addEventListener("click", move(1));
dotContainer.addEventListener("click", moveDots);

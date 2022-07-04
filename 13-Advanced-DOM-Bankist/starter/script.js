"use strict";

/// ////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

console.log(document.body.childNodes);

const openModal = (e) => {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

[...btnsOpenModal].forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(document.querySelector(".header"));
// const header = document.querySelector(".header");
// const allSections = document.querySelectorAll(".section");
// console.log(allSections);

// document.getElementById("section--1");
// const allButtons = document.getElementsByTagName("button");

// console.log(allButtons);

// console.log(document.getElementsByClassName("btn"));

// // creating and inserting elements
// // InserAdjacentHTML

// const message = document.createElement("div");
// message.classList.add("cookie-message");
// message.textContent =
//   "We use cookied for improved functionality and anallytics";
// message.innerHTML =
//   'We use cookied for improved functionality and anallytics. <button class="btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// // header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// header.after(message);

// document.querySelector(".btn--close-cookie").addEventListener("click", () => {
//   message.remove();
// });

// // Styles

// message.style.backgroundColor = "#194106";
// message.style.width = "120%";

// console.log(message.style.backgroundColor);
// console.log(Number.parseInt(getComputedStyle(message).height, 10));

// message.style.height = getComputedStyle(message).height;
// console.log(message.style.height);

// message.style.height = "1000px";

// console.log(Number.parseInt("12", 10));
// // console.log(parseInt("12aaaaabsbsb12", 2));
// console.log(Number.parseFloat("12aaaaabsbsb12", 2));

// console.log(
//   document.documentElement.style.setProperty("--color-primary", "skyblue"),
// );

// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// // non-standard atrr
// console.log(logo.designer);

// console.log(logo.getAttribute("designer"));
// console.log(logo.setAttribute("company", "Bankist"));

// console.log(document.querySelector(".btn--show-modal").classList);
// console.log(document.querySelector(".btn--show-modal").className);

// console.log(logo.src);
// console.log(logo.getAttribute("src"));

// const link = document.querySelector(".twitter-link");
// console.log(link.href);
// console.log(link.getAttribute("href"));

// const link2 = document.querySelector(".nav__link--btn");
// console.log(link2.href);
// console.log(link2.getAttribute("href"));

// // Data Atrribute

// console.log(logo.dataset.versionNumber);

// // Classes

// logo.classList.add("c", "j");
// logo.classList.remove("c", "j");
// logo.classList.toggle("c", "j");
// logo.classList.contains("c");

// // Dont use this
// logo.className = "jonas"; // Overide the existing class;

// console.log("document", document);
// console.log(document.nodeType);
// console.log(document.querySelector("ul").value);
// console.log(window.document);
// console.log(window.parent);
// console.log(document === window.document);
// console.log(document.querySelector("ul").classList);
// console.log(document.body.nodeType);
// // console.log(window.js);
// window.addEventListener("click", () => console.log("yeah"));
// console.log(window);

// console.log(window.EventTarget);
// console.log(window.Node);
// console.clear();
// console.log(Object.getPrototypeOf(EventTarget));
// console.log(Object.getPrototypeOf(window));
// console.log(window instanceof EventTarget);
// console.log(document.body instanceof EventTarget);
// console.log(document.body instanceof Node);
// console.log(document instanceof Node);
// console.log(Object.getPrototypeOf(Node));

const h1 = document.querySelector("h1");

const alertH1 = (e) => {
  alert("addEventListener: Great! you are reading the header");
};

h1.addEventListener("mouseenter", alertH1);
setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 4000);

// h1.onmouseenter = (e) => {
//   alert("addEventListener: Great! you are reading the header");
// };
/*
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

console.log(randomColor());

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("Link", e.target, e.currentTarget);

  // stop event propagation

  e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("Container", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("nav", e.target, e.currentTarget);
  console.log(
    "----------------------------------------------------------------",
  );
});
*/
// page navigation
// document.querySelectorAll(".nav__link").forEach((el) =>
//   el.addEventListener("click", (e) => {
//     e.preventDefault();

//     console.log(el === this); // is not because arrow function doesnt create a this context

//     const id = el.getAttribute("href");
//     console.log(id);

//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   }),
// );

document.querySelector(".nav__links").addEventListener("click", (e) => {
  e.preventDefault();
  const clicked = e.target.closest(".nav__link");

  if (!clicked) return;

  const id = clicked.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

/*
btnScrollTo.addEventListener("click", (e) => {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  console.log("current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  // console.log(
  //   "Height/width",
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth,
  // );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset,
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});
*/

// const h1 = document.querySelector("h1");
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.children);
console.log(h1.childNodes);

h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "purple";

console.log(document.querySelector(".nav__link").parentNode);
console.log(h1.parentNode);

// h1.closest(".header").style.background =
//   document.documentElement.style.setProperty("--gradient-primary", "");

// console.log(document.documentElement.style.getPropertyValue("--color-primary"));

h1.closest(".header").style.background = "var(--gradient-secondary)";
console.log(document.querySelector(".header"));

h1.closest("h1").style.background = "var(--color-primary)";

// console.log(h1.previousElementSibling);
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentNode.children); // this works

console.log(h1.parentElement.children); // this works too

// [...h1.parentElement.children].forEach((el) => {
//   if (el !== h1) el.style.transform = "scale(0.5)";
// });

console.log(h1.lastChild);
console.log(h1.firstChild);
console.log(h1.children[0]);
console.log(h1.children[h1.children.length - 1]);
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);

/*
operations.addEventListener("click", (e) => {
  if (
    [...e.target.classList].some((el) => el.startsWith("operations__tab--"))
  ) {
    [...e.target.parentElement.children].forEach((tag) =>
      tag.classList.remove("operations__tab--active"),
    );
    e.target.classList.add("operations__tab--active");
    for (let i = 0; i < operations.children.length; i++) {
      if (e.target.classList.contains(`operations__tab--${i}`)) {
        console.log("works");

        [
          ...document.querySelector(`.operations__content--${i}`).parentElement
            .children,
        ].forEach((tag) => tag.classList.remove("operations__content--active"));

        document
          .querySelector(`.operations__content--${i}`)
          .classList.add("operations__content--active");
        break;
      }
    }
  }
});
*/

const operations = document.querySelector(".operations");

operations.addEventListener("click", (e) => {
  const tab = e.target.closest(".operations__tab");
  if (!tab) return;
  if (tab.hasAttribute("data-tab")) {
    // tab.parentElement
    document
      .querySelectorAll(".operations__tab")
      .forEach((tag) => tag.classList.remove("operations__tab--active"));

    tab.classList.add("operations__tab--active");

    document
      .querySelectorAll(".operations__content")
      .forEach((tag) => tag.classList.remove("operations__content--active"));

    document
      .querySelector(`.operations__content--${tab.dataset.tab}`)
      .classList.add("operations__content--active");
  }
});

const x = (node, opacity) => {
  node
    .querySelectorAll(".nav__link")
    .forEach((tag) => (tag.style.opacity = opacity));
  node.querySelector("img").style.opacity = opacity;
};

const nav = document.querySelector(".nav");

nav.addEventListener("mouseover", (e) => {
  const link = e.target.closest(".nav__link");
  if (!link) return;

  x(nav, 0.5);
  link.style.opacity = 1;
});

nav.addEventListener("mouseout", () => {
  x(nav, 1);
});

document.body.addEventListener("click", (e) => console.log(e.target));

// Sticky navigation

// window.addEventListener("scroll", () => {
//   if (window.scrollY > section1.getBoundingClientRect().top) {
//     nav.classList.add("sticky");
//     return;
//   }
//   nav.classList.remove("sticky");
// });

// nav.classList.add("sticky");

const observerHeader = new IntersectionObserver(
  (entries) => {
    nav.classList.remove("sticky");
    if (!entries[0].isIntersecting) nav.classList.add("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-${getComputedStyle(nav).height}`,
  },
);
observerHeader.observe(document.querySelector(".header"));

const observerScroll = new IntersectionObserver(
  (entries) => {
    if (!entries[0].isIntersecting) return;

    const section = entries[0].target;
    section.classList.remove("section--hidden");
    observerScroll.unobserve(section);
  },
  {
    threshold: 0.2,
  },
);

const sections = [...document.querySelectorAll(".section")];

sections.forEach((section) => {
  section.classList.add("section--hidden");
  observerScroll.observe(section);
});

const imageObserver = new IntersectionObserver(
  (entries) => {
    if (!entries[0].isIntersecting) return;

    const img = entries[0].target;
    img.src = img.dataset.src;
    img.addEventListener("load", () => img.classList.remove("lazy-img"));
    imageObserver.unobserve(img);
  },
  {
    threshold: 0,
    rootMargin: "200px",
  },
);

const images = document.querySelectorAll("[data-src]");
images.forEach((image) => imageObserver.observe(image));

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// const slider = document.querySelector(".slider");
// const slides = document.querySelectorAll(".slide");
// const dotContainer = document.querySelector(".dots");
// const createDots = (num) => {
//   for (let i = 0; i < num; i++) {
//     const dot = document.createElement("button");
//     i === 0 && dot.classList.add("dots__dot--active");
//     dot.dataset.slide = i;
//     dot.classList.add("dots__dot");
//     dotContainer.append(dot);
//   }
// };

// createDots(3);
// const setTransform = (slide, num) => {
//   slide.style.transform = `translateX(${num}%)`;
// };

// const getTransform = (slide) =>
//   Number.parseInt(slide.style.transform.replace("translateX(", ""), 10);

// slides.forEach((slide, i) => {
//   setTransform(slide, i * 100);
// });
// const move = (slides, sign) => {
//   const slides2 = [...slides];
//   if (sign > 0) slides2.reverse();

//   if (getTransform(slides2.at(-1)) !== 0) {
//     slides2.forEach((slide) =>
//       setTransform(slide, getTransform(slide) + 100 * sign),
//     );
//   } else {
//     slides2.forEach((slide) => {
//       const size = (slides2.length - 1) * 100;
//       setTransform(slide, getTransform(slide) - size * sign);
//     });
//   }

//   slides.forEach((slide, i) => {
//     const dots = dotContainer.children;
//     dots[i].classList.remove("dots__dot--active");
//     if (getTransform(slide) === 0) dots[i].classList.add("dots__dot--active");
//   });
// };

// slider.addEventListener("click", (e) => {
//   let btn = e.target.closest(".slider__btn");
//   if (!btn) btn = e.target.closest("dots");
//   if (!btn) return;

//   const arrSlides = [...slides];
//   if (btn.classList.contains("slider__btn--left")) move(arrSlides, 1);
//   if (btn.classList.contains("slider__btn--right")) move(arrSlides, -1);

//   const dots = btn.parentElement.children;
//   const clicked = btn.dataset.slide;
//   let counter = 0;
//   [...dots].map((dot) => {
//     if (dot.classList.contains("dots__dot--active")) counter = 0;
//     if (dot === clicked) return;
//   });
//   const active = counter;
// });

// document.addEventListener("keydown", (e) => {
//   const arrSlides = [...slides];
//   if (e.key === "ArrowLeft") move(arrSlides.reverse(), 1);
//   if (e.key === "ArrowRight") move(arrSlides, -1);
// });

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// slider.addEventListener("click", (e) => {
//   const dot = e.target.clas
// })

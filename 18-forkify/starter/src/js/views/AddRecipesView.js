import icons from "../../img/icons.svg";
import View from "./View";

class AddRecipeView extends View {
  #window = document.querySelector(".add-recipe-window");
  #overlay = document.querySelector(".overlay");
  #btnOpen = document.querySelector(".nav__btn--add-recipe");
  #btnClose = document.querySelector(".btn--close-modal");
  _message = "Recipe was succesfully Uploaded";

  toggleWindow() {
    this.#overlay.classList.toggle("hidden");
    this.#window.classList.toggle("hidden");
  }

  addHandlerShowWindow() {
    this.#btnOpen.addEventListener("click", this.toggleWindow.bind(this));
  }

  addHandlerHideWindow() {
    this.#btnClose.addEventListener("click", this.toggleWindow.bind(this));
    this.#overlay.addEventListener("click", this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener("submit", async (e) => {
      e.preventDefault();
      console.log(this);
      const dataArr = [...new FormData(this._parentElement)];
      const data = Object.fromEntries(dataArr);
      // console.log(data);
      await handler(data);
    });
  }

  constructor() {
    super(document.querySelector(".upload"));
    this.addHandlerShowWindow();
    this.addHandlerHideWindow();
  }

  generateMarkup() {
    const currId = window.location.hash.slice(1);
    return this._data
      .map(
        ({ id, image, title, publisher }) =>
          `
          <li class="preview ">
            <a class="preview__link ${
              id === currId ? "preview__link--active" : ""
            }" href="#${id}">
              <figure class="preview__fig">
                <img src="${image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${title}</h4>
                <p class="preview__publisher">${publisher}</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
    `,
      )
      .join(" \n ");
  }
}

export default new AddRecipeView();

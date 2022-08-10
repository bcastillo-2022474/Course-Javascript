import icons from "../../img/icons.svg";
import View from "./View";

export default class PreviewView extends View {
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

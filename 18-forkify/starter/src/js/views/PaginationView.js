import icons from "../../img/icons.svg";
import View from "./View";

class PaginationView extends View {
  constructor() {
    super(document.querySelector(".pagination"));
  }

  // addHandlerRender(handler) {
  //   this._parentElement.addEventListener("click", handler);
  // }

  addHandlerRender(handler) {
    this._parentElement.addEventListener("click", (e) => {
      const buttonNext = e.target.closest(".pagination__btn--next");
      const buttonPrev = e.target.closest(".pagination__btn--prev");
      if (!buttonPrev && !buttonNext) return;

      let page;
      if (buttonNext) page = 1;
      if (buttonPrev) page = -1;

      handler(page);
    });
  }

  generateMarkup() {
    const { results, resultsPerPage, page: currentPage } = this._data;
    const numPages = Math.ceil(results.length / resultsPerPage);

    if (numPages > currentPage && currentPage === 1) {
      return this.#generateNextButtonMarkup();
    }

    if (numPages > currentPage && currentPage > 1) {
      return `${this.#generateNextButtonMarkup()}${this.#generatePrevButtonMarkup()}`;
    }

    if (numPages === currentPage && currentPage > 1) {
      return this.#generatePrevButtonMarkup();
    }
    return "";
  }

  #generateNextButtonMarkup() {
    const nextPage = this._data.page + 1;
    return `
          <button class="btn--inline pagination__btn--next">
            <span>Page ${nextPage}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button> 
      `;
  }

  #generatePrevButtonMarkup() {
    const prevPage = this._data.page - 1;
    return `
          <button class="btn--inline pagination__btn--prev">
            <span>Page ${prevPage}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
          </button> 
      `;
  }
}

export default new PaginationView();

class SearchView {
  #parentElement = document.querySelector(".search");

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener("submit", (e) => {
      e.preventDefault();
      handler();
      this.#clearInput();
    });
  }

  #clearInput() {
    this.#parentElement.querySelector(".search__field").value = "";
  }

  getQuery() {
    return this.#parentElement.querySelector(".search__field").value;
  }
}

export default new SearchView();

import icons from "../../img/icons.svg";

export default class View {
  _parentElement;
  _data;
  _message = "";
  _errorMessage = "We couldnt find that recipe, please try another one";

  constructor(parentElement) {
    this._parentElement = parentElement;
  }

  render(data) {
    if (!data || data?.length === 0) throw new Error(this._errorMessage);

    this._data = data;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", this.generateMarkup());
  }

  update(data) {
    // if (!data || data?.length === 0) throw new Error(this._errorMessage);

    this._data = data;
    const newMarkup = this.generateMarkup();
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = [...newDOM.querySelectorAll("*")];
    const currElements = [...this._parentElement.querySelectorAll("*")];

    for (let i = 0; i < newElements.length; i++) {
      const newEl = newElements[i];
      const currEl = currElements[i];
      if (
        !newEl.isEqualNode(currEl) &&
        currEl.firstChild?.nodeValue.trim() !== ""
      )
        currEl.textContent = newEl.textContent;

      if (!newEl.isEqualNode(currEl))
        [...newEl.attributes].forEach((attr) =>
          currEl.setAttribute(attr.name, attr.value),
        ); // changes the attributes (usefull for data set && classes)
    }
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
   `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  // eslint-disable-next-line no-underscore-dangle
  generateMarkup() {}
}

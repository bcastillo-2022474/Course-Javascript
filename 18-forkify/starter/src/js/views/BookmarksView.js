import PreviewView from "./PreviewView";

class BookmarksView extends PreviewView {
  _message = "";
  _errorMessage =
    "No Bookmarks yet. Find a nice recipe and try to Bookmark it ;)";

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  constructor() {
    super(document.querySelector(".bookmarks__list"));
  }
}

export default new BookmarksView();

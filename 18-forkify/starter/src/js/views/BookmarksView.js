import PreviewView from "./PreviewView";

class BookmarksView extends PreviewView {
  _message = "";
  _errorMessage = "No Bookmarks yet";

  constructor() {
    super(document.querySelector(".bookmarks__list"));
  }
}

export default new BookmarksView();

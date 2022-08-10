import PreviewView from "./PreviewView";

class ResultsView extends PreviewView {
  _message = "";
  _errorMessage = "No Recipes found! :(";

  constructor() {
    super(document.querySelector(".results"));
  }
}

export default new ResultsView();

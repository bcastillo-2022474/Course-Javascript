import recipeView from "./views/RecipeView";
import resultsView from "./views/ResultsView";
import bookmarksView from "./views/BookmarksView";
import searchView from "./views/SearchView";
import paginationView from "./views/PaginationView";
import addRecipesView from "./views/AddRecipesView";
import * as model from "./model";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { timeout } from "./helper";
import { CLOSE_MODAL_SEC, TIMEOUT_SEC } from "./config";

// ////////////////////////////////////
// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async () => {
  try {
    // get ID
    const id = window.location.hash.slice(1);
    if (!id) return;

    // render spinner
    recipeView.renderSpinner();
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

    // loading recipe
    await Promise.race([model.loadRecipe(id), timeout(TIMEOUT_SEC)]);

    // rendering recipes
    const { recipe } = model.state;
    recipeView.render(recipe);
  } catch (err) {
    console.error(err);
    recipeView.renderError();
  }
};

const controlSearchResults = async () => {
  try {
    // getting query
    const query = searchView.getQuery();
    if (!query) return;

    resultsView.renderSpinner();

    // load search result
    await Promise.race([model.loadSearchResults(query), timeout(TIMEOUT_SEC)]);
    const results = model.getSearchResultsPage();

    // Render Results
    resultsView.render(results);

    // Render Pagination button
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
    resultsView.renderError();
  }
};

const controlPaginationButtons = (moves) => {
  const goToPage = model.state.search.page + moves;

  // load search result
  const results = model.getSearchResultsPage(goToPage);

  // Render Results and Pagination
  resultsView.render(results);
  paginationView.render(model.state.search);
};
/*
const controlPaginationButtons = (e) => {
  const buttonNext = e.target.closest(".pagination__btn--next");
  const buttonPrev = e.target.closest(".pagination__btn--prev");
  if (!buttonPrev && !buttonNext) return;

  let page;
  if (buttonNext) page = model.state.search.page + 1;
  if (buttonPrev) page = model.state.search.page - 1;

  // load search result
  const results = model.getSearchResultsPage(page);

  // Render Results and Pagination
  resultsView.render(results);
  paginationView.render(model.state.search);
};
*/
const controlServings = (newServings) => {
  // update the recipe servings (in state)
  model.updateServings(newServings);
  // update the recipe view
  const { recipe } = model.state;
  // recipeView.render(recipe);
  recipeView.update(recipe);
};

const controlBookmark = () => {
  try {
    const { bookmarked } = model.state.recipe;

    // Add or remove Bookmark
    if (!bookmarked) model.addBookmark(model.state.recipe);
    else model.deleteBookmark(model.state.recipe.id);

    // Update Bookmark view
    recipeView.update(model.state.recipe);

    // render Bookmarks
    bookmarksView.render(model.state.bookmarks);
  } catch (err) {
    console.error(err);
    bookmarksView.renderError();
  }
};

const controlRenderBookmark = () => {
  bookmarksView.render(model.state.bookmarks);
};

const controlUploadRecipe = async (dataForm) => {
  try {
    // Render Spinner until the recipe is upload
    addRecipesView.renderSpinner();
    await model.uploadRecipe(dataForm);

    // render the recipe
    recipeView.render(model.state.recipe);

    // render a succesfull message and close the Modal after some time
    addRecipesView.renderMessage();
    setTimeout(() => addRecipesView.toggleWindow(), CLOSE_MODAL_SEC);

    // reRender Bookmarks
    bookmarksView.render(model.state.bookmarks);

    // change ID URL (Hash)
    window.history.pushState(null, "", `#${model.state.recipe.id}`);
  } catch (err) {
    console.error(err);
    addRecipesView.renderError(err.message);
  }
};

const init = () => {
  bookmarksView.addHandlerRender(controlRenderBookmark);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerServing(controlServings);
  recipeView.addHandlerAddBookmark(controlBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerRender(controlPaginationButtons);
  addRecipesView.addHandlerUpload(controlUploadRecipe);
};

init();

// window.addEventListener("hashchange", controlRecipes);
// window.addEventListener("load", controlRecipes);

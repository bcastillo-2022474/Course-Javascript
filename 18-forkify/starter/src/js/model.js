import { API_URL, RES_PER_PAGE } from "./config";
import { getJSON } from "./helper";

export const state = {
  recipe: {},
  search: { query: "", results: [], page: 1, resultsPerPage: RES_PER_PAGE },
  bookmarks: [],
};

export const loadRecipe = async (id) => {
  try {
    const { data } = await getJSON(`${API_URL}/${id}`);
    const { recipe } = data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    state.recipe.bookmarked = state.bookmarks.some(
      ({ id: idRecipe }) => idRecipe === id,
    );
    // console.log(state.recipe.bookmarked);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const loadSearchResults = async (query) => {
  try {
    state.search.query = query;
    const { data } = await getJSON(`${API_URL}?search=${query}`);
    state.search.results = data.recipes.map((rec) => ({
      id: rec.id,
      title: rec.title,
      publisher: rec.publisher,
      image: rec.image_url,
    }));
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const persistBookmarks = () => {
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};

export const updateServings = (newServings) => {
  state.recipe.ingredients.forEach((ing) => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};

export const getSearchResultsPage = (page = 1) => {
  state.search.page = page;
  const start = (page - 1) * RES_PER_PAGE;
  const end = page * RES_PER_PAGE;
  return state.search.results.slice(start, end);
};

export const addBookmark = (recipe) => {
  // Add Bookmark
  state.bookmarks.push(recipe);

  // Mark recipe as Bookmark
  recipe.bookmarked = true;

  // local Storage
  persistBookmarks();
};

export const deleteBookmark = (id) => {
  const index = state.bookmarks.findIndex((el) => el.id === id);
  state.recipe.bookmarked = false;
  state.bookmarks.splice(index, 1);

  // local Storage
  persistBookmarks();
};

const init = () => {
  const storage = localStorage.getItem("bookmarks");
  if (storage) state.bookmarks = JSON.parse(storage);
};

init();

export const uploadRecipe = async (newRecipe) => {
  const ingredients = Object.entries(newRecipe).forEach((entry) =>
    console.log(entry),
  );
  // const ingredients = Object.entries(newRecipe).filter(
  //   (entry) => entry[0].startsWith("ingredients") && entry[1] !== "",
  // );
};

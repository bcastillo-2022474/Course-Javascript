import { API_URL, RES_PER_PAGE, KEY } from "./config";
import { getJSON, sendJSON } from "./helper";

export const state = {
  recipe: {},
  search: { query: "", results: [], page: 1, resultsPerPage: RES_PER_PAGE },
  bookmarks: [],
};

const createRecipeObject = ({ recipe }) => ({
  id: recipe.id,
  title: recipe.title,
  publisher: recipe.publisher,
  sourceUrl: recipe.source_url,
  image: recipe.image_url,
  servings: recipe.servings,
  cookingTime: recipe.cooking_time,
  ingredients: recipe.ingredients,
  ...(recipe.key && { key: recipe.key }),
});

const convertRecipeObject = (recipe) => ({
  title: recipe.title,
  source_url: recipe.sourceUrl,
  image_url: recipe.image,
  publisher: recipe.publisher,
  cooking_time: +recipe.cookingTime,
  servings: +recipe.servings,
  ingredients: recipe.ingredients,
});

export const loadRecipe = async (id) => {
  try {
    const { data } = await getJSON(`${API_URL}/${id}?key=${KEY}`);
    state.recipe = createRecipeObject(data);
    state.recipe.bookmarked = state.bookmarks.some(
      ({ id: idRecipe }) => idRecipe === id,
    );
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const loadSearchResults = async (query) => {
  try {
    state.search.query = query;
    const { data } = await getJSON(`${API_URL}?search=${query}&key=${KEY}`);
    state.search.results = data.recipes.map((rec) => ({
      id: rec.id,
      title: rec.title,
      publisher: rec.publisher,
      image: rec.image_url,
      ...(rec.key && { key: rec.key }),
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
  console.log(recipe);

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
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(([attr, ing]) => attr.startsWith("ingredient") && ing !== "")
      .map(([, ing]) => {
        const ingArr = ing.split(",").map((el) => el.trim());
        if (ingArr.length !== 3)
          throw new Error(
            "Wrong ingredient format, please use the specified format :)",
          );

        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = convertRecipeObject({ ...newRecipe, ingredients });

    const { data } = await sendJSON(`${API_URL}/?key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const clearStorage = () => {
  localStorage.clear();
};

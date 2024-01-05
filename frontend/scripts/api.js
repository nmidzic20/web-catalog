var baseUrl = "http://localhost:8000";
var urlRecipes = baseUrl + "/recipes";
var urlGroceries = baseUrl + "/groceries";

var baseApiUrl = baseUrl + "/api";
var apiRecipes = baseApiUrl + "/recipes";
var apiGroceries = baseApiUrl + "/groceries";

function fetchRecipes() {
  return fetch(apiRecipes)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data.recipes.map(
        (recipeData) =>
          new Recipe(
            recipeData.id,
            recipeData.name,
            recipeData.picture,
            recipeData.groceryItems,
            recipeData.description,
            recipeData.instructions
          )
      );
    })
    .catch((error) => {
      console.error("Error fetching recipes:", error);
      return [];
    });
}

function fetchGroceries() {
  return fetch(apiGroceries)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data.groceries.map(
        (groceryData) =>
          new Grocery(
            groceryData.id,
            groceryData.name,
            groceryData.carbs,
            groceryData.image
          )
      );
    })
    .catch((error) => {
      console.error("Error fetching groceries:", error);
      return [];
    });
}

function postRecipe(jsonBody) {
  fetch(urlRecipes, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonBody,
  })
    .then((response) => response.text())
    .then((data) => {
      console.log("Response from server:", data);
      insertRecipesIntoGrid();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function postGrocery(jsonBody) {
  fetch(urlGroceries, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonBody,
  })
    .then((response) => response.text())
    .then((data) => {
      console.log("Response from server:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

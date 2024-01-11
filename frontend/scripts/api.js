var baseUrl = "http://localhost:8000";
var urlRecipes = baseUrl + "/recipes";
var urlGroceries = baseUrl + "/groceries";

var baseApiUrl = baseUrl + "/api";
var apiRecipes = baseApiUrl + "/recipes";
var apiGroceries = baseApiUrl + "/groceries";

async function fetchRecipes() {
  try {
    const response = await fetch(apiRecipes);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.recipes.map(
      (recipeData) =>
        new Recipe(
          recipeData.id,
          recipeData.name,
          recipeData.image,
          recipeData.groceryItems,
          recipeData.description,
          recipeData.instructions
        )
    );
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}

async function fetchGroceries() {
  try {
    const response = await fetch(apiGroceries);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.groceries.map(
      (groceryData) =>
        new Grocery(
          groceryData.id,
          groceryData.name,
          groceryData.carbs
        )
    );
  } catch (error) {
    console.error("Error fetching groceries:", error);
    return [];
  }
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
      insertGroceriesIntoGrid();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

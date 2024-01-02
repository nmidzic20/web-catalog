function insertTempRecipeGrid() {
  var grid = document.getElementById("recipes");
  if (db.recipeItems.length === 0) {
    setVisibility("no-recipes", true);
    return;
  } else {
    setVisibility("no-recipes", false);
    grid.innerHTML = db.recipeItems
      .map(function (recipe) {
        return recipe.getClickableHtmlDisplay();
      })
      .join("");
  }
}

function fetchRecipes() {
  return fetch(apiRecipes)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Map each item in the recipes array to the Recipe model
      return data.recipes.map(
        (recipeData) =>
          new Recipe(
            recipeData.id,
            recipeData.name,
            recipeData.picture,
            recipeData.groceryItems,
            recipeData.desc,
            recipeData.instructions
          )
      );
    })
    .catch((error) => {
      console.error("Error fetching recipes:", error);
      return [];
    });
}

function insertRecipesIntoGrid() {
  const grid = document.getElementById("recipes");

  fetchRecipes().then((recipes) => {
    if (recipes.length === 0) {
      setVisibility("no-recipes", true);
    } else {
      setVisibility("no-recipes", false);
      grid.innerHTML = recipes
        .map((recipe) => recipe.getClickableHtmlDisplay())
        .join("");
    }
  });
}

insertRecipesIntoGrid();

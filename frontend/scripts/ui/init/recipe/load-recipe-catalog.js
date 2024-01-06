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

async function insertRecipesIntoGrid() {
  
  if (!window.location.href.includes("/recipes")) {
    return;
  }

  const grid = document.getElementById("recipes");

  function filterForQueryParameters(recipes) {
    
    const urlParams = new URLSearchParams(window.location.search);
    const containsParam = urlParams.get("contains");
  
    if (containsParam && Number.isInteger(parseInt(containsParam))) {
      const containsValue = parseInt(containsParam);
      return recipes.filter(recipe => {
        return recipe.groceryItems.some(ingredient => ingredient.id === containsValue);
      });
    }

    return recipes;
  
  }

  var recipes = await fetchRecipes();
    recipes = filterForQueryParameters(recipes);
    if (recipes.length === 0) {
      setVisibility("no-recipes", true);
    } else {
      setVisibility("no-recipes", false);
      grid.innerHTML = recipes
        .map((recipe) => recipe.getClickableHtmlDisplay())
        .join("");
    }

}

insertRecipesIntoGrid();

function insertTempRecipeGrid() {
    var db = new DB();
    var recipeList = db.recipeItems;
    var grid = document.getElementById('recipes');
    if (recipeList.length == 0) {
        changeVisibility('no-recipes');
        return;
    } else {
        changeVisibility('no-recipes');
        grid.innerHTML = recipeList.map(function(recipe) {
            return recipe.getClickableHtmlDisplay()
        }).join('');
    }

}
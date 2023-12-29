function insertTempRecipeGrid() {
    var grid = document.getElementById('recipes');
    if (db.recipeItems.length === 0) {
        setVisibility('no-recipes', true);
        return;
    } else {
        setVisibility('no-recipes', false);
        grid.innerHTML = db.recipeItems.map(function(recipe) {
            return recipe.getClickableHtmlDisplay()
        }).join('');
    }
}
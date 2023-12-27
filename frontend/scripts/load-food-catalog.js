window.addEventListener('load', insertTempFoodGrid);
function insertTempFoodGrid() {
    var db = new DB();
    var foodList = db.foodItems;
    var grid = document.getElementById('foods');
    if (foodList.length == 0) {
        grid.innerHTML = '<p>No foods in database</p>';
        return;
    }
    grid.innerHTML = foodList.map(function(food) {
        return food.getClickableHtmlDisplay()
    }).join('');
}
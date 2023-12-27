function insertTempGroceryGrid() {
    var db = new DB();
    var grid = document.getElementById('groceries');
    if (db.groceryItems.length == 0) {
        changeVisibility('no-groceries');
        return;
    } else {
        changeVisibility('no-groceries');
        grid.innerHTML = db.groceryItems.map(function(grocery) {
            return grocery.getClickableHtmlDisplay()
        }).join('');
    }
}
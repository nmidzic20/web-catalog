function insertTempGroceryGrid() {
    var grid = document.getElementById('groceries');
    if (db.groceryItems.length === 0) {
        setVisibility('no-groceries', true);
        return;
    } else {
        setVisibility('no-groceries', false);
        grid.innerHTML = db.groceryItems.map(function(grocery) {
            return grocery.getClickableHtmlDisplay()
        }).join('');
    }
}
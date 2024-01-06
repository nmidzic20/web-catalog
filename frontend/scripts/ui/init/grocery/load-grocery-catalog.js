function insertTempGroceryGrid() {
  var grid = document.getElementById("groceries");
  if (db.groceryItems.length === 0) {
    setVisibility("no-groceries", true);
    return;
  } else {
    setVisibility("no-groceries", false);
    grid.innerHTML = db.groceryItems
      .map(function (grocery) {
        return grocery.getClickableHtmlDisplay();
      })
      .join("");
  }
}

function insertGroceriesIntoGrid() {
  const grid = document.getElementById("groceries");

  fetchGroceries().then((groceries) => {
    if (groceries.length === 0) {
      setVisibility("no-groceries", true);
    } else {
      setVisibility("no-groceries", false);
      grid.innerHTML = groceries
        .map((grocery) => grocery.getClickableHtmlDisplay())
        .join("");
    }
  });
}

insertGroceriesIntoGrid();

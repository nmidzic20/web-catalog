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

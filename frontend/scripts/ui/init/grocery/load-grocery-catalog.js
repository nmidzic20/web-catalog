async function insertGroceriesIntoGrid() {

  if (!window.location.href.includes("/groceries")) {
    return;
  }

  const grid = document.getElementById("groceries");

  var groceries = await fetchGroceries();
  if (groceries.length === 0) {
    setVisibility("no-groceries", true);
  } else {
    setVisibility("no-groceries", false);
    grid.innerHTML = groceries
      .map((grocery) => grocery.getClickableHtmlDisplay())
      .join("");
  }
}

insertGroceriesIntoGrid();

function initAddGroceryButton() {
  initShowGroceryFormButton();
  const addGroceryButton = document.getElementById("add-grocery");
  addGroceryButton.addEventListener("click", () => {
    var grocery = new Grocery(
      -1,
      document.getElementById("grocery-name").value,
      document.getElementById("grocery-carbs").value,
      document.getElementById("grocery-image").value
    );
    db.addGrocery(grocery);

    const body = {
      grocery: grocery,
    };
    const jsonBody = JSON.stringify(body);

    fetch(urlGroceries, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonBody,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Response from server:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
}

function initShowGroceryFormButton() {
  const showGroceryFormButton = document.getElementById("grocery-form-display");
  showGroceryFormButton.addEventListener("click", () => {
    changeVisibility("grocery-form");
  });
}

function initAddRecipeButton() {
  initShowRecipeFormButton();
  const addRecipeButton = document.getElementById("add-recipe");
  addRecipeButton.addEventListener("click", () => {
    var groceryItems = [];
    var selectedItems = document.querySelectorAll(
      "#recipe-groceries-list option:checked"
    );

    selectedItems.forEach((item) => {
      groceryItems.push(item.text);
      /*var id = parseInt(item.value.split("-")[0]);
      if (db.groceryItems.includes(id)) {
        groceryItems.push(id);
      }*/
    });

    var recipe = new Recipe(
      -1,
      document.getElementById("recipe-name").value,
      document.getElementById("recipe-image").value,
      groceryItems,
      document.getElementById("recipe-description").value,
      document.getElementById("recipe-instructions").value
    );

    console.log(recipe);

    const body = {
      recipe: recipe,
    };
    const jsonBody = JSON.stringify(body);

    fetch(urlRecipes, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonBody,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Response from server:", data);
        insertRecipesIntoGrid();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
}

function initShowRecipeFormButton() {
  const showRecipeFormButton = document.getElementById("recipe-form-display");
  showRecipeFormButton.addEventListener("click", () => {
    changeVisibility("recipe-form");
  });
}

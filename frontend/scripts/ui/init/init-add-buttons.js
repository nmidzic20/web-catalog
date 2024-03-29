function initAddGroceryButton() {
  initShowGroceryFormButton();
  const addGroceryButton = document.getElementById("add-grocery");
  addGroceryButton.addEventListener("click", async () => {
    let name = document.getElementById("grocery-name").value;
    let carbs = document.getElementById("grocery-carbs").value;
    let image = document.getElementById("grocery-image").files[0];

    if (isEmptyField(name) || !image || (image && isEmptyField(image))) {
      openCustomAlert("Please fill in all fields before adding a grocery.");
      return;
    }
    if (!isValidNumber(carbs)) {
      openCustomAlert("Please enter a valid number for grocery carbs.");
      return;
    }

    var grocery = new Grocery(-1, name, carbs);

    const body = {
      grocery: grocery,
    };
    const jsonBody = JSON.stringify(body);

    let data = await postGrocery(jsonBody);
    let groceryId = data.id;
    closeForm("grocery-form");

    if (groceryId) {
      saveImage(image, "grocery", groceryId);
    }
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
  addRecipeButton.addEventListener("click", async () => {
    let name = document.getElementById("recipe-name").value;
    let image = document.getElementById("recipe-image").files[0];
    let description = document.getElementById("recipe-description").value;
    let instructions = document.getElementById("recipe-instructions").value;

    if (
      isEmptyField(name) ||
      !image ||
      (image && isEmptyField(image)) ||
      isEmptyField(description) ||
      isEmptyField(instructions)
    ) {
      openCustomAlert("Please fill in all fields before adding a recipe.");
      return;
    }

    if (!areGroceryAmountsValid()) {
      openCustomAlert(
        "Grocery amounts cannot be zero or less, and must be integer numbers"
      );
      return;
    }

    var groceryItems = [];
    var selectedItems = document.querySelectorAll(
      "#recipe-groceries-list option:checked"
    );

    var ingredients = [];
    var groceryAmounts = {};

    // Access all grocery amounts
    const groceryAmountCollection =
      document.getElementsByClassName("grocery-amounts");
    console.log(groceryAmountCollection);
    for (let item of groceryAmountCollection) {
      if (!item.value) item.value = 0;
      console.log(item.id);
      console.log(item.value);

      const number = item.id.match(/\d+/);
      const extractedNumber = parseInt(number[0]);
      console.log(extractedNumber);

      groceryAmounts[extractedNumber] = item.value;
    }

    selectedItems.forEach((item) => {
      var match = item.text.match(/(.+) \(carbs: (\d+)(?:g)?\)/);
      if (match) {
        let id = item.value;
        let name = match[1];
        let carbs = parseInt(match[2]);
        ingredients.push(
          new Ingredient(new Grocery(id, name, carbs), groceryAmounts[id])
        );
      } else ingredients.push({});
    });

    var recipe = new Recipe(-1, name, groceryItems, description, instructions);

    const body = {
      recipe: recipe,
      ingredients: ingredients,
    };
    const jsonBody = JSON.stringify(body);

    let data = await postRecipe(jsonBody);
    let recipeId = data.id;
    closeForm("recipe-form");

    if (recipeId) {
      saveImage(image, "recipe", recipeId);
    }
  });
}

function initShowRecipeFormButton() {
  const showRecipeFormButton = document.getElementById("recipe-form-display");
  showRecipeFormButton.addEventListener("click", () => {
    changeVisibility("recipe-form");
  });
}

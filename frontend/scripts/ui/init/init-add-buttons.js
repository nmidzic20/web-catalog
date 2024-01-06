function isValidNumber(value) {
  return /^\d+(\.\d+)?$/.test(value);
}

function isEmptyField(value) {
  return value.length === 0;
}

function initAddGroceryButton() {
  initShowGroceryFormButton();
  const addGroceryButton = document.getElementById("add-grocery");
  addGroceryButton.addEventListener("click", () => {
    let name = document.getElementById("grocery-name").value;
    let carbs = document.getElementById("grocery-carbs").value;
    let image = document.getElementById("grocery-image").value;

    if (isEmptyField(name) || isEmptyField(image)) {
      alert("Please fill in all fields before adding a grocery.");
      return;
    }
    if (!isValidNumber(carbs)) {
      alert("Please enter a valid number for grocery carbs.");
      return;
    }

    var grocery = new Grocery(-1, name, carbs, image);

    const body = {
      grocery: grocery,
    };
    const jsonBody = JSON.stringify(body);

    postGrocery(jsonBody);
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

    var recipe = new Recipe(
      -1,
      document.getElementById("recipe-name").value,
      document.getElementById("recipe-image").value,
      [],
      document.getElementById("recipe-description").value,
      document.getElementById("recipe-instructions").value
    );

    var ingredients = [];
    var groceryAmounts = {};

    // Access all grocery amounts
    const groceryAmountCollection =
      document.getElementById("grocery-amounts").children;
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
        let image = "";
        console.log(groceryAmounts);
        console.log(groceryAmounts[id]);
        ingredients.push(
          new Ingredient(
            new Grocery(id, name, carbs, image),
            groceryAmounts[id]
          )
        );
      } else ingredients.push({});
    });

    const body = {
      recipe: recipe,
      ingredients: ingredients,
    };
    const jsonBody = JSON.stringify(body);

    console.log(body);

    postRecipe(jsonBody);
  });
}

function initShowRecipeFormButton() {
  const showRecipeFormButton = document.getElementById("recipe-form-display");
  showRecipeFormButton.addEventListener("click", () => {
    changeVisibility("recipe-form");
  });
}

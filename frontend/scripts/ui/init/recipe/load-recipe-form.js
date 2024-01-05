function loadAddRecipeForm() {
  const recipesHeading = document.getElementById("recipes-heading");
  recipesHeading.outerHTML += `
        <form id="recipe-form" class="hidden">
            <label for="recipe-groceries-list">Groceries:</label>
            <fieldset>
                <fieldset>
                    <select id="recipe-groceries-list" name="recipe-groceries-list" multiple style="min-width: 200px; height: 200px; overflow: auto;"></select>
                    <fieldset id="grocery-amounts" class="hidden"></fieldset>
                </fieldset>
                <!-- <input type="button" id="grocery-amounts-button" value="Grocery amounts"> -->
                <fieldset style="flex-direction: column; width: 350px;">
                    <fieldset>
                        <label for="recipe-name">Name:</label>
                        <input type="text" id="recipe-name" name="recipe-name" required>
                        <label for="recipe-image">Image:</label>
                        <input type="text" id="recipe-image" name="recipe-image">
                    </fieldset>
                    <fieldset>
                        <label for="recipe-description">Description:</label>
                        <textarea id="recipe-description" name="recipe-description" required></textarea>
                        <label for="recipe-instructions">Tutorial:</label>
                        <textarea id="recipe-instructions" name="recipe-instructions" required></textarea>
                    </fieldset>
                    <input type="button" value="Add new recipe" id="add-recipe" style="margin-top: 0; margin-left: auto; margin-right: 1rem !important;">
                </fieldset>
            </fieldset>
        </form>`;
}

function initGroceryListForRecipeForm() {
  function initAddGroceryForm() {
    fetchGroceries().then((groceries) => {
      const options = groceries.map((item) => {
        const { id, name, carbs } = item;
        return `<option value="${id}">${name} (carbs: ${carbs}g)</option>`;
      });

      const selectInput = document.getElementById("recipe-groceries-list");
      selectInput.innerHTML = options.join("");
    });
  }
  initAddGroceryForm();
}

function initAddRecipeForm() {
  initGroceryListForRecipeForm();
  const selectInput = document.getElementById("recipe-groceries-list");
  const groceryAmounts = document.getElementById("grocery-amounts");
  //const groceryAmountsButton = document.getElementById(
  //  "grocery-amounts-button"
  //);
  //groceryAmountsButton.onclick = function () {
  //changeVisibility(groceryAmounts.id);
  //};

  selectInput.onchange = function () {
    const selectedOptions = Array.from(selectInput.selectedOptions);
    const selectedOptionCount = selectedOptions.length;
    if (selectedOptionCount == 0) {
      setVisibility(groceryAmounts.id, false);
      return;
    } else setVisibility(groceryAmounts.id, true);
    groceryAmounts.innerHTML = "";
    for (let i = 0; i < selectedOptionCount; i++) {
      const selectedOption = selectedOptions[i];
      const groceryId = selectedOption.value;
      const numberInput = document.createElement("input");
      numberInput.type = "number";
      numberInput.id = `${groceryId}-amount`;
      numberInput.name = `${groceryId}-amount`;
      numberInput.min = "0";
      numberInput.title = `Amount of ${selectedOption.text.substring(
        0,
        selectedOption.text.indexOf(" (carbs")
      )} needed for the recipe.`;
      numberInput.placeholder = selectedOption.text.substring(
        0,
        selectedOption.text.indexOf(" (carbs")
      );
      groceryAmounts.appendChild(numberInput);
    }
  };
}

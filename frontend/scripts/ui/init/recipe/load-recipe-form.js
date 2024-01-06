function loadAddRecipeForm() {
  const recipesHeading = document.getElementById("recipes-heading");
  recipesHeading.outerHTML += `
    <div class="overlay hidden" id="recipe-form">
      <div id="form-card">
        <span id="close-icon" onclick="closeForm('recipe-form')">&times;</span>
        <form>
          <fieldset>
            <fieldset>
              <!-- <label for="recipe-groceries-list">Groceries:</label>
              <select id="recipe-groceries-list" name="recipe-groceries-list" multiple style="min-width: 200px; height: 200px; overflow: auto;"></select>
              <fieldset id="grocery-amounts" class="hidden"></fieldset> -->

              <fieldset>
                <div class="row">
                  <label for="recipe-groceries-list">Groceries:</label>
                  <label for="grocery-amounts">Amount:</label>
                </div>
                <div class="row">
                  <select id="recipe-groceries-list" name="recipe-groceries-list">
                  </select>
                  <input type="number" id="grocery-amounts" name="grocery-amounts" min="1" value="1">
                </div>
                <button id="addRow">+</button>
              </fieldset>

            </fieldset>
            <!-- <input type="button" id="grocery-amounts-button" value="Grocery amounts"> -->
            <fieldset>
              <fieldset>
                <label for="recipe-name">Name:</label>
                <input type="text" id="recipe-name" name="recipe-name" required>
                <label for="recipe-image">Image:</label>
                <input type="text" id="recipe-image" name="recipe-image">
              </fieldset>
              <fieldset>
                <label for="recipe-description">Description:</label>
                <textarea id="recipe-description" name="recipe-description" required></textarea>
                <label for="recipe-instructions">Instructions:</label>
                <textarea id="recipe-instructions" name="recipe-instructions" required></textarea>
              </fieldset>
              <input type="button" value="Add new recipe" id="add-recipe">
            </fieldset>
          </fieldset>
        </form>
      </div>
    </div>`;
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

      document
        .getElementById("addRow")
        .addEventListener("click", function (event) {
          event.preventDefault(); // prevent unwanted focusing in form default behaviour

          let originalRow = document.querySelectorAll(".row");
          let newRow = originalRow[1].cloneNode(true);

          newRow.querySelector("input").value = 1;

          // remove previously selected options from the newly added select
          let selectedOptions = Array.from(
            document.querySelectorAll("select option:checked")
          ).map((option) => option.value);
          newRow.querySelectorAll("select option").forEach((option) => {
            if (selectedOptions.includes(option.value)) {
              option.remove();
            }
          });

          let optionsLeft = newRow.querySelectorAll("select option").length;
          // if all options are spent, do not add new rows
          if (optionsLeft == 0) return;
          // if all options are about to be spent, remove button
          else if (optionsLeft == 1)
            document.getElementById("addRow").style.display = "none";

          this.parentNode.insertBefore(newRow1, this);
          this.parentNode.insertBefore(newRow, this);
        });
    });
  }
  initAddGroceryForm();
}

function initAddRecipeForm() {
  initGroceryListForRecipeForm();
  const selectInput = document.getElementById("recipe-groceries-list");
  const groceryAmounts = document.getElementById("grocery-amounts");

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

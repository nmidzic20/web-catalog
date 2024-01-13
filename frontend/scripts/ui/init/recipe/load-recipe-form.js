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
                  <input type="number" class="grocery-amounts" name="grocery-amounts" min="1" value="1">
                  <button id="remove-row" onclick="removeRow(this)" style="margin:10px;">
                    <i class="fas fa-trash-alt"></i> 
                  </button>
                </div>
                <button id="addRow">Add grocery</button>
              </fieldset>

            </fieldset>
            <!-- <input type="button" id="grocery-amounts-button" value="Grocery amounts"> -->
            <fieldset>
              <fieldset>
                <label for="recipe-name">Name:</label>
                <input type="text" id="recipe-name" name="recipe-name" required>
                <label for="recipe-image">Image:</label>
                <input type="file" id="recipe-image" name="recipe-image">
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

async function initGroceryListForRecipeForm() {
  async function initAddGroceryForm() {
    var groceries = await fetchGroceries();
    const options = groceries.map((item) => {
      const { id, name, carbs } = item;
      return `<option value="${id}">${name} (carbs: ${carbs}g)</option>`;
    });

    const selectInput = document.getElementById("recipe-groceries-list");
    selectInput.innerHTML = options.join("");

    let originalRows = document.querySelectorAll(".row");

    setGroceryAmountInputId(originalRows[1]);

    document
      .getElementById("addRow")
      .addEventListener("click", function (event) {
        event.preventDefault(); // prevent unwanted focusing in form default behaviour

        let newRow = originalRows[1].cloneNode(true);

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

        this.parentNode.insertBefore(newRow, this);

        removeSelectOnChangeListeners();
        setSelectOnChangeListeners();
        setGroceryAmountInputId(newRow);
      });
  }
  await initAddGroceryForm();
}

async function initAddRecipeForm() {
  await initGroceryListForRecipeForm();
  setSelectOnChangeListeners();
}

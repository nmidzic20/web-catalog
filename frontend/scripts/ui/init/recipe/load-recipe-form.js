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
                    <svg style="color: white;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" id="delete"><path fill="currentColor" d="M15 3a1 1 0 0 1 1 1h2a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2h2a1 1 0 0 1 1-1h6Z"></path><path fill="currentColor" fill-rule="evenodd" d="M6 7h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7Zm3.5 2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-.5-.5Zm5 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-.5-.5Z" clip-rule="evenodd"></path></svg>
                    <!-- icon attribution: <a href="https://iconscout.com/icons/delete" class="text-underline font-size-sm" target="_blank">Delete</a> by <a href="https://iconscout.com/contributors/rengised" class="text-underline font-size-sm">Alex Martynov</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a> -->
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

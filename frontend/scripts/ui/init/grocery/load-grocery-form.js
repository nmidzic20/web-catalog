function loadAddGroceryForm() {
  const groceriesHeading = document.getElementById("groceries-heading");
  groceriesHeading.outerHTML += `
    <div class="overlay hidden" id="grocery-form">
    <div id="form-card">
        <span id="close-icon" onclick="closeForm()">&times;</span>
        <form>
            <fieldset>
                <label for="grocery-name">Grocery Name:</label>
                <input type="text" id="grocery-name" name="grocery-name" required>
                <label for="grocery-carbs">Carbs:</label>
                <input type="number" id="grocery-carbs" name="grocery-carbs" required>
                <label for="grocery-image">Image Address:</label>
                <input type="text" id="grocery-image" name="grocery-image">
                <input type="button" value="Add new grocery" id="add-grocery">
            </fieldset>
        </form>
    </div>
    </div>`;
}

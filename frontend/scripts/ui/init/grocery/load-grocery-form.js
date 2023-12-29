function loadAddGroceryForm() {
    const groceriesHeading = document.getElementById("groceries-heading");
    groceriesHeading.outerHTML += `
        <form id="grocery-form" class="hidden">
            <fieldset>
                <label for="grocery-name">Grocery Name:</label>
                <input type="text" id="grocery-name" name="grocery-name" required>
                <label for="grocery-carbs">Carbs:</label>
                <input type="number" id="grocery-carbs" name="grocery-carbs" required>
                <label for="grocery-image">Image Address:</label>
                <input type="text" id="grocery-image" name="grocery-image">
                <input type="button" value="Add new grocery" id="add-grocery">
            </fieldset>
        </form>`;
}
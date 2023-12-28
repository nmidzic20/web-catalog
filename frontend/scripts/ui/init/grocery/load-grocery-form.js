function loadAddGroceryForm() {
    const groceriesHeading = document.getElementById("groceries-heading");
    groceriesHeading.outerHTML += `
        <form id="grocery-form" class="hidden">
            <fieldset>
                <label for="grocery-name">Grocery Name:</label>
                <input type="text" id="grocery-name" name="grocery-name" required>
                <label for="carbs">Carbs:</label>
                <input type="number" id="carbs" name="carbs" required>
                <label for="image-address">Image Address:</label>
                <input type="text" id="image-address" name="image-address">
                <input type="button" value="Add new grocery" id="add-grocery">
            </fieldset>
        </form>`;
}
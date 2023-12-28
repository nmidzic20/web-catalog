function initAddGroceryForm() {
    const groceryItems = db.groceryItems;
    const options = groceryItems.map(item => {
        const { id, name, carbs } = item;
        return `<option value="${id}">${name} (carbs: ${carbs}g)</option>`;
    });
    const selectInput = document.getElementById("groceries-form-list");
    selectInput.innerHTML = options.join("");
}
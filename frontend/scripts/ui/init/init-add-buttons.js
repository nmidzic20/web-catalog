function initAddGroceryButton() {
    const addGroceryButton = document.getElementById('add-grocery');
    addGroceryButton.addEventListener('click', () => {
        const groceryName = document.querySelector('.grocery-name').value;
        const groceryQuantity = document.querySelector('.grocery-quantity').value;
        const groceryUnit = document.querySelector('.grocery-unit').value;
        const groceryCategory = document.querySelector('.grocery-category').value;
        const grocery = {
            name: groceryName,
            quantity: groceryQuantity,
            unit: groceryUnit,
            category: groceryCategory
        }
        addGrocery(grocery);
    });
}

function initAddRecipeButton() {
    const addRecipeButton = document.getElementById('add-recipe');
    addRecipeButton.addEventListener('click', () => {
        const recipeName = document.querySelector('.recipe-name').value;
        const recipeIngredients = document.querySelector('.recipe-ingredients').value;
        const recipeInstructions = document.querySelector('.recipe-instructions').value;
        const recipe = {
            name: recipeName,
            ingredients: recipeIngredients,
            instructions: recipeInstructions
        }
        addRecipe(recipe);
    });
}
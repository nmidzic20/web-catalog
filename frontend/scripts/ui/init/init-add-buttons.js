function initAddGroceryButton() {
    initShowGroceryFormButton();
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

function initShowGroceryFormButton() {
    const showGroceryFormButton = document.getElementById('grocery-form-display');
    showGroceryFormButton.addEventListener('click', () => {
        changeVisibility('grocery-form');
    });
}

function initAddRecipeButton() {
    initShowRecipeFormButton();
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

function initShowRecipeFormButton() {
    const showRecipeFormButton = document.getElementById('recipe-form-display');
    showRecipeFormButton.addEventListener('click', () => {
        changeVisibility('recipe-form');
    });
}
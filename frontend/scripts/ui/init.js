window.onload = () => {
    // groceries - insert content, load form, init form, init button
    insertTempGroceryGrid();
    loadAddGroceryForm();
    // initAddGroceryForm(); // not necessary for now, might add or remove permanently later
    initAddGroceryButton();
    // recipes - insert content, load form, init form, init button
    insertTempRecipeGrid();
    loadAddRecipeForm();
    initAddRecipeForm();
    initAddRecipeButton();
};
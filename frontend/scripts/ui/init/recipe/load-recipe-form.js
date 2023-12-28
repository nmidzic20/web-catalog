function initAddRecipeForm() {
    const selectInput = document.getElementById("groceries-form-list");
    const groceryAmounts = document.getElementById("grocery-amounts");
    // const groceryAmountsButton = document.getElementById("grocery-amounts-button");
    // groceryAmountsButton.onclick = (function() {
    //     changeVisibility(groceryAmounts.id);
    // });
    selectInput.onchange = (function() {
        const selectedOptions = Array.from(selectInput.selectedOptions);
        const selectedOptionCount = selectedOptions.length;
        if(selectedOptionCount == 0) {
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
            numberInput.title = `Amount of ${selectedOption.text.substring(0, selectedOption.text.indexOf(" (carbs"))} needed for the recipe.`;
            numberInput.placeholder = selectedOption.text.substring(0, selectedOption.text.indexOf(" (carbs"));
            groceryAmounts.appendChild(numberInput);
        }
    });
}
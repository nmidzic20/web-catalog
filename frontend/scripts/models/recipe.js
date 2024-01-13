class Recipe {
  constructor(id, name, groceryItems, desc, instructions) {
    this.id = id;
    this.name = name;
    this.groceryItems = groceryItems;
    this.desc = desc;
    this.instructions = instructions;
  }

  calculateCarbs() {
    let carbs = 0;
    for (let i = 0; i < this.groceryItems.length; i++) {
      carbs += (this.groceryItems[i].carbs / 100) * this.groceryItems[i].amount;
    }
    return carbs.toFixed(2);
  }

  getHtmlDisplay() {
    let groceryItemsHtml = this.groceryItems
      .map((grocery) => grocery.name)
      .join(", ");

    let src = `/api/images/recipes/${this.id}.jpg`;

    let savedImage = localStorage.getItem(`recipe-${this.id}`);

    if (savedImage) {
      src = savedImage;
    }

    return `
      <img src=${src} alt="A picture depicting ${
      this.name
    }" class="recipe-image">
      <div class="all-recipe-details" id="recipe-details-${this.id}">
        <h3 class="title">${this.name}</h3>
        <p>Ingredients: ${groceryItemsHtml}</p>
        <p>Description: ${this.desc}</p>
        <p>&Sigma; Carbs (per 100g): ${this.calculateCarbs()}g</p>
      </div>
      <div class="recipe-instructions hidden" id="recipe-instructions-${
        this.id
      }"><h4>Instructions</h4><br><p>${this.instructions}</p></div>`;
  }

  getClickableHtmlDisplay() {
    return `<div class="recipe-details" id="recipe-${
      this.id
    }" onclick="cardFlip('recipe-${this.id}');">${this.getHtmlDisplay()}</div>`;
  }
}

function cardFlip(id) {
  var card = document.getElementById(id);
  var recipeDetails = card.querySelector(".all-recipe-details");
  var recipeInstructions = card.querySelector(".recipe-instructions");
  changeVisibility(recipeDetails.id);
  changeVisibility(recipeInstructions.id);
}

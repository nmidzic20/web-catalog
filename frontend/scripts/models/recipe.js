class Recipe {
  constructor(id, name, picture, groceryItems, desc, instructions) {
    this.id = id;
    this.name = name;
    this.picture = picture;
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
    return `
      <img src="${this.picture}" alt="PICTURE" class="recipe-image">
      <h3 class="title">${this.name}</h3>
      <p>Ingredients: ${groceryItemsHtml}</p>
      <p>Description: ${this.desc}</p>
      <p>&Sigma; Carbs per 100g: ${this.calculateCarbs()}g</p>`;
  }

  getClickableHtmlDisplay() {
    return `<div class="recipe-details" onclick="window.location.href = '/recipes/${
      this.id
    }'">${this.getHtmlDisplay()}</div>`;
  }
}

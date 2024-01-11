class Recipe {
  constructor(id, name, image, groceryItems, desc, instructions) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.groceryItems = groceryItems;
    this.desc = desc;
    this.instructions = instructions;
  }

  getHtmlDisplay() {
    let groceryItemsHtml = this.groceryItems
      .map((grocery) => grocery)
      .join(", ");
    return `
      <img src="/api/images/recipes/${this.id}.jpg" alt="PICTURE" class="recipe-image">
      <p class="title">${this.name}</p>
      <p>Ingredients: ${groceryItemsHtml}</p>
      <p>Description: ${this.desc}</p>
      <p>Instructions: ${this.instructions}</p>`;
  }

  getClickableHtmlDisplay() {
    return `<div class="recipe-details" onclick="window.location.href = '/recipes/${
      this.id
    }'">${this.getHtmlDisplay()}</div>`;
  }
}

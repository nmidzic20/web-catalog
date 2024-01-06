class Recipe {
  constructor(id, name, picture, groceryItems, desc, instructions) {
    this.id = id;
    this.name = name;
    this.picture = picture;
    this.groceryItems = groceryItems;
    this.desc = desc;
    this.instructions = instructions;
  }

  getHtmlDisplay() {
    let groceryItemsHtml = this.groceryItems
      .map((grocery) => grocery)
      .join(", ");
    return `
      <img src="${this.picture}" alt="PICTURE" class="recipe-image">
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

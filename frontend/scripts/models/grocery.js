class Grocery {
  constructor(id, name, carbs, image) {
    this.id = id;
    this.name = name;
    this.carbs = carbs;
    this.image = image;
  }

  getHtmlDisplay() {
    return `
            <img src="${this.image}" alt="${this.name}" class="grocery-image">
            <h3>${this.name}</h3>
            <p>Carbs (per 100g): ${this.carbs}g</p>`;
  }

  getClickableHtmlDisplay() {
    return `
            <div class='grocery-details' onclick="window.location.href = '/recipes?contains=${this.id}'">
                ${this.getHtmlDisplay()}
            </div>`;
  }
}

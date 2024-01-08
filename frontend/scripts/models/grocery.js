class Grocery {
  constructor(id, name, carbs) {
    this.id = id;
    this.name = name;
    this.carbs = carbs;
  }

  getHtmlDisplay() {
    return `
            <img src="/api/images/groceries/${this.id}" alt="${this.name}" class="grocery-image">
            <p>${this.name}</p>
            <p>Carb Count: ${this.carbs} g</p>`;
  }

  getClickableHtmlDisplay() {
    return `
            <div class='grocery-details' onclick="window.location.href = '/groceries/${
              this.id
            }'">
                ${this.getHtmlDisplay()}
            </div>`;
  }
}

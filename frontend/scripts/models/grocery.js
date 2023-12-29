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
            <p>${this.name}</p>
            <p>Carb Count: ${this.carbs}g</p>`;
    }

    getClickableHtmlDisplay() {
        return `
            <div class='grocery-details' onclick="window.location.href = '/products/${this.id}'">
                ${this.getHtmlDisplay()}
            </div>`;
    }
}
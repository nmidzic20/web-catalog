class Food {
    constructor(id, name, weight, carbs, amount, image) {
        this.id = id;
        this.name = name;
        this.weight = weight;
        this.carbs = carbs;
        this.amount = amount;
        this.image = image;
    }

    getHtmlDisplay() {
        return '' +
            `<img src="${this.image}" alt="${this.name}" class="food-image">
            <p>${this.name}</p>
            <p>Carb Count: ${this.carbs}g</p>`;
    }

    getClickableHtmlDisplay() {
        return `<div class = 'food-details' onclick="window.location.href = '/products/${this.id}'">${this.getHtmlDisplay()}</div>`;
    }
}
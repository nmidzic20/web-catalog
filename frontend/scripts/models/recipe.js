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
        let groceryItemsHtml = this.groceryItems.map(grocery => grocery.name).join(', ');
        return `
            <img src="${this.picture}" alt="${this.name}" class="recipe-image">
            <p>${this.name}</p>
            <p>Ingredients: ${groceryItemsHtml}</p>
            <p>Description: ${this.desc}</p>`;
    }

    getClickableHtmlDisplay() {
        return `<div class="recipe-details" onclick="window.location.href = '/recipes/${this.id}'">${this.getHtmlDisplay()}</div>`;
    }
}

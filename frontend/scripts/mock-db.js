class DB {
    groceryItems = [];
    recipeItems = [];
    constructor() {
        this.groceryItems = [
            new Grocery(1, 'Apple', 10, 'https://www.shutterstock.com/image-photo/red-apple-isolated-on-white-600nw-1727544364.jpg'),
            new Grocery(2, 'Banana', 20, 'https://atlas-content-cdn.pixelsquid.com/assets_v2/244/2442895388911343087/jpeg-600/G03.jpg?modifiedAt=1'),
            new Grocery(3, 'Orange', 30, 'https://media.istockphoto.com/id/494037460/photo/orange-fruit-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=Podpyj2fviG76mCSsr3aR6O3t4o3LdkahTHSU0GBCmQ='),
            new Grocery(4, 'Pineapple', 40, 'https://yogisorganic.com/cdn/shop/products/Pineapple_600x@2x.jpg?v=1496866405'),
            new Grocery(5, 'Mango', 50, 'https://st.depositphotos.com/1642482/3698/i/450/depositphotos_36983317-stock-photo-mango.jpg'),
            new Grocery(6, 'Peach', 60, 'https://images.unsplash.com/photo-1581093456687-9d9b3c2d9e6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'),
            new Grocery(7, 'Pear', 70, 'https://images.unsplash.com/photo-1581093456687-9d9b3c2d9e6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'),
            new Grocery(8, 'Strawberry', 80, 'https://images.unsplash.com/photo-1581093456687-9d9b3c2d9e6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'),
            new Grocery(9, 'Blueberry', 90, 'https://images.unsplash.com/photo-1581093456687-9d9b3c2d9e6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'),
            new Grocery(10, 'Raspberry', 100, 'https://images.unsplash.com/photo-1581093456687-9d9b3c2d9e6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80')
        ];
        this.recipeItems = [
            new Recipe(1, 'Apple Pie', 'https://www.shutterstock.com/image-photo/red-apple-isolated-on-white-600nw-1727544364.jpg', this.groceryItems.slice(0, 1), 'This is a description', 'This is a set of instructions'),
            new Recipe(2, 'Banana Bread', 'https://atlas-content-cdn.pixelsquid.com/assets_v2/244/2442895388911343087/jpeg-600/G03.jpg?modifiedAt=1', this.groceryItems.slice(4, 9), 'This is a description', 'This is a set of instructions'),
            new Recipe(3, 'Orange Chicken', 'https://media.istockphoto.com/id/494037460/photo/orange-fruit-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=Podpyj2fviG76mCSsr3aR6O3t4o3LdkahTHSU0GBCmQ=', this.groceryItems.slice(2, 3), 'This is a description', 'This is a set of instructions'),
            new Recipe(4, 'Pineapple Pizza', '', this.groceryItems.slice(0, 2), 'This is a description', 'This is a set of instructions'),
        ];
    }
}
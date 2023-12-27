class DB {
    foodItems = [];
    constructor() {
        this.foodItems = [
            new Food(1, 'Apple', 100, 10, 1, 'https://www.shutterstock.com/image-photo/red-apple-isolated-on-white-600nw-1727544364.jpg'),
            new Food(2, 'Banana', 100, 20, 1, 'https://atlas-content-cdn.pixelsquid.com/assets_v2/244/2442895388911343087/jpeg-600/G03.jpg?modifiedAt=1'),
            new Food(3, 'Orange', 100, 30, 1, 'https://media.istockphoto.com/id/494037460/photo/orange-fruit-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=Podpyj2fviG76mCSsr3aR6O3t4o3LdkahTHSU0GBCmQ='),
            new Food(4, 'Pineapple', 100, 40, 1, 'https://yogisorganic.com/cdn/shop/products/Pineapple_600x@2x.jpg?v=1496866405'),
            new Food(5, 'Mango', 100, 50, 1, 'https://st.depositphotos.com/1642482/3698/i/450/depositphotos_36983317-stock-photo-mango.jpg'),
            new Food(6, 'Peach', 100, 60, 1, 'https://images.unsplash.com/photo-1581093456687-9d9b3c2d9e6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'),
            new Food(7, 'Pear', 100, 70, 1, 'https://images.unsplash.com/photo-1581093456687-9d9b3c2d9e6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'),
            new Food(8, 'Strawberry', 100, 80, 1, 'https://images.unsplash.com/photo-1581093456687-9d9b3c2d9e6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'),
            new Food(9, 'Blueberry', 100, 90, 1, 'https://images.unsplash.com/photo-1581093456687-9d9b3c2d9e6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'),
            new Food(10, 'Raspberry', 100, 100, 1, 'https://images.unsplash.com/photo-1581093456687-9d9b3c2d9e6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80')
        ];
    }
}
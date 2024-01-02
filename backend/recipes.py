from database import DB

class RecipeHandler():
   
    def get_all_recipes(self):
        db = DB.get_instance('../web-catalog.sqlite')
        db.connect_to_database()

        try:
            query_result = db.execute_query("SELECT * FROM Recipe")
            print(query_result)
            return query_result
        finally:
            db.close_connection()

    def get_ingredients_for_recipe(self, recipeId):
        db = DB.get_instance('../web-catalog.sqlite')
        db.connect_to_database()

        try:
            query = """
                SELECT Grocery.name
                FROM Ingredient
                JOIN Grocery ON Ingredient.grocery_id = Grocery.id
                WHERE Ingredient.recipe_id = ?
            """
            query_result = db.execute_query(query, (recipeId,))            
            print(query_result)
            return query_result
        finally:
            db.close_connection()
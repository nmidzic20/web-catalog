from database import DB


class IngredientHandler:

    def create_ingredient(self, recipe_id, grocery_id, amount):
        db = DB.get_instance('../web-catalog.sqlite')
        db.connect_to_database()

        try:
            query = f"""
                INSERT INTO Ingredient(recipe_id, grocery_id, amount)
                VALUES('{recipe_id}', '{grocery_id}', '{amount}');
            """
            db.execute_run_query(query)
        finally:
            db.close_connection()

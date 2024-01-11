from database import DB

class Recipe():
    id: int
    name: str
    desc: str
    instructions: str
    image: str

    def __init__(self, name, desc, instructions, image):
        self.name = name
        self.desc = desc
        self.instructions = instructions
        self.image = image


class RecipeHandler():
   
    def get_all_recipes(self):
        db = DB.get_instance('../web-catalog.sqlite')
        db.connect_to_database()

        try:
            query_result = db.execute_query("SELECT * FROM Recipe")
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
            return query_result
        finally:
            db.close_connection()

    def create_recipe(self, recipe: Recipe):
        db = DB.get_instance('../web-catalog.sqlite')
        db.connect_to_database()

        try:
            query = f"""
                INSERT INTO Recipe(name, desc, instructions)
                VALUES('{recipe.name}', '{recipe.desc}', '{recipe.instructions}');
            """
            db.execute_run_query(query)

            query = "SELECT last_insert_rowid()"
            last_id = db.execute_query(query)[0][0]
            return last_id
        finally:
            db.close_connection()
from database import DB

class Recipe():
    id: int
    name: str
    desc: str
    picture: str
    instructions: str

    def __init__(self, name, desc, picture, instructions):
        self.name = name
        self.desc = desc
        self.picture = picture
        self.instructions = instructions


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

    def create_recipe(self, recipe: Recipe):
        db = DB.get_instance('../web-catalog.sqlite')
        db.connect_to_database()

        try:
            query = f"""
                INSERT INTO Recipe(name, desc, picture, instructions)
                VALUES('{recipe.name}', '{recipe.desc}', '{recipe.picture}', '{recipe.instructions}');
            """
            db.execute_run_query(query)
        finally:
            db.close_connection()
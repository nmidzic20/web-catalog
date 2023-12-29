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
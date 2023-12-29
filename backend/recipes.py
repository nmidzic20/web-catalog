class RecipeHandler():
   
    def get_all_recipes():
        db = DB('web-catalog.sqlite')
        db.connect_to_database()

        try:
            query_result = db.execute_query("SELECT * FROM Recipe")
            return query_result
        finally:
            db.close_connection()
from database import DB


class Grocery:
    id: int
    name: str
    carbs: int

    def __init__(self, name, carbs):
        self.name = name
        self.carbs = carbs


class GroceryHandler:
    def get_all_groceries(self):
        db = DB.get_instance('../web-catalog.sqlite')
        db.connect_to_database()

        try:
            query_result = db.execute_query("SELECT * FROM Grocery")
            return query_result
        finally:
            db.close_connection()

    def create_grocery(self, grocery: Grocery):
        db = DB.get_instance('../web-catalog.sqlite')
        db.connect_to_database()

        try:
            query = f"""
                INSERT INTO Grocery(name, carbs)
                VALUES('{grocery.name}', '{grocery.carbs}');
            """
            db.execute_run_query(query)
        finally:
            db.close_connection()

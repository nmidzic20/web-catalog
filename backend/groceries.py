from database import DB


class Grocery:
    id: int
    name: str
    carbs: float
    picture: str

    def __init__(self, name, carbs, picture):
        self.name = name
        self.carbs = carbs
        self.picture = picture


class GroceryHandler:
    def get_all_groceries(self):
        db = DB.get_instance('../web-catalog.sqlite')
        db.connect_to_database()

        try:
            query_result = db.execute_query("SELECT * FROM Grocery")
            print(query_result)
            return query_result
        finally:
            db.close_connection()

    def create_grocery(self, grocery: Grocery):
        db = DB.get_instance('../web-catalog.sqlite')
        db.connect_to_database()

        try:
            query = f"""
                INSERT INTO Grocery(name, carbs, picture)
                VALUES('{grocery.name}', '{grocery.carbs}', '{grocery.picture}');
            """
            db.execute_run_query(query)
        finally:
            db.close_connection()

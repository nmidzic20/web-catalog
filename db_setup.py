import sqlite3
from sqlite3 import Error


def create_connection(db_path):
    try:
        conn = sqlite3.connect(db_path)
        print('Connected to database.')
        return conn
    except sqlite3.Error as e:
        print(f'Error connecting to the database: {e}')
    
    return conn


def execute_commands(conn, command):
    try:
        cursor = conn.cursor()
        cursor.execute(command)
        conn.commit()
    except Error as e:
        print(e)

def insert_dummy_data(conn):
    cursor = conn.cursor()
    
    cursor.execute("INSERT INTO Grocery (name, carbs) VALUES ('Apple', 10);")
    cursor.execute("INSERT INTO Grocery (name, carbs) VALUES ('Chicken meat', 5);")

    cursor.execute("INSERT INTO Recipe (name, desc, picture, instructions) VALUES ('Apple Pie', 'Great dessert', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.inspiredtaste.net%2F43362%2Fapple-pie%2F&psig=AOvVaw1-WsXKdAVnxYAWzkvsaP3Q&ust=1704330755973000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICLrv-EwIMDFQAAAAAdAAAAABAD', 'No instructions needed for this meal.');")
    cursor.execute("INSERT INTO Recipe (name, desc, picture, instructions) VALUES ('Chicken with Vegetables', 'Healthy meal', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.seriouseats.com%2Fpan-roasted-chicken-vegetables-dijon-jus-recipe&psig=AOvVaw3YJkOgNJQbE-EBHuE2BXQn&ust=1704330783103000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjI-4mFwIMDFQAAAAAdAAAAABAI', 'No instructions needed for this meal.');")

    cursor.execute("INSERT INTO Ingredient (recipe_id, grocery_id, amount) VALUES (1, 1, 3);")  
    cursor.execute("INSERT INTO Ingredient (recipe_id, grocery_id, amount) VALUES (2, 2, 500);")

    conn.commit()
    

if __name__ == '__main__':
    
    sql_drop_groceries_table = "DROP TABLE IF EXISTS Grocery;"
    
    sql_create_groceries_table = '''CREATE TABLE IF NOT EXISTS Grocery (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            carbs INTEGER NOT NULL,
            picture BLOB
        );
    '''

    sql_drop_recipes_table = "DROP TABLE IF EXISTS Recipe;"

    sql_create_recipes_table = '''CREATE TABLE IF NOT EXISTS Recipe (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            desc TEXT,
            picture TEXT,
            instructions TEXT
        );
    '''

    sql_drop_ingredients_table = "DROP TABLE IF EXISTS Ingredient;"

    sql_create_ingredients_table = '''CREATE TABLE IF NOT EXISTS Ingredient (
            recipe_id INTEGER ,
            grocery_id INTEGER,
            amount INTEGER NOT NULL,
            PRIMARY KEY (recipe_id, grocery_id),
            FOREIGN KEY (recipe_id) REFERENCES Recipe(id),
            FOREIGN KEY (grocery_id) REFERENCES Grocery(id)
        );
    '''

    conn = create_connection("web-catalog.sqlite")
    if conn is not None:
        execute_commands(conn, sql_drop_groceries_table)
        execute_commands(conn, sql_create_groceries_table)
        execute_commands(conn, sql_drop_recipes_table)
        execute_commands(conn, sql_create_recipes_table)
        execute_commands(conn, sql_drop_ingredients_table)
        execute_commands(conn, sql_create_ingredients_table)
        insert_dummy_data(conn)

        conn.close()
    else:
        print("Error! cannot create the database connection.")

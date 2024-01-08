import sqlite3
from sqlite3 import Error


def create_connection(db_path):
    try:
        conn = sqlite3.connect(db_path)
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
    cursor.execute("INSERT INTO Grocery (name, carbs) VALUES ('Banana', 20);")
    cursor.execute("INSERT INTO Grocery (name, carbs) VALUES ('Orange', 30);")
    cursor.execute("INSERT INTO Grocery (name, carbs) VALUES ('Pineapple', 40);")
    cursor.execute("INSERT INTO Grocery (name, carbs) VALUES ('Mango', 50);")
    cursor.execute("INSERT INTO Grocery (name, carbs) VALUES ('Peach', 60);")
    cursor.execute("INSERT INTO Grocery (name, carbs) VALUES ('Pear', 70);")
    cursor.execute("INSERT INTO Grocery (name, carbs) VALUES ('Strawberry', 80);")
    cursor.execute("INSERT INTO Grocery (name, carbs) VALUES ('Blueberry', 90);")
    cursor.execute("INSERT INTO Grocery (name, carbs) VALUES ('Raspberry', 100);")


    cursor.execute("INSERT INTO Recipe (name, desc, picture, instructions) VALUES ('Apple Pie', 'Great dessert', 'https://www.inspiredtaste.net/wp-content/uploads/2019/10/Homemade-Apple-Pie-Recipe-6-1200.jpg', 'No instructions needed for this meal.');")
    cursor.execute("INSERT INTO Recipe (name, desc, picture, instructions) VALUES ('Chicken with Vegetables', 'Healthy meal', 'https://www.seriouseats.com/thmb/mfGNHGV3cBlpYyH49UTiUQgB8zI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/pan-roasted-chicken-vegetables-dijon-jus-recipe-hero-02_1-c3e427250efe40259dc8fab9ff66ea74.JPG', 'No instructions needed for this meal.');")

    cursor.execute("INSERT INTO Ingredient (recipe_id, grocery_id, amount) VALUES (1, 1, 3);")  
    cursor.execute("INSERT INTO Ingredient (recipe_id, grocery_id, amount) VALUES (2, 2, 500);")

    conn.commit()
    

if __name__ == '__main__':
    
    sql_drop_groceries_table = "DROP TABLE IF EXISTS Grocery;"
    
    sql_create_groceries_table = '''CREATE TABLE IF NOT EXISTS Grocery (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            carbs INTEGER NOT NULL
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

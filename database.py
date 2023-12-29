import sqlite3

class DB:
    def __init__(self, db_path):
        self.db_path = db_path
        self.conn = None

    def connect_to_database(self):
        try:
            self.conn = sqlite3.connect(self.db_path)
            print('Connected to database.')
        except sqlite3.Error as e:
            print(f'Error connecting to the database: {e}')

    def execute_query(self, sql, sql_data=None):
        try:
            cursor = self.conn.cursor()
            if sql_data:
                cursor.execute(sql, sql_data)
            else:
                cursor.execute(sql)
            
            result = cursor.fetchall()
            print(f'Executed query: {sql}')
            return result

        except sqlite3.Error as e:
            print(f'Error executing the query: {e}')
            return None

    def execute_run_query(self, sql, sql_data=None):
        try:
            cursor = self.conn.cursor()
            if sql_data:
                cursor.execute(sql, sql_data)
            else:
                cursor.execute(sql)

            self.conn.commit()
            print(f'Executed run query: {sql}')

        except sqlite3.Error as e:
            self.conn.rollback()
            print(f'Error executing the run query: {e}')

    def close_connection(self):
        if self.conn:
            self.conn.close()
            print('Connection closed.')

if __name__ == "__main__":
    db = DB('web-catalog.sqlite')
    db.connect_to_database()

    query_result = db.execute_query("SELECT * FROM Grocery")
    print(query_result)

    #db.execute_run_query("INSERT INTO Grocery (name, carbs) VALUES (?, ?)", ('Beef', 200))

    db.close_connection()

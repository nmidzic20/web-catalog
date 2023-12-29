import sqlite3

class DB:
    _instance = None

    def __new__(cls, db_path):
        if not cls._instance:
            cls._instance = super(DB, cls).__new__(cls)
            cls._instance.db_path = db_path
            cls._instance.conn = None
        return cls._instance

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

    @classmethod
    def get_instance(cls, db_path):
        if not cls._instance:
            cls._instance = cls(db_path)
        return cls._instance

if __name__ == "__main__":
    db = DB.get_instance('web-catalog.sqlite')
    db.connect_to_database()

    query_result = db.execute_query("SELECT * FROM Grocery")
    print(query_result)

    #db.execute_run_query("INSERT INTO Grocery (name, carbs) VALUES (?, ?)", ('Beef', 200))

    db.close_connection()

import sqlite3

conn = sqlite3.connect('notes.db')

print(conn.total_changes)

cur = conn.cursor()
cur.execute('CREATE TABLE IF NOT EXISTS example (id INTEGER, name TEXT, age INTEGER)')

cur.execute("INSERT INTO example VALUES (1, 'alice', 20)")
cur.execute("INSERT INTO example VALUES (2, 'bob', 30)")
cur.execute("INSERT INTO example VALUES (3, 'eve', 40)")

conn.commit()
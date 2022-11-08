# freeCodeCamp's Relational Database (beta) learning notes

## Useful Postgres commands

* Log in to Postgres: `psql --username=user dbname=postgres` -- where `user` changes depending on your actual user.
* List databases: `\l`
* Create a database: `CREATE DATABASE database_name;`
* Connect to a database: `\c database_name`
* Display tables of a database: `\d`
* Create a table inside a database: `CREATE TABLE table_name();`
  * Create a table with pre-defined columns: `CREATE TABLE table_name(column_name DATATYPE CONSTRAINTS);`
* View details of a table: `\d table_name`
* Add a column to a table: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE;` -- examples of data types include `CHAR(size)`, `VARCHAR(size)`, `BOOL`, `INT(size)`, `SERIAL`, and `DATE`, among others. More types can be found [here](https://www.w3schools.com/sql/sql_datatypes.asp)
  * Add a column with constraints to a table: `ADD TABLE table_name ADD COLUMN column name DATATYPE CONSTRAINTS;`
* Remove a column from a table: `ALTER TABLE table_name DROP COLUMN column_name;`
* Rename a column from a table: `ALTER TABLE table_name RENAME COLUMN column_name TO new_name;`
* Insert rows into a table: `INSERT INTO table_name(column_1, column_2, column_3) VALUES(value_1, value_2, value_3);`
  * Insert various rows at once: `INSERT INTO table_name(column_1, column_2, column_3) VALUES(value_1, value_2, value_3), (value_4, value_5, value_6), (value_7, value_8, value_9);`
* View or query data in a table: `SELECT columns FROM table_name;` -- use an asterisk (`*`) to see all the columns at once
  * View it in order: `SELECT columns FROM table_name ORDER BY column=name;`
  * View it with conditions (i.e., just specific rows): `SELECT columns FROM table_name WHERE condition;`
* Delete  arow from a table: `DELETE FROM table_name WHERE condition;` -- more info on `WHERE` [here](https://www.w3schools.com/sql/sql_where.asp)
* Delete or drop a table: `DROP TABLE table_name;`
* Rename a database: `ALTER DATABASE database_name RENAME TO new_database_name;`
* Update a value in a table: `UPDATE table_name SET column_name=new_value WHERE condition;`
* Add a primary key to a table: `ALTER TABLE table_name ADD PRIMARY KEY(column_name);`
  * Add a composite primary key to a table: `ALTER TABLE table_name ADD PRIMARY KEY(column1, column2);`
* Delete or drop a constraint (such as a primary key) from a table: `ALTER TABLE table_name DROP CONSTRAINT constraint_name;`
* Add a column as a foreign key in order to relate rows from a table to another one: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE REFERENCES referenced_table_name(referenced_column_name);`
  * Add a column as a foreign key with constraints to create one-to-many relationships: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE CONSTRAINT REFERENCES referenced_table_name(referenced_column_name);`
  * Set an existing column as a foreing key: `ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES referenced_table(referenced_column);`
* Add a unique constraint to a foreing key (to enforce one-to-one relationships): `ALTER TABLE table_name ADD UNIQUE(column_name);`
* Add a `NOT NULL` constraint to a column (such as a foreign key one): `ALTER TABLE table_name ALTER COLUMN column_name SET NOT NULL;`
* View or query data from two related tables with a `JOIN`: `SELECT columns FROM table_1 FULL JOIN table_2 ON table_1.primary_key_column = table_2.foreign_key_column;`
  * View or query data from three related tables, when one is a junction table, with a `JOIN`: `SELECT columns FROM junction_table FULL JOIN table_1 ON junction_table.foreign_key_column = table_1.primary_key_column FULL JOIN table_2 ON junction_table.foreign_key_column = table_2.primary_key_column;`

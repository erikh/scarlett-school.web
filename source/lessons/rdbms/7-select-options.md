# RDBMS Lesson 7: SELECT Options and Stanzas

This lesson covers things you can do with the `SELECT` statement. There are a
lot of parts of this statement, which is used to gather data from the database,
that manipulate the "shape" of the data you get back. In other words, you still
get the same data, just presented in differing forms, which can be useful for a
variety of circumstances.

Some of these stanzas (portions of a statement) are positioned at different
points in the `SELECT` syntax, so it's important to take note of where they are
used. Additionally, some databases may have more features available, so again,
it's always important to consult the documentation for your specific database
to get a full picture of what you can do.

## DISTINCT

The `DISTINCT` portion is used to isolate unique _values_ in a column. These
values are combinatory for all columns in the `SELECT` statement, similar to a
composite key. You can use `DISTINCT` to avoid reading multiple values that are
the same data, for example when you just want to know what all the unique
options are.

For example, consider our `people` table, with some slightly different data:

| id  | name       | age | phone        |
| --- | ---------- | --- | ------------ |
| 1   | Erik H     | 45  | 555-867-5309 |
| 2   | Scarlett H | 4   | 555-867-5309 |
| 3   | Rex H      | 70  | 555-867-5309 |

All of these records have the same phone number, and if we only cared about the
unique phone numbers in the table (for example, for a phone book), we might do
this:

```sql
SELECT DISTINCT phone FROM people;
```

Which would yield one result:

| phone        |
| ------------ |
| 555-867-5309 |

If we changed it to this:

```sql
SELECT DISTINCT name, phone FROM people;
```

We would get a very different result, which would return all rows:

| name       | phone        |
| ---------- | ------------ |
| Erik H     | 555-867-5309 |
| Scarlett H | 555-867-5309 |
| Rex H      | 555-867-5309 |

Sometimes in code it can be important to get unique values only. Additionally,
since the vast majority of high-performance database use happens over a network
connection, this can reduce the amount of data that is sent over it, since the
database has done all the work for you. Even further, general purpose
programming languages are generally not as fast as your database is at this.

## ORDER BY

`ORDER BY` is used to define order within your database. It sorts your data by
column. If you wish to sort by more than one column, separate them with a
comma. `ORDER BY` appears near the end of the `SELECT` statement, after any
`WHERE` clause.

It's important to understand that databases can, and do by default, present the
database rows in any order they choose, irrespective of keys. This is called
"natural order". Additional transformations like `ORDER BY` do take time to
work, so it's important to understand that in many situations, you will be
introducing a performance penalty, however minor.

Taking our table above, we may want to sort the people by age:

```sql
SELECT * FROM people ORDER BY age;
```

Which will present this table.

| id  | name       | age | phone        |
| --- | ---------- | --- | ------------ |
| 2   | Scarlett H | 4   | 555-867-5309 |
| 1   | Erik H     | 45  | 555-867-5309 |
| 3   | Rex H      | 70  | 555-867-5309 |

To reverse the sorting direction, we can use the `DESC` keyword (for _descending order_) to do that:

```sql
SELECT * FROM people ORDER BY age DESC;
```

| id  | name       | age | phone        |
| --- | ---------- | --- | ------------ |
| 3   | Rex H      | 70  | 555-867-5309 |
| 1   | Erik H     | 45  | 555-867-5309 |
| 2   | Scarlett H | 4   | 555-867-5309 |

Please also note that it does not affect the columns selected. For example, we
can do this without selecting the `age` column at all:

```sql
SELECT name FROM people ORDER BY age DESC;
```

| name       |
| ---------- |
| Rex H      |
| Erik H     |
| Scarlett H |

## LIMIT and OFFSET

`LIMIT` limits the number of rows that will be returned, and `OFFSET`
determines where to start. This can be useful when you want to present the
table in stages, such as pages of a website with 50 results per page.

These combine well with `ORDER BY` to get a _deterministic_ result, which is a
fancy word that says you always know what you're going to get -- no surprises.
Using our table above, let's use `LIMIT` and `OFFSET` to return each member of
the table, ordered by `age`, in separate queries.

```sql
-- offset is not required here. This will return only the youngest member.
SELECT name FROM people ORDER BY age LIMIT 1;
-- this will select row #2, by itself as there is a limit of 1
SELECT name FROM people ORDER BY age LIMIT 1 OFFSET 1;
-- this will select row #3, by itself as there is a limit of 1
SELECT name FROM people ORDER BY age LIMIT 1 OFFSET 2;
```

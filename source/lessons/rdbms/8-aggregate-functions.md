# RDBMS Lesson 8: Aggregate Functions

Aggregate functions combine the results of _many_ rows, or columns, into one. They are called _functions_, because similar to a programming language or functional mathematics problem, they can be combined to create new effects and calculations. This lesson goes into what aggregate functions exist, how to use them, and a few SQL-specific tweaks on the idea.

## Some simple aggregates

There are a lot of baked in SQL functions, and this course will not cover all of them. It is in your best interest to review the documentation for your database to get a better idea of what's available.

This section of the lesson simply goes into what the functions do, how we use them will be covered in the latter section.

Function names are **not** case-sensitive; they are simply presented here in all capital letters to conform to SQL documentation standards.

It is also important to remember that SQL functions generally apply to the columns after the row has been selected, for example a `WHERE` stanza in the query will affect the results. We will, in the latter half of this lesson, see
ways to mess with that, however.

### COUNT

`COUNT` counts rows that match your query's criteria. It is very simple to use, as it only takes a parameter for a list of columns to count, which can also be `*`, and is most often used that way. When a column is specified, it counts all the non-null column entries only.

Witness:

```sql
SELECT COUNT(*) FROM mytable;
```

Will count all the rows in the table.

```sql
SELECT COUNT(name) FROM people;
```

Will give you a count of all the rows in the table where `name` is not `NULL`.

### MIN, MAX and AVG

`MIN` and `MAX`, not surprisingly, reveal the minimum and maximum values of a column. `AVG` reveals the average value. This should typically be used with numeric columns, and you might run into surprising results with e.g. `VARCHAR` columns.

```sql
SELECT MIN(age) FROM people;
```

Gets the youngest age in the `people` table.

```sql
SELECT AVG(balance) FROM customers;
```

Selects the average outstanding balance from all the customers in, for example, a ledger. Note that negative values also work with aggregate functions.

### SUM

`SUM` computes the sum of all the values in a column.

```sql
SELECT SUM(balance) FROM customers WHERE balance > 0;
```

Reports how much in total your customers owe you. As previously mentioned, negative numbers also apply here.

### DISTINCT

`DISTINCT` is **just like** the `DISTINCT` `SELECT` operator, only it works as a function on a single column, instead of on the whole row.

```sql
SELECT DISTINCT(name) FROM people;
```

Report all the unique names in the `people` table.

## Ways to use aggregates

There are a few ways to leverage aggregate functions specifically that leverage stanzas in the `SELECT` statement. These stanzas are more or less made to be used with this type of function (and there are a few styles of SQL function that we just aren't covering) and have very little application outside of this usage.

### GROUP BY

`GROUP BY` groups rows by a column or set of columns. It is typically used with an aggregate function to organize the aggregate results by sets that match the specified column(s).

For example, here's a query that will select the number of people that have the same phone number, using our `people` table from earlier lessons.

```sql
SELECT COUNT(*), phone FROM people GROUP BY phone;
```

It's important to understand that `SELECT`ing the other columns in this table would break the grouping. For example, `SELECT`ing `name` would result in a different result because the query would be unable to group them appropriately.

### HAVING

`HAVING` is a lot like `WHERE`, but uses an aggregate function instead of a column for its comparison. It works well with `GROUP BY`, providing you with more control over the result.

For example, using our previous example, we can _constrain_ it, or reduce the results based on a condition. For example, let's look at only phone numbers which appear more than twice in the table, to identify people that share the same phone number.

```sql
SELECT COUNT(*), phone FROM people GROUP BY phone HAVING COUNT(*) >= 2;
```

## Fin

If you got this far, you've completed what we're going to teach you about SQL. There is still a vast array of contortions and manipulations you can do with databases; we encourage you wholeheartedly to review your database's documentation to learn more about these options.

Happy Hacking!

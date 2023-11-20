# RDBMS Lesson 5: Keys, Indices and Constraints

We've spoken a lot about keys already. Keys are the items used to look up values, or the data we actually want. In SQL and RDBMS databases, there are several types of keys. Keys and the concept of "indexes", or special internal tables where lookups are made faster, are also closely related, so we will examine those at the same time. Some keys also have _constraints_, which means they are restricted in some way. We will get into those near the end of the lesson.

## Changes to CREATE TABLE

Most of these statements and idioms can be supplied to the `CREATE TABLE` statement, to modify the function of the table. Some of these also have standalone statements that are issued directly to the database. It is important, however, to understand that you must either create the table with these features or use a statement called `ALTER TABLE` to change the table's behavior to leverage these features.

## Types of Keys

There are several types of keys, which we will see forthwith, that we can use to empower our lookups. It is important that you understand there are restrictions on all of them, and that those restrictions add to their power.

Keys by and large cannot be _NULL_, as there would be no way to look them up. That is a commonality amongst all of them.

### Primary Key

A primary key is the "primary" way to look something up. Whether this be a user ID or the identifier for a piece of data, it is always the one record you can use to look something specific up. As a result:

-   Primary keys are automatically unique in the context of the table, meaning there cannot be two of them in separate rows.
-   Primary keys cannot be _NULL_.
-   There can only be one primary key in a table.

Generally, primary keys are usually only one column, but some databases allow the primary key to be a combination of multiple columns, called a "composite primary key". I don't recommend using composite primary keys without good reason. If you must, please consult your database's documentation for further details.

### Unique Key

A unique key is similar to a primary key, only it is not the "primary" way to look something up. Use this to enforce uniqueness amongst tertiary data. For example, a user ID that also has a unique username, would be a good place for a unique key.

Like primary keys, they follow the same rules of _NULL_ exclusion and uniqueness, but there can be more than one in a table, and they can span multiple columns, where uniqueness is the combination of the column's values, for example, these are unique values as a part of a single key:

| address       | city        | state |
| ------------- | ----------- | ----- |
| 123 Stark Way | Portland    | OR    |
| 123 Stark Way | Minneapolis | MN    |

Even though the addresses are the same, because the key spans city and state as well, and the city and state are different, there is still uniqueness here. If there were two records for "123 Stark Way, Portland, OR", the constraint would be violated.

Unique Keys are usually used to enforce that you only have one instance of something, like above, if someone were to move out of this address and another person in, you might accidentally create two copies of the same address. A unique key would tell you that you have made a mistake, and must re-assign the new person to the existing address. This has major advantages when it comes to tracking data over time.

### Foreign Key

A foreign key is a key that lives in another table, typically used for joining data in two tables. It is often a primary key in another table, but doesn't have to be. The important thing about a foreign key is, after definition, you may not insert data into the table it's defined in until the data exists in the foreign key table.

Let's look at our address example again. If there was no record for "123 Stark Way, Portland, OR" in the table, a person who wished to live at that address could not refer to it without inserting it first.

Foreign keys can slow your database access down on write, but also speed it up on read. It largely depends on how they are used. Use of it can vary between companies, as database support can be limited depending on implementation, as well as the access patterns programs use to add data may present problems with them. Use them wisely and sparingly.

## Types of Constraints

We've already seen a few types of constraint, the `UNIQUE` constraint, as well as the `FOREIGN KEY` constraint. The `UNIQUE` constraint says "all records in this column must be unique", while the `FOREIGN KEY` constraint says "this record must already exist". There are other kinds of constraints; we will cover one of them, but to get a full picture, consult your database's documentation.

### CHECK Constraint

A CHECK constraint is a programmatic constraint that is only supported by a few databases, notably PostgreSQL. It allows you to specify a `WHERE`-like clause which is run on every `INSERT INTO` and `UPDATE` statement processed by the database. If the constraint is violated, the query refuses to run.

Example:

```sql
CHECK(address != '' AND state != '' AND city != '')
```

This ensures that no address, state, and city can be empty text when inserting into an addresses table.

## CREATE INDEX Statement

An _index_ is similar to an index in a textbook. It provides your database with a faster way to look up certain terms. Keys are already given an _implicit_ index, meaning that they are automatically given a quick map to look up each individual key to a set of values. An index that is created manually just also says that these values are important too.

```sql
CREATE INDEX <index name> ON <table> (<columns>);
```

This will create an index with a specific name for a given table and it's given columns. For example, in our addresses table, it may be very useful to look up addresses up by the city and state they are residing in. For this case, we could:

```sql
CREATE INDEX city_state ON addresses (city, state);
```

Which will improve the lookup performance for a query like this:

```sql
SELECT address FROM addresses WHERE state = 'OR' and city = 'Portland';
```

Yielding all the stored addresses in Portland, OR.

Indexes can also be frequently given a UNIQUE constraint, meaning that they will also have the properties of uniqueness. Also note that adding an index adds time to the `INSERT INTO` and `UPDATE` operations, as the index must also be updated when the table is. Creating an index enhances _lookup_ performance, not _write_ performance.

## EXPLAIN Plan

An `EXPLAIN` plan is simply the way the database intends to look up your query. It is typically used for `SELECT` statements, but sometimes can be applied to other statements such as `UPDATE` or `INSERT INTO`. It is used for gauging performance of a query. It is not important to get into the weeds describing how lookups work, as that is very specific to the database product, but it is important to know it exists as most of these options alter them in some way. Just being aware it's a "thing" will go a long way!

## Assignment

Look at the database documentation on https://sqlite.org and provide:

-   A `CREATE TABLE` statement for each scenario:
    -   Create a primary key for your table
    -   Create a unique key that exists alongside the primary key. Insert two of the same thing into it and see what happens.
    -   Create a "composite" unique key (more than one column). This may require different syntax, so be aware! Try to insert things into it to verify.
    -   Create two tables, with a foreign key joining them. Insert things into the table taking the foreign key, without appropriate data in the other table, to test your theories.
-   Create an index for one of your tables. Then play with select queries that use the index, and show the difference in the `EXPLAIN` plans.

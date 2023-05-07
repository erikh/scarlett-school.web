# RDBMS Lesson 3: SQL Basics

As mentioned prior, databases are accessed with a special language called
"Standard Query Language", or SQL for short. This language is used for all
operations in a database.

## SQLite

One database implementation is called _SQLite_. It is a very simple
implementation designed to run anywhere, not just on servers. It is extremely
likely that parts of your phone and web browser depend on it. Today, we are
going to use it to learn SQL.

Find a copy at https://sqlite.org:

- Windows users can find a copy of the SQLite shell, which you need to
  interoperate with it, at https://sqlite.org/cli.html
- Linux users can use their package manager: for Debian, Ubuntu, Pop OS and
  similar, you can use:
  - `sudo apt install sqlite3 -y` to install a copy.
  - Others will need to consult their manual for their package management
    system. It may already be installed, too!
- Mac OS X users already have a copy of `sqlite`, the shell used to talk to
  SQLite databases. Open it in your terminal.

Then type:

```bash
sqlite
```

If that does not work, try:

```bash
sqlite3
```

It will put you into a command-line interface with a new prompt. This will
allow you to enter queries. Nothing will be saved, so when you exit (use
`.quit` to exit), you will lose everything.

## Queries

The statements you enter into the prompt are called "queries". That is because,
technically, you are _asking_ the database to do something. It _can and will_
refuse to do some things.

Queries are always terminated with a semi-colon (`;`), which means to send it
to the database for processing. Hitting enter is mostly for your own benefit
without the semi-colon, adding new lines (when you hit enter) serve to make
things clearer to read, for example. The SQL engine does not care.

What follows are a lot of basic query statements you need to know to use a
database. You should try them in SQLite. It will be important to memorize these
eventually, but just focus on trying them right now and getting some experience.

Query statement syntax is usually expressed in ALL CAPITAL LETTERS, whereas
user-supplied data is specified in lower-case. This helps you distinguish what
you provide, and what is required of the SQL engine. Note that this distinction
is only used in documentation; the SQL engine is not case-sensitive when it
comes to statements, so, for example, `create table` and `CREATE TABLE` are the
same when you type it in.

### CREATE TABLE

The bad news is that this statement is pretty complicated. The good news is
this is the most complicated statement in the session. :)

`CREATE TABLE` creates a database table. It has a syntax that looks a bit like
this:

```sql
CREATE TABLE <tablename> (<column definitons, separated by commas>);
```

The column definitions look like this, each one separated by commas:

```
<name> <type> <properties>
```

The final one does not have a comma trailing it. Also, there are other
attributes you can use instead of columns. We'll look at those much later.

#### Example:

```sql
CREATE TABLE people (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  name VARCHAR NOT NULL,
  address VARCHAR,
  phone VARCHAR
);
```

This creates a table called `people` which has four columns. `id` is a number
(integer), cannot be _NULL_, is a "primary key" (we will look at this later),
and automatically increments in value as more rows are inserted, meaning you do
not have to provide this data when you add a row. Name also cannot be _NULL_,
but it is text, not a number. The other two fields are also text, but can be
_NULL_. Note that there is no trailing comma after the `phone` definition.

### INSERT INTO

INSERT INTO statements insert a _new_ row into the table. They have the syntax:

```sql
INSERT INTO <tablename> (<columns, separated by commas>) VALUES (<values, separated by commas>);
```

The values count must be the same as the columns count, and `varchar` types
must be quoted with 'single quotes'. "Double quotes" _will not work_. Numbers
must be bare, with no quotes.

#### Example:

Using our `people` table we created, here's an entry into the database:

```sql
INSERT INTO people (name, address, phone) VALUES ('Erik', '1600 Pennsylvania Ave.', '555-867-5309');
```

As mentioned before, `id` will automatically fill in.

### SELECT

SELECT statements are quite complex, but we'll only be looking at some basics
here. SELECT statements ask the database for data.

The syntax is as follows:

```sql
SELECT <columns> FROM <table> [optional selectors];
```

`columns` is a comma-separated list of columns, or an asterisk (`*`) for _all_
columns. The optional selectors do not need to be provided, and are quite vast,
so we will only learn one today, called `WHERE`.

#### Example:

Assuming our `people` table has this data:

| id  | name | address                | phone        |
| --- | ---- | ---------------------- | ------------ |
| 1   | Erik | 1600 Pennsylvania Ave. | 555-867-5309 |
| 2   | John | 1 Francis Way          | NULL         |
| 3   | Joe  | NULL                   | 123-456-7890 |

```sql
SELECT * FROM people WHERE id = 1;
```

Will select the record with "Erik" as the name, but also displaying the `id`,
`address`, and `phone`. If it changes to `2` or `3`, or "John" or "Joe" would
be selected, respectively.

If there was no `WHERE` clause, the whole table would be returned.

```sql
SELECT name FROM people WHERE phone = '555-867-5309';
```

Would just return "Erik". No other data.

Likewise,

```sql
SELECT name FROM people WHERE address IS NULL;
```

Returns "Joe". Note that we did not use `=` here. You cannot "compare" with
_NULL_, only identify it. This is an easy mistake to make when you're new, and
has serious consequences in real environments.

### UPDATE

UPDATE statements modify existing records. UPDATE statements are two parts: a
series of update commands, and a "constraint" which tells it what to update.
All records that match the constraint will be updated; if no constraint is
supplied, _it will update the entire table_.

Syntax:

```sql
UPDATE <tablename> SET <update statements, see below> <constraints>;
```

The update statements are a set of `column = value` pairs to update. Example:

```
name = 'Bob', address = '123 Smith Ave'
```

The constraint can be a few things, but like SELECT, we're going to stick to
WHERE today. For example:

```
WHERE id = 2;
```

#### Full Example:

```sql
UPDATE people SET name = 'Bob', address = '123 Smith Ave.' WHERE id = 1;
```

### DELETE FROM

DELETE FROM statements are similar to update statements, only they remove data,
not update it. So, they do not take an update settings clause, but take a
constraint. Without a constraint, they will _delete all the data in the table_.
This is a common source of many job openings.

Syntax:

```sql
DELETE FROM <tablename> <constraint>;
```

#### Example:

```sql
DELETE FROM people WHERE id = 3;
DELETE FROM people WHERE name = 'Erik';
```

### DROP TABLE

DROP TABLE is the opposite of CREATE TABLE. It removes a table from the database.

Syntax:

```sql
DROP TABLE <tablename>;
```

#### Example:

Since our lesson is done, try this to remove the people table:

```sql
DROP TABLE people;
```

## Assignment

- Create the `people` table.
- Insert the data in the `SELECT` tutorial into the `people` table and show
  your statements.
- Using the `people` table, how would you select "John" by his phone number?
- Using the `people` table, how would you change everyone's address to "419
  Patch Ave."?
- How do you delete all the data in the `people` table?
- How do you remove the `people` table from the database?
- How do you exit the `sqlite` shell?

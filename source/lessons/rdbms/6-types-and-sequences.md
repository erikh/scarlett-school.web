# RDBMS Lesson 6: Types and Sequences

As we've seen in our last few lessons, all database columns have a _type_. This
type determines what kind of data can be held in the column, for example
`INTEGER` holds numbers, and `VARCHAR` holds text. Let's look today at some
other types which can be used in the place of those, so we can expand our
knowledge.

We'll also be looking at a special kind of database construct called a
_sequence_, which guarantees us unique numbers. This concept is very important
for storing data, and we've already been using them a bit without realizing it.

## Types

Types for SQLite are described [here](https://www.sqlite.org/datatype3.html)
and are a significantly limited view of all database types, due to SQLite's
small nature. Also note that SQLite will perform what's called "type affinity",
which is described in the documentation, but it means that types will
automatically be converted if possible based on the type the column expects.
That means, if you pass a `'1'` (a `VARCHAR`) to an `INTEGER` column, it will
be converted to an integer `1`. This is a feature unique to SQLite, so it may
gum you up a bit.

### Sub-types

Subtypes specify constraints on the type, notably with regards to the size of
data it can store. These values are held in parentheses `()` after the type.
For example, `VARCHAR` is limited to an upper, fixed bound of size it can hold,
but `VARCHAR(100)` will only hold 100 characters, maximum.

This plays out in integer types as well; we'll see with the `DECIMAL` type that
sometimes there is more than one parameter inside these parentheses, which is
separated with a comma.

### DECIMAL & NUMERIC

`DECIMAL` is a dotted-notation decimal number, such as `1.25`. It derives from
a intrinsic type called `NUMERIC`, which amounts to all numbers in SQLite, and
takes two parameters: the left-hand side of the mantissa (the dot `.`) and the
right hand side. For example, `DECIMAL(10,2)` might be suitable for storing
financial values (but see our warning below!) for up to a billion dollars, with
cents as well.

**IMPORTANT NOTE**: Computers deal with what's called "floating point numbers",
which means they conform to a standard called IEEE 754, which defines how these
numbers should work, but mostly focuses on storing and calculating them, since
computers generally deal with whole numbers. Notably, mathematics surrounding
fixed values of decimal points tend to have surprising results due to the way
computers tend to work. Therefore, it is **strongly advised** that you do not
store decimal values in a database, and instead store the whole value (e.g.,
multiply by 100) and then divide by 100 to get the decimal value later. This
will result in more accurate math, and you won't lose any money. :)

### ENUM

`ENUM` types are short for "enumeration", which means that a fixed list of
pre-declared items may be used. For example:

```sql
CREATE TABLE colors (
  id integer primary key autoincrement,
  name ENUM('red', 'green', 'yellow', 'blue', 'orange') not null
)
```

In this table only the names listed will be allowed in the `name` column.

### TEXT & BLOB

The `TEXT` type is like an unbounded `VARCHAR` which usually has a limit of
4096 characters, but depends, again, on the database implementation. It stores
characters, not binary data, which means the text must conform to standards
like "Unicode", which means only certain binary sequences are legal.

`BLOB` standards for **B**inary **L**arge **Ob**ject and like you may suspect,
is not limited to these interpretations. If you need to store, for example, a
computer image in your database, use `BLOB`, not `TEXT`.

## Sequences

Sequences are special database objects -- like tables and indexes -- that allow
you to always get a unique piece of data from them. This can be useful when
creating lookup keys for example, or anytime you need a unique integer.

Note: these don't work on SQLite! Just use `AUTOINCREMENT` in your `CREATE
TABLE` code.

To create a sequence, we use the `CREATE SEQUENCE` statement:

```sql
CREATE SEQUENCE my_sequence;
```

Then, depending on the database, we can do things like this:

```sql
SELECT nextval(my_sequence);
-- or
SELECT my_sequence.nextval;
```

Hope that helps!

## Assignment

- Describe how you would store a non-money floating point number of 10
  positions on the left and 5 on the right.
- Does varchar have an upper limit for SQLite?

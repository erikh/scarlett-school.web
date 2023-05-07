# RDBMS Lesson 4: Joins and Sub-Selects

Today's lesson covers the concept of a _join_, and also _sub-selects_. A join
is when two tables are related by _foreign_ data, that is, data that doesn't
exist in the current table. A sub-select is used when you want to use data in
your current table to trigger selection of data in another way, and combine the
results; this may be from a foreign table or not.

We briefly covered joins in the assignment from lesson 2: when you related the
people to their parents, you were performing a _join_ in your head. Sub-selects
are a little different, and require you to think a little differently about
your data, but we'll cover why they're useful.

## Preparation for this Lesson

Download [this file](/data/rdbms/4-joins-and-subselects.sql). Then, import it
into sqlite:

```bash
sqlite test.db < 4-joins-and-subselects.sql
```

Note that you may need to use `sqlite3` instead of `sqlite`. This will create a
file called `test.db` in the current directory; you may delete it after the
class. After importing the SQL script, re-open the database with:

```bash
sqlite test.db
```

## Types of Joins

Joins always consist of only _two_ tables. If you need to compare more than two
tables for a join, you will use _multiple joins_. How to do this will become
apparent later, as we get into things.

There are several types of joins:

-   Inner Join: This is a join that compares rows in two tables based on the
    criteria, and any criteria that matches will be returned.
-   Outer Join: This is a join that compares rows in two tables based on the
    criteria, and any rows that match the criteria are returned, but _also_ rows
    that matched no criteria are also returned. These can be done associative to
    the "left" or "right" table, which just refers to the order in which the
    tables were provided to the SQL statement.

There are other, more subtle types of joins -- for example a _cross join_ or _natural join_ --
which we will not cover in here. Please refer to the manual at
https://sqlite.org if you're more interested in these later.

Joins are principally the domain of the `SELECT` query, you will not see them
often, or at all, in other queries.

### Inner Join

As mentioned, an inner join is a join that compares rows in two tables based on
the criteria, and returns those that match.

But, we've already looked at the `WHERE` clause in `SELECT` queries. How is
this different? The inner join compares _all rows in both tables to each other, and returns those that match_. You can, and will often use `WHERE` to further scope your joins.

If we examine the schema of the data in the SQL script provided to you with the
SQLite-specific `.schema` statement (no `;` is needed for the special
statements), you can see that there is a table for `people` and a table for
`phones`. We can assume, in this modern day and age, by and large people will
each have their own phone number. Each `phone` is associated with a
`people_id`, which is related to the `id` in the `people` table. We can use an
inner join to combine the two results.

An `INNER JOIN` statement is a part of a `SELECT` query, and leverages the `ON`
statement to describe the conditions. We will be leveraging "table aliasing",
which just means giving the table a special, temporary name just for the time
the query is running. To use it, we use the `AS` keyword.

```sql
SELECT * FROM people AS a INNER JOIN phones AS b ON a.id = b.person_id;
```

We should get results that look something like:

| id  | name    | age | person_id | phone        |
| --- | ------- | --- | --------- | ------------ |
| 1   | Erik H  | 45  | 1         | 555-867-5309 |
| 5   | Chris M | 52  | 5         | 555-123-4567 |
| 10  | John K  | 72  | 10        | 123-456-7890 |

Now, we don't need those ids, so let's carve them out by specifying columns to the `SELECT` query:

```sql
SELECT a.name, a.age, b.phone
FROM people AS a
  INNER JOIN phones AS b ON a.id = b.person_id;
```

And we should see something slightly different, but basically the same data:

| name    | age | phone        |
| ------- | --- | ------------ |
| Erik H  | 45  | 555-867-5309 |
| Chris M | 52  | 555-123-4567 |
| John K  | 72  | 123-456-7890 |

We can also do multiple inner joins, for example when we have tertiary
relationships that must be calculated. In your schema there is a table called
`addresses`, to account for when multiple people have the same address. To
model this, we created a third table, called `people_addresses` (database
engineers like it when you indicate the relationship of a table in the name)
that accounts for this, relating a person to an address, and doing it for each
person, even if the address is the same.

To leverage this we simply repeat the `INNER JOIN` statement in the `SELECT`:

```sql
SELECT a.name, a.age, c.address, c.state
FROM people AS a
  INNER JOIN people_addresses AS b ON a.id = b.person_id
  INNER JOIN addresses AS c ON b.address_id = c.id;
```

You should see a listing of all the people in the `people` table, and their
age, addresses and the state they live in. You can see that numerous people
have the same address. We don't need to `SELECT` the data in the
`people_addresses` table, because it's only used to relate things as a part of
the `INNER JOIN`. This is commonly called a "join table" since it has no
purpose to communicate data, only to relate it.

### Outer Join

An outer join is just like an inner join, only that it _also_ returns all rows
that _don't match anything_. It will return either data from the "left" or the
"right" table, which is just an indicator of the two tables you specify to
join.

Let's look at the `phones` table again. We'll observe that when we did our
`INNER JOIN`, we only got three rows back, and while we were doing the
`addresses` work, we got a lot more, because there are a lot more than 3 names
in the `people` table. So why didn't we get back _all_ of the names? Because
the `INNER JOIN` only matched the items that had entries in `phones`, of which
there were only three. What if we wanted to see all the names, even those who
don't have phones? That's what an `OUTER JOIN` is for!

So, to get all the names, regardless of whether or not they have a phone
number, we can use an outer join. We'll use a `LEFT OUTER JOIN` first, to show
the relationship between left and right.

```sql
SELECT a.name, b.phone
FROM people AS a
  LEFT OUTER JOIN phones AS b ON a.id = b.person_id;
```

Voila! While it doesn't show data for the `phone` column for many entries, that
value is _NULL_, the special value that means _nothing_.

So what's the difference between a `LEFT OUTER JOIN` and a `RIGHT OUTER JOIN`?
Well, that simply indicates which table is the _authority_, and what records
will be taken when they don't match. Let's look at this twice, for
completeness sake. First, let's write our `LEFT OUTER JOIN` as a `RIGHT OUTER
JOIN` and see the difference:

```sql
SELECT a.name, b.phone
FROM people AS a
  RIGHT OUTER JOIN phones AS b ON a.id = b.person_id;
```

It works a lot like the `INNER JOIN`, doesn't it? That's because the `phones`
table has no records that don't match anything in the `people` table. To
complete this, let's switch the order of the _tables_ so that `phones` comes
first (on the left), and `people` comes second (on the right).

```sql
SELECT b.name, a.phone
FROM phones AS a
  RIGHT OUTER JOIN people AS b ON a.person_id = b.id;
```

There you go! You may notice the order of rows returned was different; that's
because the `phones` table was evaluated first, and then `people` table second.
This is not something to rely on (databases aren't required to return things in
a specific order unless told to), but is a useful thing to know.

## Sub-selects

Sub-selects are similar to joins but ultimately are something different.
Instead of doing things simultaneously, the sub-selects are performed first,
put into what more-or-less amounts to a temporary version of a table, and then
the rest of the query uses them as if they were a table. If that sounds
confusing, then keep reading.

To initiate a sub-select, you can usually surround them in parentheses (`()`)
in appropriate spots where you would use a table, but this is a little
here-nor-there, so consult your database's documentation. You can also use the
`AS` keyword to give them a temporary name, just like with table aliases.

In your schema, there should be a table called `parents`, this indicates the
parents a person has, relating back to the `people` table. There are ways to do
this with joins, but we are going to use this with a sub-select for example
purposes.

Each entry in the `parents` table has a `person_id`, indicating the person that
has a parent, and the `parent_id`, that relates to the person in the `people`
table that is the parent. Since both columns refer to the same table, it makes
sense to use a sub-select here to keep things clearer (for some value of
"clear").

```sql
SELECT a.name AS name, b.name AS parent
FROM
  people AS a,
  (
   SELECT person_id, parent_id, d.name
   FROM parents AS c
     INNER JOIN people AS d ON c.parent_id = d.id
  ) AS b
WHERE a.id = b.person_id;
```

Let's break down what is happening, in order:

-   The sub-select (the part in the parentheses) runs first. It selects all the
    parents that have a name, using an `INNER JOIN`, from the `parents` table
    against the `people` table. It puts this in a temporary place called `b`.
-   The outer select runs. It selects all people, and uses the `WHERE` clause to
    only match names which match a person in `b`'s `person_id` field,
    constraining the view to only those people who have parents.

That's it!

## Assignment

-   Explain the difference between an `INNER JOIN` and an `OUTER JOIN` using your
    own words.
-   How would you write the sub-select with multiple joins? Is it even possible?

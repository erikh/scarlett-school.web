# RDBMS Lesson 2: Tables

Databases are composed of tables. A table is a linear arrangement of rows & columns, similar to a grid. If you've ever used Excel or Google Sheets, each sheet is a kind-of free form table.

In a database, tables have what's called a _schema_, which is the way the table is organized. This is primarily a description of the table, by way of its _columns_. Each column has a name, a data type, and other properties that determine how it functions. The table itself also has a name, and many tables can exist in a database, in fact, the relational nature of a RDBMS demands it, as we'll see later.

As previously mentioned, tables consist of rows and columns. Columns are named, live on the vertical axis, and describe the different kinds of data in the _rows_, which live on the horizontal axis. Rows are _keyed_ by one or several columns, which means that is how they are looked up. Each row is an expression of the columns in the schema. Row members may either be the data type expressed in the column, such as a number or text, or _NULL_, which means that there is no data.

Example:

| `id` | `name` | `address`              | `phone`      |
| ---- | ------ | ---------------------- | ------------ |
| 1    | Erik   | 1600 Pennsylvania Ave. | 555-867-5309 |
| 2    | Joe    | 1 Francis Way          | NULL         |

In the example, Erik has an ID of 1, an address of "1600 Pennsylvania Ave.", and a phone number of 555-867-5309. Joe has an ID of 2 and no phone number, indicated by _NULL_.

When tables have a relationship, they are _joined_. These two tables are joined to express multiple people with the same address.

| `id` | `name`  | `address_id` |
| ---- | ------- | ------------ |
| 1    | Erik    | 2            |
| 2    | Joe     | 1            |
| 3    | Barbara | 1            |
| 4    | Spot    | 2            |

| `id` | `address`              |
| ---- | ---------------------- |
| 1    | 1 Francis Way          |
| 2    | 1600 Pennsylvania Ave. |

The `address_id` in the first table is joined against the `id` in the second table. This relates 2 addresses to 4 people. This is useful for a variety of reasons that we will see later.

## Assignment

Given the following two tables:

| `id` | `name`   |
| ---- | -------- |
| 1    | Erik     |
| 2    | Sean     |
| 3    | Scarlett |
| 4    | Tom      |
| 5    | Darcy    |
| 6    | Max      |

| `name_id` | `parent_id` |
| --------- | ----------- |
| 2         | 4           |
| 2         | 5           |
| 3         | 1           |
| 3         | 6           |

Indicate how you might determine a family lineage, and then describe who is related to whom.

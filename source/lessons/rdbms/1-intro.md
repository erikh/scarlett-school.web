# RDBMS Lesson 1: Intro

This course covers databases. You may not be aware, but in programming, the
data you enter into your devices must go _somewhere_. It must be organized, so
it is easy to retrieve and modify. This is typically done with a database.
While your filesystem is arguably a database unto itself, we will be focusing
on a specialized database, advanced in nature to encapsulate all kinds of data
that can be reasoned about in what's called a "relational" manner, or that it
focuses on the relationships between the different kinds of data. This common
style of database is called a "RDBMS", or "**R**elational **D**ata**B**ase
**M**anagement **S**ystem".

## What is a Database?

A database is usually a series of recorded information, made trivial to find
and modify without replacing the whole data set. Databases have many physical
analogues in the real world.

Take, for example, going to the supermarket. You probably have a list of the
things you need to buy, and while shopping, a cart or basket of some kind. The
list is the set of keys. For example, you may say "Kool-Aid", but actually put
"Crystal Light" in your cart. You know in your head that those things are
equivalent to you. This makes "Kool-Aid" the key, or the method you used to
find the data. The value is "Crystal Light", or what the key actually
_represents_. This is the basics of key/value storage.

Sometimes keys are numeric, and sometimes, they are words. It depends on the
context; think about a numbered list in a meeting. Each item is already on the
paper so you can say, "Refer to item 10" and everyone knows. This is a basic
database principle at work.

## Types of Databases

As previously mentioned in passing, a filesystem is a kind of database; the
notion that filenames are the keys, and the data contained within those files
is the value, is how that can be interpreted. In practice, it is much more
complicated than that, but that's a good way to look at any computer
filesystem.

What we have discussed above is called a "key/value" store, where one key is
associated with one value. This is the most simple kind of database, as well as
the most common, and easiest to use.

Spreadsheets, such as Microsoft Excel, or Google Sheets, are also databases,
just more visual, and less formal. You can still perform calculations on the
data related to what "cell" it lives in, such as "A10" or "B5", calculate sums
of several cells by using the `=sum(A10:A15)` functionality, for example. These
are also database principles at work.

The databases we will be discussing are somewhat more advanced, and very
different, but critical to doing programming with a computer; they are
everywhere. They are called "Relational" databases. These databases associate
one _or many_ keys with _multiple values_. The software used to power them is
quite advanced, and numerous servers can be dedicated just to running them in
larger cases, such as with websites like Facebook. Other times, they run in
simple situations such as on your cell phone, because they are the most
efficient way to represent your data.

## Example

Let's say you want to track some people and their personal information. You
might want to track a multitude of fields:

Name, E-Mail Address, Physical Address, Phone Number, Birth Date

In a relational database, these are independent items.

In a key/value store, you only get one key, and one value. You must write a
complicated program if, for example, you want to find the addresses of all the
people named "Erik". A relational database makes this easy, as there is no
initial distinction between the keys and the values.

So, to search for the email addresses of all the folks born on New Year's Day,
you might ask:

```sql
select email from people where birthdate = '1/1/1980';
```

And the emails would come back; _all_ of them that met the criteria. This could
be hundreds of thousands of emails, or none. This is the power of the
relational database.

The language used to ask the question above is called "Standard Query
Language", or SQL for short. Sometimes people pronounce it like "sequel". Most
modern RDBMS systems use SQL, variants differ between all of them, but there
was a standardization effort in 1992 that most conform to, so there are enough
similarities that this course will be able to teach you how to use all of them
at once.

## RDBMS Products

There are numerous RDBMS products. I will cover 3 popular ones.

- MySQL is a server that powers Facebook, and many other large systems. It is
  popular for its performance and flexibility.
- SQLite is an embedded database, which means it's small, and runs in the
  program that's actually using it, instead of by itself. SQLite runs in your
  web browser, your cell phone, all over the place. There are popular
  extensions to run encrypted versions which power security tools like
  "WhatsApp" and "Signal".
- PostgreSQL is a database focusing on features, programmable flexibility, and
  correctness. It is a server like MySQL, but not as popular, even though it is
  very powerful.

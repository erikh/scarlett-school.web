# Unix Lesson 2: The Shell

The "shell" is a command-line interface, meaning, to interact with it, you type
into it, hit enter, and it responds back with results. It is what you see when
you use the "Terminal". It is a very important part of using Unix properly.

There are several kinds of shells. We are going to focus on the "Bourne" shell,
named after the Unix pioneer Stephen R. Bourne. Bourne shells start with a
prompt, that usually contains the working directory, and a dollar sign to end
the prompt, like so:

    /foo/bar$

All things that you type will follow the `$`. After you are done entering your
command, hit enter. When the shell is ready for more input, it will show the
prompt again.

## Commands & Parameters

The first word in the input to a shell is called a "command", and any words
that follow it are "parameters" or "arguments"; they mean roughly the same
thing. Parameters are separated by spaces. If you need to add a space _to_ a
parameter, use single or double quotes, 'like so'.

### Examples

`cat` is a program that accepts filenames as parameters, then prints them to
the screen. Our program, `cat`, is the command, and the filenames are the
arguments.

-   `cat foo.txt`
-   `cat bar.txt foo.txt`
-   `cat 'file with spaces.txt'`

## Meta-Characters

Since you can use the shell to write programs, the creators of the shell used
special symbols, called "meta-characters", to make programming easier by typing
less. These characters are nearly all non-alphanumeric (meaning, not a-z, A-Z,
or 0-9) characters, including nearly all math symbols and even things like
exclamation points! It's important to know because they can trip you up, but we
will learn this at a later point.

## Programming & Scripting

Shell "scripts" are programs that are stored in files that use the shell
automatically. We will talk about these more later, just be aware when writing
these scripts that you can also do much of it at the command-line interface as
well. Sometimes this knowledge can be very handy!

An example of a program to use at the CLI (command-line interface,
abbreviated), is a "program" that adds the file extension (the part of the end
of a file name to determine what type it is) `.foo` to each file, then prints
it without renaming it, in the working directory:

```
for i in *
do
  echo $i.foo
done
```

Since a semicolon (`;`) is equivalent to telling the shell enter was hit in
most cases, you can also do:

```
for i in *; do echo $i.foo; done
```

And it will do the same thing in one line. Neat, eh?

## Assignment

For each line, indicate the command and each parameter. Number the parameters.

-   `cat foo.txt`
-   `cat bar.wav foo.txt`
-   `cat 'i love the shell.txt' foo.txt`
-   `foo bar.goo quux.baz`

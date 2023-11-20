# Unix Lesson 9: Scripting

A script is a program, written in the same language you use to run your shell. It's like if you typed all of those shell commands every time you ran the program. Lots of the tools you depend on in Unix, are just scripts.

It helps to have already taken the JavaScript programming class before taking this lesson.

## Turn any file into a script

Scripts are just special text files, they don't need a special program other than the shell to execute. They use a special statement at the beginning of the very first line in the file. This tells Unix it is a script. This is called the "hash bang", because of how it looks: `#!`. This is then followed by the name of the script's shell, or _interpreter_.

The shell you use is called `/bin/sh`. Here is a basic shell script:

```bash
#!/bin/sh

echo "Hello, world!"
```

This should be saved to a file called `hello.sh`. After, run the command to make it executable:

    chmod 700 hello.sh
    ./hello.sh

The first command makes it executable. The second runs it. You should see:

    Hello, world!

On the standard output. There are lots of commands which are built-in to your shell. This lesson goes into a few of them.

## Functions

Functions are repeatable pieces of code. Refer to the programming course for more. Example:

```bash
myfunc() {
  echo "This is my function!"
}

myfunc
```

This defines a function called `myfunc`, then invokes it. Note the inclusion of `()` during definition, and the lack during invocation.

## Loops

There are two kinds of loops: `while` and `for`.

```bash
while read foo
do
  echo $foo
done
```

The while loop runs a command, in this case, `read foo`, which reads a line of standard input, and places it in a variable called `$foo`. If it exits with a status code of `0` (more on this later), it executes the loop once. When there is input, the `echo` repeats it back. Press ^C (control+C) or ^D (control+D) to terminate the loop.

```bash
for i in one two three
do
  echo $i
done
```

A for loop takes each item on the right side, puts it in the variable, in this case `$i`, and executes the loop body, once. This prints:

    one
    two
    three

Variables are defined with `=`, you may also use `local` in some instances (functions) to keep variables from being globally available. Variables that are global are available everywhere. To get at the data in a variable, use `$<word>` to get at the name. For example, for variable `x`, you want to use `$x`. Example:

```bash
#!/bin/sh

x=1
echo "x is $x"
```

## Command Substitution

In one case, you can use commands like variables. To do this, use backticks \`\` or the parentheses in a variable like so: `$(echo foo)`. This will return "foo" to be used like a piece of data. Example: (`expr` is a command to evaluate math)

```bash
#!/bin/sh

echo 2+2 is $(expr 2 + 2)
echo 2+2 is `expr 2 + 2`
```

Same thing.

## Environment Variables

There are dormant variables in every shell. One is `$SHELL`, which has the shell that is currently running. This is called the shell's environment. You can print it by typing:

```bash
env
```

These values are always available; some don't change, others, like `$PWD`, change on events like when you change the directory. You can also add your own:

```bash
export MYENV=hi
```

The `export` keyword does that. Sometimes programs expect things or change behavior when your environment is altered. Watch out!

## Exit Status

All programs have an exit code, or exit status. It is available by examining `$?`, right after execution. A `0` exit code indicates success, while non-zero exit codes indicate some form of failure. Depending on the code, it may indicate different failures. In boolean operations, `0` is `true`, and non-zero is `false`.

## Comments

If you want to leave comments, messages about your program which aren't a part of the program, prepend these with a hash symbol (`#`). They continue until end of line. Example:

```bash
#!/bin/bash

# a special message
echo "special!" # pretty neat, eh?
```

## Assignment

-   We already looked at `$SHELL`. Name some other environment variables, and their purpose. Use the manual or Google to help!
-   Print 0-9, one number each line.

What does this program do? How does it work?

```bash
#!/bin/sh

for i in $(cat /etc/passwd)
do
  echo record "$i"
done
```

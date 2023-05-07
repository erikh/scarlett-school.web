# Unix Lesson 7: Processes

Processes are the running programs that are currently being executed by the
operating system. Each process has a unique identifier called a "process ID",
or "PID" for short. This is an increasing number that "rolls over" after
reaching an upper limit.

Process ID #1 is special. It belongs to a program called `init`, which is
responsible for the supervision of all the other, "child" processes. Processes
are arranged in a tree of parent/child relationships.

To view the processes that are the children of your shell:

    $ ps

Will show this list. `ps` has many flags. Most `ps` flags are different than
the switches we've seen before; they **are not** proceded with a dash (`-`).
The flags are:

- `a`: all processes (the default is just the shell's processes)
- `u`: display all processes that this user owns
- `x`: "extended output" (see manual)
- `w`: "wide" output (kind of like extended; can be repeated)

These are combined as a single argument, for example:

    $ ps auxww

Processes change frequently, so they can be hard to track with single commands
run once at a time. To watch a periodically updating list of the most hungry
processes, you can use the `top` command to get this. Press "q" to quit once
starting it.

Jobs can also be run in the background. To do this, append an `&` (ampersand)
to the end of the command-line. This will launch the command, and immediately
return you to the shell. It still keeps standard I/O tied to the shell and
terminal, so you may see output.

Another way of doing this is to press `^Z` (control+z) after launching the
command. This will immediately suspend the program. After that, you can type
`bg` to force the process to run in the background, similar to the ampersand
usage. To get it back, type `fg`.

To manage and see background processes, type `jobs`. Each process will have a
job control number. You can use these numbers with a `%` symbol to control
processes with tools like `kill`. `kill` takes a PID normally, but you can
replace it with a job control number, too.

    $ kill %1

For example.

## Assignment

Start a `cat` process in the background, list its job control number, and then
kill the process. Explain the commands you used to do this, from the launching
of `cat` forward.

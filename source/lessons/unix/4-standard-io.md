# Unix Lesson 4: Standard I/O

Standard I/O is a very basic, and important part of Unix. As you may already be aware, I/O is short for "Input/Output" and describes a method of communication. It is called "standard", because by and large, this is how Unix programs interact with each other.

Consider your shell. It is taking your commands from the "Standard Input", as you type them in, and outputting results to the "Standard Output". Sometimes, in error cases, a third channel called the "Standard Error" is used. Error and output are distinguished, but not visually. We'll discuss the differences in a later lesson.

Each type of standard channel -- called a "file descriptor", is a known, specific number that is constant and used throughout Unix. Here are those numbers:

-   `0`: Standard Input
-   `1`: Standard Output
-   `2`: Standard Error

They are handy to remember later on, but don't worry too much right now.

Redirection is an important property of standard I/O. By using shell meta-characters, we can send the output of the `ls` command to a new file:

    ls >newfile.txt

The `>` tells it to send the "standard output" to the file `newfile.txt`. It will create or overwrite the file, if it already exists. To create or append (add to) an existing file, use two greater-than symbols: `>>`.

Likewise, to read the file, we can use `<` to put the file's contents in the "standard input".

`cat` will just print the file if we provide it an argument, but will just spit out the standard input if no "real" arguments are provided, e.g. if only shell meta-characters are used. Example:

```bash
    cat newfile.txt # argument
    cat <newfile.txt # standard input
```

Both are the same in this case, but we will see some new examples in a bit that will show the difference. The less-than and greater-than forms are called "redirection".

Pipes are an advanced form of redirection that says: "the left-hand side is redirecting its standard output into the standard input of the right hand side". It's called a pipe because of the vertical bar (`|`) character it uses on the keyboard. (Shift+\\)

Examples:

```bash
    ls | cat # cat displays the standard output of ls, the file listing.
    ls | head -1 # a new command, "head", only shows the first line of the `ls` output.
```

Here are some commands that use standard I/O. They have `man` manual pages. Check them out!

-   `cat` -- print all the specified files, or the standard input, if none are present.
-   `more` -- Like `cat`, but after so much is printed to the screen, a "more" prompt is printed. The program will only move forward after enter is pressed, allowing you to read each page.
-   `less` -- like `more`, but lets you go backwards, too.
-   `cut` -- cuts fields out from the output, so you can process specific portions of the output as data.
-   `printf` -- allows you to format data in different ways, like numbers into decimals.
-   `date` -- displays the date.
-   `head` -- displays the first 10 lines of the standard input. If `-n` and a number is provided, displays that many instead.
-   `tail` -- complement to `head`. Displays the _last_ 10 of the standard input. Use `-n` to control count.

## Assignment

Try to reason about what these commands will do:

```bash
    cat foo.txt | tail -n 20
    less < foo.txt
    ls > foo.txt
    ls | head -n 1 > foo.txt # yes, you can combine them
```

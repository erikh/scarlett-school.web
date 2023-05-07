# Unix Lesson 3: Filesystem Commands

Many commands work with the filesystem itself, for example, to create and
remove directories or files. Most commands in Unix are abbreviated so they can
be typed easier. Let's look at a few commands in this lesson.

- `cd`: short for "Change Directory", this changes the current working
  directory to the first argument.
- `mkdir`: Short for "Make Directory", this makes directories named after all
  the arguments. If they already exist, an error will arrive.
- `rmdir`: Short for "Remove Directory", removes any existing directory. The
  directory must be empty to be removed (no other files or directories inside).
  The directory must also exist. If either of these rules are violated, an
  error will be surfaced.
- `rm`: Removes a file. If the switch `-r` is provided (switches are special
  arguments that change a program's behavior), it will "recursively" remove a
  directory, which means it will remove all files and directories inside of it.
- `ls`: list files and directories. Some versions of this program color-code
  files and directories, others put special symbols at the end of the names to
  indicate what kind of entity they are. `ls` has a lot of options. It is wise
  to learn them all.
- `mv`: Move file or directory. `mv` is how you move files and directories to
  other parts of the filesystem, or rename them in place, too.
- `cp`: Copy file. Make a copy of the file, which takes the same amount of
  space on disk. If `-R` is provided, it works "recursively", similar to `rm`,
  copying whole directory trees.
- `pwd`: Print Working Directory. This just tells you where you are at. Handy
  if you are lost.

## Assignment

Play with a few of these commands in a terminal. Be aware they have a manual
accessed with the `man` command:

    prompt$ man ls

Will get you to `ls`'s manual. This way you can learn about more switches and
other behaviors.

# Unix lesson 1: Filesystems

This course will teach you the Unix operating system. So much of Unix deals
with files as a basic unit for most transactions within the operating system:
something as simple as editing a document, or ejecting a thumb drive, all deals
with files. So let's see how they work.

A filesystem in Unix is a single entity. Unlike windows where there are
different "drives", all "drives" are on the same filesystem in Unix. The
filesystem is arranged like a tree of compartments full of files. Each one of
these compartments is called a "directory". The base directory is called the
"root", much like the roots of a tree. It is denoted by a single forward slash:
`/` -- directories all fall underneath the root directory, to the right.

A location with all the directories from the root that point at the place you
want to look, is called a "path". The path is constructed of the root,
directories, and a filename (unless a directory is what you're looking for).
The path is "case-sensitive", meaning that it treats upper-case letters (like
"D") and lower-case letters (like "d") differently; meaning `Desktop` and
`desktop` are two different directories or files. Here is an example:

    /foo/bar/baz.txt

In this case, the initial forward slash (`/`) is the "root", `foo` is a
"directory", `bar` is a "subdirectory" of `foo`, and `baz.txt` is the filename.
As you can see, directories are separated by forward slashes.

## Absolute and Relative Paths

In your shell (we'll talk about these later) or program, it will have an
implicit "working directory". This is is the basis for all file operations, the
directory your program is currently working with. It defaults to the root
(`/`), but will frequently be another directory.

This path is where new files will be created from, as well as other
directories. You can change this directory, or work against it, as we will see
below.

An absolute path never takes the working directory into account. It always
starts with the root, and always contains the full path. It is called
"absolute" because it cannot be disputed based on the working directory.

A relative path, on the other hand, _combines_ with the working directory to
create a new path. It uses special syntax to assist with this:

- `..` (two dots) means "up one directory"
- `.` (one dot) means "within the current directory"

The special syntax is still delimited by forward slashes, just like a real
directory.

## Examples

The working directory: `/foo/bar`

- `/quux/baz/frobnik.txt` - absolute path
- `/foo/bar/loop.wav` - absolute path
- `/boo/hiss.foo` - absolute path

- `../quux/file.nod` - relative path, `/foo/quux/file.nod`
- `./baz.html` - relative path, `/foo/bar/baz.html`
- `../../other/file.txt` - relative path, `/other/file.txt`

## Assignment

Indicate whether the following paths:

- Are Absolute
- If relative, what the absolute path is

Working directory: `/quux`

- `/foo/bar/hi.txt`
- `/quux/bug/nope.foo`
- `../bar/baz.wav`
- `./foo.txt`

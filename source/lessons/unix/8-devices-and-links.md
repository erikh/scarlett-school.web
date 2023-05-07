# Unix Lesson 8: Device and Links

This lesson covers two kinds of special files in Unix: Devices, which are files
that correspond to hardware devices, or special facilities provided by the
Operating System, and Links, a special kind of file that can make files appear
in two or more places.

## Devices

Devices typically live in the `/dev` directory, and as mentioned correspond to
a hardware device, such as a disk, or a special Operating System facility, such
as the random number generator. They are created with a special program called
`mknod`, but more commonly these days, they are created by special services
that react to hardware events, such as inserting a USB device.

A disk is one of the major ways you will interact with devices. A CD-ROM, or a
USB thumb drive has to be added to the filesystem. You accomplish this with the
`mount` command. It takes the device, which has a special name (not the one
shown here, they will always be different), and the directory you want to mount
it into.

    $ mount /dev/sda1 /mnt

Mounts "shadow", or temporarily hide all files that were previously in the
directory you were mounting. Unmount to restore them with the `umount` command
(note, no "n"!).

    $ umount /mnt

Places where devices are mounted are called "mount points", to examine these,
as well as how much storage is in use, use `df`, for "disk free".

## Other Devices

As previously mentioned, the operating system provides a number of special
facilities through files. Here is a short list of several of them. All these
files live in `/dev`.

- `null`: this is "nothing". Redirecting I/O here means it will be discarded,
  as well as redirecting from it will immediately close the I/O for programs
  that expect input.
- `zero`: This file repeatedly produces `0` in ASCII, the standard for
  byte-encoding text in computers, which is called the "null" character -- do
  not confuse it with the `null` device above! The null character is a byte
  that takes space, just can't be seen. This file is used when you want to send
  a lot of pointless data somewhere in a hurry, like for example, when you want
  to overwrite a disk you previously had sensitive data on.
- `/dev/fd/0`, `/dev/fd/1`, `/dev/fd/2`, etc: These correspond to file
  descriptors for the current running program. Useful in scripts.
- `stdin`, `stdout`, `stderr`: correspond to the different types of standard
  I/O. Sometimes these are symbolically linked (keep reading) to `/dev/fd/0`,
  `/dev/fd/1`, and `/dev/fd/2` respectively.
- `random` and `urandom`: access to the random number generator. `random` will
  spit out random data until the generator is exhausted, and will continue when
  it is "seeded", or has more. `urandom` will "fake it". The details of the
  faking are quite complex.

## Links

There are two types of links: "hard", and "soft" or "symbolic". Links are a
special kind of file which corresponds to another file's data on the
filesystem.

Symbolic links are simply files which encode the "real" file or directory name
in the link. The operating system handles this specially, and transparently. To
use any kind of link, we use the `ln` command. To use a symbolic link, you must
provide the `-s` flag, like so:

    $ ln -s from to

Hard links are different. Each file system's mount point has a special table of
numbers that correspond to the data on your computer's physical disk. These
numbers are mapped to the name of the files in your filesystem. These numbers
are called "inodes", and it is not important how they work.

A hard link is simply a second mapping of the file's inode to a new name. As a
result:

- Hard links cannot span mount points
- Hard links may not be directories

## Assignment

Create an empty file with `echo foo >file.txt`, then create a symbolic link to
it named `file2.txt`. Then, `rm` and rewrite the file with `echo bar
>file.txt`, and `cat file2.txt`. Describe what happened in your own words, and
explain why, too. Then do it with a hard link; did anything change? Why?

# Unix Lesson 5: Directory Structure

In lesson 1 we talked about the filesystem and how these things operate. Unix
has a set of pre-determined places on the filesystem to put stuff. This
"schema", or pattern in which the files are laid out, is a standard amongst
Unix systems, to varying degrees of conformance between them. This lesson goes
into those directories, and their purpose.

It's not important to memorize these. Just become familiar with them so you
know where to look when confused. Also, there are lots of differences between
versions of Unix. None are created alike.

- `/etc`: this is where most of the configuration for your operating system
  goes.
- `/bin`: "user" binaries such as `ls`, `cat`, and so on go here. "Binary" in
  this case is another word for "program".
- `/sbin`: "system" binaries such as administrative tools.
- `/usr`: Other parts of the system that are non-critical to functioning go
  here.
- `/usr/bin`, `/usr/sbin`: binaries of a non-critical nature. User applications
  and administrator applications, like your web browser, go here.
- `/usr/local`: Self-installed programs and configuration. See
  `/usr/local/bin`, `/usr/local/sbin`, `/usr/local/etc`, etc.
- `/lib`: Shared libraries, which contain code used by many programs.
- `/mnt`: Temporary place for mounting disks, such as thumb drives.
- `/tmp`: Temporary storage. In some cases this is just in RAM, other times it
  is on disk, but cleared on reboot.
- `/dev`: Device files. These correspond to hardware devices, as well as some
  system functions provided by the core of the operating system, called the
  "kernel".
- `/home`: Home directory for user accounts. This is your personal storage
  space. The directory structure is `/home/<username>`.
- `/var`: variable data that is _not_ temporary. For example, local email (yes,
  all Unix systems all have email support) is stored in `/var/spool/mail`, and
  log files for the operating system are stored in `/var/log`.

As you can see, there are quite a few, and this is not an exhaustive list. It
pays to learn your system.

## Assignment:

You can count the number of files and directories in a directory like so:

```bash
ls -1 <directory name> | wc -l
```

How many files & directories do you have in `/bin`? How about `/dev`?

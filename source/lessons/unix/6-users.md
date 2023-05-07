# Unix Lesson 6: Users

Just like on Facebook, every Unix system has you log in to a user account. Unix
is a multi-user system, and to use it effectively, you must employ more than
one user account. Luckily, users and groups are not that complicated.

Usually, you will log in through your own personal user account. To do things
as different users, you will use different commands to access them. To find out
what user you are at any time, use the `whoami` command:

    $ whoami
    erikh

Which just prints what user you are by name. There are also groups, which are
collections of users. These users and groups are used as permissions on files,
as well as programs which run under those users. Programs that run as the user
have the same rights as you, executing commands. That's how it all works.

You can see the user/group relationship by looking at files with `ls -l`
(lower-case L), for a "long" listing. This shows the permissions:

     $ ls -l
     -rwxr-x---   1 erikh erikh    1288 Mar 18 13:32 a_file.txt

These detail the types of permissions, the "owner" of the file, the "group
owner" of the file, and the name of the file, respectively. The user who "owns"
this file is "erikh". The group is the "users" group, and the filename is
`a_file.txt`. The permissions are a little complicated, let's break that down.

    -rwxr-x---

The first `-` is for special permissions and file types. You'll notice
directories get a `d` here, but other things exist as well.

The second section, which is the next 3 characters, is the "owner" permissions.
The `r` means "readable", the `w` means "writable", and the `x` means
"executable". These permissions are repeated for the 3-character sections of
"group" and "other", where "group" is the permissions for all users in the
named group, and "other" is for everyone who does not fit into the other two
categories. A dash (`-`) means there is no permission.

There are several commands which modify the ownership and permissions of a file:

- `chown`: Change ownership
- `chgrp`: Change group
- `chmod`: Change "modes" (modes are the different permissions described above)

## Octal modes

In `chmod` there is a special syntax for changing permissions, it is important
to know. These modes are expressed in "octal", which means the numbers are in
"base 8" notation. Contrast with our normal decimal system which is "base 10".
This is a mathematical way of saying the numbers will count from 0-7, never
higher.

You can evaluate the numbers like so, for each position in the number:

    0777

- The first position are the special attributes, and is usually `0`.
- The second position is the owner permission.
- The third position is the group permission.
- The final position is the other permission.

Calculating the last three positions is really easy. Simply add the numbers
together for the different positions:

- 4: readable
- 2: writable
- 1: executable

So `7` is all permissions, `6` is read and write, `5` is read and execute, 0 is
none. Then, put the 3 numbers together in the proper order for `chmod`.

## Different Users

To use Unix effectively, you will need to be different users at different
times. The most common switch you will make is to the administrator account,
otherwise called "root".

Each account has a unique User ID, or UID for short. To see your UID, you can
use the `id` command like so:

    $ id -u
    1000

To see other user activity on the system, you can use `w` or `last` to see who
is online, and a log of who logged in, respectively.

Some other users are present to manage system facilities, you can review them
by reading the "passwd" (Unix likes to abbreviate _everything_) database.

    $ cat /etc/passwd

There is also one for groups:

    $ cat /etc/group

Note that on modern systems, the actual "password" for the accounts is in a
separate file only accessible by "root", called `/etc/shadow`. If an account
does not have a password, it means you can't normally log into it. You have to
access it indirectly. Even though you can only access the real passwords as
"root", they are encrypted in a special way so that they cannot be read.

You can do this by using the "switch user" or `su` command. It chooses "root"
by default, but you can change it (see the manual pages for how). Another, more
modern tool lets you execute one command as root called `sudo`. This way you
can just run one command without switching temporarily. `su` and `sudo` both
require passwords to use; `su` requires the target account password (e.g.,
root's password) and `sudo` requires the password of the user account that is
doing the switching (e.g., _your_ password). They are somewhat different tools;
`sudo` is much more complicated to configure, but easier to use on the surface.

To change your password, use the `passwd` command. To modify group memberships,
look at `gpasswd`.

## Assignment

Unpack the octal permissions. Show read, write, and execute permissions for all
modes.

- 0750
- 0644
- 0400
- 0550
- 0777
- 0666

What is root's UID?

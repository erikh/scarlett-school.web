# General Programming Lesson 1: Intro

This course is designed to teach you general programming skills. No specific programming language or technology will be taught here; the goal here is to familiarize yourself with idioms that you will see in most programming languages. It is recommended you complete this course, with instruction, before navigating to the other courses, so you are prepared for the things presented to you in them.

This course should familiarize you with many concepts, many of which you will have seen from mathematics if you have studied it in the past. If not, several of the concepts will give you an advantage when taking various algebra courses in particular, but be aware there are some differences, such as the difference in assignment and comparison when working with variables (we'll see more later). These changes were incorporated into many languages to account for the fact that most schools of mathematics do use variables, but do not incorporate logic with those variables, something most programming languages provide as a very basic construct to building your program.

Do not worry too much about memorizing these concepts; again, none of this has direct practical application, it is merely here to get you familiarized with technical methods, so making sure you've read and understand it is important, and when we get to "real stuff", your familiarity will come back.

## What is a program?

A program's code is fundamentally some written text authored by a human, which is then translated into something the computer can understand. Programs written directly in languages a computer understands is called "Machine Code", and comprises an "Application", or sometimes the slang "Binary" is used since machine code can be easily represented as binary numbers.

Programs are often _compiled_, which is the process of turning a human program into a working application for later use. However, more often these days programs are _interpreted_, which means a separate application is used to read the human written program and execute its instructions _without_ compiling it. This application must be present for the program to function, otherwise it will be no more understandable than this lesson would be to a computer.

Often times, the words "program", "code", and "application" are used interchangeably. Context is important for understanding the difference when speaking to engineers or writing works that use these terms.

Since your interest in computers likely did not start here, you may have wandered past some programming languages looking into how to start. Here are some languages and the methods they use to turn program code into an application, whether it be compiled or interpreted. Keep in mind that all of these languages have subtleties that tweak the definition slightly, that are not worth discussing, so they are left out. Additionally, many of the compiled languages have interpreters to make them function like an interpreted language, but they are usually not very popular nor are they they recommended way of performing work with these languages.

| Language   | Method                  |
| ---------- | ----------------------- |
| C          | Compiled                |
| C++        | Compiled                |
| Python     | Interpreted             |
| Ruby       | Interpreted             |
| JavaScript | Interpreted             |
| Java       | Compiled, but see below |

In Java's case in particular, the language is first compiled to a special form of machine code called _bytecode_, and then a "Virtual Machine" is used to interpret the bytecode. This is so that the Java Virtual Machine can fully abstract the hardware and operating system from the program code's use of those things, so that the programmer does not have to care. Many interpreters, such as ones for JavaScript and Python, function in a similar manner, but the result is usually managed by the computer, not the programmer.

## What does code look like?

Here's some code written in JavaScript that adds two numbers, stores it in a new variable, and prints the new variable (the result) to the screen.

```javascript
function add(x, y) {
    let z = x + y;
    return z;
}

console.log(add(1, 2));
```

The function `add` takes two inputs, `x` and `y`. It then adds those two numbers, and assigns it to `z`, and provides `z` as the output of the function (typically called a _return_ or "returning z"). Later on, we _call_ (slang for "execute" or "run") `console.log`, which will _call_ `add`, to get the output of the addition of `1` and `2`, which will set `z` to `3` and return it producing a `3`. Then `console.log` is called, which is internal to the JavaScript language and results in a `3` showing in the log output of the JavaScript console, present typically in your web browser where JavaScript usually runs.

If this sounds confusing, don't fret! That's what these lessons are for.

## How does code make decisions?

Code makes decisions based on _conditionals_, which are things that more or less say, "if this, then do that". In mathematics, the "this" in "if this, then do that" is called a _predicate_. It is used to determine if the "that" should run at all, or how many times it should run if it needs to run continuously. These lessons cover conditionals and the methods to determine conditional behavior in detail.

Conditionals are the foundation of computer logic; without them, programs would always be "deterministic", which is more or less like reading this lesson over and over again without it ever being edited -- nothing will ever change. A "non-deterministic" program allows for varying behavior, usually based on the set of inputs provided.

## How is human data represented in code?

Data is represented in code in a few ways, but fundamentally, the concept of a _data structure_ is used. Even the most basic of data, such as the phrase "hello, world!", is kept in a data structure called a _string_, which is a collection (commonly called an _array_) of the letters (called _characters_) that compose it.

To summarize again: a _string_ is an _array_ of _characters_. Let's look at that for a second: here's the "hello, world!" spelled out as it looks to a computer, in bulleted list form, one item in the list for every item in the array.

-   h
-   e
-   l
-   l
-   o
-   ,
-   ' ' (that's a space)
-   w
-   o
-   r
-   l
-   d
-   !

Does that help? Naturally, computers do some complicated things, and there are much more complicated data structures. We'll talk about some of them in later lessons!

## Assignment

Discuss what you've discovered, and ask questions! We're just getting our feet wet!

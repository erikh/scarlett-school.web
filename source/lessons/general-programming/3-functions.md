# General Programming Lesson 3: Functions

In programming, similar to mathematics, _functions_ are used to iconify a section of code, composed of many _statements_, similar to how a mathematical function encapsulates a formula.

Functions can be re-used, sometimes numerous times, to perform the same computation over and over again. Most of your programming time will be spent manipulating some set of functions, often called an _interface_, to achieve a goal related to that interface, such as reading files, or drawing to the computer's screen, or controlling a web browser.

In this section, we attempt to explain functions in-depth, the consequences they have on your code, and some of the types of functions you might encounter.

## Basic Functions

Functions fundamentally hold a piece of code. This code can be one or more statements, as described in the last lesson.

Here is an example of a function; do not be too focused on the syntax, but what the function provides:

```javascript
function addTwoNumbers(x, y) {
    let z = x + y;
    return z;
}
```

Here, we can see a few things:

### Functions take inputs and provide output

Inputs, as listed above, are the `x` and `y` variables listed in parentheses after the declaration of `addTwoNumbers`. They are listed in order, and when they are _called_, or executed (see the next section of this lesson), those inputs are listed in order as a part of the call. Two statements, separated by a semi-colon and newline, are provided within the _block_ of the function, or the body, similar to a paragraph in an essay.

The `return` statement tells the program that this function is ready to _return an output_. Whoever calls this function will get the result of `x + y` provided to them as a result of calling that function. Not all languages use the `return` keyword, sometimes utilizing other methods to return outputs, but this is common amongst many languages. Returning output usually terminates the function call immediately, so other statements that follow it will not be executed.

### Functions are composed of blocks and statements

A block, here denoted by the braces (`{` and `}`), tells the program that these are the statements to be executed when the function is called. This block has two statements: `let z = x + y` and `return z`. Statements are executed from top to bottom in order. Blocks are not limited to notating function bodies; they can be used to organize any related segment of code statements in most languages.

### Functions are special, and have special syntax

You can see here we used the keyword `function`, followed by a name which will be used to call it, and then parentheses, which encapsulate the input names, then a brace, which denotes the start of code statements. This is common in languages to identify them as special, as functions are usually a very important part of programming. In many languages, the function named `main` is commonly the entry point, or first function that is called when the program begins, instead of just reading the program in order. This method is used to assist the programmer in organizing code, so that they don't spend a lot of time re-ordering statements just so the program can be read by the computer top-down. `main` and other functions can usually live anywhere within the program, and they are identified in a special way to the interpreter or compiler.

## Calling Functions

To use a function and execute its statements, you _call_ it, similar to how you'd call a cab to come pick you up. In this case, we use a special form of syntax to ensure the programming language knows that we are doing so.

```javascript
z = addTwoNumbers(1, 2);
```

This stores the output of `addTwoNumbers` in `z`, and is provided the inputs `1` and `2`, so if we look back at our function's body, the result in z will be `3`.

Most of what you will do with a computer involves calling functions. To talk to the operating system, you invoke special functions called _system calls_. To use existing code, you might use a _library_, which is a collection of functions with a common task; these are called _library calls_. Even the act of talking to the internet usually involves calls to libraries which implement networking, and a collection of libraries that do lots of stuff related to your task is commonly called an _Application Programming Interface_, or API for short.

## Scope and Variables

The blocks you defined between `{` and `}` denote _scope_, which means that all statements within the block are kept in a unique storage area and are discarded once the _call_ has completed.

Some variables exist in _local scope_, which means their data is temporary: only for the lifetime of the call. Other variables, which are created outside the scope, have _outer_ or sometimes _global_ scope, which means they last longer than the _inner_ scope, which is what is executing right now.

Scope is fundamentally a hierarchy; that is, scope traverses gradually inward, and the inner most scopes have the shortest lifetimes, and are inaccessible to the outer scopes. Think of it sort of like a "Russian Doll", where you cannot get to the smallest doll without removing the larger ones.

Here's an example of scopes. This is an invalid program for a lot of reasons. Note the text following `//` is a _comment_, a way for programmers to annotate what code is doing:

```javascript
x = 5; // Global Scope, x is available to everything

// y has function scope, which is local to the function only
function sayHello(y) {
    // x is available here because it's global. y is local to the function
    // because it's an input to it, so it's also available.
    //
    // Here, we define z, which will also be local to the function.
    z = y + x;

    // the block is the start of inner scope. Above is outer scope
    {
        // z is available here, because it was created (or defined) in the
        // outer scope. Changes to it will be available in the outer scope,
        // because it was defined there, regardless of what is done to it here.
        z = z + 1;
        a = z + 2; // a is defined here, and only available in the inner scope
    } // inner scope ends

    z = z + a; // invalid; a does not exist in the outer scope
    return z;
}

// y, a, and z are local to the function; they do not exist in the global
// scope, and therefore will be "undefined" here, or in some languages, generate a
// compiler error because they do not exist, and the program will fail to work
// entirely.
console.log(y); // y does not exist here
console.log(a); // a does not exist here either
console.log(z); // same with z
console.log(x); // x exists, however, and 5 will be printed to the log.
```

Note that `console.log` is a _library call_ that is provided by the programming language (in this case, JavaScript), and that we've passed the variables as inputs to that call. `console` is actually an _object_, which we will read about soon, and `log` is the function (sometimes called a _method_) that is used in conjunction with it.

## Higher-Order Functions

When a function can be used like a variable, it is commonly called a "Higher-Order Function". You may also hear this called a "closure" or "lambda". Don't focus on the names; the application of these are very powerful and understanding them is key to becoming a good engineer.

Allowing you to keep a function in a variable means that you can define them and share them as if they were data. This allows you to provide optional logic or swappable logic in a situation that would otherwise not allow for it.

For example, let's say when the user asks, our `add` routine adds two numbers to the number `3`. If the user doesn't ask, it just adds the two numbers.

```javascript
function add3(x, y) {
    return x + y + 3
}

function add(x, y) {
    return x + y
}

function want_add3(wants) {
    if wants {
        return add3;
    } else {
        return add;
    }
}

f = want_add3(true);
f(1, 2); // equals 6: 1 + 2 + 3
f = want_add3(false);
f(1, 2); // equals 3: 1 + 2
```

The ability to store `add` or `add3` in `f`, and pass it around as the result of other function calls, allowed us to switch the logic based on input.

## Assignment

About this code:

```javascript
z = multiply(2, 3);
```

1. What is the name of the function?
1. What are its inputs?
1. Where is its output stored?

Regarding this code sample:

```javascript
x = 5;

{
    z = x + 1;

    {
        a = z + 1;
        a = a + 1;
    }

    z = a + 1;
    x = z;
}
```

1. There is one line in this code which is invalid.
    1. Which line is invalid?
    1. Why is it invalid?
1. What is the result of `x` after running this code, with the invalid line removed?

Finally, this code:

```javascript
function addName(name) {
    return "hello, " + name;
}

function justHello(name) {
    return "hello";
}

function main() {
    // args is the command-line arguments, in order.
    //
    // args is an array, or ordered collection of independent data elements. We
    // are taking the first element of that array.
    //
    // More about arrays will be covered later.
    name = args[0];
    greeting = justHello;

    if (name != "") {
        greeting = addName;
    }

    console.log(greeting(name));
}
```

1. Which function executes first in this code?
1. What does `greeting` call? Does it ever change?
1. Name at least one term for how `addName` and `justHello` are being used in combination with `greeting`.
1. Speculate at how this program is run on the command-line.

# General Programming Lesson 2: Variables and Operators

As mentioned in lesson 1, many programming languages have a lot of syntactic (_syntax_ is the form and prose of a programming language that is written correctly) overlap. This lesson is designed to get you familiar with some of these idioms.

There are other programming languages that use wildly different forms of performing math, assigning data, even syntax is unidentifiable compared to what you will see here. Do not be confused that there is one "language to rule them all", as there is not, but there are plenty of similarities, especially within popular languages.

Future lessons will include more overlapping concepts, but this one covers the most basic of them: variables and operators.

## Variables

Variables come in multiple forms, and generally encapsulate some form of data held in a named construct. Variables, as the name implies, have data that is subject to change, and even though it may sound counter-intuitive, not all named data is subject to this rule. _Constants_, for example, are named data that explicitly does not change.

Variables themselves are subject to additional rules, and the _type_ of variable (do not confuse this with the _type of data_) you use may determine how it can be used within your program. We will cover this concept in future lessons.

Variables are assigned data, typically with a single equals (`=`) operator. An _operator_ is a construct used to instruct the computer to perform an _operation_. While we will mostly discuss symbolic operators here such as `+` and `=`, there are also more linguistic operators in other languages (take for example, using the word _set_ instead of an `=` to set, or assign data to a variable). Operators are a deep topic, and not everything will be covered in this lesson.

To assign data to a variable, name the variable, then supply `=`, then your data, like so:

```javascript
x = 5;
```

The semi-colon here denotes the _end of the statement_. Just to be clear, the _statement_ is the full construct, "x is assigned to the data `5`". Your program's compiler will treat this like an isolated operation within the context of your program. The next _statement_ will be treated independently of this one, even though the following statement may _use data_ constructed within this statement (such as adding a number to `x`). Semi-colons are often used in languages, but sometimes other endings are used such as newlines (every line is its own statement), as well as other fancier methods. As we progress through these lessons, you will see more examples of complex statements.

## Operators

Operators, as mentioned above, instruct the computer to perform an _operation_. In our variable's case, we are telling the computer to store the number `5` in memory, and give it a name: `x`. In the future, when we refer to `x`, unless `x` has been changed, it will be equivalent to using the number `5`.

Operations are very simple instructions (and in fact, _CPU instructions_ -- directly telling the CPU how to handle data -- are usually what operators are translated to, under the hood) that carry out a sequence of events. In this assignment case, we are saying:

-   "Define the number `5`."
-   "Define the variable `x`, and give it a location in memory."
-   "Associate the number `5` with the variable `x`'s memory location."

How this happens behind the scenes is largely immaterial (and sometimes, different depending on the kind of computer you use). That said, thinking about this in small stages is _extremely_ important for writing programs, both for efficiency (inefficient programs are slower than efficient ones, as they do not maximize use of the computer) and clarity's (someone is going to have to read your code, and perhaps edit it, sooner or later) sake.

Another way to think about operations and instructions is how you might describe walking up a flight of stairs:

1. Place your hand on the railing
1. Lift your right leg so your foot is vertically higher than the next step
1. Extend your right leg so your foot is above the next step
1. Lower your right leg so your foot is on the next step
1. Adjust your center of balance so your right leg is carrying your weight.
1. Lift your left leg.
1. Extend it so that it moves past the step your right leg is on, and continues to being above the next available step.
1. Lower your left leg to place it on the step it is above.
1. Adjust your center of balance so that your left leg is carrying your weight.
1. Move your hand up the railing to follow your progress.
1. Start at step 2, and repeat the process until you've reached the top of the stairwell.

As you can see, even the process of climbing a flight of stairs is a lot of instructions, and combining _operations_ is the method you use to do so. A modern processing unit for a computer -- a CPU -- can execute hundreds of trillions of instructions _per second_, even your smart watch is in the order of billions. Just like our stairwell, the computer is a physical modeling of a concept; while a stairwell is a device to help humans navigate vertical space, a computer is a physical model for executing mathematics and logic. I'm guess either you've been a person who is capable of running up a flight of stairs, or at least seen it. Despite all these operations, they can be executed very quickly by someone capable of doing so. That's a modern computer for you.

If this seems daunting, I assure you, with a little practice, despite knowing these details, you will find them as simple as walking or riding a bike.

### Order of Operations

Operations in programming languages have _order_ and _precedence_, which more or less means that some are more important than others, and must be handled before lesser operations are handled. Here are some operators that you have probably seen in mathematics, and how their precedence applies.

In most languages, in lieu of any obvious precedence, operators are evaluated from _left to right_.

-   `+`, the addition operator, has very low precedence, as well as `-`, the subtraction operator. Their precedence is equivalent, so when several of them are encountered, they are evaluated _left to right_.
-   `=`, the assignment operator (for variables), usually has the _lowest_ precedence, and is the last thing evaluated in a statement.
-   `*`, which is multiplication, and `/`, which is division, have higher precedence than the above, and are evaluated _before_ any of them.
-   Any operation placed in parentheses (`(` and `)`) are evaluated at usually the highest precedence. Inner parentheses (such as in `((1 + 2) + 3) + 5`) are evaluated first.

A keen eye will notice that with the exception of _assignment_, these are the same as they are in mathematics. This is no coincidence, and as we get into more complicated forms of programmatic expression, more will be revealed that show programming and math's relationship.

## Assignment

Explain, in terms of instructions or operations, how to pedal a bicycle. Do not focus on terms of balance or variable conditions such as terrain, just how to make the wheels move forward.

Explain the flow of operators in the following statement:

`x = 1 - (2 + 3) * 5`

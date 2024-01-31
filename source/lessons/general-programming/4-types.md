# General Programming Lesson 4: Types

Fundamentally, _types provide meaning to data_, but this statement isn't very clear. The concept of a "type", similar to how we classify things in the real world, means that a portion of data is meant to represent something that is classified in a certain way.

There are lots of analogues in the real world; for instance, consider a banana. A banana is a very specific thing; a type unto itself. Two bananas aren't going to necessarily look the same, but they are both bananas. It is also a fruit, it is edible, it is yellow. It contains sugar and potassium. These are all _types_ that can be associated with a banana.

In this lesson, we will learn how we can use similar relationships to data within our programs to empower them and make them easier to understand.

## Why describe data?

To use our earlier example, the banana, the simplest reason is to ensure we are always working with a specific type; in this case, a banana. Bananas all have commonalities about them that can be reasoned about, and their differences are largely understood, and can be detailed as well. Therefore, the concept of a banana is a type, and individual bananas are called "instances" of that type.

Knowing in advance that we have a banana, our compiler can then determine if we can do things to a banana; like eat it, or let it rot, but we probably can't use it to build structural integrity. The compiler knows that simply because bananas are incapable of providing structural integrity, so therefore, any banana that tries to _act_ as if it could provide that is therefore an error. Types provide this relationship both for the compiler and the reader of the source code; it's easier to understand that all bananas can do this, and also can't do these other things -- you need other types for that.

Types can also be used for grouping relationships, like for example, we know that yellow items reflect a certain percentage of sunlight based on their color alone, so we could calculate that, but we can't say if a yellow item is edible, for example. This is called a "type constraint", where the type is used to determine things that a more important type can do, if, say, it were yellow. These relationships can be used to group all things that are yellow and operate on them as if they were the same type; so bananas and yellow bridges can both have their luminance calculated in the same way, with the same code. We will talk about these a little more in "Complex Types".

Types are a very deep topic in programming; there are whole studies of thought into "type theory" and types are a huge part of "programming language theory" which are big schools of study in large corporations and esteemed universities. Languages have become immensely popular simply because they have outstanding type management, otherwise not much different from other languages, so it's very important to understand them.

## Simple Types

## Complex Types

## Standard Data Structures

## Objects and Methods

## Interfaces

## Typing

### Strong and Weak Typing

### Dynamic and Static Typing

## Assignment

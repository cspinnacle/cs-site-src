---
title: "Debugging Like a Detective, Not a Guesser"
date: "2026-08-12"
category: "Study Skills"
sample: true
---

The single biggest difference between a frustrated student and a confident one isn't talent — it's how they react when the code breaks. Here's the approach we teach in class.

## Stop guessing, start narrowing

The instinct when something goes wrong is to change a random line and re-run, hoping it fixes itself. That's the coding equivalent of poking a locked door hoping it opens. A detective doesn't guess who did it — they gather evidence until only one suspect is left. Debugging works the same way.

## The three questions we ask every time

1. **What did I expect to happen?** State it out loud, specifically.
2. **What actually happened?** Read the error message or output carefully — word for word, not just the vibe of it.
3. **Where's the first place those two things disagree?** Not the last line of the program — the *first* point where reality splits from expectation.

That third question is the one students skip, and it's the one that actually finds the bug.

## Print statements are not cheating

Adding `print("here")` or `console.log(x)` between lines to see what a variable actually holds isn't a hack — it's a real technique professional engineers use daily. If you don't know what a value is, ask the program to tell you.

## Where students meet this

Every grade practices this, but it becomes a formal habit in AP CSA, where a single misplaced semicolon or off-by-one loop can produce a wall of red text. Learning to read that wall calmly, instead of closing the laptop, is half the course.

## The one-sentence version

Debugging isn't about being smart enough to avoid mistakes — it's about being patient enough to find exactly where your assumption and the computer's behavior stopped agreeing.

---
title: "Why Computers Only Understand 0s and 1s"
date: "2026-07-20"
category: "Concept Explainer"
sample: true
---

Every photo, song, and game you've ever seen on a screen is, underneath, a very long string of 0s and 1s. That sounds absurd until you see why it's actually the simplest option, not the strangest one.

## Why not just use letters and numbers directly?

A computer is really a box of billions of tiny switches. A switch has exactly two reliable states: off and on. Trying to build a switch with ten reliable states (for digits 0–9) or twenty-six (for letters) turns out to be far harder and far less reliable than one with two. So engineers picked the simplest possible unit — a single on/off switch, called a **bit** — and built everything else out of patterns of bits.

## From bits to everything else

One bit can only tell you two things. But eight bits together (a **byte**) can represent 256 different patterns — more than enough to cover every letter, digit, and punctuation mark on a keyboard. String enough bytes together in an agreed-upon pattern, and you can represent a whole paragraph, a photograph, or a song.

The letter "A", for example, is stored as the pattern `01000001` almost everywhere in the world, by an old agreement called ASCII. Your computer isn't "thinking" in letters at all — it's just following that lookup table at incredible speed.

## Where students meet this

6th graders bump into this the first time they use Karel or JavaScript art and realize a screen is just a grid of colored squares — each color is itself a number. AP CSA students meet it directly when they learn how `int`, `char`, and `boolean` are all just different-sized patterns of bits underneath the Java syntax.

## The one-sentence version

Binary isn't a special "computer language" — it's just the simplest possible alphabet for a machine made of switches, and everything else is built on top of it.

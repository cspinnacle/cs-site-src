---
title: "Git and GitHub, Explained Without the Jargon"
date: "2026-08-15"
category: "Concept Explainer"
---

Students hear "commit," "push," and "repository" long before anyone explains what those words actually mean. Here's the plain-language version — and why professionals bother with any of this in the first place.

![Illustration of two people collaborating on a shared code project](https://cdn.undraw.co/illustration/code-contribution_8k0x.svg)

## The problem it solves

Imagine writing a group essay in a single shared document with no track-changes and no undo button. Someone deletes a paragraph you needed, two people edit the same sentence at once, and nobody can tell what changed or when. That chaos is exactly what software teams used to deal with before version control existed.

## Git is just a very good save system

**Git** is a tool that saves snapshots of your project over time. Each snapshot is called a **commit**, and it records exactly what changed, when, and why (you write a short message explaining it). Because every snapshot is kept, you can always go back — nothing is ever truly lost.

## GitHub is where those snapshots live online

**GitHub** is a website that hosts Git projects so people can share and collaborate on them. Saving a snapshot to your own computer is a "commit"; sending that snapshot up to GitHub so others can see it is a "**push**." It's the difference between saving a file and actually mailing a copy of it to your team.

In practice, the whole cycle is usually just a handful of commands:

```bash
git add homework.py           # stage the file you changed
git commit -m "Fix off-by-one bug in the loop"   # save a snapshot, with a note
git push                      # send that snapshot up to GitHub
```

That commit message ("Fix off-by-one bug in the loop") is the whole point — six months from now, `git log` will show you exactly what changed and why, in your own words, instead of a mystery pile of unlabeled saves.

## Where students meet this

AP CSA students use a simplified version of this workflow to submit and back up projects. It's the same basic system that runs nearly every piece of software you use daily, from phone apps to this very website.

## The one-sentence version

Git keeps a complete, undo-able history of a project, and GitHub is simply where that history gets shared with other people.

## Watch

[Git & GitHub Crash Course for Beginners](https://www.youtube.com/watch?v=mAFoROnOfHs) (freeCodeCamp.org, ~80 min) — covers everything above plus branching and merging, if you want the full picture before AP CSA.

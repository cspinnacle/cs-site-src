# CS @ Pinnacle Academy — Site Source

Next.js 15 (App Router) + Tailwind v4 + Framer Motion. This builds to static
files and auto-deploys to `cspinnacle.github.io` via the GitHub Action in
`.github/workflows/deploy.yml` on every push to `main`.

## How to deploy this redesign

This zip is a full working copy of the repo, including `.git` (already
pointed at `github.com/cspinnacle/cs-site-src`).

1. Back up or rename your current local `cs-site-src` folder, if you have one.
2. Unzip this in its place.
3. `npm install`
4. `git status` to see the changes, then `git add -A && git commit -m "Redesign site"`
5. `git push`

The existing GitHub Action will pick it up, build, and deploy to
`cspinnacle.github.io` automatically — no manual copying into that repo
needed.

### Test locally first (recommended)

```
npm run dev        # http://localhost:3000
npm run build       # production build, same as CI runs
```

## Before you publish

Search the repo for `[Insert School Email Address]` (footer, Class Info page)
and replace with your real school email — it's the only placeholder left.

## How to add real content

Everything in `content/` is a markdown file with frontmatter — add a new
file, no code changes needed:

- **Newsletter**: new `.md` file in `content/newsletters/`
- **Article**: new `.md` file in `content/articles/`
- **Event** (shown on the homepage): new `.md` file in `content/events/`

Drop `sample: true` in the frontmatter to show a small "SAMPLE" tag (used
right now on all the placeholder newsletters/articles/events I seeded so
the site doesn't launch empty) — remove it once it's real.

Frontmatter reference:

```md
---
title: "Week 2: Loops and Logic"
date: "2026-08-31"
week: 2
---
Your content here, in normal markdown.
```

```md
---
title: "Field Trip: Tech Museum"
date: "2026-08-20"      # when this was posted
eventDate: "2026-11-10"  # when the event happens
type: "field-trip"       # event | deadline | field-trip | announcement
importance: "medium"
---
```

## What changed in this redesign

- **Design**: replaced the default Vercel/Next.js template look (gray
  borders, system dark-mode, blue accents) with a palette drawn from a
  code-editor syntax theme — navy "ink" background, teal keyword accent,
  amber string accent. Same family as the Orientation Night deck and yearly
  plan doc, so all the materials feel like one program.
- **Signature element**: a self-typing Python snippet in a terminal window
  on the homepage hero, built with Framer Motion — grounded in the actual
  subject matter rather than a generic animation.
- **Content accuracy**: the old `content/info/class-info.md` had generic,
  mismatched placeholder info (wrong office hours, wrong schedule, a
  four-quarter single course that didn't match the real 6-course program).
  It's been removed; Class Info is now a structured page with the real
  schedule, curriculum, 3 R's, QuickSchools, attendance policy, and Drone
  Club.
- **Motion**: Framer Motion scroll-reveals throughout, an animated stat
  counter on the homepage, and a sticky, section-aware sub-nav on Class Info.
  Respects `prefers-reduced-motion` (Framer Motion's default behavior).
- Dropped the automatic light/dark mode toggle in favor of one committed,
  intentional theme (dark "ink" header/hero/footer, light content sections).

## Known non-issues

- Google Fonts (Fraunces, Inter, JetBrains Mono) load via `next/font/google`
  at build time — this needs internet access during `npm run build`. GitHub
  Actions has this; some sandboxed/offline environments don't.
- Every image referenced in the *original* content (`public/images/...`)
  was actually a 0-byte placeholder stub, not a real photo — that's why they
  never rendered. I removed the broken references from the markdown rather
  than ship broken image icons. `IMAGE-GUIDE.md` still has the correct
  syntax for adding real photos whenever you have some.

---
title: Hello, world
description: First post — how this blog works.
date: 2026-08-29
tags:
  - blog
  - misc
---

This is the first post on the blog. Posts are organized into three subfolders under `content/blog/`: `school/`, `co-op/`, and `misc/` (general posts, like this one, that don't fit the other two). No other setup needed:

1. Add a new `.md` file to the right subfolder — `content/blog/school/`, `content/blog/co-op/`, or `content/blog/misc/` — with frontmatter like this one (`title`, `description`, `date`, `tags`).
2. Write the post body in Markdown below the frontmatter.
3. Add a link to it on that subfolder's `index.md`.
4. Run `npx quartz build` (or push to `main` to deploy).

Each subfolder's index page lists its own posts, and the top-level `/blog` page links out to all three sections. An RSS feed is generated for the whole site — nothing else to configure per post.

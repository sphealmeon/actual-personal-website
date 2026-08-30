# Jeff Qiu — Personal Site

Built with [Quartz](https://quartz.jzhao.xyz/), a static site generator for Markdown content.

## Getting started

```bash
npm install
npx quartz build --serve
```

Open [http://localhost:8080](http://localhost:8080) to preview.

## Editing content

Site content lives in `content/` as Markdown files:

- `content/index.md` — home / about
- `content/projects/` — project write-ups
- `content/contact.md` — contact info

Site-wide settings (title, theme, plugins, footer links) live in `quartz.config.yaml`.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yaml`, which builds the site and deploys it to GitHub Pages. Enable GitHub Pages under Settings → Pages → Source → GitHub Actions.

# Samuel Somot — scientific website

Professional scientific website for Samuel Somot, climate scientist at CNRM (Météo-France / CNRS). It is built with Astro and deployed as a static GitHub Pages user site.

## Architecture

- `content/`: long-form scientific and biographical text in Markdown.
- `data/`: structured records in YAML (projects, publications, news, datasets, links).
- `src/components/`, `src/layouts/`, `src/pages/`, `src/styles/`: website code and design.
- `public/`: images, figures and documents.
- `.github/workflows/deploy.yml`: automatic GitHub Pages deployment from `main`.

Keep scientific content separate from code. See `AGENTS.md` before making changes.

## Editing text

Open the matching file in `content/`, edit the Markdown text, then preview and build the site. Headings use `#` and `##`; bold text uses `**text**`.

## Adding a project

Add one YAML entry to `data/projects.yml`, following the existing indentation and fields. Do not add an unknown date, role or URL. Use `status: current` or `status: past`.

## Adding news

Add an entry to `data/news.yml` with `id`, `date`, `title`, `summary`, `source`, `source_url`, `topics`, `image`, `published` and `featured`. Only verified entries with `published: true` appear; the home page shows three and the News page four.

## Adding a selected publication

Add an entry to `data/selected-publications.yml`. Do not reconstruct an incomplete reference from memory: leave unknown fields empty or mark them `To be verified`. Google Scholar remains the complete publication record.

## Adding a dataset

Add an entry to `data/research-data.yml` with a stable `id`, title, verified description, keywords, repository and URL. Set `featured: true` only when the dataset should receive visual emphasis.

## Local development

Requires a current Node.js release.

```bash
npm install
npm run dev
```

Before proposing a change:

```bash
npm run check
npm run build
```

The generated static site is written to `dist/`.

## GitHub Pages deployment

After a reviewed pull request is merged into `main`, the GitHub Actions workflow builds the Astro site and deploys the result to GitHub Pages. The repository is a user site, so Astro uses `site: https://sam-somot.github.io` and `base: /`.

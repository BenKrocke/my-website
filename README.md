# Ben Krocké Resume

This is my personal resume website built with Astro.

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## PDF Generation

Generate an ATS-friendly PDF version of the resume:

```bash
# Build and generate PDF
npm run build:pdf

# Generate PDF from existing build
npm run pdf
```

The PDF will be generated in the `dist/` folder as `Ben-Krocke-Resume.pdf`.

## Features

- ✅ Responsive design optimized for web and print
- ✅ ATS-friendly PDF generation using Puppeteer
- ✅ SEO optimized with structured data, meta tags, and sitemap
- ✅ Fast loading with inlined CSS
- ✅ Print-ready styling

## Deployment

The site is configured for static deployment to Azure Static Web Apps via GitHub Actions.

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run build:pdf`       | Build site and generate PDF                     |
| `npm run pdf`             | Generate PDF from existing build                |
| `npm run preview`         | Preview your build locally, before deploying     |

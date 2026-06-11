# natanparmigiano-resume

A simple personal CV website built with Vue, Vite, and Tailwind CSS.

**Live site:** [natan.parmigiano.tech](https://natan.parmigiano.tech)

Feel free to fork, copy, and modify this however you like — that's what it's here for. The content in `src/data/resume.js` is mine, but the structure and styling are yours to reuse.

## Development

```bash
pnpm install
pnpm dev
```

Build for production (static site generation):

```bash
pnpm build
```

The build pre-renders `/` (English) and `/pt` (Portuguese) as static HTML for search indexing, then hydrates as a Vue app in the browser.

Deploy to Cloudflare (requires Wrangler setup):

```bash
pnpm deploy
```

## License

This project is released into the public domain under [The Unlicense](UNLICENSE).

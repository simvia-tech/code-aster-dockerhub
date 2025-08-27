# Code_Aster Documentation Site

This project is a documentation website for code_aster docker version, built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/).

## 🚀 Project Structure

```
.
├── public/                  # Static assets (e.g., favicon, global CSS)
├── src/
│   ├── assets/              # Images and other media for docs
│   ├── content/
│   │   └── docs/            # Documentation pages (.md, .mdx)
│   └── content.config.ts    # Content collections config
├── astro.config.mjs         # Astro configuration
├── package.json             # Project metadata and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project overview (this file)
```

- Documentation pages are located in [`src/content/docs/`](src/content/docs/).
- Images can be placed in [`src/assets/`](src/assets/).
- Static files (e.g., favicon) go in [`public/`](public/).

## 🧑‍💻 Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the development server:**
   ```sh
   npm run dev
   ```
   The site will be available at [http://localhost:4321](http://localhost:4321).

3. **Build for production:**
   ```sh
   npm run build
   ```

4. **Preview the production build:**
   ```sh
   npm run preview
   ```

## 🛠️ Useful Commands

| Command                   | Description                                      |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start local dev server at `localhost:4321`       |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally before deploying      |
| `npm run astro ...`       | Run Astro CLI commands (e.g., `astro add`)       |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📚 Learn More

- [Starlight Documentation](https://starlight.astro.build/)
- [Astro Documentation](https://docs.astro.build/)
- [Astro Discord Community](https://astro.build/chat)


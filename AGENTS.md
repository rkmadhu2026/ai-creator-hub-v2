# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 16** web app (TypeScript + Tailwind CSS 4 + ESLint 9).

### Quick reference

| Action | Command |
|--------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (port 3000) |
| Lint | `npm run lint` |
| Build | `npm run build` |
| Start prod | `npm run start` |

### Non-obvious notes

- Node.js is provided via nvm at `/home/ubuntu/.nvm`. Load it with: `export NVM_DIR="/home/ubuntu/.nvm" && source "$NVM_DIR/nvm.sh"` before running any node/npm commands in a fresh shell.
- The project uses the Next.js App Router (`src/app/` directory).
- Tailwind CSS v4 is used via `@tailwindcss/postcss` (no `tailwind.config.js` needed).
- ESLint 9 flat config is at `eslint.config.mjs`.
- No test framework is set up yet. Add one (e.g., Jest, Vitest) when tests are needed.

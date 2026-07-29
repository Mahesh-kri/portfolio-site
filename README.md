# Mahesh Krishna P — Portfolio (Next.js + Aceternity UI + Tailwind)

This repository is a Next.js portfolio scaffold built to the spec provided. It uses Tailwind CSS and Aceternity UI components for the signature animations (text-swap, count-up, reveal).

Quick start

1. Install dependencies

```bash
npm install
```

2. Add your portrait at `public/profile.jpg` (replace with the attached photo).

3. Run the dev server

```bash
npm run dev
```

Notes
- The project references `aceternity-ui` components (`TextSwap`, `CountUp`, `Reveal`). Install the package or replace with local equivalents if needed.
- Respects `prefers-reduced-motion` via CSS — reduced-motion will disable transitions.
- Tailwind theme variables set in `tailwind.config.js` follow the required palette.

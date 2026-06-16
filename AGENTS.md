# Agent Instructions — zanotoai.com

## Project

 Morocco-focused marketing site for Zanoto AI. Built from a Vite + React + TypeScript + Tailwind + shadcn/ui template and rebranded for Moroccan SMB automation.

## Tech stack

- Vite 5 with `@vitejs/plugin-react-swc`
- React 18, TypeScript
- React Router DOM v6 (BrowserRouter, SPA routes)
- Tailwind CSS v3
- shadcn/ui components in `src/components/ui/`
- TanStack Query
- Calendly inline widget

## Build & deploy

- Dev: `npm run dev` (port 8080)
- Build: `npm run build`
- Output: `dist/`
- Deployment target: Vercel (`vercel.json` already configured with SPA rewrites)

## Brand guidelines

- Audience: Moroccan SMBs (clinics, salons, real estate, tourism, services, e-commerce)
- Messaging: WhatsApp-first automation, document collection, appointment booking
- Languages: Darija, French, Modern Standard Arabic
- Currency: MAD
- Tone: professional, practical, local
- No medical/HIPAA claims. Use Morocco Law 09-08 for data protection references.

## Routing

- `/` — Home
- `/privacy-policy`
- `/terms-of-service`
- `/data-protection`
- Catch-all → `NotFound`

## Important notes

- Do not reintroduce `lovable-tagger` or other Lovable-specific plugins.
- Keep `zanoto.it.com` and other agency automation folders untouched.
- This is the marketing site only; do not add backend automation logic here.

# Instructions pour les agents — zanotoai.com

## Projet

Site marketing de Zanoto AI destiné au marché marocain. Développé à partir d’un modèle Vite + React + TypeScript + Tailwind + shadcn/ui et rebrandé pour l’automatisation des PME marocaines.

## Stack technique

- Vite 5 avec `@vitejs/plugin-react-swc`
- React 18, TypeScript
- React Router DOM v6 (BrowserRouter, routes SPA)
- Tailwind CSS v3
- Composants shadcn/ui dans `src/components/ui/`
- TanStack Query
- Widget Calendly inline

## Build et déploiement

- Développement : `npm run dev` (port 8080)
- Build : `npm run build`
- Sortie : `dist/`
- Cible de déploiement : Vercel (`vercel.json` déjà configuré avec les rewrites SPA)

## Lignes directrices de la marque

- Public cible : PME marocaines (cliniques, salons, immobilier, tourisme, services, e-commerce)
- Messages : automatisation WhatsApp, collecte de documents, prise de rendez-vous
- Langues : darija, français, arabe littéral
- Devise : MAD
- Ton : professionnel, pragmatique, local
- Aucune allégation médicale ou liée à la HIPAA. Se référer à la loi marocaine 09-08 pour la protection des données.

## Routage

- `/` — Accueil
- `/privacy-policy` — Politique de confidentialité
- `/terms-of-service` — Conditions d’utilisation
- `/data-protection` — Protection des données
- Catch-all → `NotFound`

## Notes importantes

- Ne réintroduisez pas `lovable-tagger` ni d’autres plugins spécifiques à Lovable.
- Ne modifiez pas `zanoto.it.com` ni les autres dossiers d’automatisation de l’agence.
- Il s’agit uniquement du site marketing ; n’ajoutez pas de logique d’automatisation backend ici.
- La langue du site est le français professionnel corporate pour le marché marocain.

# Streamline Digital — Production Deployment Guide

## Overview
This guide covers deploying the Streamline Digital marketing website (React + Vite) to production. The site is a single-page application that renders the landing page, Vault Member Portal, Blog, and Audit Sales Page based on URL parameters.

## Build Verification
The production build is located at `/home/team/shared/streamline-digital/marketing/website/dist/`

**Build output:** 14 MB total
- `index.html` — Entry point
- `assets/` — Bundled JS, CSS, images, and preview assets
- Favicon, icons, checklist download file

**To rebuild locally:**
```bash
cd marketing/website
npm install
npm run build
```

## Hosting Provider Recommendations

### 1. Vercel (Recommended — Easiest & Fastest)
- **Free tier:** Yes (generous limits for static sites)
- **Setup:**
  1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
  2. Click "Add New Project" → Import `Jonathanrw/streamline-digital`
  3. Set **Root Directory** to `marketing/website`
  4. Set **Framework Preset** to `Vite`
  5. Set **Build Command** to `npm run build`
  6. Set **Output Directory** to `dist`
  7. Deploy — Vercel auto-detects the SPA and handles client-side routing
- **Custom domain:** Add your domain in the Vercel dashboard under Domains
- **Env vars:** None required

### 2. Netlify
- **Free tier:** Yes
- **Setup:**
  1. Go to [netlify.com](https://netlify.com) and sign in with GitHub
  2. Click "Add New Site" → Import from GitHub → Select `Jonathanrw/streamline-digital`
  3. Set **Base directory** to `marketing/website`
  4. Set **Build command** to `npm run build`
  5. Set **Publish directory** to `dist`
  6. Deploy
- **SPA routing:** Add a `_redirects` file inside `marketing/website/public/`:
  ```
  /*    /index.html   200
  ```
- **Custom domain:** Add in Netlify dashboard

### 3. GitHub Pages
- **Free tier:** Yes
- **Setup:**
  1. Go to repo Settings → Pages
  2. Source: GitHub Actions or deploy from `/docs` folder
  3. If using Actions, create `.github/workflows/deploy.yml`:
  ```yaml
  name: Deploy
  on: [push]
  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - run: cd marketing/website && npm install && npm run build
        - uses: peaceiris/actions-gh-pages@v3
          with:
            github_token: ${{ secrets.GITHUB_TOKEN }}
            publish_dir: ./marketing/website/dist
  ```
- **Custom domain:** Add CNAME file or configure in Settings → Pages

## Environment Variables
No environment variables are required for the production build. All configuration is compiled into the source code:

- **Stripe payment links** are hardcoded in `src/App.jsx`:
  - Workflow Hub ($49): `https://buy.stripe.com/cNi4gB9do3aqfM19gD5AQ00`
  - Content Engine Pro ($29): `https://buy.stripe.com/dRm7sNfBMbGW6br2Sf5AQ03`
  - The Vault ($19/mo): `https://buy.stripe.com/7sY7sN89k6mCbvLeAX5AQ02`
  - Workflow Audit ($499): `https://buy.stripe.com/bJebJ3cpA5iyczP78v5AQ01`

## URL-Based Routing
The app uses URL parameters for page switching — no React Router needed:

| URL | Renders |
|-----|---------|
| `/` | Landing page |
| `/?vault=true` | Vault Member Portal |
| `/?blog=true` | Blog |
| `/?audit=true` | Audit Sales Page |
| `/?gift=true` | Gift a System page |

## Post-Deployment Checklist
- [ ] Verify all Stripe checkout links work in production
- [ ] Test all URL parameter routes (`?vault=true`, `?blog=true`, etc.)
- [ ] Verify Vault Member Portal loads with all 24 drops
- [ ] Test Blog article listing and detail view
- [ ] Check responsive layout on mobile/tablet
- [ ] Verify the lead magnet email signup form captures submissions
- [ ] Set up custom domain DNS (if applicable)
- [ ] Enable HTTPS (auto-included on Vercel/Netlify)

## Maintenance
- **Content updates:** Edit blog posts in `src/Blog.jsx` `blogPosts` array
- **Vault drops:** Add/remove drops in `src/VaultPortal.jsx` `drops` array
- **Stripe links:** Update payment URLs in `src/App.jsx` if Stripe IDs change
- **New assets:** Place images in `src/assets/` and import them in components

## Repository
**GitHub:** https://github.com/Jonathanrw/streamline-digital
**Branch strategy:** Use feature branches + PRs for all changes
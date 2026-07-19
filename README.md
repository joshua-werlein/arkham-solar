# Arkham Enterprises (arkhamsolar.com)

Marketing and lead-generation site for Apex Solar and Construction, a solar and general contracting company serving Buffalo County and the Chippewa Valley, WI. Live at [arkhamsolar.com](https://arkhamsolar.com).

Built as contract work by [Joshua Werlein](https://joshuawerlein.com).

## Architecture

- **Frontend**: React (Create React App) with React Router 7 and Framer Motion, served as static assets from a Cloudflare Worker
- **Backend**: custom Worker (`worker/`) serving the SPA and handling `/api/*` form submissions, delivering email via the Resend API with honeypot spam protection
- **Quote flow**: multi-step quote request capturing project type, property details, budget, and timeline, with deep-linkable entry points (`/quote?type=residential-solar` etc.) that pre-select the project type and skip to project details
- **SEO / discoverability**: per-page metadata via react-helmet-async, LocalBusiness JSON-LD structured data, sitemap, and `public/llms.txt` for AI agent discoverability
- **Quality**: 100 Lighthouse scores in Performance, Accessibility, SEO, and Agentic Browsing (Best Practices capped at 81 by Cloudflare Bot Fight Mode)

## Quote deep links

Service pages, ads, and agents can link directly into the quote form with the type pre-selected:

| URL | Pre-selected type |
|---|---|
| `/quote?type=residential-solar` | Residential Solar |
| `/quote?type=commercial-solar` | Commercial Solar |
| `/quote?type=construction` | Construction |
| `/quote?type=energy-storage` | Energy Storage |
| `/quote?type=maintenance` | Maintenance & Monitoring |
| `/quote?type=consultation` | Energy Consultation |

Invalid or missing `type` values fall back to the normal project type step.

## Development

```bash
npm install
npm start            # CRA dev server at localhost:3000
npm run build        # production build
npx wrangler deploy  # deploy Worker + static assets
```

Secrets (Resend API key) are stored as Cloudflare Worker secrets, not in this repository.

## Repository layout

```
public/        static assets incl. llms.txt, robots, og images
src/           React app (pages, components, styles)
worker/        Cloudflare Worker: SPA serving + /api/* email endpoints
wrangler.jsonc Worker configuration
```

## License

Copyright © 2026 Joshua Werlein. Source published for portfolio review; all rights reserved.

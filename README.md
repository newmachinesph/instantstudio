# InstantStudio website

The marketing site for InstantStudio, a generative-AI creative service: AI-personalized campaigns, a toolkit, an AI model agency (ICONIQ), and AI product and fashion imagery. It is for brands and agencies evaluating the service, and carries a news section plus privacy and terms pages.

Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion, Lucide icons, `react-markdown` and `gray-matter`.

## What is in it

| Path | Contents |
|------|----------|
| `src/app/` | Pages: home, `/about`, `/contact`, `/toolkit`, `/iconiq`, `/fast-fashion`, `/selfie-cards`, `/news`, `/news/[slug]`, `/privacy`, `/terms` |
| `src/components/features/` | Home page sections: hero, video showcase, campaign results, process, philosophy |
| `src/components/ui/` | `Header` and `Footer` with CSS modules |
| `src/data/articles.ts` | Reads the news articles from disk |
| `content/news/` | News articles as Markdown with front matter (`title`, `date`, `excerpt`, `image`) |
| `public/` | Logo and imagery |

## How it works

- News articles are Markdown files in `content/news/`. `src/data/articles.ts` reads them with `gray-matter` and the article page renders them with `react-markdown`.
- The campaign video showcase embeds YouTube videos.
- The toolkit page links out to a separately hosted toolkit app. There is no backend in this repository, and the contact page shows static contact details.
- Several pages use `placehold.co` placeholder images (allowed in `next.config.ts`).
- `three`, `@react-three/fiber` and `@react-three/drei` are listed as dependencies but are not imported anywhere in `src/`.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Checks

```bash
npm run lint     # ESLint (eslint-config-next)
npm run build    # production build
```

There is no test suite.

## Deployment

A standard Next.js app with no required environment variables. Deploy with `npm run build && npm start`, or on any Next.js host such as Vercel.

## License

MIT. See [LICENSE](LICENSE).

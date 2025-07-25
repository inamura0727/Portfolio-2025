This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Portfolio-2025

## About

This repository is creating my portfolio to learn about NextJs, and rendering such APP-Router, SSG, SSR, and ISR.

### Skill

Language: TypeScript

Framework/Library/Tools: NextJS(13), Zustand, react-i18next, Supabase, MUI

## Getting Started

```
npx create-next-app@13.4.1 project-name --use-npm
npm install @heroicons/react@2.0.17 @supabase/ssr@0.6.1  @supabase/supabase-js@2.43.4 zustand@4.3.8
npm install @mui/material-nextjs @emotion/cache
npm install @mui/material @emotion/react @emotion/styled
npm i next@13.4.1
```

```
setting about supabase
npx supabase login
npx supabase init
npx supabase link --project-ref your_project_id
npx supabase gen types typescript --linked > database.types.ts
```

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

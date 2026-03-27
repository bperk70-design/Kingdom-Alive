# Kingdom Alive Marketing Site

A premium, mobile-first marketing website for Kingdom Alive built with Next.js App Router, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

- `app/` - App Router pages, layout, and global styles
- `components/` - Reusable UI components
- `lib/constants.ts` - Shared content and data

## Notes

- Set `NEXT_PUBLIC_SITE_URL` to your real production domain (for example, `https://kingdomalive.com`) so metadata/OpenGraph URLs are live and correct.
- Contact form is client-side only and displays a success state on submit.

## Make the domain live

1. Buy/connect your domain with your hosting provider (recommended: Vercel for Next.js).
2. In hosting project settings, add:
   - `NEXT_PUBLIC_SITE_URL=https://your-live-domain.com`
3. Deploy your project.
4. Confirm metadata points to your real domain by viewing page source and checking OpenGraph tags.

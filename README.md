This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses Tailwind CSS and locally hosted Archivo fonts so it can build without fetching font files during compilation.

## Contact links

The contact section uses direct email, LinkedIn, WhatsApp, and resume links.
There is no contact form or email-service credential requirement.

The WhatsApp QR and tap link include the same prefilled greeting. To regenerate
and decode-check the QR after changing `profile.whatsapp` in `src/app/page.tsx`,
run this command from the repository root on macOS:

```bash
swift -module-cache-path /tmp/portfolio-swift-cache scripts/generate-whatsapp-qr.swift
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Typography

The homepage and case studies use Archivo (variable weights 100–900), matching
https://www.chinmaisiddhartha.in/. The Latin font is hosted locally at
`public/fonts/archivo-latin.woff2` and loaded through `public/fonts/archivo.css`.
The official Google Fonts source is
https://fonts.googleapis.com/css2?family=Archivo:wght@100..900&display=swap.
The SIL Open Font License is included at `public/fonts/OFL-Archivo.txt`.

The Equicom logo in the career timeline is sourced from the company’s official
website: https://equicomtech.com/assets/equicom_logo-CMUweSDj.svg.

The full Sambav logo in the career timeline includes the name and “It’s possible”
tagline, matching the supplied reference. The asset is sourced from its public
company listing: https://www.ceoinsightsindia.com/uploaded_images/company_logos/fmy7xlogo4.jpg
(the source file is GIF despite the URL extension).
The displayed version is `public/icons/sambav-full-logo-transparent.png`, edited
with the built-in image tool to remove the white background. Edit prompt: remove
only the white background to transparency; preserve the flower, name, tagline,
colors, layout, and proportions.

import type { Metadata } from "next";
import Script from "next/script";
import { siteUrl } from "./site-metadata";
import "../../public/fonts/archivo.css";
import "../../public/theme-palette.css";
import "./globals.css";
import "../../public/workflow-neon.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

// Structured data so search engines can classify the site as a freelance service.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Vishwateja Gorumanthula - AWS DevOps Freelancer",
  url: siteUrl,
  description: "Remote freelance AWS DevOps services: Terraform infrastructure, CI/CD automation, production troubleshooting, and SonarQube assessments.",
  areaServed: "Worldwide (remote)",
  founder: {
    "@type": "Person",
    name: "Vishwateja Gorumanthula",
    jobTitle: "AWS DevOps Engineer",
    sameAs: [
      "https://www.linkedin.com/in/vishwateja-g-212b091b5/",
      "https://github.com/gvishwateja-25",
    ],
  },
  knowsAbout: ["AWS", "Terraform", "GitHub Actions", "Jenkins", "Docker", "ECS", "SonarQube", "CloudWatch"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark antialiased" data-theme="dark" suppressHydrationWarning>
      <body className="min-h-screen">
        <Script src="/theme-init.js" strategy="beforeInteractive" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}

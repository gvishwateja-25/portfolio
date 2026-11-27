import type { Metadata } from "next";

export const siteUrl = "https://www.vishwateja.in";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Vishwateja Gorumanthula",
      title,
      description,
      url: path,
      images: [{ url: "/images/og.png", width: 1200, height: 630, alt: "Vishwateja Gorumanthula | Remote AWS DevOps Freelancer" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og.png"],
    },
  };
}

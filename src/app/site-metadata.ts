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
      images: [{ url: "/images/profile-hero-blazer.jpg", alt: "Vishwateja Gorumanthula" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/profile-hero-blazer.jpg"],
    },
  };
}

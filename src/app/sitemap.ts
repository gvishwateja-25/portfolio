import type { MetadataRoute } from "next";
import { siteUrl } from "./site-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/` },
    { url: `${siteUrl}/certificates` },
    { url: `${siteUrl}/case-studies/index.html` },
    { url: `${siteUrl}/case-studies/aws-architecture.html` },
    { url: `${siteUrl}/case-studies/centralized-security-assessment.html` },
    { url: `${siteUrl}/case-studies/containerized-application-delivery.html` },
    { url: `${siteUrl}/case-studies/multi-region-aws-platform.html` },
    { url: `${siteUrl}/case-studies/reusable-infrastructure-automation.html` },
  ];
}

import type { Metadata } from "next";
import Script from "next/script";
import "../../public/fonts/archivo.css";
import "../../public/theme-palette.css";
import "./globals.css";
import "../../public/workflow-neon.css";

export const metadata: Metadata = {
  title: "Vishwateja Gorumanthula | Remote AWS DevOps Freelancer",
  description:
    "Remote freelance AWS DevOps services: Terraform infrastructure, CI/CD automation, production troubleshooting, and SonarQube assessments. Explore my work and discuss your project.",
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
        {children}
      </body>
    </html>
  );
}

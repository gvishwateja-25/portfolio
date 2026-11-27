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

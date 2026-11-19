import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vishwateja Gorumanthula | AWS DevOps Engineer",
  description:
    "AWS DevOps engineer portfolio covering cloud infrastructure, CI/CD, Terraform, monitoring, disaster recovery, and production support experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark antialiased ${inter.variable}`} data-theme="dark">
      <body className="min-h-screen" style={{ colorScheme: "dark" }}>
        {children}
      </body>
    </html>
  );
}

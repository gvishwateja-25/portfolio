import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="dark antialiased" data-theme="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen" style={{ colorScheme: "dark" }}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const themeScript = `
  try {
    const storedTheme = localStorage.getItem("theme");
    const isDark = storedTheme ? storedTheme === "dark" : true;
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  } catch (_) {}
`;

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
    <html
      lang="en"
      className="h-full antialiased"
      data-theme="dark"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Script
          dangerouslySetInnerHTML={{ __html: themeScript }}
          id="theme-script"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}

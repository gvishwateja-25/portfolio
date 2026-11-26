import Image from "next/image";
import Link from "next/link";
import { MobileNavToggle } from "./portfolio-interactions";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader({ certificates = false }: { certificates?: boolean }) {
  const home = certificates ? "/" : "";
  const links = [
    { label: "Home", href: `${home}#home` },
    { label: "Case studies", href: "/case-studies/index.html" },
    { label: "Services", href: `${home}#services` },
    { label: "Work", href: `${home}#projects` },
    { label: "About", href: `${home}#about` },
    { label: "Certificates", href: "/certificates" },
    { label: "Contact", href: `${home}#contact` },
  ];

  return (
    <header className="nav-bar sticky top-0 z-40">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link className="portfolio-brand" href="/#home" aria-label="Vishwateja Gorumanthula home">
          <Image className="portfolio-logo" src="/icons/vg-logo.svg" alt="" width={48} height={48} unoptimized />
        </Link>
        <nav className="ml-auto hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link className={`nav-link${certificates && link.label === "Certificates" ? " is-active" : ""}`} href={link.href} key={link.label} aria-current={certificates && link.label === "Certificates" ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-3 flex shrink-0 items-center gap-2">
          <MobileNavToggle>
            {links.map((link) => (
              <Link className="nav-link text-lg" href={link.href} key={link.label} aria-current={certificates && link.label === "Certificates" ? "page" : undefined}>
                {link.label}
              </Link>
            ))}
          </MobileNavToggle>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

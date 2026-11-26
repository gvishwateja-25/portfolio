import Image from "next/image";
import { MobileNavToggle } from "./portfolio-interactions";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader({ certificates = false }: { certificates?: boolean }) {
  const home = certificates ? "/" : "";
  const links = [
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
        {/* Native navigation keeps homepage fragments intact when returning from another page. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a className="portfolio-brand" href="/#home" aria-label="Vishwateja Gorumanthula home">
          <Image className="portfolio-avatar" src="/images/profile-hero-blazer.jpg" alt="" width={44} height={44} />
          <span className="portfolio-brand-name"><span>Vishwateja</span><span>Gorumanthula</span></span>
        </a>
        <nav className="ml-auto hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {links.map((link) => link.label === "Contact" ? (
            <a key={link.label} className="nav-link inline-flex h-11 w-11 items-center justify-center" href={link.href} aria-label="Contact">
              <Image src="/icons/contact-badge.svg" alt="" width={36} height={36} unoptimized />
            </a>
          ) : (
            <a className={`nav-link${certificates && link.label === "Certificates" ? " is-active" : ""}`} href={link.href} key={link.label} aria-current={certificates && link.label === "Certificates" ? "page" : undefined}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="ml-3 flex shrink-0 items-center gap-2">
          <MobileNavToggle>
            {links.map((link) => (
              <a className="nav-link text-lg" href={link.href} key={link.label} aria-current={certificates && link.label === "Certificates" ? "page" : undefined}>
                {link.label}
              </a>
            ))}
          </MobileNavToggle>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import { MobileNavToggle } from "./portfolio-interactions";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader({ certificates = false }: { certificates?: boolean }) {
  const home = certificates ? "/" : "";
  const links = [
    { label: "Home", href: `${home}#home` },
    { label: "About", href: `${home}#about` },
    { label: "Journey", href: `${home}#journey` },
    { label: "Projects", href: `${home}#projects` },
    { label: "Certificates", href: "/certificates" },
    { label: "Contact", href: `${home}#contact` },
  ];

  return (
    <header className="nav-bar sticky top-0 z-40">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link className="min-w-0 text-sm font-bold italic text-white sm:text-lg" href={`${home}#home`}>
          Vishwateja Gorumanthula
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

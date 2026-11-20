import Image from "next/image";
import {
  AnimatedCounter,
  ContactForm,
  MobileNavToggle,
  ResumeDownloadLink,
  TypingSubtitle,
  VisitorCounter,
} from "./components/portfolio-interactions";
import { TerminalJourney } from "./components/terminal-journey";
import { FlowMotion } from "./components/flow-motion";

/* ============================================
   DATA
   ============================================ */
const profile = {
  name: "Vishwateja Gorumanthula",
  firstName: "Vishwateja",
  lastName: "Gorumanthula",
  role: "AWS DevOps Engineer",
  location: "Hyderabad, Telangana, India",
  email: "gvishwateja25@gmail.com",
  linkedin: "https://www.linkedin.com/in/vishwateja-g-212b091b5/",
  github: "https://github.com/gvishwateja-25",
  whatsapp: "https://wa.me/917661889542",
  resume: "/resume/vishwateja-gorumanthula-resume.pdf",
  summary:
    "AWS DevOps Engineer with 7+ years of experience across cloud infrastructure, IaC, CI/CD automation, production monitoring, and technical operations. Passionate about building reliable, automated, and observable cloud platforms.",
};

const aboutInfo = [
  { label: "Profile:", value: "AWS DevOps Engineer & Cloud Automation" },
  { label: "Domain:", value: "Financial & Healthcare" },
  { label: "Language:", value: "English, Hindi, Telugu" },
  {
    label: "Other Tools:",
    value: "Python, Bash, Docker, Kubernetes, Terraform, Git",
  },
  { label: "Interest:", value: "Cloud Architecture, Open Source, Automation" },
];

const heroTools = [
  { name: "AWS", icon: "amazonwebservices", expertise: "Cloud infrastructure" },
  { name: "Terraform", icon: "terraform", expertise: "Infrastructure as code" },
  { name: "Docker", icon: "docker", expertise: "Container delivery" },
  { name: "Kubernetes", icon: "kubernetes", expertise: "Container orchestration" },
  { name: "GitHub Actions", icon: "githubactions", expertise: "CI/CD automation" },
  { name: "SonarQube", icon: "sonarqube", expertise: "Source-code assessment" },
];

const toolGroups = [
  { category: "Cloud infrastructure", tools: ["AWS", "EC2", "S3", "VPC", "IAM", "Lambda"] },
  { category: "Infrastructure as code", tools: ["Terraform", "AWS CDK", "CloudFormation"] },
  { category: "CI/CD automation", tools: ["GitHub Actions", "Jenkins", "Git"] },
  { category: "Containers & orchestration", tools: ["Docker", "Kubernetes", "ECS"] },
  { category: "Monitoring & observability", tools: ["CloudWatch", "Datadog", "BetterStack"] },
  { category: "Scripting & security", tools: ["Python", "Bash", "PowerShell", "SonarQube"] },
];


const projects = [
  {
    category: "DevSecOps",
    title: "Centralized SAST Assessment",
    description:
      "Automated SonarQube scanning across 445 GitHub Enterprise repositories, with inventory and exception tracking.",
    tags: ["SonarQube", "GitHub Enterprise", "Python", "Bash", "SAST"],
    image: "/images/projects/security-assessment.svg",
    imageAlt: "Repository discovery flowing into a SAST scan and tracked results.",
    href: "/case-studies/centralized-security-assessment.html",
  },
  {
    category: "Cloud Architecture",
    title: "Multi-Region AWS Platform",
    description:
      "Designed multi-region AWS infrastructure around high availability, intelligent routing, recovery, and resilience.",
    tags: ["Global Accelerator", "Route 53", "CloudWatch", "IaC"],
    image: "/images/projects/multi-region-aws.svg",
    imageAlt: "Routing branching into two AWS regions with failover.",
  },
  {
    category: "Infrastructure as Code",
    title: "Reusable Infrastructure Automation",
    description:
      "Built reusable Terraform modules and CloudFormation patterns for consistent, repeatable infrastructure provisioning.",
    tags: ["Terraform", "CloudFormation", "AWS CDK", "Git"],
    image: "/images/projects/infrastructure-automation.svg",
    imageAlt: "Reusable infrastructure modules provisioning development, staging, and production environments.",
  },
  {
    category: "CI/CD",
    title: "Containerized Application Delivery",
    description:
      "Containerized legacy applications and automated microservice delivery through QA, UAT, and production.",
    tags: ["Docker", "Jenkins", "GitHub Actions", "Kubernetes"],
    image: "/images/projects/container-delivery.svg",
    imageAlt: "A container delivery pipeline from source through build, validation, and deployment.",
  },
];

const stats = [
  { target: 7, suffix: "+", label: "Years Experience" },
  { target: 4, suffix: "", label: "Featured Projects" },
  { target: 95, suffix: "%", label: "Infrastructure Automated" },
  { target: 60, suffix: "%", label: "Deployment Time Reduced" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* ============================================
   SVG ICONS
   ============================================ */
function ContactIcon({ type }: { type: "location" | "phone" | "email" | "resume" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" aria-hidden="true">
      {type === "location" && (
        <g>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" {...common} />
          <circle cx="12" cy="9" r="2.5" {...common} />
        </g>
      )}
      {type === "phone" && (
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" {...common} />
      )}
      {type === "email" && (
        <g>
          <rect x="3" y="5" width="18" height="14" rx="2" {...common} />
          <path d="m3 7 9 6 9-6" {...common} />
        </g>
      )}
      {type === "resume" && (
        <g>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" {...common} />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" {...common} />
        </g>
      )}
    </svg>
  );
}

function SocialIcon({ type, className = "h-5 w-5" }: { type: "linkedin" | "github" | "email"; className?: string }) {
  return (
    <svg className={`shrink-0 ${className}`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {type === "linkedin" && (
        <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 10v6M8 7.6v.1M11.5 16v-3.4a2.2 2.2 0 0 1 4.5 0V16M11.5 10.2V16" />
        </g>
      )}
      {type === "github" && (
        <path
          d="M12 3.8a8.2 8.2 0 0 0-2.6 16c.4.1.5-.2.5-.4v-1.5c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.8-.5.1-.5.1-.5.8.1 1.3.9 1.3.9.8 1.3 2 1 2.4.8.1-.6.3-1 .5-1.2-1.8-.2-3.6-.9-3.6-4a3.1 3.1 0 0 1 .8-2.2c-.1-.2-.4-1 .1-2.2 0 0 .7-.2 2.3.8a7.9 7.9 0 0 1 4.1 0c1.6-1 2.3-.8 2.3-.8.5 1.2.2 2 .1 2.2a3.1 3.1 0 0 1 .8 2.2c0 3.1-1.9 3.8-3.6 4 .3.2.5.7.5 1.4v2.3c0 .2.1.5.5.4A8.2 8.2 0 0 0 12 3.8Z"
          fill="currentColor"
        />
      )}
      {type === "email" && (
        <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </g>
      )}
    </svg>
  );
}

/* ============================================
   PAGE
   ============================================ */
export default function Home() {
  return (
    <>
      <FlowMotion />

      {/* Skip to content */}
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-zinc-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        href="#home"
      >
        Skip to content
      </a>

      {/* ============ NAVIGATION ============ */}
      <header className="nav-bar sticky top-0 z-40">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a className="text-lg font-bold italic text-white" href="#home">
            {profile.firstName} {profile.lastName}
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a className="nav-link" href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile nav */}
          <MobileNavToggle>
            {navLinks.map((link) => (
              <a className="nav-link text-lg" href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </MobileNavToggle>
        </div>
      </header>

      <main>
        {/* ============ HERO ============ */}
        <section id="home" className="hero-section flex items-center px-5 py-16 lg:py-0">
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:min-h-[calc(100svh-72px)]">
            {/* Left text */}
            <div data-flow-reveal>
              <p className="hero-greeting">Hello!</p>
              <h1 className="hero-name mt-4">
                I&apos;m{" "}
                <span className="hero-name-accent">{profile.firstName}</span>
                <br />
                <span className="hero-name-accent">{profile.lastName}</span>
              </h1>

              <div className="mt-6">
                <TypingSubtitle />
              </div>

              <p className="mt-6 max-w-lg text-lg font-medium leading-8 text-zinc-300">
                Building automated AWS infrastructure, reliable delivery pipelines, and secure cloud platforms.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 space-y-3">
                <div className="flex flex-wrap gap-3">
                  <a className="hero-cta-btn is-filled inline-flex items-center gap-2" href="#projects">
                    <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="7" height="7" rx="1.5" />
                      <rect x="14" y="3" width="7" height="7" rx="1.5" />
                      <rect x="3" y="14" width="7" height="7" rx="1.5" />
                      <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    </svg>
                    My Works
                  </a>
                  <ResumeDownloadLink className="hero-cta-btn inline-flex items-center gap-2" href={profile.resume}>
                    <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />
                    </svg>
                    Resume
                  </ResumeDownloadLink>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    className="hero-cta-btn inline-flex items-center gap-2"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SocialIcon type="linkedin" className="h-6 w-6" />
                    LinkedIn
                  </a>
                  <a
                    className="hero-cta-btn inline-flex items-center gap-2"
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SocialIcon type="github" className="h-6 w-6" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Tools and engineering expertise */}
            <div className="hero-profile-image flex min-w-0 items-center justify-center" data-flow-reveal>
              <div className="relative z-10 group w-full max-w-[560px]">
                {/* Ambient glow effect */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-blue-500/10 to-amber-500/20 opacity-75 blur-2xl transition-all duration-700 group-hover:opacity-100" />

                <div className="relative overflow-hidden rounded-3xl border border-amber-400/30 bg-zinc-950/95 shadow-2xl shadow-black/80" role="region" aria-labelledby="hero-toolkit-title">
                  <div className="border-b border-amber-400/15 p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">Tools &amp; expertise</p>
                    <h2 id="hero-toolkit-title" className="mt-3 text-2xl font-bold tracking-tight text-white">My engineering toolkit</h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">Building, delivering, and securing cloud platforms.</p>
                  </div>
                  <ul className="grid grid-cols-1 gap-3 p-5 min-[360px]:grid-cols-2 sm:p-6">
                    {heroTools.map((tool) => (
                      <li key={tool.name} className="min-w-0 rounded-xl border border-white/10 bg-white/[0.025] p-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2">
                          <Image src={`/icons/tools/${tool.icon}.svg`} alt="" width={32} height={32} className="h-8 w-8 object-contain" />
                        </span>
                        <p className="mt-3 text-sm font-semibold text-white">{tool.name}</p>
                        <p className="mt-1 text-xs leading-5 text-zinc-400">{tool.expertise}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section id="about" className="about-section px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              {/* Tools used across engineering work */}
              <div className="order-2" data-flow-reveal>
                <div className="rounded-xl border border-white/10 bg-zinc-900/50 p-6">
                  <h3 className="text-xl font-semibold text-white">Tools I’ve Used</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">Across cloud infrastructure, delivery automation, and production operations.</p>
                  <div className="mt-6 space-y-5">
                    {toolGroups.map((group) => (
                      <div key={group.category}>
                        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-400">{group.category}</h4>
                        <ul className="flex flex-wrap gap-2">
                          {group.tools.map((tool) => (
                            <li className="rounded-md border border-white/10 bg-zinc-950/70 px-3 py-1.5 text-sm text-zinc-300" key={tool}>{tool}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* About experience and background */}
              <div className="order-1" data-flow-reveal>
                <div className="section-watermark" data-watermark="About">
                  <h2 className="section-title">About Me</h2>
                </div>

                <p className="mt-6 text-base leading-8 text-zinc-300">
                  I’m an AWS DevOps Engineer with <strong className="font-semibold text-amber-400">7+ years of experience across cloud infrastructure, delivery automation, and technical operations.</strong> My work spans infrastructure as code, containerized applications, CI/CD pipelines, and production monitoring.
                </p>
                <p className="mt-4 text-base leading-8 text-zinc-300">
                  I build repeatable cloud infrastructure with <strong className="font-semibold text-white">AWS and Terraform</strong>, automate releases, and support reliable production platforms. My freelance DevSecOps work also includes <strong className="font-semibold text-white">centralized SonarQube scanning across GitHub Enterprise repositories</strong>, with inventory automation, scan tracking, and exception handling.
                </p>

                <div className="mt-8">
                  {aboutInfo.map((info) => (
                    <div className="about-info-row flex gap-4" key={info.label}>
                      <span className="about-info-label">{info.label}</span>
                      <span className="about-info-value">{info.value}</span>
                    </div>
                  ))}
                </div>

                <a href="#projects" className="mt-6 inline-flex min-h-11 items-center gap-1 rounded text-sm text-zinc-400 underline-offset-4 hover:text-amber-400 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400">
                  <span className="text-amber-400 font-bold text-xl">4</span>{" "}
                  Featured Projects
                </a>


              </div>
            </div>
          </div>
        </section>

        {/* ============ CAREER JOURNEY ============ */}
        <section id="journey" className="resume-section px-5 py-20">
          <span id="resume" className="sr-only" />
          <div className="mx-auto max-w-7xl">
            <div className="section-watermark text-center" data-watermark="Journey" data-flow-reveal>
              <h2 className="section-title">Career Journey</h2>
              <div className="section-divider" />
            </div>

            <div className="mt-14" data-flow-reveal>
              <TerminalJourney />
            </div>


          </div>
        </section>

        {/* ============ PROJECTS ============ */}
        <section id="projects" className="projects-section px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="section-watermark text-center" data-watermark="Projects" data-flow-reveal>
              <h2 className="section-title">Projects</h2>
              <div className="section-divider" />
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-7 text-zinc-400" data-flow-reveal>
              Featured work across DevSecOps, cloud architecture, infrastructure as code,
              and automated application delivery.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {projects.map((project) => {
                const Card = project.href ? "a" : "article";
                return (
                  <Card
                    className="project-card flex min-w-0 flex-col"
                    data-flow-reveal
                    href={project.href}
                    key={project.title}
                  >
                    <Image
                      alt={project.imageAlt}
                      className="project-card-image"
                      height={400}
                      src={project.image}
                      sizes="(min-width: 1320px) 624px, (min-width: 768px) calc(50vw - 36px), calc(100vw - 40px)"
                      width={640}
                    />
                    <div className="project-card-body">
                      <span className="project-category">{project.category}</span>
                      <h3 className="project-card-title">{project.title}</h3>
                      <p className="project-card-desc">{project.description}</p>
                      {project.href?.startsWith("/case-studies/") && (
                        <p className="mb-4 text-sm font-semibold text-amber-400">Read case study →</p>
                      )}
                      <div className="project-card-tags">
                        {project.tags.map((tag) => (
                          <span className="project-card-tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ STATS ============ */}
        <section className="stats-section px-5 py-16">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                label={stat.label}
                suffix={stat.suffix}
                target={stat.target}
              />
            ))}
          </div>
        </section>

        {/* ============ GITHUB CTA ============ */}
        <section className="github-cta px-5 py-20">
          <div className="relative z-10 mx-auto max-w-3xl text-center" data-flow-reveal>
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              More projects on{" "}
              <span className="text-amber-400">GitHub</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-zinc-300">
              More DevOps Projects on GitHub. I love optimizing workflows,
              automating deployments, and building scalable infrastructures to
              streamline operations.
            </p>
            <a
              className="hero-cta-btn is-filled mt-8 inline-block"
              href={profile.github}
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className="contact-section px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="section-watermark text-center" data-watermark="Contact" data-flow-reveal>
              <h2 className="section-title">Contact Me</h2>
              <div className="section-divider" />
            </div>
            <p className="mx-auto mt-4 max-w-lg text-center text-base text-zinc-400" data-flow-reveal>
              Below are the details to reach out to me!
            </p>

            {/* Contact info icons */}
            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4" data-flow-reveal>
              <div className="text-center">
                <div className="contact-icon-circle">
                  <ContactIcon type="location" />
                </div>
                <p className="contact-label">Address</p>
                <p className="contact-value">{profile.location}</p>
              </div>
              <a href={`mailto:${profile.email}`} className="text-center group">
                <div className="contact-icon-circle">
                  <ContactIcon type="email" />
                </div>
                <p className="contact-label">Email</p>
                <p className="contact-value">{profile.email}</p>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-center group">
                <div className="contact-icon-circle">
                  <SocialIcon type="linkedin" />
                </div>
                <p className="contact-label">LinkedIn</p>
                <p className="contact-value">Connect with me</p>
              </a>
              <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp chat" className="group min-w-0 rounded-lg text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400">
                <Image
                  src="/images/whatsapp-chat-qr.png"
                  alt="Scan this QR code to open a WhatsApp chat with Vishwateja"
                  width={140}
                  height={140}
                  unoptimized
                  className="mx-auto h-auto max-w-full rounded-lg ring-1 ring-amber-400/30"
                />
                <p className="contact-label">WhatsApp</p>
                <p className="contact-value">Scan or tap to chat</p>
              </a>
            </div>

            {/* Contact form */}
            <div className="mx-auto mt-16 max-w-2xl">
              <h3 className="text-center text-xl font-bold text-white" data-flow-reveal>
                Have a Question?
              </h3>
              <ContactForm email={profile.email} />
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="footer px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <VisitorCounter />
          <div className="flex items-center gap-4">
            <a
              aria-label="LinkedIn"
              className="text-zinc-500 transition-colors hover:text-amber-400"
              href={profile.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <SocialIcon type="linkedin" />
            </a>
            <a
              aria-label="GitHub"
              className="text-zinc-500 transition-colors hover:text-amber-400"
              href={profile.github}
              rel="noreferrer"
              target="_blank"
            >
              <SocialIcon type="github" />
            </a>
            <a
              aria-label="Email"
              className="text-zinc-500 transition-colors hover:text-amber-400"
              href={`mailto:${profile.email}`}
            >
              <SocialIcon type="email" />
            </a>
          </div>
          <p className="text-sm text-zinc-500">
            &copy; 2026 {profile.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

import Image from "next/image";
import {
  AnimatedCounter,
  ContactForm,
  MobileNavToggle,
  ResumeDownloadLink,
  SkillProgressBar,
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
  github: "https://github.com/search?q=Vishwateja%20Gorumanthula&type=users",
  resume: "/resume/vishwateja-gorumanthula-resume.pdf",
  summary:
    "AWS DevOps Engineer with 7+ years of experience across cloud infrastructure, IaC, CI/CD automation, production monitoring, and technical operations. Passionate about building reliable, automated, and observable cloud platforms.",
};

const aboutInfo = [
  { label: "Profile:", value: "AWS DevOps Engineer & Cloud Automation" },
  { label: "Domain:", value: "Cloud Computing & AWS DevOps" },
  { label: "Education:", value: "MCA, Avanthi PG College (2020-2022)" },
  { label: "Language:", value: "English, Hindi, Telugu" },
  {
    label: "Other Skills:",
    value: "Python, Bash, Docker, Kubernetes, Terraform, Git",
  },
  { label: "Interest:", value: "Cloud Architecture, Open Source, Automation" },
];

const skillBars = [
  { label: "AWS Cloud Services (EC2, S3, VPC, IAM, Lambda)", percentage: 90 },
  { label: "Infrastructure as Code (Terraform, CDK, CloudFormation)", percentage: 88 },
  { label: "CI/CD Pipelines (GitHub Actions, Jenkins)", percentage: 85 },
  { label: "Containerization (Docker, Kubernetes, ECS)", percentage: 82 },
  { label: "Monitoring & Observability (CloudWatch, Datadog, Grafana)", percentage: 80 },
  { label: "Scripting (Python, Bash, PowerShell)", percentage: 78 },
];


const projects = [
  {
    title: "Centralized Source-Code Security Assessment",
    description:
      "Freelance DevSecOps engagement automating GitHub Enterprise discovery, inventory, and SonarQube scanning with Python, Bash, and Linux. Reported 444 successful scan executions across 445 repositories, with exception tracking.",
    tags: ["SonarQube", "GitHub Enterprise", "Python", "Bash", "SAST"],
    image: "/images/devops-hero-background.png",
    href: "/case-studies/centralized-security-assessment.html",
  },
  {
    title: "Multi-Region Self-Healing AWS Platform",
    description:
      "Architected a resilient multi-region design using AWS Global Accelerator and Route 53. Reduced global latency by 40% and targeted 99.999% uptime for high-availability e-commerce workloads.",
    tags: ["Global Accelerator", "Route 53", "CloudWatch", "IaC"],
    image: "/images/ci-cd-observability-roadmap-2026.png",
    href: "https://github.com/search?q=multi-region+self-healing+aws+platform&type=repositories",
  },
  {
    title: "Reusable Infrastructure Automation",
    description:
      "Built Terraform modules and CloudFormation patterns for standardized, repeatable resource provisioning. Reached 95% infrastructure automation and cut deployment time by 60%.",
    tags: ["Terraform", "CloudFormation", "AWS CDK", "Git"],
    image: "/images/aws-operating-model-roadmap.png",
    href: "https://github.com/search?q=terraform+aws+cloudformation+cdk+infrastructure+automation&type=repositories",
  },
  {
    title: "Containerized Legacy Application Delivery",
    description:
      "Created Docker build patterns and CI/CD pipelines for microservices through QA, UAT, and production. Reduced environment-related issues by 70% and deployment from hours to minutes.",
    tags: ["Docker", "Jenkins", "GitHub Actions", "Kubernetes"],
    image: "/images/devops-hero-background.png",
    href: "https://github.com/search?q=docker+jenkins+github+actions+kubernetes+cicd&type=repositories",
  },
];

const stats = [
  { target: 7, suffix: "+", label: "Years Experience" },
  { target: 15, suffix: "+", label: "Projects Delivered" },
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

function SocialIcon({ type }: { type: "linkedin" | "github" | "email" }) {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

              <p className="mt-6 max-w-lg text-base leading-7 text-zinc-400">
                A Passionate {profile.role}
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="hero-cta-btn is-filled" href="#projects">
                  My Works
                </a>
                <a
                  className="hero-cta-btn"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="hero-cta-btn"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* DevOps hero illustration */}
            <div className="hero-profile-image flex min-w-0 items-center justify-center" data-flow-reveal>
              <div className="relative z-10 group w-full max-w-[560px]">
                {/* Ambient glow effect */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-blue-500/10 to-amber-500/20 opacity-75 blur-2xl transition-all duration-700 group-hover:opacity-100" />

                {/* Keep the full illustration and its icon accents visible. */}
                <div className="relative overflow-hidden rounded-3xl border border-amber-400/30 bg-zinc-950/90 shadow-2xl shadow-black/80">
                  <Image
                    src="/images/devops-hero-background.png"
                    alt="DevOps infinity loop showing plan, code, build, test, deploy, operate, and monitor, with code, cloud, automation, and monitoring icons."
                    width={1536}
                    height={1024}
                    sizes="(min-width: 1320px) 558px, (min-width: 1024px) calc(45vw - 36px), (min-width: 600px) 560px, calc(100vw - 40px)"
                    preload
                    className="h-auto w-full"
                  />
                  {/* Separate caption keeps text from obscuring the artwork. */}
                  <div className="border-t border-amber-400/20 bg-zinc-950 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">AWS DevOps Engineer</p>
                    <p className="text-lg font-bold text-white">{profile.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section id="about" className="about-section px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              {/* Left: Photo + Skills */}
              <div data-flow-reveal>
                <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 p-6">
                  {/* Photo + Info side by side matching reference site */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:items-center">
                    <div className="sm:col-span-5">
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-amber-400/20 bg-zinc-950 shadow-xl shadow-black/40">
                        <Image
                          src="/images/profile-about-laptop.jpg"
                          alt={`${profile.name} at work`}
                          fill
                          sizes="(max-width: 640px) 100vw, 220px"
                          className="object-cover object-center"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col justify-center space-y-3 sm:col-span-7">
                      <p className="text-sm">
                        <span className="font-semibold text-white">Name: </span>
                        <span className="text-zinc-300">{profile.name}</span>
                      </p>
                      <p className="text-sm">
                        <span className="font-semibold text-white">Job Role: </span>
                        <span className="font-medium text-amber-400">{profile.role}</span>
                      </p>
                      <p className="text-sm">
                        <span className="font-semibold text-white">Experience: </span>
                        <span className="text-zinc-300">7+ years</span>
                      </p>
                      <p className="text-sm">
                        <span className="font-semibold text-white">Address: </span>
                        <span className="text-zinc-300">{profile.location}</span>
                      </p>
                    </div>
                  </div>

                  {/* Skill bars */}
                  <h3 className="mb-4 mt-8 text-lg font-semibold text-white">Skills</h3>
                  {skillBars.map((skill) => (
                    <SkillProgressBar
                      key={skill.label}
                      label={skill.label}
                      percentage={skill.percentage}
                    />
                  ))}
                </div>
              </div>

              {/* Right: About text + info */}
              <div data-flow-reveal>
                <div className="section-watermark" data-watermark="About">
                  <h2 className="section-title">About Me</h2>
                </div>

                <p className="mt-6 text-base leading-8 text-zinc-300">
                  {profile.summary}
                </p>

                <div className="mt-8">
                  {aboutInfo.map((info) => (
                    <div className="about-info-row flex gap-4" key={info.label}>
                      <span className="about-info-label">{info.label}</span>
                      <span className="about-info-value">{info.value}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm text-zinc-500">
                  <span className="text-amber-400 font-bold text-xl">15+</span>{" "}
                  Projects completed
                </p>

                <div className="mt-6 flex gap-3">
                  <a
                    className="hero-cta-btn"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <ResumeDownloadLink className="download-cv-btn" href={profile.resume}>
                    Download CV
                  </ResumeDownloadLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CAREER JOURNEY (TERMINAL CONSOLE) ============ */}
        <section id="journey" className="resume-section px-5 py-20">
          <span id="resume" className="sr-only" />
          <div className="mx-auto max-w-7xl">
            <div className="section-watermark text-center" data-watermark="Journey" data-flow-reveal>
              <h2 className="section-title">Career Journey</h2>
              <div className="section-divider" />
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-8 text-zinc-400" data-flow-reveal>
              AWS DevOps &amp; Production Reliability Engineer with 7+ years of experience across cloud
              infrastructure, IaC automation, containerization, and enterprise operations. Explore my
              career progression and production milestones via the interactive console below.
            </p>

            {/* Terminal Console Component */}
            <div className="mt-14" data-flow-reveal>
              <TerminalJourney />
            </div>

            {/* Download CV */}
            <div className="mt-12 text-center" data-flow-reveal>
              <ResumeDownloadLink className="download-cv-btn" href={profile.resume}>
                Download CV
              </ResumeDownloadLink>
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
              Below are sample projects demonstrating DevOps principles, including
              automation, CI/CD, cloud architecture, and infrastructure as code.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <a
                  className="project-card block"
                  data-flow-reveal
                  href={project.href}
                  key={project.title}
                  rel={project.href.startsWith("https://") ? "noreferrer" : undefined}
                  target={project.href.startsWith("https://") ? "_blank" : undefined}
                >
                  <Image
                    alt={project.title}
                    className="project-card-image"
                    height={400}
                    src={project.image}
                    unoptimized
                    width={640}
                  />
                  <div className="project-card-body">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-desc">{project.description}</p>
                    {project.href.startsWith("/case-studies/") && (
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
                </a>
              ))}
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
              <div className="text-center">
                <ResumeDownloadLink href={profile.resume} className="inline-block">
                  <div className="contact-icon-circle">
                    <ContactIcon type="resume" />
                  </div>
                </ResumeDownloadLink>
                <p className="contact-label">Download Resume</p>
                <p className="contact-value">PDF format</p>
              </div>
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

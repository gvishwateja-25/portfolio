import Image from "next/image";
import { ResumeDownloadLink } from "./components/portfolio-interactions";
import { TerminalJourney } from "./components/terminal-journey";
import { FlowMotion } from "./components/flow-motion";
import { SiteHeader } from "./components/site-header";
import { ToolIcon } from "./components/tool-icon";

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
  whatsapp: `https://wa.me/917661889542?text=${encodeURIComponent("Hi Vishwateja, I'd like to discuss a DevOps automation project with you.")}`,
  resume: "/resume/vishwateja-gorumanthula-resume.pdf",
  summary:
    "AWS DevOps Engineer with 7+ years of experience across cloud infrastructure, IaC, CI/CD automation, production monitoring, and technical operations. Passionate about building reliable, automated, and observable cloud platforms.",
};

const projectInquirySubject = "Remote DevOps project inquiry";
const projectInquiryBody = "Hi Vishwateja,\n\nI’d like to discuss:\n\nProject or problem:\nCurrent stack:\nTarget timeline:\nTimezone and preferred overlap:\nProject or ongoing support:\n";
const projectInquiryHref = `mailto:${profile.email}?subject=${encodeURIComponent(projectInquirySubject)}&body=${encodeURIComponent(projectInquiryBody)}`;

const aboutInfo = [
  { label: "Profile:", value: "AWS DevOps Engineer & Cloud Automation" },
  { label: "Domain:", value: "Financial & Healthcare" },
  {
    label: "Other Tools:",
    value: "Python, Bash, Docker, Kubernetes, Terraform, Git",
  },
  { label: "Interest:", value: "Cloud Architecture, Open Source, Automation" },
];

const toolGroups = [
  { category: "Cloud infrastructure", tools: ["AWS", "Azure", "EC2", "S3", "VPC", "IAM", "Lambda"] },
  { category: "Infrastructure as code", tools: ["Terraform", "AWS CDK", "CloudFormation"] },
  { category: "CI/CD automation", tools: ["GitHub Actions", "Jenkins", "Git"] },
  { category: "Containers & orchestration", tools: ["Docker", "Kubernetes", "ECS"] },
  { category: "Monitoring & observability", tools: ["CloudWatch", "Datadog", "BetterStack"] },
  { category: "Scripting & security", tools: ["Python", "Bash", "PowerShell", "SonarQube"] },
];

const deploymentFlow = [
  { title: "Plan & version", detail: "Define changes and commit code to Git.", icon: "Git" },
  { title: "Provision infrastructure", detail: "Prepare cloud resources with infrastructure as code.", icon: "Terraform" },
  { title: "Build containers", detail: "CI runs the build and creates a Docker image.", icon: "Docker" },
  { title: "Run checks", detail: "Run tests and code scans before release.", icon: "SonarQube" },
  { title: "Publish & deploy", detail: "Push the image to a registry, then deploy to QA, UAT, or production.", icon: "Deploy" },
  { title: "Monitor & improve", detail: "Track health, investigate alerts, and feed changes back into Git.", icon: "CloudWatch" },
];

const services = [
  {
    title: "AWS & Azure cloud infrastructure",
    description: "Cloud infrastructure support for AWS and Azure, with scope agreed around your environment. My AWS work includes reusable Terraform modules, IAM access controls, and VPC segmentation.",
    deliverables: "Infrastructure code, reusable modules, and provisioning documentation.",
    evidence: "Based on my AWS infrastructure and remote automation engagements.",
  },
  {
    title: "CI/CD & container delivery",
    description: "Build or troubleshoot GitHub Actions and Jenkins workflows for Docker builds and deployments across application environments.",
    deliverables: "Pipeline configuration, deployment steps, and handover notes.",
    evidence: "Experience with GitHub Actions, Jenkins, Docker, ECR, and ECS.",
  },
  {
    title: "DevOps troubleshooting & monitoring",
    description: "Investigate infrastructure and deployment issues, and configure monitoring and alerting with CloudWatch, Datadog, or BetterStack.",
    deliverables: "An agreed troubleshooting scope, documented changes, and operational guidance.",
    evidence: "Based on my production operations and monitoring experience.",
  },
  {
    title: "SonarQube assessment automation",
    description: "Automate repository discovery, inventory, and source-code scan execution with Python, Bash, and SonarQube.",
    deliverables: "Inventory workflow, scan automation, status reports, and exception tracking.",
    evidence: "Documented in my confidential freelance DevSecOps case study.",
  },
];

const projects = [
  {
    category: "DevSecOps",
    title: "Centralized SAST Assessment",
    description:
      "Automated SonarQube scanning across 445 GitHub Enterprise repositories, with inventory and exception tracking.",
    tags: ["SonarQube", "GitHub Enterprise", "Python", "Bash", "SAST"],
    image: "/images/projects/security-assessment.svg",
    imageAlt: "Scan server, repositories cloned on the server, scan command, Sonar scan, and results visible in the SonarQube dashboard.",
    href: "/case-studies/centralized-security-assessment.html",
  },
  {
    category: "Cloud Architecture",
    title: "Multi-Region AWS Platform",
    description:
      "Designed multi-region AWS infrastructure around high availability, intelligent routing, recovery, and resilience.",
    tags: ["Global Accelerator", "Route 53", "CloudWatch", "IaC"],
    image: "/images/projects/multi-region-aws.svg",
    href: "/case-studies/multi-region-aws-platform.html",
    imageAlt: "Requests flow through AWS routing to Region A or a recovery route to Region B.",
  },
  {
    category: "Infrastructure as Code",
    title: "Reusable Infrastructure Automation",
    description:
      "Built reusable Terraform modules and CloudFormation patterns for consistent, repeatable infrastructure provisioning.",
    tags: ["Terraform", "CloudFormation", "AWS CDK", "Git"],
    image: "/images/projects/infrastructure-automation.svg",
    href: "/case-studies/reusable-infrastructure-automation.html",
    imageAlt: "Reusable infrastructure modules flow through resource provisioning to development, staging, and production environments.",
  },
  {
    category: "CI/CD",
    title: "Containerized Application Delivery",
    description:
      "Containerized legacy applications and automated microservice delivery through QA, UAT, and production.",
    tags: ["Docker", "Jenkins", "GitHub Actions", "Kubernetes"],
    image: "/images/projects/container-delivery.svg",
    href: "/case-studies/containerized-application-delivery.html",
    imageAlt: "Source flows through a Docker build, validation, and deployment to QA, UAT, or production.",
  },
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

      <SiteHeader />

      <main>
        {/* ============ HERO ============ */}
        <section id="home" className="hero-section px-5 py-10 lg:py-12">
          <div className="hero-content mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div data-flow-reveal>
              <p className="hero-greeting">Remote freelance · AWS DevOps</p>
              <h1 className="hero-name mt-4">
                DevOps automation for <span className="hero-name-accent">cloud infrastructure and deployments.</span>
              </h1>
              <p className="mt-6 text-base leading-7 text-zinc-400">
                I’m {profile.name}, an AWS DevOps Engineer with{" "}
                <strong className="font-bold">7+ years of experience</strong>{" "}
                across cloud infrastructure, automation, and technical operations.
              </p>
              <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-300">
                I help engineering teams automate AWS infrastructure, build CI/CD pipelines,
                and troubleshoot production delivery problems.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="hero-cta-btn is-filled inline-flex items-center" href={profile.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                <a className="hero-cta-btn inline-flex items-center" href="/case-studies/centralized-security-assessment.html">View case study</a>
              </div>
            </div>
            <aside className="hero-services-panel relative z-10" aria-labelledby="hero-services-title" data-flow-reveal>
              <div className="p-5 sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">The deployment workflow</p>
                <h2 id="hero-services-title" className="mt-2 text-2xl font-bold text-white">From source code to production</h2>
                <ol className="deployment-flow mt-5">
                  {deploymentFlow.map((step, index) => (
                    <li key={step.title}>
                      <span className="deployment-step-icon" aria-hidden="true"><ToolIcon name={step.icon} /></span>
                      <div><h3 className="font-semibold text-white"><span className="sr-only">Step {index + 1}: </span>{step.title}</h3><p className="mt-1 text-sm leading-5 text-zinc-400">{step.detail}</p></div>
                    </li>
                  ))}
                </ol>
                <a className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-amber-400 underline underline-offset-4" href="#services">Explore services and deliverables</a>
              </div>
              <a className="hero-whatsapp flex items-center gap-4 p-5 sm:p-6" href={profile.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp about your DevOps project">
                <svg className="h-12 w-12 shrink-0" viewBox="0 0 32 32" aria-hidden="true">
                  <circle cx="16" cy="16" r="16" fill="#25D366" />
                  <path fill="#fff" d="M16 5a10.8 10.8 0 0 0-9.3 16.3L5.2 27l5.8-1.5A10.8 10.8 0 1 0 16 5Zm0 19.7a8.8 8.8 0 0 1-4.5-1.2l-.3-.2-3.4.9.9-3.3-.2-.3A8.8 8.8 0 1 1 16 24.7Zm4.8-6.6c-.3-.1-1.6-.8-1.8-.9-.3-.1-.4-.1-.6.2-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1a7.2 7.2 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.5l.4-.5.3-.4c.1-.2 0-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6a12 12 0 0 0 4.6 4.1c.7.3 1.2.5 1.5.6.7.2 1.3.2 1.8.1.6-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3Z" />
                </svg>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold uppercase tracking-wider text-emerald-400">Let’s discuss in WhatsApp</span>
                  <span className="mt-2 block text-sm leading-6 text-zinc-300">Click to chat about your project.</span>
                </span>
              </a>
            </aside>
          </div>
        </section>

        {/* ============ SERVICES ============ */}
        <section id="services" className="responsibilities-section px-5 py-16" aria-labelledby="services-title">
          <span id="responsibilities" className="sr-only" />
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl" data-flow-reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">How I can help</p>
              <h2 id="services-title" className="section-title mt-3">DevOps services for your team</h2>
              <p className="mt-4 text-base leading-7 text-zinc-400">Focused freelance projects or ongoing technical support, with deliverables and working hours agreed for your needs.</p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="responsibility-card" data-flow-reveal>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-base leading-7 text-zinc-400">{service.description}</p>
                  <p className="mt-4 text-base leading-7 text-zinc-300"><strong className="text-white">Typical deliverables: </strong>{service.deliverables}</p>
                  <p className="mt-4 flex-1 text-sm leading-6 text-zinc-400">{service.evidence}</p>
                  <a className="mt-6 inline-flex min-h-11 items-center self-start font-semibold text-amber-400 underline underline-offset-4" href="#contact">Discuss this service<span className="sr-only">: {service.title}</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PROJECTS ============ */}
        <section id="projects" className="projects-section px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="section-watermark text-center" data-watermark="Projects" data-flow-reveal>
              <h2 className="section-title">Selected work</h2>
              <div className="section-divider" />
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-7 text-zinc-400" data-flow-reveal>
              Explore case studies covering my freelance DevSecOps work, cloud infrastructure,
              automation, and application delivery experience.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {projects.map((project) => {
                return (
                  <a
                    className="project-card flex min-w-0 flex-col"
                    data-flow-reveal
                    href={project.href}
                    aria-label={`Read case study: ${project.title}`}
                    key={project.title}
                  >
                    <Image
                      alt={project.imageAlt}
                      className="project-card-image"
                      height={360}
                      src={project.image}
                      sizes="(min-width: 1104px) 520px, (min-width: 768px) calc(50vw - 56px), calc(100vw - 64px)"
                      width={640}
                    />
                    <div className="project-card-body">
                      <span className="project-category">{project.category}</span>
                      <h3 className="project-card-title">{project.title}</h3>
                      <p className="project-card-desc">{project.description}</p>
                      <p className="mb-4 text-sm font-semibold text-amber-400">Read case study</p>
                      <div className="project-card-tags">
                        {project.tags.map((tag) => (
                          <span className="project-card-tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                );
              })}
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
                            <li className="tool-chip rounded-md border border-white/10 bg-zinc-950/70 px-3 py-1.5 text-sm text-zinc-300" key={tool}><span className="tool-icon-surface" aria-hidden="true"><ToolIcon name={tool} /></span>{tool}</li>
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
                  I’m an AWS DevOps Engineer with <strong className="font-bold">7+ years of experience</strong> across cloud infrastructure, delivery automation, and technical operations. My work spans infrastructure as code, containerized applications, CI/CD pipelines, and production monitoring.
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

        {/* ============ CONTACT ============ */}
        <section id="contact" className="contact-section px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="section-watermark text-center" data-watermark="Contact" data-flow-reveal>
              <h2 className="section-title">Discuss your project</h2>
              <div className="section-divider" />
            </div>
            <div className="contact-hiring mt-12" data-flow-reveal>
              <h3 className="contact-hiring-title">
                Let’s discuss your <span>cloud and DevOps automation requirements.</span>
              </h3>
              <div className="mt-8 grid min-w-0 items-start gap-6 lg:grid-cols-2 lg:gap-10">
                <div>
                  <p className="max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
                    Tell me what you’re building, the problem you need to solve, your current
                    stack, and your target timeline. Include your timezone and whether you need
                    a focused project or ongoing technical support.
                  </p>
                  <p className="mt-6 flex items-center gap-3 text-sm text-zinc-400">
                    <span className="shrink-0 text-amber-400 [&>svg]:h-10 [&>svg]:w-10" aria-hidden="true"><ContactIcon type="location" /></span>
                    <span>
                      <span className="block">{profile.location}</span>
                      <span className="mt-1 block">India Standard Time (UTC+5:30)</span>
                    </span>
                  </p>
                </div>
                <div className="min-w-0">
                  <a className="hero-cta-btn is-filled mb-6 inline-flex items-center" href={projectInquiryHref}>Email your project brief</a>
                  <a className="contact-hiring-email" href={projectInquiryHref}>
                    {profile.email}
                  </a>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a className="contact-icon-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile" title="LinkedIn">
                      <SocialIcon type="linkedin" className="h-7 w-7" />
                    </a>
                    <ResumeDownloadLink className="contact-icon-link contact-resume-link" href={profile.resume} aria-label="Download résumé (PDF)" title="Download résumé (PDF)">
                      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z M14 2v6h6 M12 11v7 M9 15l3 3 3-3" />
                      </svg>
                      <span>Resume</span>
                    </ResumeDownloadLink>
                  </div>
                </div>
              </div>
              <div className="mt-8 rounded-xl border border-white/10 p-5">
                <h4 className="font-semibold text-white">How we start</h4>
                <ol className="mt-3 grid list-decimal gap-4 pl-5 text-base leading-7 text-zinc-400 lg:grid-cols-3 lg:gap-10">
                  <li>Send a short brief with the problem and relevant context.</li>
                  <li>We clarify requirements, access needs, and deliverables.</li>
                  <li>We agree scope, fees, availability, and timezone overlap before work begins.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="footer px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-zinc-400">AWS · Terraform · CI/CD · DevSecOps</p>
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

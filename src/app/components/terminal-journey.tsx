"use client";

import Image from "next/image";
import { ToolIcon, USFlag } from "./tool-icon";
import { useState, useRef, useEffect } from "react";

interface Milestone {
  id: string;
  command: string;
  badge: string;
  badgeColor: string;
  period: string;
  title: string;
  company: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
  status: string;
  orgInitials: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
  orgBadgeText: string;
  cloudFocus: string;
  tierTag: string;
  caseStudyHref?: string;
  domainLabel?: string;
}

const milestones: Milestone[] = [
  {
    id: "equicom",
    command: "load_milestone --period '2025-Present' --org 'equicom'",
    badge: "[!] PRODUCTION RELIABILITY & CLOUD IAC",
    badgeColor: "text-amber-400",
    period: "Sep 2025 - Present",
    title: "AWS DevOps Engineer",
    company: "Equicom Technologies",
    domainLabel: "Current company · FinTech Domain",
    location: "Bengaluru, India",
    summary:
      "Leading core AWS cloud infrastructure provisioning and continuous delivery pipelines across mission-critical production environments.",
    highlights: [
      "Provision and maintain automated AWS multi-tier infrastructure using standardized Terraform IaC modules.",
      "Engineered automated GitHub Actions CI/CD workflows targeting ECR registries and high-availability ECS clusters.",
      "Enforced zero-trust cloud security foundations across IAM, KMS encryption, VPC segmentation, Route 53, CloudFront CDN, and WAFv2.",
      "Architected 24x7 production observability and synthetic alerting using CloudWatch, Datadog, and Better Stack.",
    ],
    tags: ["AWS", "Terraform", "GitHub Actions", "ECS", "ECR", "CloudWatch", "WAFv2", "Datadog"],
    status: "Active Production Lead",
    orgInitials: "EQ",
    logo: "/icons/equicom-logo.svg",
    orgBadgeText: "EQUICOM TECH",
    cloudFocus: "AWS ECS • Terraform • GitHub Actions",
    tierTag: "PRODUCTION TIER 1",
  },
  {
    id: "freelance-devsecops",
    command: "load_milestone --period '2026' --mode 'freelance-devsecops'",
    badge: "[!] DEVSECOPS & SECURITY AUTOMATION",
    badgeColor: "text-cyan-400",
    period: "Sep - Nov 2026",
    title: "Freelance DevSecOps / Security Automation Engineer",
    company: "Confidential Client",
    location: "Freelance Engagement",
    summary:
      "Built a repeatable centralized source-code security assessment workflow across GitHub Enterprise repositories for an anonymous client.",
    highlights: [
      "Automated repository discovery, inventory, cloning, and SonarQube scan orchestration using Python, Bash, and Linux.",
      "Reported 444 successful scan executions across 445 repositories; tracked the remaining exception for investigation.",
      "Standardized project identifiers and status logging, with repository filtering and planned scan batches to manage resource contention.",
      "Scan execution success represents completed scanner runs, not vulnerability clearance or security quality-gate approval.",
    ],
    tags: ["SonarQube", "GitHub Enterprise", "Python", "Bash", "Linux", "SAST"],
    status: "Assessment Results Reported",
    orgInitials: "DS",
    orgBadgeText: "CONFIDENTIAL CLIENT",
    cloudFocus: "SonarQube • Python • Repository Automation",
    tierTag: "FREELANCE DEVSECOPS",
    caseStudyHref: "/case-studies/centralized-security-assessment.html",
  },
  {
    id: "freelance",
    command: "load_milestone --period '2025-H1' --mode 'remote'",
    badge: "[!] HYBRID AUTOMATION & DISASTER RECOVERY",
    badgeColor: "text-blue-400",
    period: "Mar 2025 - Jul 2025",
    title: "Freelance Infrastructure Automation Engineer",
    company: "Remote Engagements",
    location: "US Clients",
    summary:
      "Consulted for global distributed clients to automate hybrid cloud setups and design resilient disaster recovery architectures.",
    highlights: [
      "Delivered repeatable infrastructure automation for hybrid cloud and on-premises environments using Terraform.",
      "Designed high-availability Disaster Recovery (DR) strategies and automated operational failover runbooks.",
      "Engineered reusable AWS CDK constructs for standardized enterprise cloud infrastructure patterns.",
    ],
    tags: ["Hybrid Cloud", "Terraform", "AWS CDK", "Disaster Recovery", "Runbooks", "Linux"],
    status: "Contract Complete",
    orgInitials: "US",
    orgBadgeText: "US CLIENTS (REMOTE)",
    cloudFocus: "AWS CDK • Hybrid Cloud • DR",
    tierTag: "MULTI-ACCOUNT AUTOMATION",
  },
  {
    id: "sambav",
    command: "load_milestone --period '2021-2025' --org 'sambav'",
    badge: "[!] CI/CD AUTOMATION & CONTAINERIZATION",
    badgeColor: "text-emerald-400",
    period: "Mar 2021 - Jan 2025",
    title: "Jr. AWS DevOps Engineer",
    company: "Sambav EHR Private Limited",
    domainLabel: "Previous company · Healthcare domain",
    location: "Hyderabad, India",
    summary:
      "Spearheaded cloud migration and automated delivery pipelines for healthcare electronic health record (EHR) platforms.",
    highlights: [
      "Developed Terraform and CloudFormation automation for repeatable infrastructure deployments.",
      "Containerized legacy enterprise applications with Docker for consistent deployment environments.",
      "Built asynchronous SNS and SQS notification pipelines for distributed applications.",
    ],
    tags: ["AWS", "Jenkins", "Terraform", "Docker", "CloudFormation", "SNS", "SQS"],
    status: "Production Milestone",
    orgInitials: "SB",
    logo: "/icons/sambav-full-logo-transparent.png",
    logoWidth: 222,
    logoHeight: 74,
    orgBadgeText: "Sambav EHR Private Limited",
    cloudFocus: "Docker • Jenkins • CloudFormation",
    tierTag: "HEALTHCARE PLATFORM",
  },
  {
    id: "abhyudaya",
    command: "load_milestone --period '2019-2020' --org 'abhyudaya'",
    badge: "[!] 24x7 OPERATIONS & SYSTEM ADMINISTRATION",
    badgeColor: "text-purple-400",
    period: "Apr 2019 - Oct 2020",
    title: "AWS NOC Engineer",
    company: "Abhyudaya HR Business Solutions",
    location: "Hyderabad, India",
    summary:
      "Managed 24x7 network operations center support, incident response, and active enterprise infrastructure monitoring.",
    highlights: [
      "Provided round-the-clock infrastructure support, incident remediation, and RBAC user access control.",
      "Automated routine Active Directory administration tasks.",
      "Maintained Windows Server, Apache Tomcat clusters, and CloudWatch performance alarm thresholds.",
    ],
    tags: ["AWS S3", "EC2", "CloudWatch", "Active Directory", "Windows Server", "Tomcat"],
    status: "Foundation Verified",
    orgInitials: "AB",
    orgBadgeText: "ABHYUDAYA HR BUSINESS SOLUTIONS",
    cloudFocus: "AWS S3 • EC2 • CloudWatch • AD",
    tierTag: "24x7 ENTERPRISE NOC",
  },
];

export function TerminalJourney() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [typedInput, setTypedInput] = useState<string>("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const playbackIndexRef = useRef(0);
  const terminalContentRef = useRef<HTMLDivElement>(null);

  // Auto-play timeline execution
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      const next = playbackIndexRef.current + 1;
      if (next >= milestones.length) {
        playbackIndexRef.current = 0;
        setIsPlaying(false);
        setActiveFilter("all");
        return;
      }
      playbackIndexRef.current = next;
      setActiveFilter(milestones[next].id);
    }, 2800);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const toggleAutoPlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      playbackIndexRef.current = 0;
      setActiveFilter(milestones[0].id);
    }
  };

  const filteredMilestones =
    activeFilter === "all"
      ? milestones
      : milestones.filter((m) => m.id === activeFilter);

  const handleQuickCommand = (filterId: string) => {
    setIsPlaying(false);
    setActiveFilter(filterId);
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = typedInput.trim().toLowerCase();
    if (!cmd) return;

    setIsPlaying(false);

    if (cmd === "clear") {
      setTerminalLogs([]);
      setActiveFilter("all");
    } else if (cmd === "play" || cmd === "run") {
      toggleAutoPlay();
    } else if (cmd === "whoami") {
      setTerminalLogs((prev) => [
        ...prev,
        "$ whoami",
        "-> Vishwateja Gorumanthula | Senior AWS DevOps & Production Reliability Engineer (7+ YOE)",
      ]);
    } else if (cmd === "skills") {
      setTerminalLogs((prev) => [
        ...prev,
        "$ skills",
        "-> Core: AWS (EC2, S3, VPC, ECS, ECR, IAM, Route53, WAFv2, CloudWatch)",
        "-> IaC: Terraform, AWS CDK, CloudFormation",
        "-> CI/CD: GitHub Actions, Jenkins, Docker, Kubernetes",
      ]);
    } else if (cmd === "help") {
      setTerminalLogs((prev) => [
        ...prev,
        "$ help",
        "-> Commands: all, 2026, 2025, 2021, 2019, play, whoami, skills, clear, help",
      ]);
    } else if (cmd === "all") {
      setActiveFilter("all");
    } else if (cmd.includes("2026")) {
      setActiveFilter("freelance-devsecops");
    } else if (cmd.includes("2025")) {
      setActiveFilter("equicom");
    } else if (cmd.includes("2021")) {
      setActiveFilter("sambav");
    } else if (cmd.includes("2019")) {
      setActiveFilter("abhyudaya");
    } else {
      setTerminalLogs((prev) => [
        ...prev,
        `$ ${typedInput}`,
        `zsh: command not found: ${typedInput}. Type 'help' for options.`,
      ]);
    }

    setTypedInput("");
  };

  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* Terminal Window Container */}
      <div className="terminal-window overflow-hidden rounded-2xl border border-amber-400/30 bg-[#08090c] shadow-[0_0_60px_rgba(212,168,67,0.12)]">
        {/* Terminal Header Bar */}
        <div className="terminal-header flex flex-wrap items-center justify-between border-b border-white/10 bg-[#0e1117] px-4 py-3 sm:px-6">
          {/* Traffic Light Dots */}
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-sm shadow-[#ff5f56]/40" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-sm shadow-[#ffbd2e]/40" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f] shadow-sm shadow-[#27c93f]/40" />
          </div>

          {/* Title Tab */}
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-300 sm:text-sm">
            <span className="text-amber-400">⚡</span>
            <span className="font-semibold text-white">vishwateja@aws-prod</span>
            <span className="text-zinc-500">:</span>
            <span className="text-amber-400/90">~/career-journey</span>
            <span className="hidden rounded bg-zinc-800/80 px-1.5 py-0.5 text-[10px] text-zinc-400 sm:inline-block">
              zsh
            </span>
          </div>

          {/* Right Status Indicator & Auto-Play Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleAutoPlay}
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-[11px] transition-all ${
                isPlaying
                  ? "bg-amber-400 text-black font-bold animate-pulse"
                  : "border border-amber-400/40 bg-amber-400/10 text-amber-300 hover:bg-amber-400/20"
              }`}
            >
              <span>{isPlaying ? "⏸ Pause Script" : "▶ Run Timeline Script"}</span>
            </button>

            <div className="hidden items-center gap-2 text-xs font-mono text-zinc-400 md:flex">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span>7+ YOE • Production Ready</span>
            </div>
          </div>
        </div>

        {/* Quick Filter Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/5 bg-[#0a0c10] px-4 py-2.5 sm:px-6">
          <span className="font-mono text-xs text-zinc-400">filter:</span>
          <button
            type="button"
            onClick={() => handleQuickCommand("all")}
            className={`rounded-md px-2.5 py-1 font-mono text-xs transition-all ${
              activeFilter === "all" && !isPlaying
                ? "bg-amber-400 text-black font-semibold shadow-md shadow-amber-400/20"
                : "border border-white/10 bg-zinc-900/60 text-zinc-400 hover:border-amber-400/40 hover:text-white"
            }`}
          >
            ./all_timeline.sh
          </button>
          <button
            type="button"
            onClick={() => handleQuickCommand("equicom")}
            className={`rounded-md px-2.5 py-1 font-mono text-xs transition-all ${
              activeFilter === "equicom"
                ? "bg-amber-400 text-black font-semibold shadow-md shadow-amber-400/20"
                : "border border-white/10 bg-zinc-900/60 text-zinc-400 hover:border-amber-400/40 hover:text-white"
            }`}
          >
            --stage 2025-Present
          </button>
          <button
            type="button"
            onClick={() => handleQuickCommand("freelance-devsecops")}
            className={`rounded-md px-2.5 py-1 font-mono text-xs transition-all ${
              activeFilter === "freelance-devsecops"
                ? "bg-amber-400 text-black font-semibold shadow-md shadow-amber-400/20"
                : "border border-white/10 bg-zinc-900/60 text-zinc-400 hover:border-amber-400/40 hover:text-white"
            }`}
          >
            --stage 2026-devsecops
          </button>
          <button
            type="button"
            onClick={() => handleQuickCommand("freelance")}
            className={`rounded-md px-2.5 py-1 font-mono text-xs transition-all ${
              activeFilter === "freelance"
                ? "bg-amber-400 text-black font-semibold shadow-md shadow-amber-400/20"
                : "border border-white/10 bg-zinc-900/60 text-zinc-400 hover:border-amber-400/40 hover:text-white"
            }`}
          >
            --stage 2025-H1
          </button>
          <button
            type="button"
            onClick={() => handleQuickCommand("sambav")}
            className={`rounded-md px-2.5 py-1 font-mono text-xs transition-all ${
              activeFilter === "sambav"
                ? "bg-amber-400 text-black font-semibold shadow-md shadow-amber-400/20"
                : "border border-white/10 bg-zinc-900/60 text-zinc-400 hover:border-amber-400/40 hover:text-white"
            }`}
          >
            --stage 2021-2025
          </button>
          <button
            type="button"
            onClick={() => handleQuickCommand("abhyudaya")}
            className={`rounded-md px-2.5 py-1 font-mono text-xs transition-all ${
              activeFilter === "abhyudaya"
                ? "bg-amber-400 text-black font-semibold shadow-md shadow-amber-400/20"
                : "border border-white/10 bg-zinc-900/60 text-zinc-400 hover:border-amber-400/40 hover:text-white"
            }`}
          >
            --stage 2019-2020
          </button>
        </div>

        {/* Terminal Body Screen */}
        <div
          ref={terminalContentRef}
          className="max-h-[760px] overflow-y-auto p-4 font-mono text-sm leading-relaxed sm:p-7"
        >
          {/* Welcome Screen MOTD */}
          <div className="mb-8 rounded-xl border border-amber-400/20 bg-amber-400/[0.03] p-4 sm:p-5">
            <div className="flex items-center gap-2 font-bold text-amber-400">
              <span>*</span>
              <span>CAREER JOURNEY CONSOLE</span>
              <span className="rounded bg-amber-400/20 px-2 py-0.5 text-[11px] text-amber-300">
                v2.6.0
              </span>
            </div>
            <p className="mt-2 text-xs leading-5 text-zinc-300 sm:text-sm">
              <span className="text-zinc-500">&gt;</span> AWS DevOps &amp; Production Reliability
              Engineer • 7+ Years Enterprise Track Record.
              <br />
              <span className="text-zinc-500">&gt;</span> Architecture: Multi-Region AWS, Terraform IaC,
              Docker, Kubernetes, Zero-Trust WAFv2, Continuous Delivery.
              <br />
              <span className="text-emerald-400">✔</span> System state verified. Initializing
              chronological career stages below:
            </p>
          </div>

          {/* Interactive Logs Output */}
          {terminalLogs.length > 0 && (
            <div className="mb-6 space-y-1 rounded-lg border border-white/10 bg-black/50 p-3 text-xs text-zinc-300">
              {terminalLogs.map((log, index) => (
                <div
                  key={index}
                  className={log.startsWith("$") ? "text-amber-400 font-bold" : "text-zinc-300"}
                >
                  {log}
                </div>
              ))}
            </div>
          )}

          {/* Milestones Execution Output (2-Column Layout like aishwarya.ai) */}
          <div className="space-y-8">
            {filteredMilestones.map((milestone) => (
              <div
                key={milestone.id}
                className="group relative rounded-xl border border-white/10 bg-[#0d1017]/90 p-5 transition-all duration-300 hover:border-amber-400/40 hover:bg-[#121620]"
              >
                {/* CLI Command Line */}
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm">
                  <span className="text-emerald-400 font-semibold">
                    vishwateja@aws-prod:~/journey$
                  </span>
                  <span className="min-w-0 break-words text-white font-bold">{milestone.command}</span>
                  <span className="ml-auto rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                    EXIT 0
                  </span>
                </div>

                {/* 2-Column Milestone Details (Left: Specs, Right: Tech Emblem Card) */}
                <div className="mt-4 grid gap-6 border-l-2 border-amber-400/60 pl-4 sm:pl-6 lg:grid-cols-12 lg:items-center">
                  {/* Left Column: Role Details & Achievements (8 cols) */}
                  <div className="min-w-0 lg:col-span-8">
                    {/* Status & Period Badge */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-xs font-bold uppercase tracking-wider ${milestone.badgeColor}`}>
                        {milestone.badge}
                      </span>
                      <span className="text-xs text-zinc-500">•</span>
                      <span className="rounded bg-zinc-800/80 px-2 py-0.5 text-xs font-medium text-amber-300">
                        {milestone.period}
                      </span>
                    </div>

                    {/* Title & Company */}
                    <h4 className="mt-2 text-base font-bold text-white sm:text-lg">
                      {milestone.title}{" "}
                      <span className="font-normal text-zinc-400">
                        @ {milestone.company}
                      </span>
                    </h4>
                    <p className="text-xs text-zinc-500">{milestone.location}</p>
                    {milestone.domainLabel && (
                      <p className="mt-2 flex items-center gap-2 text-sm font-medium text-zinc-300">
                        {milestone.id === "sambav" && (
                          <span className="domain-symbol is-healthcare" aria-hidden="true">
                            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
                              <path d="M6 1h4v5h5v4h-5v5H6v-5H1V6h5Z" />
                            </svg>
                          </span>
                        )}
                        <span>{milestone.domainLabel}</span>
                      </p>
                    )}

                    <details className="terminal-experience mt-4">
                      <summary className="w-fit cursor-pointer rounded-md border border-amber-400/30 bg-amber-400/5 px-3 py-2.5 text-xs font-semibold text-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400">
                        <span className="experience-open-label">Explore experience</span>
                        <span className="experience-close-label">Hide experience</span>
                        <span className="sr-only"> at {milestone.company}</span>
                      </summary>
                    {/* Summary */}
                    <p className="mt-3 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                      {milestone.summary}
                    </p>
                    {milestone.caseStudyHref && (
                      <a className="mt-3 inline-block text-sm font-semibold text-amber-400 underline underline-offset-4" href={milestone.caseStudyHref}>
                        Read the security assessment case study →
                      </a>
                    )}

                    {/* Highlights */}
                    <ul className="mt-3 space-y-1.5 text-xs text-zinc-400 sm:text-sm">
                      {milestone.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold">&gt;</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {milestone.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-amber-400/20 bg-amber-400/5 px-2 py-0.5 font-mono text-[11px] text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Operational Status */}
                    <div className="mt-3 text-xs font-semibold text-zinc-500">
                      STATUS: <span className="text-zinc-300">{milestone.status}</span>
                    </div>
                    </details>
                  </div>

                  {/* Right Column: Branded Tech & Company Emblem (4 cols, styled like aishwarya.ai logos) */}
                  <div className="lg:col-span-4 flex flex-col items-center justify-center">
                    <div className="w-full rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900/90 to-zinc-950 p-4 text-center shadow-lg shadow-black/40 transition-transform duration-300 group-hover:border-amber-400/30">
                      {/* Logo Icon Badge */}
                      <div className={`mx-auto flex items-center justify-center rounded-xl border border-amber-400/40 bg-zinc-950 font-mono text-lg font-bold text-amber-400 shadow-md shadow-amber-400/10 ${milestone.logo ? "min-h-14 w-fit px-3 py-2" : "h-14 w-14"}`}>
                        {milestone.logo ? (
                          <Image src={milestone.logo} alt={`${milestone.company} logo`} width={milestone.logoWidth ?? 125} height={milestone.logoHeight ?? 37} unoptimized className="h-auto max-w-full" />
                        ) : milestone.id === "freelance" ? <USFlag /> : milestone.orgInitials}
                      </div>

                      {/* Org Name */}
                      <div className="mt-3 font-mono text-xs font-bold tracking-wider text-white">
                        {milestone.orgBadgeText}
                      </div>

                      {/* Cloud Focus */}
                      <div className="mt-3 flex flex-wrap justify-center gap-2">
                        {milestone.cloudFocus.split(" • ").map((tool) => (
                          <span key={tool} className="tool-icon-surface" title={tool} role="img" aria-label={tool}>
                            <ToolIcon name={tool} />
                          </span>
                        ))}
                      </div>

                      {/* Tier Tag */}
                      <div className="mt-3 inline-block rounded bg-zinc-800/80 px-2 py-0.5 font-mono text-[10px] tracking-wider text-zinc-400">
                        {milestone.tierTag}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Command Input Prompt (Interactive) */}
          <form
            onSubmit={handleCommandSubmit}
            className="mt-8 flex items-center gap-2 rounded-lg border border-white/10 bg-black/60 px-3 py-2.5"
          >
            <span className="text-emerald-400 font-semibold text-xs sm:text-sm">
              vishwateja@aws-prod:~/journey$
            </span>
            <input
              type="text"
              value={typedInput}
              onChange={(e) => setTypedInput(e.target.value)}
              placeholder="type 'play', 'skills', 'whoami', 'help', or 'clear'..."
              className="flex-1 bg-transparent font-mono text-xs text-white placeholder-zinc-600 focus:outline-none sm:text-sm"
            />
            <span className="inline-block h-4 w-2 animate-pulse bg-amber-400" />
            <button
              type="submit"
              className="rounded bg-amber-400/20 px-2.5 py-1 text-xs text-amber-300 hover:bg-amber-400/30"
            >
              Run
            </button>
          </form>

          {/* CLI Helper Hints */}
          <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-[11px] text-zinc-500">
            <span>Quick inputs:</span>
            <button
              type="button"
              onClick={() => {
                setTypedInput("play");
              }}
              className="hover:text-amber-400 underline decoration-zinc-700"
            >
              play
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => {
                setTypedInput("skills");
              }}
              className="hover:text-amber-400 underline decoration-zinc-700"
            >
              skills
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => {
                setTypedInput("whoami");
              }}
              className="hover:text-amber-400 underline decoration-zinc-700"
            >
              whoami
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => {
                setTypedInput("all");
              }}
              className="hover:text-amber-400 underline decoration-zinc-700"
            >
              all
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => {
                setTypedInput("clear");
              }}
              className="hover:text-amber-400 underline decoration-zinc-700"
            >
              clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

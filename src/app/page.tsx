import Image from "next/image";

import {
  CareerJourneyTerminal,
  ContactForm,
  ProjectExplorer,
  ResumeDownloadLink,
  VisitorCounter,
} from "./components/portfolio-interactions";
import { FlowMotion } from "./components/flow-motion";
import { ThemeToggle } from "./components/theme-toggle";

const profile = {
  name: "Vishwateja Gorumanthula",
  role: "AWS DevOps Engineer",
  location: "Hyderabad, Telangana, India",
  email: "gvishwateja25@gmail.com",
  linkedin: "https://www.linkedin.com/in/vishwateja-g-212b091b5/",
  github: "https://github.com/search?q=Vishwateja%20Gorumanthula&type=users",
  resume: "/resume/vishwateja-gorumanthula-resume.pdf",
  summary:
    "AWS DevOps Engineer with 7+ years of experience across cloud infrastructure, IaC, CI/CD automation, production monitoring, and technical operations.",
};

const metrics = [
  { value: "7+", label: "Years in DevOps, NOC, and cloud operations" },
  { value: "95%", label: "Infrastructure automation achieved with IaC" },
  { value: "60%", label: "Deployment time reduction through reusable modules" },
  { value: "99.999%", label: "Uptime target delivered for multi-region design" },
];

const skillGroups = [
  {
    title: "AWS cloud",
    items: [
      "EC2",
      "S3",
      "VPC",
      "IAM",
      "CloudWatch",
      "CloudTrail",
      "Lambda",
      "SNS",
      "SQS",
      "Route 53",
      "Global Accelerator",
      "CloudFormation",
      "Athena",
      "Redshift",
    ],
  },
  {
    title: "DevOps and IaC",
    items: [
      "Terraform",
      "AWS CDK",
      "Jenkins",
      "GitHub Actions",
      "Ansible",
      "Docker",
      "Kubernetes",
      "Helm Charts",
      "Git",
      "Bitbucket",
      "SVN migration",
    ],
  },
  {
    title: "Reliability and monitoring",
    items: [
      "Prometheus",
      "Grafana",
      "Splunk",
      "Better Stack",
      "CloudWatch alerts",
      "Backup and recovery",
      "DR runbooks",
      "Incident escalation",
      "Performance tuning",
    ],
  },
  {
    title: "Systems and scripting",
    items: [
      "Python",
      "Bash",
      "PowerShell",
      "SQL",
      "Scala",
      "Linux",
      "Windows Server",
      "Apache Tomcat",
      "Django",
      "Azure",
    ],
  },
];

const highlightedSkills = [
  {
    title: "AWS platform",
    signal: "Cloud foundation",
    summary: "Hands-on operations across compute, storage, networking, access, and monitoring.",
    tools: ["EC2", "VPC", "S3", "IAM", "CloudWatch", "ECS"],
  },
  {
    title: "CI/CD delivery",
    signal: "Release flow",
    summary: "Automated build, test, image, and deploy flows for faster production delivery.",
    tools: ["Git", "GitHub Actions", "Jenkins", "ECR", "ECS"],
  },
  {
    title: "Infrastructure as Code",
    signal: "Automation",
    summary: "Repeatable provisioning and environment setup with modular IaC patterns.",
    tools: ["Terraform", "CloudFormation", "AWS CDK", "Ansible"],
  },
  {
    title: "Observability",
    signal: "Reliability",
    summary: "Monitoring and alerting practices that make incidents visible and actionable.",
    tools: ["CloudWatch", "Datadog", "Better Stack", "Grafana"],
  },
];

const experience = [
  {
    role: "AWS DevOps Engineer",
    company: "Equicom Technologies, Bengaluru",
    journeyRange: "2025-current",
    journeyStatus: "Current AWS DevOps Role",
    period: "Sep 2025 - Present",
    tags: ["AWS", "Terraform", "GitHub Actions", "ECS", "ECR", "CloudWatch"],
    points: [
      "Provision and maintain AWS infrastructure with Terraform and reusable infrastructure-as-code patterns.",
      "Build GitHub Actions workflows for validation, container image publishing to ECR, and deployments to ECS.",
      "Operate secure cloud foundations across IAM, KMS, Secrets Manager, SSM Parameter Store, AppConfig, VPC, Route 53, ACM, CloudFront, and WAFv2.",
      "Monitor infrastructure and applications through CloudWatch, CloudTrail, Datadog, and Better Stack.",
    ],
  },
  {
    role: "Freelance Infrastructure Automation Engineer",
    company: "Remote, US clients",
    journeyRange: "2025",
    journeyStatus: "Automation Practice",
    period: "Mar 2025 - Jul 2025",
    tags: ["Hybrid cloud", "Terraform", "AWS CDK", "DR runbooks", "Linux"],
    points: [
      "Delivered repeatable infrastructure automation for hybrid cloud and on-premises environments.",
      "Designed DR strategies, test execution, validation, documentation, and automated runbooks to reduce recovery steps.",
      "Built AWS CDK constructs for common infrastructure patterns to speed up new service deployment.",
    ],
  },
  {
    role: "AWS DevOps Engineer",
    company: "Sambav EHR Pvt Ltd, Hyderabad",
    journeyRange: "2021-2025",
    journeyStatus: "DevOps Ownership",
    period: "Mar 2021 - Jan 2025",
    tags: ["AWS", "Jenkins", "GitHub Actions", "Terraform", "CloudFormation", "Docker"],
    points: [
      "Developed Terraform and CloudFormation automation that standardized provisioning and reduced deployment time by 60%.",
      "Implemented Python monitoring and automated remediation that reduced system downtime by 30%.",
      "Containerized legacy applications with Docker, reducing environment-related issues by 70% and image sizes by 40%.",
      "Built SNS and SQS notification flows for reliable critical event delivery to downstream services.",
    ],
  },
  {
    role: "AWS NOC Engineer",
    company: "Abhyudaya HR Business Solutions, Hyderabad",
    journeyRange: "2019-2020",
    journeyStatus: "Operational Foundation",
    period: "Apr 2019 - Oct 2020",
    tags: ["AWS S3", "EC2", "CloudWatch", "Windows Server", "Tomcat"],
    points: [
      "Provided 24x7 support, incident handling, fault escalation, and application access support for client teams.",
      "Improved Active Directory administration and onboarding efficiency by 40% within 3 months.",
      "Supported Windows Server 2012 R2, file servers, antivirus, Apache Tomcat, FTP, NFS, and monitoring cleanup routines.",
    ],
  },
];

const projects = [
  {
    title: "Multi-region self-healing AWS platform",
    category: "Reliability",
    outcome: "Reduced global latency by 40% and targeted 99.999% uptime.",
    details:
      "Architected a resilient design using AWS Global Accelerator and Route 53 for a high-availability e-commerce workload.",
    services: ["Global Accelerator", "Route 53", "CloudWatch", "IaC"],
    githubUrl:
      "https://github.com/search?q=multi-region+self-healing+aws+platform&type=repositories",
  },
  {
    title: "Reusable infrastructure automation",
    category: "Automation",
    outcome: "Reached 95% infrastructure automation and cut deployment time by 60%.",
    details:
      "Built Terraform modules and CloudFormation patterns for standardized, repeatable resource provisioning.",
    services: ["Terraform", "CloudFormation", "AWS CDK", "Git"],
    githubUrl:
      "https://github.com/search?q=terraform+aws+cloudformation+cdk+infrastructure+automation&type=repositories",
  },
  {
    title: "Containerized legacy application delivery",
    category: "Delivery",
    outcome: "Reduced environment-related issues by 70% and deployment time from hours to minutes.",
    details:
      "Created Docker build patterns and CI/CD pipelines for microservices moving through QA, UAT, and production.",
    services: ["Docker", "Jenkins", "GitHub Actions", "Kubernetes"],
    githubUrl:
      "https://github.com/search?q=docker+jenkins+github+actions+kubernetes+cicd&type=repositories",
  },
  {
    title: "Cloud notification and queueing flow",
    category: "Messaging",
    outcome: "Improved reliable event delivery for critical downstream alerts.",
    details:
      "Implemented alert publishing and message queueing with SNS and SQS for operational workflows.",
    services: ["SNS", "SQS", "Lambda", "CloudWatch"],
    githubUrl:
      "https://github.com/search?q=aws+sns+sqs+lambda+cloudwatch+notifications&type=repositories",
  },
];

const cloudRadar = [
  "Disaster recovery automation for cloud and hybrid infrastructure",
  "Terraform and AWS CDK module design for repeatable delivery",
  "Docker and Amazon ECS container operations for production workloads",
  "Observability patterns with CloudWatch, Datadog, Better Stack, Prometheus, and Grafana",
  "AI-aware cloud operations and practical automation workflows",
];

const credentials = [
  "AI Aware Badge - AI For All, CBSE and Intel, issued Aug 2025",
  "MCA, Avanthi PG College, Sep 2020 - Aug 2022",
  "LinkedIn: 2K followers and 500+ connections",
  "Volunteer team lead, National Service Scheme, 2014 - 2017",
];

const whatIDoCards = [
  {
    title: "CI/CD pipelines",
    body: "Build and maintain automated delivery flows from Git to test, image build, release, and deployment.",
    tools: ["GitHub Actions", "Jenkins", "ECR", "ECS"],
  },
  {
    title: "Infrastructure as Code",
    body: "Turn repeatable cloud setup into Terraform, CloudFormation, AWS CDK, scripts, and runbooks.",
    tools: ["Terraform", "CloudFormation", "AWS CDK", "Ansible"],
  },
  {
    title: "Containers",
    body: "Containerize applications and support reliable runtime patterns across Docker, ECS, and Kubernetes.",
    tools: ["Docker", "ECS", "Kubernetes", "Helm"],
  },
  {
    title: "AWS operations",
    body: "Operate AWS infrastructure across compute, networking, security, storage, messaging, and access control.",
    tools: ["EC2", "VPC", "IAM", "S3", "SNS/SQS"],
  },
  {
    title: "Monitoring & Observability",
    body: "Create observability signals that help teams detect issues, investigate incidents, and improve reliability.",
    tools: ["CloudWatch", "Datadog", "Better Stack", "Grafana", "Splunk"],
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="none">
      <path
        d="M5 10h10m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

type DevopsIconType =
  | "actions"
  | "bell"
  | "bucket"
  | "cloud"
  | "container"
  | "dashboard"
  | "database"
  | "dns"
  | "function"
  | "git"
  | "lock"
  | "mail"
  | "metrics"
  | "network"
  | "queue"
  | "registry"
  | "server"
  | "terraform";

function DevopsGlyph({ tone, type }: { tone: string; type: DevopsIconType }) {
  const common = {
    fill: "none",
    stroke: tone,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2.2,
  };

  switch (type) {
    case "actions":
      return (
        <g>
          <circle cx="16" cy="16" r="12" {...common} />
          <path d="m14 10 8 6-8 6V10Z" fill={tone} stroke="none" />
          <path d="M5 16h4M23 16h4M16 5v4M16 23v4" {...common} />
        </g>
      );
    case "bell":
      return (
        <g>
          <path d="M10 22h12M12 22V12a4 4 0 0 1 8 0v10M15 26h2" {...common} />
          <path d="M9 18c-2 1-3 2-4 4h22c-1-2-2-3-4-4" {...common} />
        </g>
      );
    case "bucket":
      return (
        <g>
          <ellipse cx="16" cy="9" rx="10" ry="4" {...common} />
          <path d="M6 9v13c0 2 4.5 4 10 4s10-2 10-4V9" {...common} />
          <path d="M6 16c0 2 4.5 4 10 4s10-2 10-4" {...common} />
        </g>
      );
    case "cloud":
      return (
        <path
          d="M9 23h15a6 6 0 0 0 0-12h-1A8 8 0 0 0 8 14a5 5 0 0 0 1 9Z"
          {...common}
        />
      );
    case "container":
      return (
        <g>
          <path d="m7 11 9-5 9 5v10l-9 5-9-5V11Z" {...common} />
          <path d="M7 11l9 5 9-5M16 16v10M11 13.5l9-5M21 13.5l-9-5" {...common} />
        </g>
      );
    case "dashboard":
      return (
        <g>
          <rect x="5" y="7" width="22" height="18" rx="3" {...common} />
          <path d="M9 20l4-5 4 3 5-7" {...common} />
          <path d="M9 12h3M20 21h3" {...common} />
        </g>
      );
    case "database":
      return (
        <g>
          <ellipse cx="16" cy="8" rx="10" ry="4" {...common} />
          <path d="M6 8v16c0 2 4.5 4 10 4s10-2 10-4V8" {...common} />
          <path d="M6 16c0 2 4.5 4 10 4s10-2 10-4" {...common} />
        </g>
      );
    case "dns":
      return (
        <g>
          <circle cx="16" cy="16" r="11" {...common} />
          <path d="M5 16h22M16 5c4 4 4 18 0 22M16 5c-4 4-4 18 0 22" {...common} />
        </g>
      );
    case "function":
      return <path d="M18 5 9 18h7l-2 9 9-13h-7l2-9Z" fill={tone} stroke="none" />;
    case "git":
      return (
        <g>
          <path d="M11 8v10a6 6 0 0 0 6 6h4M11 14h7a4 4 0 0 1 4 4v1" {...common} />
          <circle cx="11" cy="8" r="3" fill="#18181b" stroke={tone} strokeWidth="2" />
          <circle cx="11" cy="24" r="3" fill="#18181b" stroke={tone} strokeWidth="2" />
          <circle cx="22" cy="22" r="3" fill="#18181b" stroke={tone} strokeWidth="2" />
        </g>
      );
    case "lock":
      return (
        <g>
          <rect x="8" y="14" width="16" height="12" rx="3" {...common} />
          <path d="M11 14v-3a5 5 0 0 1 10 0v3M16 19v3" {...common} />
        </g>
      );
    case "mail":
      return (
        <g>
          <rect x="5" y="9" width="22" height="16" rx="3" {...common} />
          <path d="m7 12 9 7 9-7" {...common} />
        </g>
      );
    case "metrics":
      return (
        <g>
          <path d="M5 23h22" {...common} />
          <path d="M7 19c3 0 3-8 6-8s3 8 6 8 3-6 6-6" {...common} />
          <circle cx="25" cy="13" r="2" fill={tone} />
        </g>
      );
    case "network":
      return (
        <g>
          <rect x="5" y="6" width="8" height="8" rx="2" {...common} />
          <rect x="19" y="6" width="8" height="8" rx="2" {...common} />
          <rect x="12" y="20" width="8" height="8" rx="2" {...common} />
          <path d="M13 12h6M16 14v6" {...common} />
        </g>
      );
    case "queue":
      return (
        <g>
          <path d="M8 9h16M8 16h16M8 23h16" {...common} />
          <circle cx="5" cy="9" r="1.5" fill={tone} />
          <circle cx="5" cy="16" r="1.5" fill={tone} />
          <circle cx="5" cy="23" r="1.5" fill={tone} />
        </g>
      );
    case "registry":
      return (
        <g>
          <path d="M7 11 16 6l9 5-9 5-9-5Z" {...common} />
          <path d="m7 16 9 5 9-5M7 21l9 5 9-5" {...common} />
        </g>
      );
    case "server":
      return (
        <g>
          <rect x="8" y="5" width="16" height="22" rx="3" {...common} />
          <path d="M12 12h8M12 18h8" {...common} />
          <circle cx="13" cy="23" r="1.5" fill={tone} />
        </g>
      );
    case "terraform":
      return (
        <g>
          <path d="m8 8 8-4 8 4-8 4-8-4Z" {...common} />
          <path d="m8 14 8-4 8 4-8 4-8-4ZM8 20l8-4 8 4-8 4-8-4Z" {...common} />
        </g>
      );
    default:
      return null;
  }
}

function HeroSocialGlyph({
  type,
}: {
  type: "email" | "github" | "linkedin" | "resume";
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
      {type === "email" ? (
        <>
          <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" {...common} />
          <path d="m5 8 7 5 7-5" {...common} />
        </>
      ) : null}
      {type === "github" ? (
        <path
          d="M12 3.8a8.2 8.2 0 0 0-2.6 16c.4.1.5-.2.5-.4v-1.5c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.8-.5.1-.5.1-.5.8.1 1.3.9 1.3.9.8 1.3 2 1 2.4.8.1-.6.3-1 .5-1.2-1.8-.2-3.6-.9-3.6-4a3.1 3.1 0 0 1 .8-2.2c-.1-.2-.4-1 .1-2.2 0 0 .7-.2 2.3.8a7.9 7.9 0 0 1 4.1 0c1.6-1 2.3-.8 2.3-.8.5 1.2.2 2 .1 2.2a3.1 3.1 0 0 1 .8 2.2c0 3.1-1.9 3.8-3.6 4 .3.2.5.7.5 1.4v2.3c0 .2.1.5.5.4A8.2 8.2 0 0 0 12 3.8Z"
          fill="currentColor"
        />
      ) : null}
      {type === "linkedin" ? (
        <>
          <rect x="4" y="4" width="16" height="16" rx="2" {...common} />
          <path d="M8 10v6M8 7.6v.1M11.5 16v-3.4a2.2 2.2 0 0 1 4.5 0V16M11.5 10.2V16" {...common} />
        </>
      ) : null}
      {type === "resume" ? (
        <>
          <path d="M7 3.5h6l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 19V3.5Z" {...common} />
          <path d="M13 3.5V8h4M9.5 12h5M9.5 15.5h5" {...common} />
        </>
      ) : null}
    </svg>
  );
}

function HeroAwsProfile() {
  const heroAwsIcons = [
    {
      className: "left-[11%] top-[20%] h-16 w-16",
      label: "AWS cloud",
      tone: "#fbbf24",
      type: "cloud",
    },
    {
      className: "right-[12%] top-[18%] h-14 w-14",
      label: "GitHub Actions",
      tone: "#38bdf8",
      type: "actions",
    },
    {
      className: "left-[17%] bottom-[27%] h-14 w-14",
      label: "EC2 compute",
      tone: "#fb923c",
      type: "server",
    },
    {
      className: "right-[12%] bottom-[22%] h-16 w-16",
      label: "ECS containers",
      tone: "#f97316",
      type: "container",
    },
    {
      className: "left-[42%] top-[8%] h-12 w-12",
      label: "Terraform IaC",
      tone: "#a78bfa",
      type: "terraform",
    },
    {
      className: "right-[39%] bottom-[9%] h-12 w-12",
      label: "Observability metrics",
      tone: "#22c55e",
      type: "metrics",
    },
    {
      className: "left-[38%] bottom-[40%] h-14 w-14",
      label: "Amazon ECR",
      tone: "#fb7185",
      type: "registry",
    },
  ] satisfies {
    className: string;
    label: string;
    tone: string;
    type: DevopsIconType;
  }[];

  return (
    <div
      aria-label="Profile image placeholder with AWS DevOps icon background"
      className="hero-aws-profile relative mx-auto aspect-square w-full max-w-[520px]"
      role="img"
    >
      {heroAwsIcons.map((icon) => (
        <div
          aria-hidden="true"
          className={`hero-aws-profile-badge absolute ${icon.className}`}
          key={icon.label}
          title={icon.label}
        >
          <svg className="h-full w-full" viewBox="0 0 32 32">
            <DevopsGlyph tone={icon.tone} type={icon.type} />
          </svg>
        </div>
      ))}
      <div className="hero-profile-placeholder absolute inset-x-[24%] bottom-[9%] top-[20%] flex flex-col items-center justify-center rounded-t-full border border-white/10 bg-gradient-to-b from-zinc-700 to-zinc-950 text-center shadow-2xl shadow-black/40">
        <span className="flex h-24 w-24 items-center justify-center rounded-full border border-amber-300/40 bg-zinc-950 text-4xl font-semibold text-amber-300 shadow-lg shadow-amber-300/10">
          VG
        </span>
        <span className="mt-5 max-w-[12rem] text-sm font-semibold leading-5 text-zinc-200">
          Profile image slot
        </span>
        <span className="mt-2 text-xs text-zinc-400">AWS DevOps Engineer</span>
      </div>
    </div>
  );
}

function ArchitectureFlowCard({
  height = 132,
  icon,
  label,
  step,
  sublabel,
  tone,
  width = 132,
  x,
  y,
}: {
  height?: number;
  icon: DevopsIconType;
  label: string;
  step?: string;
  sublabel: string | string[];
  tone: string;
  width?: number;
  x: number;
  y: number;
}) {
  const sublines = Array.isArray(sublabel) ? sublabel : [sublabel];
  const subtitleY = step ? 103 : 88;

  return (
    <g className="architecture-card" transform={`translate(${x} ${y})`}>
      <rect
        width={width}
        height={height}
        rx="12"
        fill="#ffffff"
        stroke="#94a3b8"
        strokeWidth="2"
      />
      {step ? (
        <text
          x={width / 2}
          y="27"
          fill="#0f172a"
          fontSize="17"
          fontWeight="900"
          textAnchor="middle"
        >
          {step}
        </text>
      ) : null}
      <g transform={`translate(${width / 2 - 24} ${step ? 43 : 23})`}>
        <rect width="48" height="48" rx="10" fill={tone} />
        <g transform="translate(8 8)">
          <DevopsGlyph tone="#ffffff" type={icon} />
        </g>
      </g>
      <text
        x={width / 2}
        y={step ? 88 : 73}
        fill="#111827"
        fontSize="16"
        fontWeight="900"
        textAnchor="middle"
      >
        {label}
      </text>
      {sublines.map((line, index) => (
        <text
          fill="#334155"
          fontSize="12.5"
          fontWeight="700"
          key={line}
          textAnchor="middle"
          x={width / 2}
          y={subtitleY + index * 15}
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function ArchitectureServiceTile({
  height = 68,
  icon,
  label,
  sublabel,
  tone,
  width = 82,
  x,
  y,
}: {
  height?: number;
  icon: DevopsIconType;
  label: string;
  sublabel?: string;
  tone: string;
  width?: number;
  x: number;
  y: number;
}) {
  return (
    <g className="architecture-service-tile" transform={`translate(${x} ${y})`}>
      <rect width={width} height={height} rx="9" fill="#f8fafc" stroke={tone} strokeOpacity="0.55" />
      <g transform={`translate(${width / 2 - 15} 8)`}>
        <DevopsGlyph tone={tone} type={icon} />
      </g>
      <text
        x={width / 2}
        y={sublabel ? height - 24 : height - 14}
        fill="#0f172a"
        fontSize="11.5"
        fontWeight="900"
        textAnchor="middle"
      >
        {label}
      </text>
      {sublabel ? (
        <text
          x={width / 2}
          y={height - 9}
          fill="#475569"
          fontSize="10"
          fontWeight="700"
          textAnchor="middle"
        >
          {sublabel}
        </text>
      ) : null}
    </g>
  );
}

function ArchitectureBoard() {
  const pipelineCards = [
    {
      icon: "git",
      label: "GitHub",
      step: "1. Code",
      sublabel: "Source Repository",
      tone: "#111827",
      x: 38,
    },
    {
      icon: "actions",
      label: "GitHub Actions",
      step: "2. Build & Test",
      sublabel: ["Build, Test, Lint"],
      tone: "#2563eb",
      x: 202,
    },
    {
      icon: "registry",
      label: "Amazon ECR",
      step: "3. Push Image",
      sublabel: ["Container Image", "Repository"],
      tone: "#f97316",
      x: 366,
    },
    {
      icon: "queue",
      label: "EventBridge",
      step: "4. Trigger",
      sublabel: ["ECR image push", "event"],
      tone: "#db2777",
      x: 530,
    },
    {
      icon: "container",
      label: "Amazon ECS",
      step: "5. Deploy",
      sublabel: "Update Service",
      tone: "#f97316",
      x: 694,
    },
  ] satisfies {
    icon: DevopsIconType;
    label: string;
    step: string;
    sublabel: string | string[];
    tone: string;
    x: number;
  }[];

  const sidebarSteps = [
    { icon: "git", label: "GitHub", sublabel: "Code", tone: "#111827", y: 406 },
    { icon: "actions", label: "Actions", sublabel: "Build & Test", tone: "#2563eb", y: 468 },
    { icon: "registry", label: "ECR", sublabel: "Image Repository", tone: "#f97316", y: 530 },
    { icon: "queue", label: "EventBridge", sublabel: "Image Push Event", tone: "#db2777", y: 592 },
    { icon: "container", label: "ECS", sublabel: "Deploy Service", tone: "#f97316", y: 654 },
  ] satisfies {
    icon: DevopsIconType;
    label: string;
    sublabel: string;
    tone: string;
    y: number;
  }[];

  const observabilityTiles = [
    { icon: "metrics", label: "CloudWatch", tone: "#db2777", x: 824 },
    { icon: "dashboard", label: "Datadog", tone: "#7c3aed", x: 914 },
    { icon: "lock", label: "CloudTrail", tone: "#db2777", x: 1004 },
    { icon: "registry", label: "ECR Scan", tone: "#7c3aed", x: 1094 },
  ] satisfies {
    icon: DevopsIconType;
    label: string;
    tone: string;
    x: number;
  }[];

  const storageTiles = [
    { icon: "bucket", label: "S3", tone: "#3f7f29", x: 850 },
    { icon: "cloud", label: "EFS", tone: "#3f7f29", x: 972 },
    { icon: "server", label: "EBS", tone: "#3f7f29", x: 1094 },
  ] satisfies {
    icon: DevopsIconType;
    label: string;
    tone: string;
    x: number;
  }[];

  const databaseTiles = [
    { icon: "database", label: "RDS", tone: "#2563eb", x: 850 },
    { icon: "database", label: "Aurora", tone: "#2563eb", x: 972 },
    { icon: "database", label: "ElastiCache", tone: "#2563eb", x: 1094 },
  ] satisfies {
    icon: DevopsIconType;
    label: string;
    tone: string;
    x: number;
  }[];

  const networkTiles = [
    { icon: "cloud", label: "VPC", tone: "#7c3aed", x: 262 },
    { icon: "lock", label: "Public", tone: "#15803d", x: 356 },
    { icon: "lock", label: "Private", tone: "#4f46e5", x: 450 },
    { icon: "dns", label: "IGW", tone: "#7c3aed", x: 544 },
    { icon: "network", label: "NAT", tone: "#7c3aed", x: 638 },
  ] satisfies {
    icon: DevopsIconType;
    label: string;
    tone: string;
    x: number;
  }[];

  const securityTiles = [
    { icon: "lock", label: "IAM Roles", tone: "#15803d", x: 212 },
    { icon: "dashboard", label: "IAM Policies", tone: "#15803d", x: 374 },
    { icon: "lock", label: "Secrets", tone: "#dc2626", x: 536 },
    { icon: "lock", label: "KMS", tone: "#dc2626", x: 698 },
    { icon: "lock", label: "Security Groups", tone: "#7c3aed", x: 860 },
    { icon: "bell", label: "CloudWatch Alarms", tone: "#db2777", x: 1030 },
  ] satisfies {
    icon: DevopsIconType;
    label: string;
    tone: string;
    x: number;
  }[];

  return (
    <figure className="aws-monitor mx-auto w-full max-w-[1180px]" data-flow-reveal>
      <figcaption className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">
          AWS operating model
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-normal text-zinc-950 dark:text-white sm:text-4xl">
          Currently Using Services
        </h2>
      </figcaption>
      <div className="aws-monitor-screen-shell rounded-[1.35rem] border border-zinc-800 bg-zinc-950 p-2 shadow-2xl shadow-zinc-950/25 dark:border-white/10 dark:shadow-black/40">
        <div className="aws-monitor-glass overflow-hidden rounded-[1rem] border border-white/10 bg-zinc-900">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-zinc-950 px-4 py-3 text-xs text-zinc-300">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <span aria-hidden="true" />
          </div>
          <div className="architecture-board relative bg-white text-zinc-950">
            <Image
              alt="CI/CD to observability roadmap showing Git, GitHub Actions, Terraform, AWS services, ClickHouse, Datadog, and Better Stack"
              className="h-auto w-full"
              height={1024}
              sizes="(max-width: 1180px) calc(100vw - 40px), 1180px"
              src="/images/ci-cd-observability-roadmap-2026.png"
              unoptimized
              width={1536}
            />
            <svg
              aria-hidden="true"
              role="img"
              aria-labelledby="architecture-title"
              viewBox="0 0 1240 820"
              className="hidden h-auto w-full"
            >
        <title id="architecture-title">
          CI/CD Pipeline and Cloud Architecture showing GitHub, GitHub Actions,
          Amazon ECR, EventBridge, Amazon ECS on EC2, monitoring, storage,
          database, networking, and security.
        </title>
        <defs>
          <filter id="architecture-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="14" floodColor="#0f172a" floodOpacity="0.14" stdDeviation="16" />
          </filter>
          <linearGradient id="architecture-panel" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>
        </defs>

        <rect width="1240" height="820" fill="#f8fafc" />
        <rect
          x="18"
          y="18"
          width="1204"
          height="784"
          rx="20"
          fill="url(#architecture-panel)"
          filter="url(#architecture-shadow)"
          stroke="#e2e8f0"
        />

        <text x="620" y="66" fill="#0f172a" fontSize="38" fontWeight="900" textAnchor="middle">
          CI/CD Pipeline & Cloud Architecture
        </text>
        <text x="620" y="108" fill="#0f172a" fontSize="26" fontWeight="800" textAnchor="middle">
          GitHub
        </text>
        <text x="760" y="108" fill="#f97316" fontSize="28" fontWeight="900" textAnchor="middle">
          ECR
        </text>
        <text x="918" y="108" fill="#f97316" fontSize="28" fontWeight="900" textAnchor="middle">
          ECS on EC2
        </text>

        {pipelineCards.map((card) => (
          <ArchitectureFlowCard
            icon={card.icon}
            key={card.label}
            label={card.label}
            step={card.step}
            sublabel={card.sublabel}
            tone={card.tone}
            x={card.x}
            y={126}
          />
        ))}

        <g className="architecture-cluster">
          <rect x="866" y="88" width="332" height="206" rx="14" fill="#ffffff" stroke="#e2e8f0" />
          <rect
            x="886"
            y="108"
            width="292"
            height="166"
            rx="12"
            fill="none"
            stroke="#f97316"
            strokeDasharray="8 8"
            strokeWidth="2.5"
          />
          <g transform="translate(908 128)">
            <DevopsGlyph tone="#f97316" type="server" />
          </g>
          <text x="956" y="150" fill="#0f172a" fontSize="18" fontWeight="900">
            ECS Cluster on EC2
          </text>
          {[172, 224].map((y) => (
            <g key={y}>
              <rect
                x="904"
                y={y}
                width="246"
                height="38"
                rx="9"
                fill="#f8fafc"
                stroke="#94a3b8"
                strokeDasharray="5 5"
              />
              <g transform={`translate(918 ${y + 4})`}>
                <DevopsGlyph tone="#f97316" type="server" />
              </g>
              <text x="960" y={y + 24} fill="#0f172a" fontSize="14" fontWeight="900">
                EC2 Instance
              </text>
              <g transform={`translate(1042 ${y + 4})`}>
                <DevopsGlyph tone="#f97316" type="container" />
              </g>
              <text x="1084" y={y + 17} fill="#0f172a" fontSize="13" fontWeight="900">
                ECS Task
              </text>
              <text x="1084" y={y + 31} fill="#475569" fontSize="11" fontWeight="700">
                Container
              </text>
            </g>
          ))}
          <g transform="translate(918 252)">
            <DevopsGlyph tone="#f97316" type="network" />
          </g>
          <text x="960" y="273" fill="#0f172a" fontSize="13" fontWeight="900">
            Auto Scaling Group
          </text>
        </g>

        <rect
          className="architecture-cloud-static"
          x="28"
          y="330"
          width="1184"
          height="448"
          rx="18"
          fill="#ffffff"
          stroke="#475569"
          strokeWidth="2.5"
        />
        <text x="50" y="364" fill="#0f172a" fontSize="24" fontWeight="900">
          aws
        </text>
        <text x="96" y="362" fill="#0f172a" fontSize="18" fontWeight="900">
          AWS Cloud
        </text>

        <rect x="46" y="384" width="170" height="300" rx="12" fill="#eef6ff" stroke="#93c5fd" />
        <text x="130" y="415" fill="#1e3a8a" fontSize="17" fontWeight="900" textAnchor="middle">
          CI/CD Pipeline
        </text>
        {sidebarSteps.map((step) => (
          <g key={step.label}>
            <g transform={`translate(64 ${step.y})`}>
              <DevopsGlyph tone={step.tone} type={step.icon} />
            </g>
            <text x="108" y={step.y + 13} fill="#0f172a" fontSize="13" fontWeight="900">
              {step.label}
            </text>
            <text x="108" y={step.y + 29} fill="#475569" fontSize="11" fontWeight="700">
              {step.sublabel}
            </text>
          </g>
        ))}

        <rect x="238" y="384" width="540" height="220" rx="12" fill="#fff7ed" stroke="#f97316" strokeWidth="2" />
        <text x="258" y="416" fill="#ea580c" fontSize="18" fontWeight="900">
          Compute: ECS on EC2
        </text>
        <rect
          x="252"
          y="432"
          width="512"
          height="158"
          rx="12"
          fill="#ffffff"
          stroke="#f97316"
          strokeDasharray="7 7"
          strokeWidth="2"
        />
        <g transform="translate(272 448)">
          <DevopsGlyph tone="#f97316" type="container" />
        </g>
        <text x="312" y="471" fill="#0f172a" fontSize="15" fontWeight="900">
          ECS Cluster
        </text>
        <g transform="translate(506 448)">
          <DevopsGlyph tone="#f97316" type="network" />
        </g>
        <text x="548" y="471" fill="#0f172a" fontSize="15" fontWeight="900">
          Auto Scaling Group
        </text>

        {[274, 438, 602].map((x, index) => (
          <g key={x}>
            <rect x={x} y="492" width="138" height="82" rx="10" fill="#f8fafc" stroke="#94a3b8" strokeDasharray="5 5" />
            <text x={x + 69} y="514" fill="#2563eb" fontSize="12" fontWeight="900" textAnchor="middle">
              Availability Zone {String.fromCharCode(65 + index)}
            </text>
            <g transform={`translate(${x + 17} 526)`}>
              <DevopsGlyph tone="#f97316" type="server" />
            </g>
            <text x={x + 56} y="548" fill="#0f172a" fontSize="12" fontWeight="900">
              EC2 Instance
            </text>
            <rect x={x + 20} y="554" width="98" height="16" rx="4" fill="#fff7ed" stroke="#f97316" />
            <text x={x + 69} y="566" fill="#0f172a" fontSize="10" fontWeight="900" textAnchor="middle">
              ECS Task
            </text>
          </g>
        ))}
        <text x="576" y="550" fill="#0f172a" fontSize="24" fontWeight="900" textAnchor="middle">
          ...
        </text>

        <rect x="238" y="620" width="540" height="72" rx="12" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
        <text x="258" y="644" fill="#15803d" fontSize="15" fontWeight="900">
          Networking
        </text>
        {networkTiles.map((tile) => (
          <ArchitectureServiceTile
            height={42}
            icon={tile.icon}
            key={tile.label}
            label={tile.label}
            tone={tile.tone}
            width={72}
            x={tile.x}
            y={646}
          />
        ))}

        <rect x="800" y="384" width="380" height="100" rx="12" fill="#faf5ff" stroke="#7c3aed" strokeWidth="2" />
        <text x="990" y="415" fill="#6d28d9" fontSize="17" fontWeight="900" textAnchor="middle">
          Observability & Monitoring
        </text>
        {observabilityTiles.map((tile) => (
          <ArchitectureServiceTile
            height={50}
            icon={tile.icon}
            key={tile.label}
            label={tile.label}
            tone={tile.tone}
            width={76}
            x={tile.x}
            y={426}
          />
        ))}

        <rect x="800" y="500" width="380" height="84" rx="12" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
        <text x="990" y="526" fill="#15803d" fontSize="17" fontWeight="900" textAnchor="middle">
          Storage
        </text>
        {storageTiles.map((tile) => (
          <ArchitectureServiceTile
            height={46}
            icon={tile.icon}
            key={tile.label}
            label={tile.label}
            tone={tile.tone}
            width={84}
            x={tile.x}
            y={532}
          />
        ))}

        <rect x="800" y="600" width="380" height="88" rx="12" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
        <text x="990" y="628" fill="#2563eb" fontSize="17" fontWeight="900" textAnchor="middle">
          Database
        </text>
        {databaseTiles.map((tile) => (
          <ArchitectureServiceTile
            height={48}
            icon={tile.icon}
            key={tile.label}
            label={tile.label}
            tone={tile.tone}
            width={84}
            x={tile.x}
            y={636}
          />
        ))}

        <rect x="46" y="704" width="1134" height="54" rx="10" fill="#f8fafc" stroke="#93c5fd" strokeWidth="2" />
        <g transform="translate(66 716)">
          <DevopsGlyph tone="#15803d" type="lock" />
        </g>
        <text x="112" y="736" fill="#0f172a" fontSize="18" fontWeight="900">
          Security & Governance (IAM)
        </text>
        {securityTiles.map((tile) => (
          <g className="architecture-service-tile" key={tile.label} transform={`translate(${tile.x} 716)`}>
            <DevopsGlyph tone={tile.tone} type={tile.icon} />
            <text x="38" y="21" fill="#0f172a" fontSize="12" fontWeight="900">
              {tile.label}
            </text>
          </g>
        ))}

      </svg>
          </div>
        </div>
      </div>
      <div className="aws-monitor-neck mx-auto h-12 w-24 bg-gradient-to-b from-zinc-800 to-zinc-950 dark:from-zinc-700 dark:to-zinc-950" />
      <div className="aws-monitor-base mx-auto h-4 w-56 rounded-full border border-zinc-800 bg-zinc-950 shadow-xl shadow-zinc-950/20 dark:border-white/10" />
    </figure>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-3xl" data-flow-reveal>
      <p className="mb-3 text-sm font-semibold uppercase text-amber-700 dark:text-amber-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-zinc-950 dark:text-white md:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          {body}
        </p>
      ) : null}
    </div>
  );
}

function ServiceMenuTerminalGrid() {
  return (
    <section
      id="what-i-do"
      className="service-menu-terminal-section flow-surface border-b border-zinc-200 bg-[#080b12] text-white dark:border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div
          className="service-menu-terminal overflow-hidden rounded-lg border border-white/10 bg-[#050811] shadow-2xl shadow-black/30"
          data-flow-reveal
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-zinc-900/90 px-4 py-3 font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
            </div>
            <span className="font-semibold">services.sh - 80x24</span>
            <span className="hidden sm:block">aws-devops-menu</span>
          </div>
          <div className="service-menu-grid">
            <aside className="service-menu-intro">
              <p className="font-mono text-sm font-semibold uppercase text-amber-300">
                What I do
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-5xl">
                DevOps work exposed like a service menu.
              </h2>
              <p className="mt-7 text-base leading-7 text-zinc-300">
                Clear ownership across build, infrastructure, runtime, cloud
                operations, and observability.
              </p>
            </aside>
            <div className="service-menu-cards">
              {whatIDoCards.map((item, index) => (
                <article
                  className="service-menu-card group"
                  data-flow-reveal
                  key={item.title}
                >
                  <span className="service-menu-number">
                    {index + 1}
                  </span>
                  <h3 className="mt-8 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-zinc-300">
                    {item.body}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    {item.tools.map((tool) => (
                      <span
                        className="rounded-md bg-[#050811] px-3 py-1.5 text-xs font-semibold text-zinc-200 transition-colors duration-500 group-hover:bg-amber-300 group-hover:text-zinc-950 group-focus-within:bg-amber-300 group-focus-within:text-zinc-950"
                        key={tool}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-zinc-950 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        href="#content"
      >
        Skip to content
      </a>
      <main
        id="content"
        className="min-h-screen bg-[#f6f7f9] text-zinc-950 dark:bg-[#080b12] dark:text-zinc-50"
      >
      <FlowMotion />
      <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#080b12]/90">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4"
        >
          <a className="flex items-center gap-3 font-semibold" href="#intro">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-zinc-950 text-sm text-white dark:bg-white dark:text-zinc-950">
              VG
            </span>
            <span>Vishwateja G.</span>
          </a>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <ResumeDownloadLink
              className="float-button hidden h-10 items-center gap-2 rounded-md border border-zinc-200 bg-white px-4 text-sm font-semibold text-zinc-800 shadow-sm hover:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:border-white/10 dark:bg-white/10 dark:text-zinc-100 dark:hover:border-white/30 dark:focus:ring-offset-zinc-950 sm:inline-flex"
              href={profile.resume}
            >
              Resume
            </ResumeDownloadLink>
          </div>
        </nav>
      </header>

      <section
        id="intro"
        className="flow-surface border-b border-zinc-200 bg-[#f1f2f6] px-4 py-8 dark:border-white/10 dark:bg-[#080b12] sm:px-5 sm:py-10"
      >
        <div
          className="hero-browser-shell mx-auto max-w-7xl overflow-hidden rounded-[1.6rem] border border-zinc-300 bg-zinc-950 shadow-2xl shadow-zinc-950/10 dark:border-white/10 dark:shadow-black/40"
          data-flow-reveal
        >
          <div className="flex flex-wrap items-center justify-between gap-4 bg-zinc-300 px-4 py-3 text-zinc-800 sm:px-6">
            <div className="flex min-w-0 items-center gap-4">
              <div className="flex shrink-0 items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-500" />
              </div>
              <a
                className="float-button inline-flex min-w-0 items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 font-mono text-sm font-semibold text-zinc-950 shadow-sm"
                href="#intro"
              >
                <span className="text-zinc-500">&lt;/&gt;</span>
                <span className="truncate">DevOps engineer</span>
              </a>
            </div>
            <div className="hidden items-center gap-8 font-mono text-sm font-semibold text-zinc-700 lg:flex">
              {[
                ["./what-i-do", "#what-i-do"],
                ["./skills", "#skills"],
                ["./experience", "#experience"],
                ["./projects", "#projects"],
                ["./contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  className="transition-colors duration-300 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-300"
                  href={href}
                  key={label}
                >
                  {label}
                </a>
              ))}
            </div>
            <a
              className="float-button inline-flex items-center gap-2 rounded-md border-2 border-zinc-950 bg-lime-300 px-4 py-2 font-mono text-sm font-semibold text-zinc-950 shadow-[5px_5px_0_#18181b] hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-300"
              href="#contact"
            >
              Contact Me
              <ArrowIcon />
            </a>
          </div>

          <div className="hero-browser-stage grid min-h-[680px] gap-10 overflow-hidden bg-[#141414] px-5 py-10 font-mono text-white sm:px-8 md:px-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1fr)] lg:items-start lg:px-16 lg:py-14">
            <div className="min-w-0">
              <p className="text-base font-semibold text-lime-400">
                &gt; system.greet()
              </p>
              <h1 className="mt-5 max-w-3xl break-words text-4xl font-normal leading-tight text-white sm:text-5xl md:text-6xl">
                {profile.name}
              </h1>
              <div className="mt-6 h-1 w-40 bg-lime-300" />

              <p className="mt-8 text-base font-semibold text-zinc-300">
                <span className="text-lime-400">$</span> whoami --role
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-100 md:text-lg">
                {profile.role} focused on production cloud delivery, CI/CD
                pipelines, Terraform infrastructure automation, container
                operations, and practical observability.
              </p>

              <div className="mt-7 space-y-3 border-l-2 border-lime-300/70 pl-4">
                {metrics.map((metric) => (
                  <p
                    className="flex flex-col gap-1 text-zinc-200 sm:flex-row sm:items-baseline sm:gap-4"
                    key={metric.value}
                  >
                    <span className="min-w-24 text-2xl font-semibold text-lime-300">
                      {metric.value}
                    </span>
                    <span className="font-sans text-sm leading-6 text-zinc-300">
                      {metric.label}
                    </span>
                  </p>
                ))}
              </div>

              <p className="mt-7 max-w-2xl font-sans text-sm leading-7 text-zinc-300">
                {profile.summary}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  aria-label="Email Vishwateja"
                  className="float-button inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-zinc-100 shadow-lg shadow-black/20 hover:bg-lime-300 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-zinc-950"
                  href={`mailto:${profile.email}`}
                  title="Email"
                >
                  <HeroSocialGlyph type="email" />
                </a>
                <a
                  aria-label="Open Vishwateja LinkedIn"
                  className="float-button inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-zinc-100 shadow-lg shadow-black/20 hover:bg-lime-300 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-zinc-950"
                  href={profile.linkedin}
                  rel="noreferrer"
                  target="_blank"
                  title="LinkedIn"
                >
                  <HeroSocialGlyph type="linkedin" />
                </a>
                <a
                  aria-label="Open Vishwateja GitHub"
                  className="float-button inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-zinc-100 shadow-lg shadow-black/20 hover:bg-lime-300 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-zinc-950"
                  href={profile.github}
                  rel="noreferrer"
                  target="_blank"
                  title="GitHub"
                >
                  <HeroSocialGlyph type="github" />
                </a>
                <ResumeDownloadLink
                  aria-label="Download resume"
                  className="float-button inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-zinc-100 shadow-lg shadow-black/20 hover:bg-lime-300 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-zinc-950"
                  href={profile.resume}
                  title="Resume"
                >
                  <HeroSocialGlyph type="resume" />
                </ResumeDownloadLink>
              </div>
            </div>

            <div className="lg:pt-16">
              <HeroAwsProfile />
            </div>
          </div>
        </div>
      </section>

      <section className="flow-surface border-b border-zinc-200 bg-[#f6f7f9] dark:border-white/10 dark:bg-[#0e1320]">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <ArchitectureBoard />
        </div>
      </section>

      <ServiceMenuTerminalGrid />

      <section id="skills" className="flow-surface border-b border-zinc-200 bg-[#f6f7f9] dark:border-white/10 dark:bg-[#0e1320]">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <SectionHeading
            eyebrow="Skills"
            title="Core AWS DevOps skills for cloud delivery, automation, and reliability."
            body="The first row highlights the capabilities most relevant for AWS DevOps roles. The full skill map below shows the broader tool coverage."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {highlightedSkills.map((skill) => (
              <article
                className="skill-highlight-card float-card flex min-h-[250px] flex-col rounded-lg border border-amber-200 bg-white p-5 shadow-sm dark:border-amber-300/20 dark:bg-white/10"
                data-flow-reveal
                key={skill.title}
              >
                <p className="inline-flex w-fit rounded-md bg-amber-100 px-2.5 py-1 text-xs font-semibold uppercase text-amber-800 dark:bg-amber-300/10 dark:text-amber-200">
                  {skill.signal}
                </p>
                <h3 className="mt-5 text-xl font-semibold text-zinc-950 dark:text-white">
                  {skill.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {skill.summary}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {skill.tools.map((tool) => (
                    <span
                      className="rounded-md bg-[#f6f7f9] px-2.5 py-1 text-xs font-semibold text-zinc-700 dark:bg-[#080b12] dark:text-zinc-200"
                      key={tool}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                className="float-card rounded-lg border border-zinc-200 bg-white p-6 shadow-sm hover:border-amber-200 dark:border-white/10 dark:bg-white/10 dark:hover:border-amber-300/40 dark:hover:bg-white/[0.13]"
                data-flow-reveal
                key={group.title}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">
                    {group.title}
                  </h3>
                  <span className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-600 dark:bg-white/10 dark:text-zinc-300">
                    {group.items.length} tools
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      className="rounded-md border border-zinc-200 bg-white px-3 py-1 text-sm font-medium text-zinc-700 dark:border-white/10 dark:bg-[#080b12] dark:text-zinc-200"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="flow-surface border-b border-white/10 bg-[#080b12] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <CareerJourneyTerminal entries={experience} />
        </div>
      </section>

      <section id="projects" className="flow-surface border-b border-zinc-200 bg-white dark:border-white/10 dark:bg-[#0e1320]">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <SectionHeading
            eyebrow="Selected work"
            title="Project stories that show reliability, speed, and practical cloud judgment."
          />
          <ProjectExplorer projects={projects} />
        </div>
      </section>

      <section className="flow-surface border-b border-zinc-200 bg-[#f6f7f9] dark:border-white/10 dark:bg-[#080b12]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
          <div>
            <SectionHeading
              eyebrow="Cloud radar"
              title="Current focus areas for staying sharp in AWS and platform engineering."
              body="This section is built to become a living record of what Vishwateja is studying, testing, and publishing as the cloud sector keeps moving."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {cloudRadar.map((item) => (
                <div
                  className="float-card rounded-lg border border-zinc-200 bg-white p-4 text-sm font-medium leading-6 text-zinc-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-zinc-200"
                  data-flow-reveal
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <aside
            className="float-card rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/10"
            data-flow-reveal
          >
            <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">
              Credentials and signals
            </h3>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              {credentials.map((credential) => (
                <li className="flex gap-3" key={credential}>
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span>{credential}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section id="contact" className="flow-surface bg-zinc-950 text-white dark:bg-black">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(360px,1.15fr)] lg:items-start">
          <div data-flow-reveal>
            <p className="text-sm font-semibold uppercase text-amber-300">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Contact for AWS DevOps roles, projects, and cloud automation.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
              Based in {profile.location}. Available for hiring conversations,
              freelance cloud work, technical collaboration, and AWS DevOps
              project discussions.
            </p>
            <div className="mt-8 grid gap-3">
              <ResumeDownloadLink
                className="float-button inline-flex items-center justify-between gap-3 rounded-md bg-amber-400 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-amber-300"
                href={profile.resume}
              >
                Download resume PDF
                <ArrowIcon />
              </ResumeDownloadLink>
            </div>
          </div>
          <ContactForm
            email={profile.email}
            github={profile.github}
            linkedin={profile.linkedin}
          />
        </div>
      </section>
      </main>
      <footer className="border-t border-zinc-200 bg-white text-zinc-700 dark:border-white/10 dark:bg-black dark:text-zinc-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <VisitorCounter />
          <p className="text-sm font-medium">
            &copy; 2026 Vishwateja Gorumanthula. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

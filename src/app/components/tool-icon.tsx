import Image from "next/image";

const logos: Record<string, string> = {
  AWS: "amazonwebservices",
  Azure: "azure",
  Terraform: "terraform",
  Docker: "docker",
  Kubernetes: "kubernetes",
  "GitHub Actions": "githubactions",
  SonarQube: "sonarqube",
  Python: "python",
  Bash: "bash",
  PowerShell: "powershell",
  Git: "git",
  Jenkins: "jenkins",
  Datadog: "datadog",
};

// Service and workflow concepts use simple pictograms, distinct from vendor logos.
export function ToolIcon({ name }: { name: string }) {
  const logo = logos[name];
  if (logo) {
    return <Image src={`/icons/tools/${logo}.svg`} width={24} height={24} alt="" unoptimized className="tool-icon" />;
  }

  const storage = /S3|registry/i.test(name);
  const security = /IAM|security|validate/i.test(name);
  const network = /VPC|Hybrid|Repository|AD/.test(name);
  const monitoring = /CloudWatch|BetterStack|Monitor/i.test(name);
  const recovery = /DR|recovery/i.test(name);
  const server = /EC2|ECS|Deploy/i.test(name);

  return (
    <svg className="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {storage ? <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></> :
      security ? <><path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6Z" /><path d="m8 12 3 3 5-6" /></> :
      network ? <><rect x="9" y="2" width="6" height="5" rx="1" /><rect x="2" y="17" width="6" height="5" rx="1" /><rect x="16" y="17" width="6" height="5" rx="1" /><path d="M12 7v5H5v5m7-5h7v5" /></> :
      monitoring ? <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 22h8m-4-5v5M5 11h3l2-4 3 7 2-4h4" /></> :
      recovery ? <><path d="M3 11a9 9 0 1 1 2 7M3 4v7h7M12 7v5l3 2" /></> :
      server ? <><rect x="3" y="2" width="18" height="8" rx="2" /><rect x="3" y="14" width="18" height="8" rx="2" /><path d="M7 6h.01M7 18h.01M12 6h5m-5 12h5" /></> :
      name === "Lambda" ? <path d="m5 21 7-14m-5-4h4l7 18h3" /> :
      <><path d="m8 5-6 7 6 7m8-14 6 7-6 7M14 3l-4 18" /></>}
    </svg>
  );
}

export function USFlag() {
  return (
    <svg viewBox="0 0 190 100" className="h-8 w-12" role="img" aria-label="United States flag">
      {Array.from({ length: 13 }, (_, row) => <rect key={row} x="0" y={row * 100 / 13} width="190" height={100 / 13 + 0.1} fill={row % 2 ? "#fff" : "#b22234"} />)}
      <rect width="76" height={700 / 13} fill="#3c3b6e" />
      {Array.from({ length: 9 }, (_, row) => Array.from({ length: row % 2 ? 5 : 6 }, (_, col) => (
        <polygon key={`${row}-${col}`} transform={`translate(${(col + (row % 2 ? 1 : 0.5)) * 76 / 6},${(row + 0.7) * 53.85 / 9})`} points="0,-2.5 .6,-.8 2.4,-.8 1,.4 1.5,2.2 0,1.1 -1.5,2.2 -1,.4 -2.4,-.8 -.6,-.8" fill="#fff" />
      )))}
    </svg>
  );
}

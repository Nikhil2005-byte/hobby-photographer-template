import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FolderOpen, ExternalLink, Shield, Activity, Lock } from "lucide-react";

const projects = [
  {
    title: "Web Application Security Assessment",
    icon: Shield,
    description: "Comprehensive security testing of OWASP Juice Shop to identify critical vulnerabilities",
    problem: "Modern web applications face numerous security threats including injection attacks, broken authentication, and sensitive data exposure.",
    tools: ["OWASP Juice Shop", "Burp Suite", "Browser DevTools", "OWASP ZAP"],
    findings: [
      "Identified SQL Injection leading to authentication bypass",
      "Found reflected XSS vulnerabilities in search functionality",
      "Discovered insecure direct object references (IDOR)",
      "Mapped all findings to OWASP Top 10 (2021)",
    ],
    outcome: "Documented 15+ vulnerabilities with detailed remediation strategies. Created a comprehensive security report following industry standards.",
    color: "primary",
  },
  {
    title: "SIEM & Log Analysis (SOC Use Case)",
    icon: Activity,
    description: "Real-time threat detection and log analysis using Splunk SIEM platform",
    problem: "Organizations need to detect and respond to security incidents quickly through effective log monitoring and analysis.",
    tools: ["Splunk Enterprise", "SPL Queries", "Windows Event Logs", "Syslog"],
    findings: [
      "Detected ransomware infection patterns in log data",
      "Identified trojan and rootkit activities through behavioral analysis",
      "Performed timeline analysis for incident reconstruction",
      "Created custom correlation rules for threat detection",
    ],
    outcome: "Built SOC-ready visual dashboards for real-time monitoring. Reduced mean time to detect (MTTD) through automated alerting.",
    color: "secondary",
  },
  {
    title: "Secure File Sharing System (Capstone)",
    icon: Lock,
    description: "End-to-end encrypted file sharing application with secure authentication",
    problem: "Traditional file sharing methods lack proper encryption and secure access controls, exposing sensitive data to threats.",
    tools: ["Python", "Flask Framework", "AES-256 Encryption", "Werkzeug", "HTML/Jinja"],
    findings: [
      "Implemented AES-256 encryption for file storage",
      "Secure upload/download with server-side encryption",
      "Used Werkzeug for filename sanitization and security",
      "Built intuitive frontend using HTML & Jinja templates",
    ],
    outcome: "Delivered a production-ready secure file sharing system. Successfully protected against common file upload vulnerabilities.",
    color: "primary",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <FolderOpen className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-primary">03. Projects</span>
          </div>
          <h2 className="section-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Hands-on cybersecurity projects demonstrating practical security skills
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="cyber-card overflow-hidden"
            >
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-xl ${project.color === "primary" ? "bg-primary/10" : "bg-secondary/10"}`}>
                    <project.icon className={`w-8 h-8 ${project.color === "primary" ? "text-primary" : "text-secondary"}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Problem */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-mono text-sm text-primary mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Problem
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 className="font-mono text-sm text-primary mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Tools Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded border border-primary/10"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Findings & Outcome */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-mono text-sm text-secondary mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full" />
                        Key Findings
                      </h4>
                      <ul className="space-y-1">
                        {project.findings.map((finding, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="text-primary mt-1">▹</span>
                            {finding}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-mono text-sm text-secondary mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full" />
                        Outcome
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

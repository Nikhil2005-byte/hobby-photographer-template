import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Wrench, Code, Brain, Monitor } from "lucide-react";

const skillCategories = [
  {
    title: "Cybersecurity",
    icon: Shield,
    color: "primary",
    skills: [
      "SOC Operations (Basic)",
      "SIEM & Log Analysis (Splunk)",
      "Incident Response",
      "Threat Detection",
      "Vulnerability Scanning",
      "Ethical Hacking",
      "OWASP Top 10",
      "Network Security",
      "Web Application Security",
      "Social Engineering Analysis",
      "Secure Coding",
    ],
  },
  {
    title: "Security Tools",
    icon: Wrench,
    color: "secondary",
    skills: [
      "Splunk (SPL Queries, Dashboards)",
      "Metasploit Framework",
      "Wireshark",
      "Burp Suite",
      "Nmap",
      "Kali Linux",
    ],
  },
  {
    title: "Programming & Development",
    icon: Code,
    color: "primary",
    skills: [
      "Python",
      "C, C++",
      "HTML, JavaScript",
      "Flask Framework",
      "Secure File Handling",
      "AES Encryption",
      "Werkzeug",
    ],
  },
  {
    title: "AI & Emerging Tech",
    icon: Brain,
    color: "secondary",
    skills: [
      "Generative AI",
      "Large Language Models (LLMs)",
      "Prompt Engineering",
      "NLP Basics",
      "Responsible / Ethical AI",
    ],
  },
  {
    title: "Platforms & Tools",
    icon: Monitor,
    color: "primary",
    skills: [
      "Linux",
      "Windows",
      "Git & GitHub",
      "Visual Studio Code",
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 relative bg-card/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <Wrench className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-primary">02. Skills</span>
          </div>
          <h2 className="section-heading">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            A comprehensive toolkit for identifying vulnerabilities and defending systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cyber-card p-6 hover-lift"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg ${category.color === "primary" ? "bg-primary/10" : "bg-secondary/10"}`}>
                  <category.icon className={`w-6 h-6 ${category.color === "primary" ? "text-primary" : "text-secondary"}`} />
                </div>
                <h3 className="font-semibold text-lg text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

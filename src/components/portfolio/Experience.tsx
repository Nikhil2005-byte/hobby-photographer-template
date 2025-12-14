import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const responsibilities = [
    "Performed SOC operations and SIEM-based log analysis using Splunk",
    "Conducted incident triage and threat classification for security events",
    "Implemented secure file handling and encryption practices",
    "Analyzed security logs to identify potential threats and vulnerabilities",
    "Collaborated with security team on incident response procedures",
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative bg-card/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-primary">04. Experience</span>
          </div>
          <h2 className="section-heading">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="cyber-card p-6 md:p-8 relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-3xl rounded-full" />
            
            <div className="relative">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                    Cyber Security Intern
                  </h3>
                  <p className="text-primary font-semibold text-lg">Future Interns</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm">Aug 2025 – Sep 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span className="text-sm">Remote</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3 mb-6">
                {responsibilities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Achievements */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-primary/10">
                <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/30">
                  Certificate of Completion
                </span>
                <span className="px-4 py-2 bg-secondary/10 text-secondary text-sm font-medium rounded-full border border-secondary/30">
                  Letter of Recommendation
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

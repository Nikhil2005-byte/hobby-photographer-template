import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Cloud, BarChart, Shield, Code } from "lucide-react";

const certifications = [
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    icon: Cloud,
    color: "primary",
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud",
    icon: Cloud,
    color: "primary",
  },
  {
    title: "Career Essentials in Data Analysis",
    issuer: "Microsoft & LinkedIn",
    icon: BarChart,
    color: "secondary",
  },
  {
    title: "Tata Cybersecurity Analyst Job Simulation",
    issuer: "Forage",
    icon: Shield,
    color: "primary",
  },
  {
    title: "Deloitte Australia Cybersecurity Job Simulation",
    issuer: "Forage",
    icon: Shield,
    color: "secondary",
  },
  {
    title: "C Programming Basics",
    issuer: "Simplilearn",
    icon: Code,
    color: "primary",
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-20 md:py-32 relative bg-card/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-primary">06. Certifications</span>
          </div>
          <h2 className="section-heading">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Industry-recognized certifications validating technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cyber-card p-6 hover-lift group"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${cert.color === "primary" ? "bg-primary/10" : "bg-secondary/10"} group-hover:scale-110 transition-transform`}>
                  <cert.icon className={`w-6 h-6 ${cert.color === "primary" ? "text-primary" : "text-secondary"}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                </div>
              </div>
              
              {/* Badge Effect */}
              <div className="mt-4 pt-4 border-t border-primary/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-xs text-muted-foreground font-mono">Verified Credential</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

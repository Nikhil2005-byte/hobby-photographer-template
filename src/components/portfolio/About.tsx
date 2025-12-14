import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Target, Briefcase } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <User className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-primary">01. About Me</span>
          </div>
          <h2 className="section-heading">
            Who <span className="text-gradient">I Am</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="cyber-card p-6 md:p-8"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Motivated <span className="text-primary font-semibold">3rd-year B.Tech CSE student</span> with a strong interest in cybersecurity and defensive security operations. I bring hands-on experience in vulnerability assessment, SIEM-based threat detection, and secure application development.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              My approach combines <span className="text-secondary">technical expertise</span> with a <span className="text-primary">security-first mindset</span>. I'm actively seeking cybersecurity internships or fresher roles where I can grow through real-world exposure and collaborative environments.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border border-primary/10"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Security Focus</h3>
                  <p className="text-muted-foreground text-sm">
                    Specializing in SOC operations, threat detection, and vulnerability assessment
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border border-primary/10"
              >
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Career Goal</h3>
                  <p className="text-muted-foreground text-sm">
                    Seeking Cybersecurity Analyst / SOC Analyst / Security Intern positions
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

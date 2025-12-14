import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-primary">05. Education</span>
          </div>
          <h2 className="section-heading">
            Academic <span className="text-gradient">Background</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="cyber-card p-6 md:p-8 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-4 border-primary/10 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border-4 border-secondary/10 rounded-full" />
            
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    B.Tech in Computer Science & Engineering
                  </h3>
                  <p className="text-primary font-semibold text-lg mb-4">
                    Durgapur Institute of Advanced Technology and Management (DIATM)
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm">2023 – 2027</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Affiliated to MAKAUT</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-primary/10">
                    <p className="text-muted-foreground text-sm">
                      Currently in <span className="text-primary font-semibold">3rd Year</span> with focus on cybersecurity, 
                      software development, and emerging technologies. Actively participating in 
                      security-focused projects and certifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

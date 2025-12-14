import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Download, Eye } from "lucide-react";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <FileText className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-primary">07. Resume</span>
          </div>
          <h2 className="section-heading">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Download my complete resume for detailed information
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="cyber-card p-8 text-center relative overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute inset-0 grid-bg opacity-30" />
            
            <div className="relative">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl animate-pulse-glow" />
                <div className="relative w-full h-full bg-card rounded-2xl flex items-center justify-center border border-primary/30">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                Nikhil Kumar Yadav
              </h3>
              <p className="text-muted-foreground mb-6">
                Cybersecurity Analyst Resume • PDF Format
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="btn-primary flex items-center justify-center gap-2 group"
                  onClick={(e) => {
                    e.preventDefault();
                    // Add resume download functionality here
                    alert("Resume download will be available once you add your resume PDF file.");
                  }}
                >
                  <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                  Download Resume
                </a>
                <a
                  href="#"
                  className="btn-outline flex items-center justify-center gap-2 group"
                  onClick={(e) => {
                    e.preventDefault();
                    // Add resume preview functionality here
                    alert("Resume preview will be available once you add your resume PDF file.");
                  }}
                >
                  <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Preview
                </a>
              </div>

              {/* File Info */}
              <div className="mt-8 pt-6 border-t border-primary/10">
                <div className="flex justify-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    PDF Format
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    Updated Dec 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;

import { motion } from "framer-motion";
import { ChevronDown, Download, FolderOpen, Shield, Lock, Eye } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 grid-bg">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 right-10 md:right-20"
        >
          <Shield className="w-16 h-16 md:w-24 md:h-24 text-primary/10" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-10 md:left-20"
        >
          <Lock className="w-12 h-12 md:w-16 md:h-16 text-secondary/10" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/4"
        >
          <Eye className="w-8 h-8 md:w-12 md:h-12 text-primary/5" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 border border-primary/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-mono text-sm text-primary">System Status: Active</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="text-foreground">Nikhil Kumar</span>{" "}
            <span className="text-gradient glow-text">Yadav</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-2">
              Cybersecurity Enthusiast | SOC & SIEM Analyst
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              B.Tech CSE Student | Security Researcher
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Detail-oriented cybersecurity student with hands-on experience in{" "}
            <span className="text-primary">web application security</span>,{" "}
            <span className="text-secondary">SIEM log analysis</span>, and{" "}
            <span className="text-primary">secure system design</span>. Passionate about defending systems against real-world threats.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="btn-primary flex items-center gap-2 group"
            >
              <FolderOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              View Projects
            </a>
            <a
              href="#resume"
              className="btn-outline flex items-center gap-2 group"
            >
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </a>
          </motion.div>

          {/* Terminal Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 mx-auto max-w-2xl"
          >
            <div className="cyber-card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-primary/20">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-destructive/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-primary/80" />
                </div>
                <span className="font-mono text-xs text-muted-foreground ml-2">terminal@nky-sec</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-primary">$</span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{ duration: 1, delay: 1 }}
                    className="overflow-hidden whitespace-nowrap text-foreground"
                  >
                    whoami
                  </motion.span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-muted-foreground ml-4 mb-3"
                >
                  nikhil_kumar_yadav - Cybersecurity Analyst Fresher
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary">$</span>
                    <span className="text-foreground">cat skills.txt</span>
                  </div>
                  <div className="text-muted-foreground ml-4 flex flex-wrap gap-2">
                    <span className="text-primary">[SOC]</span>
                    <span className="text-secondary">[SIEM]</span>
                    <span className="text-primary">[Splunk]</span>
                    <span className="text-secondary">[Python]</span>
                    <span className="text-primary">[OWASP]</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                  className="flex items-center gap-2 mt-3"
                >
                  <span className="text-primary">$</span>
                  <span className="text-primary animate-pulse">_</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-mono">Scroll Down</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

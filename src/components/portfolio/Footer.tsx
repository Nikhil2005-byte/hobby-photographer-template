import { motion } from "framer-motion";
import { Shield, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 relative border-t border-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-primary" />
            <div>
              <p className="font-mono text-sm text-foreground">
                <span className="text-primary">Nikhil Kumar</span> Yadav
              </p>
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>

          {/* Built With */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>and</span>
            <span className="text-primary font-mono">security</span>
            <span>in mind</span>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary hover:bg-primary/20 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Top</span>
          </motion.button>
        </div>

        {/* Terminal Footer Message */}
        <div className="mt-8 pt-6 border-t border-primary/10 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">$</span> echo "Thanks for visiting!" <span className="text-primary">|</span> Securing the digital world, one line of code at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

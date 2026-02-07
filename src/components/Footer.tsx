import { Heart, Linkedin, Github, Twitter, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-glass-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="text-2xl font-bold gradient-text">
              AK
            </a>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {currentYear} Made with <Heart size={14} className="text-destructive" /> by Ankit Kumar
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/ankit-kumar-abbbb0336"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors group"
              aria-label="GitHub"
            >
              <Github size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors group"
              aria-label="LeetCode"
            >
              <Code2 size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://x.com/Ankit_s_Kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors group"
              aria-label="Twitter"
            >
              <Twitter size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

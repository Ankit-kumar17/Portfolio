import { ArrowDown, Github, Linkedin, Twitter, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up opacity-0 stagger-1">
            Hi, I'm{" "}
            <span className="gradient-text">Ankit Kumar</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 animate-slide-up opacity-0 stagger-2">
            Frontend Developer
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up opacity-0 stagger-3">
            I am a passionate frontend developer specializing in{" "}
            <span className="text-primary font-medium">React</span>. I love building clean and 
            user-friendly web applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up opacity-0 stagger-4">
            <a
              href="#projects"
              className="group px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all flex items-center gap-2 glow-sm"
            >
              View My Work
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-glass-border text-foreground font-semibold hover:bg-secondary/50 transition-all"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-slide-up opacity-0 stagger-5">
            <a
              href="https://www.linkedin.com/in/ankit-kumar-abbbb0336"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass-card hover:border-primary/50 transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass-card hover:border-primary/50 transition-colors group"
              aria-label="GitHub"
            >
              <Github size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://x.com/Ankit_s_Kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass-card hover:border-primary/50 transition-colors group"
              aria-label="Twitter"
            >
              <Twitter size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass-card hover:border-primary/50 transition-colors group"
              aria-label="LeetCode"
            >
              <Code2 size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

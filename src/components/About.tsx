import { GraduationCap, MapPin, Briefcase, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Get to Know Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Image */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative Elements */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
              <div className="relative glass-card rounded-2xl p-6 h-full flex flex-col justify-center items-center glow overflow-hidden">
                {/* Profile Image */}
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30 mb-6 relative group">
                  <img
                    src="/profile.jpg"
                    alt="Ankit Kumar"
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Ankit Kumar</h3>
                <p className="text-primary font-medium mb-4">Frontend Developer</p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} />
                  <span className="text-sm">India</span>
                </div>
                
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-28 h-28 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-28 h-28 border-b-2 border-r-2 border-accent/20 rounded-br-2xl" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a passionate frontend developer specializing in React. I love building clean and 
              user-friendly web applications and aim to work at a product-based company where I can 
              contribute to meaningful projects and grow as a developer.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Education Card */}
              <div className="glass-card p-5 rounded-xl hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="text-primary" size={20} />
                </div>
                <h4 className="font-semibold mb-1">Education</h4>
                <p className="text-sm text-muted-foreground">B.E in Computer Engineering</p>
                <p className="text-xs text-muted-foreground mt-1">Swaminarayan University • 2025–2029</p>
              </div>

              {/* Experience Card */}
              <div className="glass-card p-5 rounded-xl hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="text-primary" size={20} />
                </div>
                <h4 className="font-semibold mb-1">Experience</h4>
                <p className="text-sm text-muted-foreground">Fresher</p>
                <p className="text-xs text-muted-foreground mt-1">Ready for new opportunities</p>
              </div>

              {/* Passion Card */}
              <div className="glass-card p-5 rounded-xl hover:border-primary/50 transition-all duration-300 group sm:col-span-2 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Heart className="text-primary" size={20} />
                </div>
                <h4 className="font-semibold mb-1">What I Love</h4>
                <p className="text-sm text-muted-foreground">
                  Creating responsive, accessible, and visually appealing web experiences. 
                  Turning ideas into reality with clean code and modern technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

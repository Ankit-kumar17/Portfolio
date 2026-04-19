import { GraduationCap, MapPin, Briefcase, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text">About Me</h2>
          <p className="text-2xl sm:text-3xl text-foreground/80 mt-3 font-medium">
            Get to Know Me
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* About Text */}
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            I am a passionate frontend developer specializing in React. I love building clean and 
            user-friendly web applications and aim to work at a product-based company where I can 
            contribute to meaningful projects and grow as a developer.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin size={16} className="text-primary" />
            <span className="text-sm">India</span>
          </div>

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
    </section>
  );
};

export default About;


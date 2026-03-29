import { ExternalLink, Github, ShoppingCart, CheckSquare, User } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Web App",
    description: "Built a full-stack e-commerce application using React, Node.js, and MongoDB. Implemented product listings, search & filter, cart functionality, and user authentication.",
    icon: ShoppingCart,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    gradient: "from-primary to-cyan-400",
  },
  {
    title: "Task Management System",
    description: "Created a responsive task manager with React and REST APIs. Users can create, update, delete, and track daily tasks with real-time UI updates.",
    icon: CheckSquare,
    technologies: ["React", "REST API", "CSS", "JavaScript"],
    gradient: "from-accent to-purple-400",
  },
  {
    title: "Developer Portfolio Website",
    description: "Designed and developed a personal portfolio using React showcasing skills, projects, and contact features with a modern and mobile-friendly design.",
    icon: User,
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    gradient: "from-emerald-500 to-teal-400",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col hover:border-primary/50 transition-all duration-500">
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center relative overflow-hidden`}>
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:20px_20px]" />
                  </div>
                  
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <project.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors" aria-label="View code">
                      <Github className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors" aria-label="View live">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Ankit-kumar17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-glass-border hover:border-primary/50 hover:bg-secondary/50 transition-all font-medium"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

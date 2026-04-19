import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Hackathons from "@/components/Hackathons";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import Loader from "@/components/Loader";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <ParticleBackground />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Hackathons />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

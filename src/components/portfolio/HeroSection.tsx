import { ArrowDown, FileDown, FolderOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center blueprint-grid overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-pulse" />
        <div className="absolute bottom-32 right-20 w-48 h-48 border border-accent/20 rotate-45" />
        <div className="absolute top-1/3 right-10 w-24 h-24 border-2 border-primary/10" />
        <svg className="absolute bottom-0 left-0 w-full h-32 text-primary/5" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,50 L100,30 L200,50 L300,20 L400,60 L500,30 L600,50 L700,20 L800,60 L900,30 L1000,50 L1100,20 L1200,50 L1200,100 L0,100 Z" fill="currentColor" className="rounded-none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center shadow-md opacity-90">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-slide-up rounded-2xl shadow-inner opacity-95 border-2 px-[10px]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Open to Opportunities
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Rakesh Kushwaha 
            </h1>
            
            <p className="text-xl md:text-2xl text-primary font-medium mb-4">
              Fresher Civil Engineer
            </p>
            
            <p className="text-lg text-muted-foreground mb-6">
              Structural Design & BIM Enthusiast
            </p>
            
            <p className="text-base text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Entry-level civil engineer with strong academic foundations in RCC design, 
              AutoCAD, and sustainable infrastructure planning. 
              Ready to contribute to innovative engineering projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="gap-2">
                <a href="/resume.pdf" download className="inline-flex items-center gap-2">
                  <FileDown className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToProjects} className="gap-2">
                <FolderOpen className="w-5 h-5" />
                View Projects
              </Button>
              <Button size="lg" variant="secondary" onClick={scrollToContact} className="gap-2">
                <Mail className="w-5 h-5" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              
              {/* Image container */}
              <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-4 border-card shadow-xl">
                <img alt="Arjun Verma - Fresher Civil Engineer" src="/lovable-uploads/303f2c01-8d8a-4233-a144-dad0d6c9787e.png" className="w-full h-full object-center object-cover" />
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-lg shadow-lg px-4 py-3 border border-border">
                <p className="text-xs text-muted-foreground">Education</p>
                <p className="text-sm font-semibold text-foreground">B.Tech Civil</p>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-lg shadow-lg px-4 py-3">
                <p className="text-xs opacity-80">Year</p>
                <p className="text-sm font-semibold">2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <button onClick={scrollToProjects} className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors" aria-label="Scroll down">
            <ArrowDown className="w-5 h-5 shadow-xs opacity-65" />
          </button>
        </div>
      </div>
    </section>;
};
export default HeroSection;
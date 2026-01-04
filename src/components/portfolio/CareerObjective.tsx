import { Target, FileDown, Mail, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const CareerObjective = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Target className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Career Objective
          </h2>

          <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 italic">
            "I am a fresher civil engineer seeking entry-level roles or internships 
            where I can apply my academic knowledge, learn industry practices, and 
            contribute to safe, economical, and sustainable civil engineering projects."
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Briefcase className="w-5 h-5" />
              Apply for Internship
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToContact} className="gap-2">
              <Mail className="w-5 h-5" />
              Contact Me
            </Button>
            <Button size="lg" variant="secondary" asChild className="gap-2">
              <a href="/resume.pdf" download className="inline-flex items-center gap-2">
                <FileDown className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerObjective;

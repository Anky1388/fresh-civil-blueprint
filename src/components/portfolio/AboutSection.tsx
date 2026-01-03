import { GraduationCap, Target, Lightbulb, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Strong theoretical foundation in structural engineering and design principles",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on building expertise in RCC design and BIM technologies",
    },
    {
      icon: Lightbulb,
      title: "Quick Learner",
      description: "Eager to learn industry practices and adapt to site execution workflows",
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "Committed to continuous improvement and professional development",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Passionate About Building the Future
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            I am a recent civil engineering graduate with a deep passion for structural design 
            and sustainable infrastructure. My academic journey has equipped me with strong 
            theoretical knowledge and hands-on experience with industry-standard software tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="bg-background rounded-xl p-8 border border-border hover-lift">
            <h3 className="text-xl font-semibold text-foreground mb-4">My Background</h3>
            <p className="text-muted-foreground leading-relaxed">
              As a final-year/recent graduate in Civil Engineering, I have developed a strong 
              understanding of structural analysis, RCC design, and construction planning. 
              My coursework and projects have given me practical exposure to tools like 
              ETABS, AutoCAD, and Revit.
            </p>
          </div>
          
          <div className="bg-background rounded-xl p-8 border border-border hover-lift">
            <h3 className="text-xl font-semibold text-foreground mb-4">My Aspirations</h3>
            <p className="text-muted-foreground leading-relaxed">
              I am seeking entry-level opportunities where I can apply my academic knowledge, 
              contribute to real-world projects, and grow under the mentorship of experienced 
              professionals. I am particularly interested in structural design, BIM implementation, 
              and sustainable construction practices.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

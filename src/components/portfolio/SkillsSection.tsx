import { Monitor, BookOpen, FileText, Users } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Monitor,
      title: "Software & Tools",
      skills: [
        { name: "AutoCAD", description: "2D Drafting & Detailing" },
        { name: "MS Word", description: "Design Calculations & BOQs" },
        { name: "MS Excel", description: "Design Calculations & BOQs" },
        { name: "MS Powerpoint", description: "Design Calculations & BOQs" },
        { name: "MS Office 365", description: "Design Calculations & BOQs" },

      ],
    },
    {
      icon: BookOpen,
      title: "Engineering Knowledge",
      skills: [
        { name: "RCC Design", description: "Fundamentals & Analysis" },
        { name: "Seismic Analysis", description: "Basic Concepts" },
        { name: "Transportation Eng.", description: "Rigid Pavement Design" },
        { name: "Geotechnical Eng.", description: "Foundation Basics" },
      ],
    },
    {
      icon: FileText,
      title: "Codes & Standards",
      skills: [
        { name: "IS 456", description: "Plain & Reinforced Concrete" },
        { name: "IS 800", description: "Steel Design" },
        { name: "IS 1893", description: "Seismic Design Criteria" },
        { name: "IRC Codes", description: "Road Design Standards" },
      ],
    },
    {
      icon: Users,
      title: "Professional Skills",
      skills: [
        { name: "Documentation", description: "Technical Reports" },
        { name: "Presentation", description: "Project Communication" },
        { name: "Team Coordination", description: "Collaborative Work" },
        { name: "Problem Solving", description: "Analytical Thinking" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-background blueprint-grid">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Technical Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Competencies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technical skills and knowledge gained through 
            academic coursework, training programs, and hands-on projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 md:p-8 border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 rounded-lg bg-background border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-foreground">{skill.name}</p>
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-primary/50" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

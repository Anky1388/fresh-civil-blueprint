import { Building2, Droplets, Route, Mountain, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "K Truss Bridge",
      description: [
        "In this project, I have presented a K Truss bridge,tested it by applying a load force of 11 KN on each member, and designed it using AutoCAD.",
      ],
      color: "bg-primary/10",
      textColor: "text-primary",
    },

    {
      title: "Seawage Treatment Plant (STP)",
      description: [
        "In essence, the project I've developed is a functional model of wastewater treatment that shows the routes,processes, filtration unit, transportation unit, and primary and secondary filtration.",
      ],
      color: "bg-accent/10",
      textColor: "text-accent",
    },
    {
      title: "Under Ground Metro System",
      description: [
        "I saw the East West Corridor Metro System in Kolkata,built under the Ganges River, as a model and I read about the TBM machine that was used in this project as well.",
      ],
      color: "bg-chart-3/10",
      textColor: "text-chart-3",
    },
    {
      icon: Mountain,
      title: "Sustainable water Management",
      description: [
        "Integrated Irrigation and Treated Water Reuse System for Efficient AgricultureThis project develops a system that integrates conventional irrigation with the reuse of treated wastewater. It focuses on collecting,treating, and redistributing wastewater for agricultural use to minimize freshwater dependency,reduce environmental pollution, and enhance resource efficiency.",
      ],
      color: "bg-chart-4/10",
      textColor: "text-chart-4",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Academic Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of academic projects demonstrating practical application of 
            civil engineering principles and software proficiency.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className={`${project.color} p-6 border-b border-border`}>
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-card flex items-center justify-center shadow-sm`}>
                    <project.icon className={`w-7 h-7 ${project.textColor}`} />
                  </div>
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2 text-xs">
                      Academic Project
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {project.title}
                    </h3>
                    {/* <p className="text-sm text-muted-foreground">
                      {project.subtitle}
                    </p> */}
                  </div>
                </div>
                {/* <p className="mt-4 text-sm font-medium text-foreground/80 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {project.role}
                </p> */}
              </div>

              {/* Content */}
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  {project.description.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* <div className="flex flex-wrap gap-2">
                  {project.keywords.map((keyword, i) => (
                    <Badge key={i} variant="secondary" className="text-xs font-normal">
                      {keyword}
                    </Badge>
                  ))}
                </div> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

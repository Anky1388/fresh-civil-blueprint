import { Building2, Droplets, Route, Mountain, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      icon: Building2,
      title: "G+6 RCC Residential Building",
      subtitle: "ETABS & AutoCAD",
      role: "Student – Structural Design Project",
      description: [
        "Designed a G+6 RCC building as part of academic curriculum",
        "Modeled structure in ETABS with gravity & seismic load combinations",
        "Applied IS 456 & IS 1893 provisions for design compliance",
        "Analyzed member forces, moments, and deflections",
        "Prepared basic reinforcement detailing using Excel",
        "Drafted structural drawings in AutoCAD",
        "Compiled a concise calculation report",
      ],
      keywords: ["ETABS", "RCC Design", "Seismic Analysis", "IS Codes", "AutoCAD"],
      color: "bg-primary/10",
      textColor: "text-primary",
    },
    {
      icon: Droplets,
      title: "Sustainable Low-Rise Housing Layout",
      subtitle: "Rainwater Harvesting Integration",
      role: "Student – Planning & Design Project",
      description: [
        "Conceptualized low-rise housing layout with sustainability focus",
        "Designed road network and optimized plot planning",
        "Integrated rainwater harvesting and stormwater drainage systems",
        "Estimated quantities and basic costs using Excel",
        "Created layout drawings in AutoCAD",
        "Developed basic 3D visualization using Revit",
      ],
      keywords: ["Sustainable Design", "Site Planning", "Rainwater Harvesting", "BOQ", "Revit"],
      color: "bg-accent/10",
      textColor: "text-accent",
    },
    {
      icon: Route,
      title: "Rigid Pavement Design",
      subtitle: "Industrial Internal Road",
      role: "Student – Transportation Engineering Project",
      description: [
        "Designed rigid pavement following IRC guidelines",
        "Considered axle loads, CBR values, and traffic growth projections",
        "Determined optimal slab thickness and joint spacing",
        "Prepared plan and longitudinal section drawings",
        "Created comprehensive design documentation",
      ],
      keywords: ["Rigid Pavement", "IRC Guidelines", "Transportation Engineering", "Pavement Design"],
      color: "bg-chart-3/10",
      textColor: "text-chart-3",
    },
    {
      icon: Mountain,
      title: "Soil Investigation & Foundation Recommendation",
      subtitle: "Geotechnical Analysis",
      role: "Student – Geotechnical Mini Project",
      description: [
        "Interpreted SPT and laboratory soil test data",
        "Calculated safe bearing capacity of soil",
        "Recommended suitable shallow foundation types",
        "Prepared basic footing sketches and design notes",
        "Documented findings in a technical report",
      ],
      keywords: ["Soil Mechanics", "Foundations", "Bearing Capacity", "SPT Analysis"],
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
                    <p className="text-sm text-muted-foreground">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm font-medium text-foreground/80 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {project.role}
                </p>
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

                <div className="flex flex-wrap gap-2">
                  {project.keywords.map((keyword, i) => (
                    <Badge key={i} variant="secondary" className="text-xs font-normal">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

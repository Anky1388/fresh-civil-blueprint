import { Award, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AutoCAD for Civil Engineers",
      provider: "Online Certification Program",
      type: "Software Training",
      skills: ["2D Drafting", "Civil Drawings", "Technical Detailing"],
    },
    {
      title: "Leadership and Team Effectiveness",
      provider: "NPTEL (IIT Kanpur)",
      type: "Soft Skills / Management Certification",
      skills: ["Leadership", "Team Management", "Communication Skills", "Decision Making", "Conflict Resolution"],
    },
    {
      title: "Training of Trainers",
      provider: "NPTEL (IIT Kanpur)",
      type: "Professional Development / Skill Enhancement Certification",
      skills: ["Training & Facilitation", "Presentation Skills", "Instructional Design", "Public Speaking", "Evaluation Techniques"],
    },
  ];

  const practicalExposure = [
    "Site visits during college coursework",
    "Exposure to reinforcement detailing and construction drawings",
    "Understanding of construction sequence and workflow",
    "Safety awareness including PPE usage and site discipline",
    "Observation of quality control practices",
  ];

  return (
    <section id="certifications" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Learning & Development
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications & Training
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional development courses and training programs completed to enhance 
            technical skills and industry readiness.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {cert.type}
                </Badge>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {cert.provider}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, i) => (
                  <Badge key={i} variant="outline" className="text-xs font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Practical Exposure */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Practical Exposure & Training (Academic)
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {practicalExposure.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-background"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

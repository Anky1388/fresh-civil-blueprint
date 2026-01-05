import { Building, Cpu, Leaf, Sparkles, Trophy, Users } from "lucide-react";

const InterestsSection = () => {
  const interests = [
    {
      icon: Building,
      title: "Structural Design & Analysis",
      description: "Passionate about designing safe and economical structures",
    },
    {
      icon: Cpu,
      title: "BIM & Digital Construction",
      description: "Interested in leveraging technology for better project outcomes",
    },
    {
      icon: Leaf,
      title: "Sustainable Infrastructure",
      description: "Committed to environmentally responsible engineering practices",
    },
    {
      icon: Sparkles,
      title: "Smart Cities & AI in Civil",
      description: "Excited about future technologies transforming the industry",
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Final Year Project Presentation",
      description: "Presented at college symposium with appreciation from faculty",
    },
    // {
    //   icon: Cpu,
    //   title: "BIM & Revit Workshop",
    //   description: "Active participation in hands-on training workshop",
    // },
    // {
    //   icon: Users,
    //   title: "Sustainable Building Competition",
    //   description: "Volunteered in organizing sustainable model competition",
    // },
  ];

  return (
    <section className="py-20 md:py-28 bg-card blueprint-grid">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Technical Interests */}
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Areas of Interest
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Technical Focus Areas
            </h2>

            <div className="space-y-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <interest.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {interest.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {interest.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Recognition
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Achievements & Activities
            </h2>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-background border border-border hover:border-accent/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <achievement.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;

import { experiments } from "@/data/portfolio";
import { Award, Briefcase } from "lucide-react";

const Island = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <p className="text-center text-muted-foreground mb-6">
        Artifacts discovered on the island of achievements!
      </p>

      <div className="space-y-4">
        {experiments.map((exp, i) => (
          <div
            key={i}
            className="treasure-card rounded-xl p-5 flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
              {exp.type === "internship" ? (
                <Briefcase className="text-brown" size={20} />
              ) : (
                <Award className="text-gold" size={20} />
              )}
            </div>
            <div>
              <h4 className="font-subheading text-base text-brown-dark">{exp.title}</h4>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{exp.description}</p>
              <span className="text-xs font-subheading text-gold mt-2 inline-block capitalize">
                {exp.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Island;

import { skills } from "@/data/portfolio.js";

const colorMap = {
  ocean: { bg: "bg-ocean/20", fill: "bg-ocean", text: "text-ocean-deep" },
  forest: { bg: "bg-forest/20", fill: "bg-forest", text: "text-forest-dark" },
  gold: { bg: "bg-gold/20", fill: "bg-gold", text: "text-brown-dark" },
  mountain: { bg: "bg-mountain/20", fill: "bg-mountain", text: "text-foreground" },
};

const crystalEmoji = {
  "HTML5": "🔮",
  "CSS": "🌸",
  "JavaScript": "💎",
  "Python": "🐍",
  "Java": "☕",
  "C": "⚙️",
  "MySQL": "🗄️",
  "Bootstrap": "🎨",
  "Git & GitHub": "🌿",
};

const Forest = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <p className="text-center text-muted-foreground mb-6">
        Each crystal represents a skill. Hover to see mastery level!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, i) => {
          const colors = colorMap[skill.color];
          return (
            <div
              key={skill.name}
              className="skill-crystal treasure-card rounded-xl p-5 group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl animate-float" style={{ animationDelay: `${i * 200}ms` }}>
                  {crystalEmoji[skill.name] || "✨"}
                </span>
                <h4 className="font-subheading text-base text-brown-dark">{skill.name}</h4>
                <span className={`ml-auto text-sm font-bold ${colors.text}`}>{skill.level}%</span>
              </div>

              {/* Progress bar */}
              <div className={`h-3 rounded-full ${colors.bg} overflow-hidden`}>
                <div
                  className={`h-full rounded-full ${colors.fill} progress-fill transition-all duration-1000`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forest;

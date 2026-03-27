import { useState } from "react";
import { profileData } from "@/data/portfolio.js";
import { MapPin, Briefcase, Heart, GraduationCap } from "lucide-react";

const funFactIcons = [GraduationCap, MapPin, Heart, Briefcase];

const Village = () => {
  const [activeFact, setActiveFact] = useState(null);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Profile section */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-28 h-28 rounded-full bg-ocean/20 border-4 border-gold/50 flex items-center justify-center text-4xl font-heading text-brown-dark shadow-lg">
          {profileData.name.charAt(0)}
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-subheading text-2xl text-brown-dark">{profileData.name}</h3>
          <p className="text-gold font-subheading text-lg">{profileData.title}</p>
          <p className="text-muted-foreground mt-2 max-w-md leading-relaxed">{profileData.intro}</p>
        </div>
      </div>

      {/* Info cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "Background", icon: "🎓", content: "B.Tech CSE at BVC Engineering College (2023-2027) with 8.08 CGPA. Scored 92.2% in Intermediate." },
          { title: "Experience", icon: "⚔️", content: "Java Full Stack intern at Talentshine. Built web apps, learned industry practices." },
          { title: "Interests", icon: "🌟", content: "Python development, Full Stack Web Dev, Problem Solving, and Creative Thinking." },
        ].map((card) => (
          <div key={card.title} className="treasure-card rounded-lg p-5">
            <div className="text-2xl mb-2">{card.icon}</div>
            <h4 className="font-subheading text-lg text-brown-dark mb-2">{card.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{card.content}</p>
          </div>
        ))}
      </div>

      {/* Fun facts - clickable houses */}
      <div>
        <h4 className="font-subheading text-lg text-brown-dark mb-4 text-center">🏠 Click a house to discover a fun fact!</h4>
        <div className="flex flex-wrap justify-center gap-4">
          {profileData.funFacts.map((fact, i) => {
            const Icon = funFactIcons[i];
            return (
              <button
                key={i}
                onClick={() => setActiveFact(activeFact === i ? null : i)}
                className={`treasure-card rounded-lg p-4 w-40 text-center transition-all ${
                  activeFact === i ? 'ring-2 ring-gold shadow-lg' : ''
                }`}
              >
                <Icon className="mx-auto mb-2 text-brown" size={24} />
                <p className={`text-xs transition-all ${activeFact === i ? 'text-brown-dark' : 'text-muted-foreground'}`}>
                  {activeFact === i ? fact : "Click to reveal!"}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Village;

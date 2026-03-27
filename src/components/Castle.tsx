import { useState } from "react";
import { projects } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";

const Castle = () => {
  const [openChest, setOpenChest] = useState<number | null>(null);

  return (
    <div className="space-y-6 animate-fade-in">
      <p className="text-center text-muted-foreground font-body mb-6">
        Each treasure chest holds a project. Click to open!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`treasure-card rounded-xl p-6 cursor-pointer ${
              openChest === project.id ? 'ring-2 ring-gold' : ''
            }`}
            onClick={() => setOpenChest(openChest === project.id ? null : project.id)}
          >
            {/* Chest icon */}
            <div className="text-4xl mb-4 text-center">
              {openChest === project.id ? '📖' : '📦'}
            </div>

            <h4 className="font-subheading text-lg text-brown-dark text-center mb-3">
              {project.title}
            </h4>

            <div className={`transition-all duration-500 overflow-hidden ${
              openChest === project.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs bg-gold/20 text-brown-dark px-2 py-1 rounded-full font-subheading">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-brown hover:text-gold transition-colors font-subheading"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>

            {openChest !== project.id && (
              <p className="text-xs text-center text-muted-foreground mt-2">Click to open</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Castle;

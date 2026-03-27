import { useState, useCallback } from "react";

interface MapLocationProps {
  icon: string;
  label: string;
  x: string;
  y: string;
  onClick: () => void;
  delay?: number;
}

const MapLocation = ({ icon, label, x, y, onClick, delay = 0 }: MapLocationProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  const spawnParticles = useCallback(() => {
    const newParticles = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 40 - 20,
      y: Math.random() * -30 - 10,
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1500);
  }, []);

  return (
    <div
      className="absolute map-location group"
      style={{ left: x, top: y, animationDelay: `${delay}ms` }}
      onMouseEnter={() => { setIsHovered(true); spawnParticles(); }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Glow ring */}
      <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
        isHovered ? 'bg-gold/20 scale-150 blur-md' : 'bg-transparent scale-100'
      }`} />

      {/* Icon */}
      <div className="relative w-24 h-24 md:w-32 md:h-32 animate-float" style={{ animationDelay: `${delay * 0.5}ms` }}>
        <img
          src={icon}
          alt={label}
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>

      {/* Label */}
      <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${
        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}>
        <span className="font-subheading text-sm md:text-base font-bold text-brown-dark bg-parchment/90 px-3 py-1 rounded-full border border-gold/40 shadow-lg">
          {label}
        </span>
      </div>

      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle absolute w-2 h-2 rounded-full bg-gold"
          style={{
            left: `calc(50% + ${p.x}px)`,
            top: `calc(50% + ${p.y}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default MapLocation;

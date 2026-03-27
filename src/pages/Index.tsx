import { useState } from "react";
import mapBg from "@/assets/map-background.jpg";
import villageIcon from "@/assets/village-icon.png";
import castleIcon from "@/assets/castle-icon.png";
import forestIcon from "@/assets/forest-icon.png";
import islandIcon from "@/assets/island-icon.png";
import templeIcon from "@/assets/temple-icon.png";
import MapLocation from "@/components/MapLocation";
import SectionOverlay from "@/components/SectionOverlay";
import CloudLayer from "@/components/CloudLayer";
import Village from "@/components/Village";
import Castle from "@/components/Castle";
import Forest from "@/components/Forest";
import Island from "@/components/Island";
import Temple from "@/components/Temple";

type SectionKey = "village" | "castle" | "forest" | "island" | "temple" | null;

const sectionConfig = {
  village: { label: "About Me", icon: villageIcon, x: "12%", y: "45%", title: "🏘️ The Village — About Me" },
  castle: { label: "Projects", icon: castleIcon, x: "30%", y: "12%", title: "🏰 The Castle — Projects" },
  forest: { label: "Skills", icon: forestIcon, x: "55%", y: "25%", title: "🌲 The Forest — Skills" },
  island: { label: "Experiments", icon: islandIcon, x: "25%", y: "72%", title: "🏝️ The Island — Experiments" },
  temple: { label: "Contact", icon: templeIcon, x: "72%", y: "65%", title: "🛕 The Temple — Contact" },
};

const sectionComponents: Record<string, React.FC> = {
  village: Village,
  castle: Castle,
  forest: Forest,
  island: Island,
  temple: Temple,
};

const Index = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>(null);
  const [easterEggFound, setEasterEggFound] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden parchment-bg">
      {/* Map background */}
      <div className="absolute inset-0">
        <img
          src={mapBg}
          alt="Adventure Map"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Parchment overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-parchment/30 via-transparent to-parchment/40" />
      </div>

      {/* Cloud layer */}
      <CloudLayer />

      {/* Title */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 text-center">
        <h1 className="font-heading text-2xl md:text-4xl text-brown-dark drop-shadow-lg">
          Rakesh's World
        </h1>
        <p className="font-subheading text-xs md:text-sm text-brown/70 mt-1">
          Click a location to explore
        </p>
      </div>

      {/* Map locations */}
      <div className="absolute inset-0 z-20">
        {(Object.entries(sectionConfig) as [string, typeof sectionConfig.village][]).map(([key, config], i) => (
          <MapLocation
            key={key}
            icon={config.icon}
            label={config.label}
            x={config.x}
            y={config.y}
            onClick={() => setActiveSection(key as SectionKey)}
            delay={i * 200}
          />
        ))}

        {/* Easter egg - hidden treasure */}
        <div
          className="absolute cursor-pointer transition-all duration-300 hover:scale-125"
          style={{ right: "8%", bottom: "15%" }}
          onClick={() => {
            setEasterEggFound(true);
            setTimeout(() => setEasterEggFound(false), 4000);
          }}
        >
          <span className="text-lg opacity-30 hover:opacity-100 transition-opacity">💰</span>
        </div>
      </div>

      {/* Easter egg popup */}
      {easterEggFound && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 scroll-panel px-6 py-4 animate-scale-in">
          <p className="font-subheading text-brown-dark text-center">
            🎉 You found the hidden treasure! You're a true explorer!
          </p>
        </div>
      )}

      {/* Section overlays */}
      {(Object.entries(sectionConfig) as [string, typeof sectionConfig.village][]).map(([key, config]) => {
        const Component = sectionComponents[key];
        return (
          <SectionOverlay
            key={key}
            isOpen={activeSection === key}
            onClose={() => setActiveSection(null)}
            title={config.title}
          >
            <Component />
          </SectionOverlay>
        );
      })}

      {/* Mobile hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 md:hidden">
        <p className="text-xs text-brown/60 font-subheading bg-parchment/80 px-3 py-1 rounded-full">
          Tap locations to explore
        </p>
      </div>
    </div>
  );
};

export default Index;

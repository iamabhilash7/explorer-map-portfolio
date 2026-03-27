const CloudLayer = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {/* Clouds */}
      {[
        { top: "5%", delay: "0s", size: "120px", opacity: 0.3 },
        { top: "15%", delay: "10s", size: "100px", opacity: 0.2 },
        { top: "8%", delay: "25s", size: "80px", opacity: 0.25 },
      ].map((cloud, i) => (
        <div
          key={i}
          className={i % 2 === 0 ? "animate-cloud" : "animate-cloud-slow"}
          style={{
            position: "absolute",
            top: cloud.top,
            opacity: cloud.opacity,
            animationDelay: cloud.delay,
            fontSize: cloud.size,
          }}
        >
          ☁️
        </div>
      ))}

      {/* Birds */}
      <div
        className="animate-bird absolute text-2xl"
        style={{ top: "12%", animationDelay: "5s" }}
      >
        🐦
      </div>
      <div
        className="animate-bird absolute text-xl"
        style={{ top: "20%", animationDelay: "15s" }}
      >
        🐦
      </div>
    </div>
  );
};

export default CloudLayer;

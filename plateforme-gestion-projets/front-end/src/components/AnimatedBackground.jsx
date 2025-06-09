import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-pink-400 opacity-20 rounded-full blur-3xl animate-float"
          style={{
            width: `${20 + Math.random() * 60}px`,
            height: `${20 + Math.random() * 60}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 10}s`,
            borderRadius: Math.random() > 0.5 ? "0%" : "50%",
            backgroundColor: ['#f472b6', '#60a5fa', '#34d399'][Math.floor(Math.random() * 3)]
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
